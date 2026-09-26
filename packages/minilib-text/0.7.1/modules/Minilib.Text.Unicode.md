# Minilib.Text.Unicode

Defined in minilib-text@0.7.1

Unicode strings and conversions (UTF8/UTF16/UTF32)

An utf-8 encoded `Std::String` can be converted to `UTF8String`, `UTF16String`, `UTF32String`
by using `to_utf8_string`, `to_utf16_string`, `to_utf32_string`.

`UTF8String`, `UTF16String`, `UTF32String` can be converted to an utf-8 encoded `Std::String`
by using `to_string`.

`UTF32String` is suitable for working with strings containing Unicode characters.

Example:
```
let str = "aAあいう😊😀";                       // an ordinary string (encoded in utf-8)
let wstr: UTF32String = str.to_utf32_string;     // convert to a wide string
assert_equal("size", 7, wstr.get_size);;         // number of wide characters
let wstr = wstr.get_sub(5, 7);                   // get substring of a wide string
assert_equal("str", "😊😀", wstr.to_string);;   // convert back to an ordinary string
```

## Values

### namespace Minilib.Text.Unicode

#### encode_code_point_to_utf8

Type: `Std::U32 -> Std::Array Std::U8 -> Std::Array Std::U8`

Encode a unicode code point to UTF-8

#### utf16_to_utf32

Type: `Std::Array Std::U16 -> Std::Array Std::U32 -> Std::Array Std::U32`

Convert UTF16 string to UTF32 string.

#### utf32_to_utf16

Type: `Std::Array Std::U32 -> Std::Array Std::U16 -> Std::Array Std::U16`

Convert UTF32 string to UTF16 string.

#### utf32_to_utf8

Type: `Std::Array Std::U32 -> Std::Array Std::U8 -> Std::Array Std::U8`

Convert UTF32 string to UTF8 string. Please specify the output destination buffer.

#### utf8_to_utf32

Type: `Std::Array Std::U8 -> Std::Array Std::U32 -> Std::Array Std::U32`

Convert UTF8 string to UTF32 string. Please specify the output destination buffer.

### namespace Minilib.Text.Unicode::ToUTF16String

#### to_utf16_string

Type: `[a : Minilib.Text.Unicode::ToUTF16String] a -> Minilib.Text.Unicode::UTF16String`

Trait member of `Minilib.Text.Unicode::ToUTF16String`

### namespace Minilib.Text.Unicode::ToUTF32String

#### to_utf32_string

Type: `[a : Minilib.Text.Unicode::ToUTF32String] a -> Minilib.Text.Unicode::UTF32String`

Trait member of `Minilib.Text.Unicode::ToUTF32String`

### namespace Minilib.Text.Unicode::ToUTF8String

#### to_utf8_string

Type: `[a : Minilib.Text.Unicode::ToUTF8String] a -> Minilib.Text.Unicode::UTF8String`

Trait member of `Minilib.Text.Unicode::ToUTF8String`

### namespace Minilib.Text.Unicode::UTFString

#### @

Type: `Std::I64 -> Minilib.Text.Unicode::UTFString a -> a`

Gets the code unit of a unicode string at the specified index.

##### Parameters

* `i` - The index of the code unit.
* `str` - The unicode string to be converted.

#### concat

Type: `Minilib.Text.Unicode::UTFString a -> Minilib.Text.Unicode::UTFString a -> Minilib.Text.Unicode::UTFString a`

Concatenate two unicode strings.

Note: Since `s1.concat(s2)` puts `s2` after `s1`, `concat(lhs, rhs)` puts `lhs` after `rhs`.

##### Parameters

* `first` - The first unicode string.
* `second` - The second unicode string.

#### empty

Type: `Minilib.Text.Unicode::UTFString a`

An empty unicode string.

#### get_size

Type: `Minilib.Text.Unicode::UTFString a -> Std::I64`

Gets the length of a unicode string (= the count of code units).

##### Parameters

* `str` - The unicode string to be converted.

#### get_sub

Type: `Std::I64 -> Std::I64 -> Minilib.Text.Unicode::UTFString a -> Minilib.Text.Unicode::UTFString a`

Returns a substring of the specified range.

##### Parameters

