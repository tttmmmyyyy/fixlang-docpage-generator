# EZS

Defined in ez-scripting@0.4.0

Provides a simple interface for running commands.

Example usage: TBA but see [fixlang-docpage-generator](https://github.com/tttmmmyyyy/fixlang-docpage-generator/blob/main/main.fix).

## Values

### namespace EZS

#### cd

Type: `Std::String -> EZS::Context -> Std::IO ()`

Changes the current working directory to the specified path.

##### Parameters

- `dir`: The directory to change to, as a string.
- `ctx`: The context for EZS.

#### cwd

Type: `EZS::Context -> Std::IO Std::String`

Returns the current working directory as a string.

##### Parameters

- `ctx`: The context for EZS.

#### run_o

Type: `Std::Array Std::String -> EZS::Context -> Std::IO Std::String`

Run a command and return its stdout ("o").

If the command fails, the program will exit with code 1.

##### Parameters

- `commands`: The command to run, as an array of strings, e.g., `["ls", "-l"]`.
- `ctx`: The context for EZS.

#### run_oe

Type: `Std::Array Std::String -> EZS::Context -> Std::IO (Std::String, Std::String)`

Run a command and return its stdout ("o") and stderr ("e").
If the command fails, the program will exit with code 1.

##### Parameters

- `commands`: The command to run, as an array of strings, e.g., `["ls", "-l"]`.
- `ctx`: The context for EZS.

#### run_oec

Type: `Std::Array Std::String -> EZS::Context -> Std::IO (Std::String, Std::String, Std::U8)`

Run a command and return its stdout ("o"), stderr ("e") and exit code ("c").

##### Parameters

- `commands`: The command to run, as an array of strings, e.g., `["ls", "-l"]`.
- `ctx`: The context for EZS.

#### run_wi_o

Type: `Std::Array Std::String -> Std::String -> EZS::Context -> Std::IO Std::String`

Run a command with input ("wi") and return its stdout ("o").

If the command fails, the program will exit with code 1.

##### Parameters

- `commands`: The command to run, as an array of strings, e.g., `["grep", "ERROR"]`.
- `input`: The input to provide to stdin of the command.
- `ctx`: The context for EZS.

#### run_wi_oe

Type: `Std::Array Std::String -> Std::String -> EZS::Context -> Std::IO (Std::String, Std::String)`

Run a command with input ("wi") and return its stdout ("o") and stderr ("e").

##### Parameters

- `commands`: The command to run, as an array of strings, e.g., `["grep", "ERROR"]`.
- `input`: The input to provide to stdin of the command.
- `ctx`: The context for EZS.

#### run_wi_oec

Type: `Std::Array Std::String -> Std::String -> EZS::Context -> Std::IO (Std::String, Std::String, Std::U8)`

Run a command with input ("wi") and return its stdout ("o"), stderr ("e") and exit code ("c").

##### Parameters

- `commands`: The command to run, as an array of strings, e.g., `["grep", "ERROR"]`.
- `input`: The input to provide to stdin of the command.
- `ctx`: The context for EZS.

### namespace EZS::Context

#### default

Type: `EZS::Context`

Default configuration for EZS.

`execution_trace` is false, `eprint_stderr` is true.

## Types and aliases

### namespace EZS

#### Context

Defined as: `type Context = unbox struct { ...fields... }`

Context and configuration for EZS.

##### field `execution_trace`

Type: `Std::Bool`

Print (to stderr) the command to be executed.

Similar to `set -x` in bash.

##### field `eprint_stderr`

Type: `Std::Bool`

Print (to stderr) the stderr output of the command.

If this is not set, the stderr output will be discarded.

## Traits and aliases

## Trait implementations