# Minilib.Text.Unicode

Defined in minilib-text@0.10.1

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
assert_equal("size", 7, wstr.@size);;         // number of wide characters
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

#### @size

Type: `Minilib.Text.Unicode::UTFString a -> Std::I64`

Gets the length of a unicode string (= the count of code units).

##### Parameters

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

#### find

Type: `[a : Std::Eq] Minilib.Text.Unicode::UTFString a -> Std::I64 -> Minilib.Text.Unicode::UTFString a -> Std::Option Std::I64`

`str.find(token, start_idx)` finds the index where `token` firstly appears in `str` starting from `start_idx`.

As a special behavior, if the `token` is empty, this function returns
`some(start_idx)` if `start_idx <= str.@size`, or returns `none()` otherwise.

##### Parameters

* `token` - The token to be searched.
* `start_idx` - The index to start searching from.
* `str` - The unicode string to be searched.

#### from_array

Type: `Std::Array a -> Minilib.Text.Unicode::UTFString a`

Converts an array of code units to a unicode string.

`UTFString::from_array(array)` is equal to `UTFString::make(array)`.

NOTE: The array of code units NEED NOT to be null-terminated.

##### Parameters

* `array` - An array of code units.

#### from_code_unit

Type: `a -> Minilib.Text.Unicode::UTFString a`

Creates a unicode string from a single code unit.

##### Parameters

* `c` - A code unit.

#### from_iter

Type: `[iter : Std::Iterator, Std::Iterator::Item iter = a] iter -> Minilib.Text.Unicode::UTFString a`

Converts an iterator of code units to a unicode string.

`UTFString::from_iter(iter)` is equal to `UTFString::from_array(iter.to_array)`.

NOTE: The iterator of code units NEED NOT to be null-terminated.

##### Parameters

* `iter` - An iterator of code units.

#### get_size

**Deprecated**: Use `@size` instead.

Type: `Minilib.Text.Unicode::UTFString a -> Std::I64`

#### get_sub

Type: `Std::I64 -> Std::I64 -> Minilib.Text.Unicode::UTFString a -> Minilib.Text.Unicode::UTFString a`

Returns a substring of the specified range.

##### Parameters

* `start` - The start index of the substring.
* `end` - The end index of the substring.
* `str` - The unicode string to be sliced.

#### get_width

Type: `[s : Minilib.Text.Unicode::ToUTF32String] s -> Std::I64`

Returns the width of a wide string.
A wide character in half-width form counts as 1, a wide character in full-width form counts as 2.
Returns -1 if the wide string contains non-printable characters.

##### Parameters

* `str` - A string which can be converted to `UTF32String`.

#### is_empty

Type: `Minilib.Text.Unicode::UTFString a -> Std::Bool`

Returns if the unicode string is empty or not.

##### Parameters

* `str` - The unicode string to be checked.

#### make

Type: `Std::Array a -> Minilib.Text.Unicode::UTFString a`

Creates a unicode string from an array of code units.

NOTE: The array of code units NEED NOT to be null-terminated.

##### Parameters

* `array` - An array of code units.

#### pop_back

Type: `Minilib.Text.Unicode::UTFString a -> Minilib.Text.Unicode::UTFString a`

Pops a code unit at the back of a unicode string.
If the unicode string is empty, this function does nothing.

##### Parameters

* `str` - The unicode string to be modified.

#### push_back

Type: `a -> Minilib.Text.Unicode::UTFString a -> Minilib.Text.Unicode::UTFString a`

Pushes a code unit to the back of a unicode string.

##### Parameters

* `c` - The code unit.
* `str` - The unicode string to be modified.

#### set

Type: `Std::I64 -> a -> Minilib.Text.Unicode::UTFString a -> Minilib.Text.Unicode::UTFString a`

Sets the code unit of a unicode string at the specified index.

##### Parameters

* `i` - The index of the code unit.
* `c` - The code unit.
* `str` - The unicode string to be modified.

#### split

Type: `[?i : Std::Iterator, a : Std::Eq, Std::Iterator::Item ?i = Minilib.Text.Unicode::UTFString a] Minilib.Text.Unicode::UTFString a -> Minilib.Text.Unicode::UTFString a -> ?i`

Splits a unicode string by the specified separator.

As a special behavior, if the separator is empty, this function returns
an iterator where each element is a Unicode string consisting of
a single code unit.

##### Parameters

* `sep` - A separator.
* `str` - A unicode string.

#### to_array

Type: `Minilib.Text.Unicode::UTFString a -> Std::Array a`

Converts a unicode string to an array of code units.

`UTFString::to_array(str)` is equal to `str.@data`.

##### Parameters

* `str` - A unicode string.

#### to_iter

Type: `[?i : Std::Iterator, Std::Iterator::Item ?i = a] Minilib.Text.Unicode::UTFString a -> ?i`

Converts a unicode string to an iterator of code units.

`str.to_iter` is equal to `str.to_array.to_iter`.

##### Parameters

* `str` - A unicode string.

#### to_wide_char

Type: `[s : Minilib.Text.Unicode::ToUTF32String] s -> Minilib.Text.WideChar::WideChar`

Converts the string to `UTF32String`, and returns the first wide character.
If the coverted wide string is empty, this function returns `0_U32`.

##### Parameters

* `str` - A string that can be converted to `UTF32String`.

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

A unicode string is represented as an array of code units.

NOTE: The array of code units NEED NOT to be null-terminated.

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

Compare two unicode strings as an array of code units.

### impl `[a : Std::Eq, a : Std::LessThan] Minilib.Text.Unicode::UTFString a : Std::LessThan`

Compare two unicode strings as an array of code units.
NOTE: This is NOT affected by the `LC_COLLATE` locale, since the order of code units is not affected by the collation.

### impl `[a : Std::Eq, a : Std::LessThanOrEq] Minilib.Text.Unicode::UTFString a : Std::LessThanOrEq`

Compare two unicode strings as an array of code units.
NOTE: This is NOT affected by the `LC_COLLATE` locale, since the order of code units is not affected by the collation.

### impl `Minilib.Text.Unicode::UTFString a : Std::Zero`

An empty unicode string.

### impl `Std::String : Minilib.Text.Unicode::ToUTF16String`

### impl `Std::String : Minilib.Text.Unicode::ToUTF32String`

### impl `Std::String : Minilib.Text.Unicode::ToUTF8String`