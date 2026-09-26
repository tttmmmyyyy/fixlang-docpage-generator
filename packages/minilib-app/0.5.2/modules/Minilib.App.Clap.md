# Minilib.App.Clap

Defined in minilib-app@0.5.2

Command line argument parser.
Inspired by [`clap` crate of Rust](https://docs.rs/clap/3.2.0/clap/index.html).

## Values

### namespace Minilib.App.Clap::Arg

#### default_value

Type: `Std::String -> Minilib.App.Clap::Arg -> Minilib.App.Clap::Arg`

Sets `@default_value`.

#### help

Type: `Std::String -> Minilib.App.Clap::Arg -> Minilib.App.Clap::Arg`

Sets `@help`.

#### long

Type: `Std::String -> Minilib.App.Clap::Arg -> Minilib.App.Clap::Arg`

Sets `@long`.

#### new

Type: `Std::String -> Minilib.App.Clap::Arg`

Creates new argument.

#### required

Type: `Minilib.App.Clap::Arg -> Minilib.App.Clap::Arg`

Sets `@required` to true.

#### short

Type: `Std::U8 -> Minilib.App.Clap::Arg -> Minilib.App.Clap::Arg`

Sets `@short`.

#### takes_multiple_values

Type: `Minilib.App.Clap::Arg -> Minilib.App.Clap::Arg`

Sets `@takes_value` to true, `@multiple_values` to true, and `@action` to `append()`.

#### takes_value

Type: `Minilib.App.Clap::Arg -> Minilib.App.Clap::Arg`

Sets `@takes_value` to true, and `@action` to `set()`.

#### value_name

Type: `Std::String -> Minilib.App.Clap::Arg -> Minilib.App.Clap::Arg`

Sets `@value_name`.

### namespace Minilib.App.Clap::ArgMatches

#### empty

Type: `Minilib.App.Clap::ArgMatches`

An empty `ArgMatches` structure.

#### get_many

Type: `Std::String -> Minilib.App.Clap::ArgMatches -> Std::Option (Std::Array Std::String)`

Gets the array of argument values with the specified ID.

#### get_one

Type: `Std::String -> Minilib.App.Clap::ArgMatches -> Std::Option Std::String`

Gets the value of the argument with the specified ID.

#### subcommand

Type: `Minilib.App.Clap::ArgMatches -> Std::Option (Std::String, Minilib.App.Clap::ArgMatches)`

### namespace Minilib.App.Clap::ArgParser

#### advance

Type: `Minilib.App.Clap::ArgParser::ArgParser -> Std::Result Std::ErrMsg (Std::String, Minilib.App.Clap::ArgParser::ArgParser)`

Proceed to next input.

#### append_value

Type: `Minilib.App.Clap::Arg -> Std::String -> Minilib.App.Clap::ArgParser::ArgParser -> Minilib.App.Clap::ArgParser::ArgParser`

Adds a value to the array of values in `arg`.

#### check_required_args_present

Type: `Minilib.App.Clap::ArgParser::ArgParser -> Std::Result Std::ErrMsg Minilib.App.Clap::ArgParser::ArgParser`

Check whether the required argument values are set. Reports an error if the value is not set.

#### get_input

Type: `Minilib.App.Clap::ArgParser::ArgParser -> Std::Result Std::ErrMsg Std::String`

Get the current input.

#### make

Type: `Std::Array Std::String -> Minilib.App.Clap::Command -> Minilib.App.Clap::ArgParser::ArgParser`

Creates an `ArgParser` based on the input array and command.

#### no_inputs

Type: `Minilib.App.Clap::ArgParser::ArgParser -> Std::Bool`

Returns True if there are no more inputs. Returns False if there is more input.

#### parse_args

Type: `Minilib.App.Clap::ArgParser::ArgParser -> Std::Result Std::ErrMsg Minilib.App.Clap::ArgParser::ArgParser`

Parse the actual command line argument array and set the value of `Arg`.

#### set_default_if_not_present

Type: `Minilib.App.Clap::ArgParser::ArgParser -> Std::Result Std::ErrMsg Minilib.App.Clap::ArgParser::ArgParser`

If no value is set for the argument, set the default value.

#### set_value

Type: `Minilib.App.Clap::Arg -> Std::String -> Minilib.App.Clap::ArgParser::ArgParser -> Minilib.App.Clap::ArgParser::ArgParser`

Set the value to `arg`.

### namespace Minilib.App.Clap::Command

#### about

Type: `Std::String -> Minilib.App.Clap::Command -> Minilib.App.Clap::Command`

Sets the description about the command.

#### arg

Type: `Minilib.App.Clap::Arg -> Minilib.App.Clap::Command -> Minilib.App.Clap::Command`

Add an argument definition to the command.

#### author

Type: `Std::String -> Minilib.App.Clap::Command -> Minilib.App.Clap::Command`

Sets the author of the command.

#### bin_name

Type: `Std::String -> Minilib.App.Clap::Command -> Minilib.App.Clap::Command`

Sets the name of the executable binary of the command.

#### display_name

Type: `Std::String -> Minilib.App.Clap::Command -> Minilib.App.Clap::Command`

Sets the display name of the command.

#### get_matches

Type: `Minilib.App.Clap::Command -> Std::IO::IOFail Minilib.App.Clap::ArgMatches`

Parse command line arguments based on `IO::get_args`.
If `--help` or `--version` is specified, the help string or version string will be returned as `throw`.

#### get_matches_from

Type: `Std::Array Std::String -> Minilib.App.Clap::Command -> Std::Result Std::ErrMsg Minilib.App.Clap::ArgMatches`

Parses command line arguments based on the specified input array.
If `--help` or `--version` is specified, the help string or version string will be returned as the error message.

#### name

Type: `Std::String -> Minilib.App.Clap::Command -> Minilib.App.Clap::Command`

Sets the name of the command.

#### new

Type: `Std::String -> Minilib.App.Clap::Command`

Creates a command structure by specifying the command name.

#### render_help

Type: `Minilib.App.Clap::Command -> Std::String`

Generates a help string based on the help template.

#### render_version

Type: `Minilib.App.Clap::Command -> Std::String`

Generates a version string based on the version template.

#### subcommand

Type: `Minilib.App.Clap::Command -> Minilib.App.Clap::Command -> Minilib.App.Clap::Command`

Add a subcommand to the command.

#### version

Type: `Std::String -> Minilib.App.Clap::Command -> Minilib.App.Clap::Command`

Sets the version of the command.

### namespace Minilib.App.Clap::HelpTemplate

#### format

Type: `Minilib.App.Clap::Command -> Minilib.App.Clap::HelpTemplate -> Std::String`

#### new

Type: `Std::String -> Minilib.App.Clap::HelpTemplate`

## Types and aliases

### namespace Minilib.App.Clap

#### Arg

Defined as: `type Arg = unbox struct { ...fields... }`

A structure that defines arguments.
Arguments can be either optional or positional arguments.
If either `short` or `long` is set, it becomes an optional argument.
Otherwise, it is a positional argument.

##### field `id`

Type: `Std::String`

##### field `short`

Type: `Std::U8`

##### field `long`

Type: `Std::String`

##### field `required`

Type: `Std::Bool`

##### field `takes_value`

Type: `Std::Bool`

##### field `multiple_values`

Type: `Std::Bool`

##### field `default_value`

Type: `Std::Option Std::String`

##### field `value_name`

Type: `Std::String`

##### field `help`

Type: `Std::String`

##### field `action`

Type: `Minilib.App.Clap::ArgAction::ArgAction`

#### ArgMatches

Defined as: `type ArgMatches = box struct { ...fields... }`

A structure representing the result of parsing command line arguments.

##### field `subcommand`

Type: `Std::Option (Std::String, Minilib.App.Clap::ArgMatches)`

##### field `map`

Type: `HashMap::HashMap Std::String (Std::Array Std::String)`

#### Command

Defined as: `type Command = box struct { ...fields... }`

A structure representing a command (ie. application).

##### field `name`

Type: `Std::String`

##### field `bin_name`

Type: `Std::String`

##### field `display_name`

Type: `Std::String`

##### field `subcommand_path`

Type: `Std::String`

##### field `version`

Type: `Std::String`

##### field `author`

Type: `Std::String`

##### field `about`

Type: `Std::String`

##### field `subcommands`

Type: `Std::Array Minilib.App.Clap::Command`

##### field `args`

Type: `Std::Array Minilib.App.Clap::Arg`

##### field `help_template`

Type: `Minilib.App.Clap::HelpTemplate`

##### field `version_template`

Type: `Minilib.App.Clap::HelpTemplate`

#### HelpTemplate

Defined as: `type HelpTemplate = unbox struct { ...fields... }`

##### field `data`

Type: `Std::String`

### namespace Minilib.App.Clap::ArgAction

#### ArgAction

Defined as: `type ArgAction = unbox union { ...variants... }`

The action taken when the argument is parsed.

##### variant `set`

Type: `()`

##### variant `append`

Type: `()`

##### variant `set_true`

Type: `()`

##### variant `set_false`

Type: `()`

##### variant `increment`

Type: `()`

##### variant `help`

Type: `()`

##### variant `version`

Type: `()`

### namespace Minilib.App.Clap::ArgParser

#### ArgParser

Defined as: `type ArgParser = unbox struct { ...fields... }`

##### field `command`

Type: `Minilib.App.Clap::Command`

##### field `remaining_args`

Type: `Std::Iterator::DynIterator Minilib.App.Clap::Arg`

##### field `matches`

Type: `Minilib.App.Clap::ArgMatches`

##### field `inputs`

Type: `Std::Iterator::DynIterator Std::String`

##### field `positional_only`

Type: `Std::Bool`

## Traits and aliases

## Trait implementations

### impl `Minilib.App.Clap::Arg : Std::ToString`