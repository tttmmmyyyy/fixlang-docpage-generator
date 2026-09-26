# Minilib.Text.WParser

Defined in minilib-text@0.10.0

Wide-character text parser. Customizable by monadic operations.
- Stream of wide-characters
- Basic parsers such as wide-character matching
- Create complex parsers with composition

## Values

### namespace Minilib.Text.WParser::WParser

#### debug

Type: `[a : Std::ToString] Std::ErrMsg -> Minilib.Text.WParser::WParser a -> Minilib.Text.WParser::WParser a`

Prints the parser result.

#### error_parser

Type: `Std::ErrMsg -> Minilib.Text.WParser::WParser a`

Deprecated: Use `MonadErrorIF::error`.

Raises the specified string as an error.

#### eval_wparser

Type: `Minilib.Text.WParser::WStream::WStream -> Minilib.Text.WParser::WParser a -> Std::Result Std::ErrMsg a`

Apply a stream to a parser and return the parsed value.

#### eval_wparser_str

Type: `[str : Minilib.Text.Unicode::ToUTF32String] str -> Minilib.Text.WParser::WParser a -> Std::Result Std::ErrMsg a`

Create a stream from a string, then apply this stream to a parser
and return the parsed value.

#### filter

Type: `(a -> Std::Bool) -> Minilib.Text.WParser::WParser a -> Minilib.Text.WParser::WParser a`

Checks whether the parsed result of the specified WParser satisfies the specified conditions.
Raises a `_NotMatch` error if the specified condition is not met.

#### get_stream

Type: `Minilib.Text.WParser::WParser Minilib.Text.WParser::WStream::WStream`

Returns the current stream position.

#### if_exists

Type: `Minilib.Text.WParser::WParser a -> Minilib.Text.WParser::WParser (Std::Option a)`

`p.if_exists` returns `some(x)` if `p` returns `x` as a parse result,
or `none()` if `p` does not match.

#### map_result

Type: `(a -> Std::Result Std::ErrMsg b) -> Minilib.Text.WParser::WParser a -> Minilib.Text.WParser::WParser b`

`wparser.map_result(f)` maps the parser result with `f`, possibly reports
an error message.

#### match_any_wchar

Type: `Minilib.Text.WParser::WParser Minilib.Text.WideChar::WideChar`

Matches any single wide-character. The parsed result is
a single matched wide-character.
If the match fails (eg. the end of stream), a `_NotMatch` error is raised.

#### match_end_of_stream

Type: `Minilib.Text.WParser::WParser ()`

Matches zero-length string at the end of stream.

#### match_integer

Type: `Minilib.Text.WParser::WParser Std::I64`

Matches a non-negative integer.

#### match_one_of_wchar

Type: `[str : Minilib.Text.Unicode::ToUTF32String] str -> Minilib.Text.WParser::WParser Minilib.Text.Unicode::UTF32String`

Matches a wide-character which is included in the specified string.
The parsed result is a string consisting of the single matched wide-character.
If the match fails, a `_NotMatch` error is raised.

#### match_wchar

Type: `Minilib.Text.WideChar::WideChar -> Minilib.Text.WParser::WParser ()`

Matches a single wide-character specified by the argument.
The parsed result is nothing.
If the match fails, a `_NotMatch` error is raised.

#### match_wchar_class

Type: `(Minilib.Text.WideChar::WideChar -> Std::Bool) -> Minilib.Text.WParser::WParser Minilib.Text.WideChar::WideChar`

Matches a wide-character satisfying the specified condition.

#### match_wstr

Type: `[str : Minilib.Text.Unicode::ToUTF32String] str -> Minilib.Text.WParser::WParser ()`

Matches a string specified by the argument.
The parsed result is nothing.
If the match fails, a `_NotMatch` error is raised.

#### match_wstr_class

Type: `(Minilib.Text.WideChar::WideChar -> Std::Bool) -> Minilib.Text.WParser::WParser Minilib.Text.Unicode::UTF32String`

Matches a zero-or-more-length string. Each wide-character should satisfy the specified condition.

#### not_match

Type: `Minilib.Text.WParser::WParser a`

Raises a `_NotMatch` error.

#### one_or_more

Type: `Minilib.Text.WParser::WParser a -> Minilib.Text.WParser::WParser (Std::Array a)`

Same as `zero_or_more`, but raises a _NotMatch error
if the array length is zero.

#### or_else

Type: `Minilib.Text.WParser::WParser a -> Minilib.Text.WParser::WParser a -> Minilib.Text.WParser::WParser a`

If the first WParser raises a `_NotMatch` error, tries the second WParser.
Note that `pa1.or_else(pa2)` is interpreted as `or_else(pa2, pa1)`,
and  that `pa1.or_else $ pa2` is interpreted as `or_else(pa1, pa2)`.

#### or_elseF

Type: `Minilib.Text.WParser::WParser a -> Minilib.Text.WParser::WParser a -> Minilib.Text.WParser::WParser a`

