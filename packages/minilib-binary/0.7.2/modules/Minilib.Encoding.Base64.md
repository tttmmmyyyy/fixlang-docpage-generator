# Minilib.Encoding.Base64

Defined in minilib-binary@0.7.2

BASE64 encoding and decoding

Three words run through this module.

A *piece* is the six bits that one BASE64 character stands for. `_u8_to_b64_table` reads a
character into a piece, and `_b64_to_u8_table` writes a piece back as a character.

A *group* is the unit the conversion works in: twenty-four bits. That is three bytes on one
side, and four pieces -- four characters -- on the other. A byte array whose length is not a
multiple of three ends in a group of one or two bytes, and the padding character `=` fills the
characters of that group out to four. A string can end in a group of two or three pieces.

A group of characters is *unbroken* when it is four BASE64 characters in a row. A group is
*broken* when it holds a character other than BASE64, the padding character `=` included, or
when the string ends before its fourth character.

## Values

### namespace Minilib.Encoding.Base64

#### base64_decode

Type: `Std::String -> Std::Array Std::U8`

Decodes a string which contains BASE64 characters to a byte array.
Characters other than BASE64 are ignored.

#### base64_encode

Type: `Std::Array Std::U8 -> Std::String`

Encodes a byte array to a BASE64 string.

## Types and aliases

## Traits and aliases

## Trait implementations