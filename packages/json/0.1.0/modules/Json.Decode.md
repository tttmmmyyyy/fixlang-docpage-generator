# Json.Decode

Defined in json@0.1.0

Reads what you want out of a JSON document and leaves the rest of it unread.

A `Decoder a` reads an `a` from where the cursor stands and leaves the cursor behind what it
read. Build one out of the primitives below, chain them with `*` and `;;`, and run it over a
document with `decode`.

```
// The number the member `x` of the object at the cursor holds.
_x : Decoder F64;
_x = (
    expect('{', "an object");;
    let span = *member;
    let is_x = *named(span, name_bytes("x"));
    if !is_x { Decoder::expected("the member x") };
    number
);

let value = *_x.decode("{\"x\": 1.5}");   // ok(1.5)
```

Three things a reading has to live with.

It never goes back. A reading looks at the byte the cursor stands on, decides, and moves on, so
a grammar that tries one thing and falls back to another cannot be written with these.

A string comes back as a `Span`, where its bytes stand in the document. `named` and `text`
resolve the escapes among them; the bytes themselves are the ones the document holds, so an
escape such as `\n` or `\u0041` still stands there as the escape.

A reading that fails answers with a message naming what the grammar expected and where it stood.

## Values

### namespace Json.Decode::Cursor

#### make

Type: `Std::String -> Json.Decode::Cursor`

A cursor standing at the first byte of a document.

##### Parameters

* `text` - The document to read.

### namespace Json.Decode::Decoder

#### at

Type: `Std::U8 -> Json.Decode::Decoder Std::Bool`

Whether the byte at the cursor is `byte`, which is false where the document has ended.

##### Parameters

* `byte` - The byte to look for.

#### decode

Type: `Std::String -> Json.Decode::Decoder a -> Std::Result Std::ErrMsg a`

Runs a reading over a whole document, and answers with what it read.

##### Parameters

* `text` - The document to read.
* `decoder` - The reading to run.

#### ended

Type: `Json.Decode::Decoder Std::Bool`

Whether the cursor has reached the end of the document.

#### expect

Type: `Std::U8 -> Std::String -> Json.Decode::Decoder ()`

Reads the byte `byte`, failing where the document holds something else.

##### Parameters

* `byte` - The byte the grammar expects there.
* `what` - What to call it in the report.

#### expected

Type: `Std::String -> Json.Decode::Decoder a`

A reading that fails, saying what the grammar expected and where.

##### Parameters

* `what` - What the grammar expected there.

#### member

Type: `Json.Decode::Decoder Json.Decode::Span`

Reads a member's name and the colon behind it, and answers with where the name stands.

#### name_bytes

Type: `Std::String -> Std::Array Std::U8`

The bytes of a name, which a caller holds once and compares against many members.

##### Parameters

* `name` - The name to take the bytes of.

#### named

Type: `Json.Decode::Span -> Std::Array Std::U8 -> Json.Decode::Decoder Std::Bool`

Whether the text of `span` is `name`.

The bytes come from `name_bytes`, held once by the caller. A span that carries an escape has
it resolved first, so a name written `"\\u0078"` answers to the bytes of `"x"`.

##### Parameters

* `span` - Where the name read from the document stands.
* `name` - The bytes of the name to compare it against.

#### named_as_written

Type: `Json.Decode::Span -> Std::Array Std::U8 -> Json.Decode::Decoder Std::Bool`

Whether the bytes `span` stands on are `name`, taken as the document writes them.

An escape among them stands as the escape, so a name written `"\\u0078"` does not answer to
the bytes of `"x"`. Use this where the document is known to write its names plainly.

##### Parameters

* `span` - Where the name read from the document stands.
* `name` - The bytes of the name to compare it against.

#### number

Type: `Json.Decode::Decoder Std::F64`

Reads a number, which runs to the first byte that no number can carry.

#### run

Type: `Json.Decode::Cursor -> Json.Decode::Decoder a -> Std::Result Std::ErrMsg (a, Json.Decode::Cursor)`

Runs a reading over a cursor, and answers with what it read and the cursor behind it.

##### Parameters

* `cursor` - Where the reading begins.
* `decoder` - The reading to run.

#### separated

Type: `Std::U8 -> Json.Decode::Decoder Std::Bool`

Reads the byte that closes a member list or separates it from the next member, and answers
with whether another member follows.

##### Parameters

* `closing` - The byte that closes this list.

#### skip_space

Type: `Json.Decode::Decoder ()`

Moves the cursor past the white space it stands on.

#### skip_value

Type: `Json.Decode::Decoder ()`

Moves the cursor past the value it stands on, building nothing for it.

#### step

Type: `Json.Decode::Decoder ()`

Moves the cursor one byte on.

#### text

Type: `Json.Decode::Span -> Json.Decode::Decoder Std::String`

The text the span stands for, with every escape resolved.

##### Parameters

* `span` - Where the text stands.

#### text_span

Type: `Json.Decode::Decoder Json.Decode::Span`

Reads the rest of a string whose opening quote the cursor has passed, and answers with where
its text stands.

The walk to the closing quote sees every escape on its way, so the span it answers with says
whether one stands inside it.

## Types and aliases

### namespace Json.Decode

#### Cursor

Defined as: `type Cursor = unbox struct { ...fields... }`

A document and how far into it a reading has come.

##### field `bytes`

Type: `Std::Array Std::U8`

##### field `size`

Type: `Std::I64`

##### field `at`

Type: `Std::I64`

#### Decoder

Defined as: `type Decoder a = unbox struct { ...fields... }`

A reading that takes a value out of a document and leaves the position after it.

#### Span

Defined as: `type Span = unbox struct { ...fields... }`

Where the text of a string stands in a document, and whether an escape stands among its bytes.

##### field `from`

Type: `Std::I64`

##### field `to`

Type: `Std::I64`

##### field `escaped`

Type: `Std::Bool`

## Traits and aliases

## Trait implementations

### impl `Json.Decode::Decoder : Std::Functor`

### impl `Json.Decode::Decoder : Std::Monad`