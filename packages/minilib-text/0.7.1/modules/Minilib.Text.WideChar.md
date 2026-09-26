# Minilib.Text.WideChar

Defined in minilib-text@0.7.1

Wide-character definition and classification.

A wide character is of type `WideChar`.

You can check whether a wide character has certain character properties
using classification functions such as `WideChar::is_alpha`.

Note: The results of classification functions are affected by the `LC_TYPE` locale, so
you may need to call `Locale::init_locale` first.

## Values

### namespace Minilib.Text.WideChar

#### is_alnum

Type: `Minilib.Text.WideChar::WideChar -> Std::Bool`

#### is_alpha

Type: `Minilib.Text.WideChar::WideChar -> Std::Bool`

#### is_blank

Type: `Minilib.Text.WideChar::WideChar -> Std::Bool`

#### is_cntrl

Type: `Minilib.Text.WideChar::WideChar -> Std::Bool`

#### is_digit

Type: `Minilib.Text.WideChar::WideChar -> Std::Bool`

#### is_graph

Type: `Minilib.Text.WideChar::WideChar -> Std::Bool`

#### is_lower

Type: `Minilib.Text.WideChar::WideChar -> Std::Bool`

#### is_print

Type: `Minilib.Text.WideChar::WideChar -> Std::Bool`

#### is_punct

Type: `Minilib.Text.WideChar::WideChar -> Std::Bool`

#### is_space

Type: `Minilib.Text.WideChar::WideChar -> Std::Bool`

#### is_upper

Type: `Minilib.Text.WideChar::WideChar -> Std::Bool`

#### is_xdigit

Type: `Minilib.Text.WideChar::WideChar -> Std::Bool`

#### wcswidth

Type: `Std::Array Minilib.Text.WideChar::WideChar -> Std::I64`

Returns the width of a wide string.
A wide character in half-width form counts as 1, a wide character in full-width form counts as 2.
Returns -1 if the wide string contains non-printable characters.

For details, see Linux manual page for [wcswidth(3)](https://man7.org/linux/man-pages/man3/wcswidth.3.html).

#### wcwidth

Type: `Minilib.Text.WideChar::WideChar -> Std::I64`

Returns the width of a wide character.
A wide character in half-width form counts as 1, a wide character in full-width form counts as 2.
Returns -1 if the wide character is not printable.

For details, see Linux manual page for [wcwidth(3)](https://man7.org/linux/man-pages/man3/wcwidth.3.html).

## Types and aliases

### namespace Minilib.Text.WideChar

#### WideChar

Defined as: `type WideChar = Std::U32`

The type of wide character.

This is equal to `wchar_t` in Linux and MacOS.

## Traits and aliases

## Trait implementations