* `start` - The start index of the substring.
* `end` - The end index of the substring.
* `str` - The unicode string to be sliced.

#### is_empty

Type: `Minilib.Text.Unicode::UTFString a -> Std::Bool`

Returns if the unicode string is empty or not.

##### Parameters

* `str` - The unicode string to be checked.

#### make

Type: `Std::Array a -> Minilib.Text.Unicode::UTFString a`

Creates a unicode string from a non-null-terminated array of code units.

##### Parameters

* `array` - A non-null-terminated array of code units.

## Types and aliases

### namespace Minilib.Text.Unicode

#### UTF16String

Defined as: `type UTF16String = Minilib.Text.Unicode::UTFString Std::U16`

A unicode string which is encoded in UTF16.

#### UTF32String

Defined as: `type UTF32String = Minilib.Text.Unicode::UTFString Std::U32`

A unicode string which is encoded in UTF32.

#### UTF8String

Defined as: `type UTF8String = Minilib.Text.Unicode::UTFString Std::U8`

A unicode string which is encoded in UTF8.

#### UTFString

Defined as: `type UTFString a = unbox struct { ...fields... }`

Unicode string type.

A unicode string is represented as a non-null-terminated array of code units.

##### field `data`

Type: `Std::Array a`

## Traits and aliases

### namespace Minilib.Text.Unicode

#### trait `a : ToUTF16String`

##### method `to_utf16_string`

Type: `a -> Minilib.Text.Unicode::UTFString Std::U16`

#### trait `a : ToUTF32String`

##### method `to_utf32_string`

Type: `a -> Minilib.Text.Unicode::UTFString Std::U32`

#### trait `a : ToUTF8String`

##### method `to_utf8_string`

Type: `a -> Minilib.Text.Unicode::UTFString Std::U8`

## Trait implementations

### impl `Minilib.Text.Unicode::UTFString Std::U16 : Minilib.Text.Unicode::ToUTF16String`

### impl `Minilib.Text.Unicode::UTFString Std::U16 : Minilib.Text.Unicode::ToUTF32String`

### impl `Minilib.Text.Unicode::UTFString Std::U16 : Minilib.Text.Unicode::ToUTF8String`

### impl `Minilib.Text.Unicode::UTFString Std::U16 : Std::FromString`

### impl `Minilib.Text.Unicode::UTFString Std::U16 : Std::ToString`

### impl `Minilib.Text.Unicode::UTFString Std::U32 : Minilib.Text.Unicode::ToUTF16String`

### impl `Minilib.Text.Unicode::UTFString Std::U32 : Minilib.Text.Unicode::ToUTF32String`

### impl `Minilib.Text.Unicode::UTFString Std::U32 : Minilib.Text.Unicode::ToUTF8String`

### impl `Minilib.Text.Unicode::UTFString Std::U32 : Std::FromString`

### impl `Minilib.Text.Unicode::UTFString Std::U32 : Std::ToString`

### impl `Minilib.Text.Unicode::UTFString Std::U8 : Minilib.Text.Unicode::ToUTF16String`

### impl `Minilib.Text.Unicode::UTFString Std::U8 : Minilib.Text.Unicode::ToUTF32String`

### impl `Minilib.Text.Unicode::UTFString Std::U8 : Minilib.Text.Unicode::ToUTF8String`

### impl `Minilib.Text.Unicode::UTFString Std::U8 : Std::FromString`

### impl `Minilib.Text.Unicode::UTFString Std::U8 : Std::ToString`

### impl `Minilib.Text.Unicode::UTFString a : Std::Add`

Concatenates two unicode strings.

### impl `[a : Std::Eq] Minilib.Text.Unicode::UTFString a : Std::Eq`

### impl `[a : Std::LessThan] Minilib.Text.Unicode::UTFString a : Std::LessThan`

### impl `[a : Std::LessThanOrEq] Minilib.Text.Unicode::UTFString a : Std::LessThanOrEq`

### impl `Minilib.Text.Unicode::UTFString a : Std::Zero`

An empty unicode string.

### impl `Std::String : Minilib.Text.Unicode::ToUTF16String`

### impl `Std::String : Minilib.Text.Unicode::ToUTF32String`

### impl `Std::String : Minilib.Text.Unicode::ToUTF8String`