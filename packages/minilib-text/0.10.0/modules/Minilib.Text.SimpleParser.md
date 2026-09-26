# Minilib.Text.SimpleParser

Defined in minilib-text@0.10.0

Simple text parser. Customizable by monadic operations.
- Stream of characters
- Basic parsers such as character matching
- Create complex parsers with composition

## Values

### namespace Minilib.Text.SimpleParser

#### parser

Type: `(Minilib.Text.SimpleParser::Stream::Stream -> Std::Result Std::ErrMsg (a, Minilib.Text.SimpleParser::Stream::Stream)) -> Minilib.Text.SimpleParser::Parser a`

Creates a Parser from the specified parsing function.

### namespace Minilib.Text.SimpleParser::Parser

#### debug

Type: `[a : Std::ToString] Std::String -> Minilib.Text.SimpleParser::Parser a -> Minilib.Text.SimpleParser::Parser a`

Prints the parser result.

#### error_parser

Type: `Std::String -> Minilib.Text.SimpleParser::Parser a`

Deprecated: Use `MonadErrorIF::error`.

Raises the specified string as an error.

#### eval_parser

Type: `Minilib.Text.SimpleParser::Stream::Stream -> Minilib.Text.SimpleParser::Parser a -> Std::Result Std::ErrMsg a`

Applies a stream to a Parser and returns the parsed value.

#### eval_parser_str

Type: `Std::String -> Minilib.Text.SimpleParser::Parser a -> Std::Result Std::ErrMsg a`

Creates a stream from a string, then applys a stream to a Parser
and return the parsed value.

#### filter

Type: `(a -> Std::Bool) -> Minilib.Text.SimpleParser::Parser a -> Minilib.Text.SimpleParser::Parser a`

Checks whether the parsed result of the specified Parser satisfies the specified conditions.
Raises a `_NotMatch` error if the specified condition is not met.

#### get_stream

Type: `Minilib.Text.SimpleParser::Parser Minilib.Text.SimpleParser::Stream::Stream`

Returns the current stream position.

#### if_exists

Type: `Minilib.Text.SimpleParser::Parser a -> Minilib.Text.SimpleParser::Parser (Std::Option a)`

`p.if_exists` returns `some(x)` if `p` returns `x` as a parse result,
or `none()` if `p` does not match.

#### map_result

Type: `(a -> Std::Result Std::ErrMsg b) -> Minilib.Text.SimpleParser::Parser a -> Minilib.Text.SimpleParser::Parser b`

`parser.map_result(f)` maps the parser result with `f`, possibly reports
an error message.

#### match_any_char

Type: `Minilib.Text.SimpleParser::Parser Minilib.Text.SimpleParser::Char`

Matches any single character. The parsed result is
a single matched character.
If the match fails (eg. the end of stream), a `_NotMatch` error is raised.

#### match_char

Type: `Minilib.Text.SimpleParser::Char -> Minilib.Text.SimpleParser::Parser ()`

Matches a single character specified by the argument.
The parsed result is nothing.
If the match fails, a `_NotMatch` error is raised.

#### match_char_class

Type: `(Minilib.Text.SimpleParser::Char -> Std::Bool) -> Minilib.Text.SimpleParser::Parser Minilib.Text.SimpleParser::Char`

Matches a character satisfying the specified condition.

#### match_char_if_exists

Type: `Std::U8 -> Minilib.Text.SimpleParser::Parser (Std::Option Std::U8)`

Deprecated: Please use `match_char(c).if_exists`.

Matches a single character if it exists.
The parsed result is `some(c)` if it exists,
`none()` if it does not exist.

#### match_empty_str

Type: `Minilib.Text.SimpleParser::Parser Std::String`

Matches a zero-length string.

#### match_end_of_stream

Type: `Minilib.Text.SimpleParser::Parser ()`

Matches zero-length string at the end of stream.

#### match_integer

Type: `Minilib.Text.SimpleParser::Parser Std::I64`

Matches a non-negative integer.

#### match_one_of_char

Type: `Std::String -> Minilib.Text.SimpleParser::Parser Std::String`

Matches a character which is included in the specified string.
The parsed result is a string consisting of the single matched character.
If the match fails, a `_NotMatch` error is raised.

#### match_str

Type: `Std::String -> Minilib.Text.SimpleParser::Parser ()`

Matches a string specified by the argument.
The parsed result is nothing.
If the match fails, a `_NotMatch` error is raised.

#### match_str_class

Type: `(Minilib.Text.SimpleParser::Char -> Std::Bool) -> Minilib.Text.SimpleParser::Parser Std::String`

Matches a zero-or-more-length string. Each character should satisfy the specified condition.

#### match_str_class_digit

Type: `Minilib.Text.SimpleParser::Parser Std::String`

Matches a zero-or-more-length string of digit characters.

#### match_str_class_lower

Type: `Minilib.Text.SimpleParser::Parser Std::String`

Matches a zero-or-more-length string of lowercase characters.

#### match_str_class_whitespace

Type: `Minilib.Text.SimpleParser::Parser Std::String`

Matches a zero-or-more-length string of whitespace characters.

#### not_match

Type: `Minilib.Text.SimpleParser::Parser a`

Raises a `_NotMatch` error.

#### one_or_more

Type: `Minilib.Text.SimpleParser::Parser a -> Minilib.Text.SimpleParser::Parser (Std::Array a)`

Same as `zero_or_more`, but raises a _NotMatch error
if the array length is zero.

