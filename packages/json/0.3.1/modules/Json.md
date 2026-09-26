# Json

Defined in json@0.3.1

A JSON document: the value it holds, the text it is written in, and the reading and writing that
carry one into the other.

## Values

### namespace Json

#### read

Type: `Std::String -> Std::Result Std::ErrMsg Json::Json`

Reads a document, and answers with the value it holds.

The text is read as the bytes it is written in. A document the grammar does not accept answers
with a message naming what was expected and the byte it stood at; so does one that carries text
behind its value.

##### Parameters

* `text` - The document to read.

#### write

Type: `Std::U8 -> Json::Json -> Std::String`

Writes a document. Every number is written to `precision` places after the point, with the zeros
that trail it dropped.

A number carries further than `precision` places whenever it is not a multiple of
`10^-precision`, and those places are lost: `1.0 / 3.0` written to eight places reads back as
`0.33333333`, which is a different number. Reading a document back gives the numbers the text
writes, so a program that needs its own numbers back has to write them at a precision that holds
them.

##### Parameters

* `precision` - How many places a number is written to.
* `document` - The tree to write.

### namespace Json::Json

#### find

Type: `Std::String -> Std::Array (Std::String, Json::Json) -> Std::Option Json::Json`

The value the member named `name` holds, or `none` when the object carries no such member.

##### Parameters

* `name` - The name to look for.
* `members` - The members of an object.

##### Examples

```
let document = *Json::read("{\"x\":1.5,\"y\":2.5}");
document.as_object.Json::find("x")   // some(Json::number(1.5))
document.as_object.Json::find("z")   // none()
```

### namespace Json::Number

#### append

Type: `Std::U8 -> Std::Array Std::U8 -> Std::F64 -> Std::Array Std::U8`

Appends `value` to `buffer`, written to `precision` places after the point with the zeros that
trail it dropped, and the point dropped with them where nothing is left behind it.

##### Parameters

* `precision` - How many places the number is written to.
* `buffer` - The buffer to append to.
* `value` - The number to write.

#### parse

Type: `Std::Array Std::U8 -> Std::I64 -> Std::I64 -> Std::Result Std::ErrMsg Std::F64`

The number the bytes from `at` to `end` write.

Bytes that write no number answer with a message saying so.

##### Parameters

* `bytes` - The bytes to read from.
* `at` - The position of the number's first byte.
* `end` - One past the position of its last byte.

### namespace Json::Text

#### unescape

Type: `Std::Array Std::U8 -> Std::I64 -> Std::I64 -> Std::Result Std::ErrMsg Std::String`

The text the bytes from `from` to `to` write, with every escape resolved.

Bytes that no escape can open answer with a message naming what was expected and where it
stood.

##### Parameters

* `bytes` - The document's bytes.
* `from` - The position of the text's first byte.
* `to` - The position after its last byte.

## Types and aliases

### namespace Json

#### Json

Defined as: `type Json = unbox union { ...variants... }`

A JSON value.

The members of an object stand in the order the document gives them, and writing the value out
writes them in that order.

##### variant `null`

Type: `()`

##### variant `bool`

Type: `Std::Bool`

##### variant `number`

Type: `Std::F64`

##### variant `string`

Type: `Std::String`

##### variant `object`

Type: `Std::Array (Std::String, Json::Json)`

##### variant `array`

Type: `Std::Array Json::Json`

## Traits and aliases

## Trait implementations

### impl `Json::Json : Std::Eq`

Two values are equal when they are the same kind and hold the same thing. Two objects are equal
when their members stand in the same order and hold the same values, so a document that names its
members in another order gives another value.