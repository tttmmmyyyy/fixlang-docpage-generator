# Minilib.App.Clap

Defined in minilib-app@0.6.1

Command line argument parser.
Inspired by [`clap` crate of Rust](https://docs.rs/clap/3.2.0/clap/index.html).

## How to use

1. Create a command definition.
   - A command definition (`Command`) might have a name, a version, the author,
     as well as argument definitions.
   - An argument definition (`Arg`) might have an ID, a short option, a long option,
     a help message, default value etc.
2. Parse a command line using `command.get_matches`.
3. Get the values of the arguments from `ArgMatches`.

Example:
```
typical_command: Command;
typical_command = (
    Command::new("typical_tool")
    .bin_name("typical")
    .display_name("TypicalTool")
    .version("1.0.0")
    .author("somebody <somebody@example.com>")
    .arg(Arg::new("TARGET").help("Target").takes_value.required)
    .arg(Arg::new("FILE").help("Input files").takes_multiple_values)
    .arg(Arg::new("count").short('n').long("count").help("How many times to iterate")
        .takes_value.value_name("NUMBER").default_value("100"))
    .arg(Arg::new("output").short('o').long("output").help("An output file")
        .takes_value.value_name("OUTFILE"))
);

main: IO ();
main = do {
    // Parse a command line.
    let matches: ArgMatches = *command.get_matches;
    // Get the values of the arguments from `ArgMatches`.
    let target: String = *matches.get_one("TARGET").as_some;
    let files: Option (Array String) = *matches.get_many("FILE");
    let count: I64 = *matches.get_one("count").as_some.from_string.from_result;
    let output: Option String = *matches.get_one("output");
    ...
}.try(eprintln);

```

## Changes in 0.6.0

- The effect of a boolean arg, which has a `set_true()` or a `set_false()` action,
  will be negated if `--no-{long-option}` is specified in the command line.

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

##### Parameters

- `about`: The description about the command
- `command`: A command

#### arg

Type: `Minilib.App.Clap::Arg -> Minilib.App.Clap::Command -> Minilib.App.Clap::Command`

Add an argument definition to the command.

##### Parameters

- `arg`: An argument definition to the command
- `command`: A command

#### author

Type: `Std::String -> Minilib.App.Clap::Command -> Minilib.App.Clap::Command`

Sets the author of the command.

##### Parameters

- `author`: The author of the command
- `command`: A command

#### bin_name

Type: `Std::String -> Minilib.App.Clap::Command -> Minilib.App.Clap::Command`

Sets the name of the executable binary of the command.

##### Parameters

- `bin_name`: The name of the executable binary of the command
- `command`: A command

#### display_name

Type: `Std::String -> Minilib.App.Clap::Command -> Minilib.App.Clap::Command`

Sets the display name of the command.

##### Parameters

- `display_name`: The display name of the command
- `command`: A command

#### get_matches

Type: `Minilib.App.Clap::Command -> Std::IO::IOFail Minilib.App.Clap::ArgMatches`

Parse command line arguments based on `IO::get_args`.
If `--help` or `--version` is specified, the help string or version string will be returned as `throw`.

##### Parameters

- `command`: A command

#### get_matches_from

Type: `Std::Array Std::String -> Minilib.App.Clap::Command -> Std::Result Std::ErrMsg Minilib.App.Clap::ArgMatches`

Parses command line arguments based on the specified input array.
If `--help` or `--version` is specified, the help string or version string will be returned as the error message.

##### Parameters

- `inputs`: An input array
- `command`: A command

#### name

Type: `Std::String -> Minilib.App.Clap::Command -> Minilib.App.Clap::Command`

Sets the name of the command.

##### Parameters

- `name`: The name of the command
- `command`: A command

#### new

Type: `Std::String -> Minilib.App.Clap::Command`

Creates a command structure by specifying the command name.

##### Parameters

- `name`: The name of the command

#### subcommand

Type: `Minilib.App.Clap::Command -> Minilib.App.Clap::Command -> Minilib.App.Clap::Command`

Add a subcommand to the command.

##### Parameters

- `subcommand`: A subcommand
- `command`: A command

#### version

Type: `Std::String -> Minilib.App.Clap::Command -> Minilib.App.Clap::Command`

Sets the version of the command.

##### Parameters

- `version`: The version of the command
- `command`: A command

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

A unique ID that identifies the argument.

##### field `short`

Type: `Std::U8`

A one-hypen option, eg. `-n`

##### field `long`

Type: `Std::String`

A two-hypen option, eg. `--count`

##### field `required`

Type: `Std::Bool`

Whether the argument is required or not.

##### field `takes_value`

Type: `Std::Bool`

Whether the argument takes some value.

##### field `multiple_values`

Type: `Std::Bool`

Whether the argument value(s) is singule or multiple.

##### field `default_value`

Type: `Std::Option Std::String`

A default value of the argument.

##### field `value_name`

Type: `Std::String`

The name of the argument value which is displayed in help message.

##### field `help`

Type: `Std::String`

The help message of the argument.

##### field `action`

Type: `Minilib.App.Clap::ArgAction::ArgAction`

The action taken when the argument is parsed.

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

The name of the command.

##### field `bin_name`

Type: `Std::String`

The name of the executable binary of the command.

##### field `display_name`

Type: `Std::String`

The display name of the command.

##### field `subcommand_path`

Type: `Std::String`

The subcommands that invokes this command.

##### field `version`

Type: `Std::String`

The version of the command.

##### field `author`

Type: `Std::String`

The author of the command.

##### field `about`

Type: `Std::String`

The description about the command.

##### field `subcommands`

Type: `Std::Array Minilib.App.Clap::Command`

Array of subcommands.

##### field `args`

Type: `Std::Array Minilib.App.Clap::Arg`

Argument definitions of the command.

##### field `help_template`

Type: `Minilib.App.Clap::HelpTemplate`

A help template of the command.

##### field `version_template`

Type: `Minilib.App.Clap::HelpTemplate`

A version template of the command.

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

Sets next input to the single argument value.

##### variant `append`

Type: `()`

Appends next input to the array of argument values.

##### variant `set_true`

Type: `()`

Sets "true" as the single argument value.

##### variant `set_false`

Type: `()`

Sets "false" as the single argument value.

##### variant `increment`

Type: `()`

Increment the argument value as an integer.

##### variant `help`

Type: `()`

Displays help for the command.

##### variant `version`

Type: `()`

Displays the version of the command.

### namespace Minilib.App.Clap::ArgParser

#### ArgParser

Defined as: `type ArgParser = unbox struct { ...fields... }`

Argument parser. (used internally)

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