#### or_else

Type: `Minilib.Text.SimpleParser::Parser a -> Minilib.Text.SimpleParser::Parser a -> Minilib.Text.SimpleParser::Parser a`

If the first Parser raises a `_NotMatch` error, tries the second Parser.
Note that `pa1.or_else(pa2)` is interpreted as `or_else(pa2, pa1)`,
and  that `pa1.or_else $ pa2` is interpreted as `or_else(pa1, pa2)`.

#### or_elseF

Type: `Minilib.Text.SimpleParser::Parser a -> Minilib.Text.SimpleParser::Parser a -> Minilib.Text.SimpleParser::Parser a`

Flipped version of `or_else`.
`pa1.or_elseF $ pa2` is equivalent to `pa1.or_else(pa2)`.

#### or_error

Type: `Std::String -> Minilib.Text.SimpleParser::Parser a -> Minilib.Text.SimpleParser::Parser a`

If the Parser reports any error (including `_NotMatch`),
raises the specified string as an error.

#### repeat

Type: `Minilib.Text.SimpleParser::Parser a -> Minilib.Text.SimpleParser::Parser (Std::Array a)`

Repeats matches as many as possible. The parse result is
an array of successful matches.
If a _NotMatch error is raised, returns as success.
If an error other than _NotMatch is raised, reports that error.

#### run_parser

Type: `Minilib.Text.SimpleParser::Stream::Stream -> Minilib.Text.SimpleParser::Parser a -> Std::Result Std::ErrMsg (a, Minilib.Text.SimpleParser::Stream::Stream)`

Applies a stream to a Parser and returns the parsed value and the stream.

#### run_parser_str

Type: `Std::String -> Minilib.Text.SimpleParser::Parser a -> Std::Result Std::ErrMsg (a, Minilib.Text.SimpleParser::Stream::Stream)`

Creates a stream from a string, then applies the stream to a Parser
and return the parsed value and the stream.

#### unit

Type: `Minilib.Text.SimpleParser::Parser ()`

Match zero-length string.

#### zero_or_more

Type: `Minilib.Text.SimpleParser::Parser a -> Minilib.Text.SimpleParser::Parser (Std::Array a)`

Synonym for `repeat`.

### namespace Minilib.Text.SimpleParser::Stream

#### advance

Type: `Minilib.Text.SimpleParser::Stream::Stream -> Std::Option (Minilib.Text.SimpleParser::Char, Minilib.Text.SimpleParser::Stream::Stream)`

`stream.advance` gets next character and increment the stream position.

#### empty

Type: `Minilib.Text.SimpleParser::Stream::Stream`

An empty Stream.

#### error

Type: `Std::String -> Minilib.Text.SimpleParser::Stream::Stream -> Std::Result Std::ErrMsg a`

`stream.error(str)` reports an error along with where it occurred.

#### make

Type: `Std::String -> Minilib.Text.SimpleParser::Stream::Stream`

Creates a stream from specified string.

#### read_all

Type: `Minilib.Text.SimpleParser::Stream::Stream -> (Std::Array Minilib.Text.SimpleParser::Char, Minilib.Text.SimpleParser::Stream::Stream)`

`stream.read_all` reads all characters to the end of stream.

#### read_string

Type: `Std::I64 -> Minilib.Text.SimpleParser::Stream::Stream -> Std::String`

`stream.read_string(n)` reads at most `n` characters and convert them to a string.

#### read_string_between

Type: `Minilib.Text.SimpleParser::Stream::Stream -> Minilib.Text.SimpleParser::Stream::Stream -> Std::String`

`start_stream.read_string_between(end_stream)` reads characters from `start_stream` to `end_stream`
 and convert them to a string.

## Types and aliases

### namespace Minilib.Text.SimpleParser

#### Char

Defined as: `type Char = Std::U8`

The type of characters. Currently only UTF-8 string is supported.

#### ParseResult

Defined as: `type ParseResult a = Std::Result Std::ErrMsg (a, Minilib.Text.SimpleParser::Stream::Stream)`

Deprecated: use `Result ErrMsg (a, Stream)` directly.

Result type that returns a value of an arbitrary type and a stream.

#### Parser

Defined as: `type Parser a = unbox struct { ...fields... }`

A structure with a function that receive a stream, parse it, and
return the parsed value and the stream whose position is moved after the parsed string.

### namespace Minilib.Text.SimpleParser::Stream

#### Stream

Defined as: `type Stream = unbox struct { ...fields... }`

A character iterator that stores the file name, line number, column number,
and offset from the beginning of the file.

##### field `filename`

Type: `Std::String`

##### field `line`

Type: `Std::I64`

##### field `column`

Type: `Std::I64`

##### field `position`

Type: `Std::I64`

##### field `array`

Type: `Std::Array Minilib.Text.SimpleParser::Char`

## Traits and aliases

## Trait implementations

### impl `Minilib.Text.SimpleParser::Parser : Minilib.Monad.Error::MonadErrorIF`

### impl `Minilib.Text.SimpleParser::Parser : Std::Functor`

### impl `Minilib.Text.SimpleParser::Parser : Std::Monad`

### impl `Minilib.Text.SimpleParser::Stream::Stream : Std::FromString`

Creates a stream from a string.

### impl `Minilib.Text.SimpleParser::Stream::Stream : Std::ToString`

Converts a stream to a string, for example `"Stream(pos=1001)"`