Flipped version of `or_else`.
`pa1.or_elseF $ pa2` is equivalent to `pa1.or_else(pa2)`.

#### or_error

Type: `Std::ErrMsg -> Minilib.Text.WParser::WParser a -> Minilib.Text.WParser::WParser a`

If the WParser reports any error (including `_NotMatch`),
raises the specified string as an error.

#### repeat

Type: `Minilib.Text.WParser::WParser a -> Minilib.Text.WParser::WParser (Std::Array a)`

Repeats matches as many as possible. The parse result is
an array of successful matches.
If a _NotMatch error is raised, returns as success.
If an error other than _NotMatch is raised, reports that error.

#### run_wparser

Type: `Minilib.Text.WParser::WStream::WStream -> Minilib.Text.WParser::WParser a -> Std::Result Std::ErrMsg (a, Minilib.Text.WParser::WStream::WStream)`

Apply a stream to a parser and return the parsed value and the next stream position.

#### run_wparser_str

Type: `[str : Minilib.Text.Unicode::ToUTF32String] str -> Minilib.Text.WParser::WParser a -> Std::Result Std::ErrMsg (a, Minilib.Text.WParser::WStream::WStream)`

Create a stream from a string, then apply this stream to a parser
and return the parsed value and the next stream position.

#### unit

Type: `Minilib.Text.WParser::WParser ()`

Match zero-length wide-string.

#### wparser

Type: `(Minilib.Text.WParser::WStream::WStream -> Std::Result Std::ErrMsg (a, Minilib.Text.WParser::WStream::WStream)) -> Minilib.Text.WParser::WParser a`

A function that creates a parser based on the parsing function.

#### zero_or_more

Type: `Minilib.Text.WParser::WParser a -> Minilib.Text.WParser::WParser (Std::Array a)`

Synonym for `repeat`.

### namespace Minilib.Text.WParser::WStream

#### advance

Type: `Minilib.Text.WParser::WStream::WStream -> Std::Option (Minilib.Text.WideChar::WideChar, Minilib.Text.WParser::WStream::WStream)`

`stream.advance` gets next wide-character and increment the stream position.

#### empty

Type: `Minilib.Text.WParser::WStream::WStream`

An empty WStream.

#### error

Type: `Std::ErrMsg -> Minilib.Text.WParser::WStream::WStream -> Std::Result Std::ErrMsg a`

`stream.error(msg)` reports an error along with where it occurred.

#### make

Type: `[str : Minilib.Text.Unicode::ToUTF32String] str -> Minilib.Text.WParser::WStream::WStream`

Creates a stream from specified string.

#### read_all

Type: `Minilib.Text.WParser::WStream::WStream -> (Std::Array Minilib.Text.WideChar::WideChar, Minilib.Text.WParser::WStream::WStream)`

`stream.read_all` reads all wide-characters to the end of stream.

#### read_wstring

Type: `Std::I64 -> Minilib.Text.WParser::WStream::WStream -> Minilib.Text.Unicode::UTF32String`

`stream.read_wstring(n)` reads at most `n` wide-characters and convert them to a wide-string.

#### read_wstring_between

Type: `Minilib.Text.WParser::WStream::WStream -> Minilib.Text.WParser::WStream::WStream -> Minilib.Text.Unicode::UTF32String`

`start_stream.read_wstring_between(end_stream)` reads wide-characters from `start_stream` to `end_stream`
 and convert them to a wide-string.

## Types and aliases

### namespace Minilib.Text.WParser

#### WParser

Defined as: `type WParser a = unbox struct { ...fields... }`

A type of wide-character stream parser.

This is a function that receive a stream, parse it, and
return the parsed value and the next stream position.

##### field `data`

Type: `Minilib.Text.WParser::WStream::WStream -> Std::Result Std::ErrMsg (a, Minilib.Text.WParser::WStream::WStream)`

### namespace Minilib.Text.WParser::WStream

#### WStream

Defined as: `type WStream = unbox struct { ...fields... }`

A wide-character iterator that stores the file name, line number, column number,
and offset from the beginning of the file.

##### field `filename`

Type: `Std::Path`

##### field `line`

Type: `Std::I64`

##### field `column`

Type: `Std::I64`

##### field `position`

Type: `Std::I64`

##### field `array`

Type: `Std::Array Minilib.Text.WideChar::WideChar`

## Traits and aliases

## Trait implementations

### impl `Minilib.Text.WParser::WParser : Minilib.Monad.Error::MonadErrorIF`

### impl `Minilib.Text.WParser::WParser : Std::Functor`

### impl `Minilib.Text.WParser::WParser : Std::Monad`

### impl `Minilib.Text.WParser::WStream::WStream : Std::FromString`

Creates a stream from a string.

### impl `Minilib.Text.WParser::WStream::WStream : Std::ToString`

Converts a stream to a string, for example `"WStream(pos=1001)"`