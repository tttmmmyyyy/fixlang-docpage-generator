# Minilib.Text.Locale

Defined in minilib-text@0.7.1

Locale management functions.

To use the classification functions of wide characters, you should first initialize
the locale by calling `Locale::init_locale`.
For details, see the documentation of [Minilib.Text.WideChar](Minilib.Text.WideChar.md) module.

## Values

### namespace Minilib.Text.Locale

#### get_locale

Type: `Std::String -> Std::IO::IOFail Std::String`

Queries the program's current locale.

This function is implemented by passing NULL pointer to the second argument of `setlocale(3)`.

For details, see Linux manual page for [setlocale(3)](https://man7.org/linux/man-pages/man3/setlocale.3.html).

##### Parameters

- `category_name`: The name of the category. (For example, "LC_ALL", "LC_COLLATE", "LC_CTYPE", "LC_MESSAGES", "LC_MONETARY", "LC_NUMERIC", "LC_TIME")

#### init_locale

Type: `Std::IO ()`

Initialize the program's current locale.

This function is equivalent to `setlocale(LC_ALL, "")` in C language.

#### lc_all

Type: `Std::String`

A constant string that represents the locale category "LC_ALL"

#### lc_collate

Type: `Std::String`

A constant string that represents the locale category "LC_COLLATE"

#### lc_ctype

Type: `Std::String`

A constant string that represents the locale category "LC_CTYPE"

#### lc_messages

Type: `Std::String`

A constant string that represents the locale category "LC_MESSAGES"

#### lc_monetary

Type: `Std::String`

A constant string that represents the locale category "LC_MONETARY"

#### lc_numeric

Type: `Std::String`

A constant string that represents the locale category "LC_NUMERIC"

#### lc_time

Type: `Std::String`

A constant string that represents the locale category "LC_TIME"

#### locale_C

Type: `Std::String`

A constant string that represents the locale "C".

#### locale_C_UTF8

Type: `Std::String`

A constant string that represents the locale "C.UTF-8".

#### locale_default

Type: `Std::String`

A constant string that represents the locale "", which is an implementation-defined native environment.

#### set_locale

Type: `Std::String -> Std::String -> Std::IO::IOFail Std::String`

Sets the program's current locale.

For details, see Linux manual page for [setlocale(3)](https://man7.org/linux/man-pages/man3/setlocale.3.html).

##### Parameters

- `category_name`: The name of the category. (For example, "LC_ALL", "LC_COLLATE", "LC_CTYPE", "LC_MESSAGES", "LC_MONETARY", "LC_NUMERIC", "LC_TIME")
- `locale`: The locale to be set. (For example, "", "C", "en_US.UTF-8", "ja_JP.UTF-8")

#### with_locale

Type: `Std::String -> Std::String -> Std::IO::IOFail a -> Std::IO::IOFail a`

Sets the program's current locale, performs `body`, then restores the original locale.

##### Parameters

- `category_name`: The name of the category. (For example, "LC_ALL", "LC_COLLATE", "LC_CTYPE", "LC_MESSAGES", "LC_MONETARY", "LC_NUMERIC", "LC_TIME")
- `locale`: The locale to be set. (For example, "", "C", "en_US.UTF-8", "ja_JP.UTF-8")
- `body`: The body

## Types and aliases

## Traits and aliases

## Trait implementations