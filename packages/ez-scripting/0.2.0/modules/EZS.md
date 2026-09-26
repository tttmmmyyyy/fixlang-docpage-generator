# EZS

Defined in ez-scripting@0.2.0

Provides a simple interface for running commands.

Example usage: TBA but see [fixlang-docpage-generator](https://github.com/tttmmmyyyy/fixlang-docpage-generator/blob/main/main.fix).

## Values

### namespace EZS

#### ez_cd

Type: `EZS::EZSConfig -> Std::String -> Std::IO ()`

Changes the current working directory to the specified path.

##### Parameters

- `config`: The configuration for EZS.
- `dir`: The directory to change to, as a string.

#### ez_run_o

Type: `EZS::EZSConfig -> Std::Array Std::String -> Std::IO Std::String`

Run a command and return its stdout ("o").

If the command fails, the program will exit with code 1.

##### Parameters

- `config`: The configuration for EZS.
- `commands`: The command to run, as an array of strings, e.g., `["ls", "-l"]`.

#### ez_run_oe

Type: `EZS::EZSConfig -> Std::Array Std::String -> Std::IO (Std::String, Std::String)`

Run a command and return its stdout ("o") and stderr ("e").
If the command fails, the program will exit with code 1.

##### Parameters

- `config`: The configuration for EZS.
- `commands`: The command to run, as an array of strings, e.g., `["ls", "-l"]`.

#### ez_run_oec

Type: `EZS::EZSConfig -> Std::Array Std::String -> Std::IO (Std::String, Std::String, Std::U8)`

Run a command and return its stdout ("o"), stderr ("e") and exit code ("c").

##### Parameters

- `config`: The configuration for EZS.
- `commands`: The command to run, as an array of strings, e.g., `["ls", "-l"]`.

#### ez_run_wi_o

Type: `EZS::EZSConfig -> Std::Array Std::String -> Std::String -> Std::IO Std::String`

Run a command with input ("wi") and return its stdout ("o").

If the command fails, the program will exit with code 1.

##### Parameters

- `config`: The configuration for EZS.
- `commands`: The command to run, as an array of strings, e.g., `["grep", "ERROR"]`.
- `input`: The input to provide to stdin of the command.

#### ez_run_wi_oe

Type: `EZS::EZSConfig -> Std::Array Std::String -> Std::String -> Std::IO (Std::String, Std::String)`

Run a command with input ("wi") and return its stdout ("o") and stderr ("e").

##### Parameters

- `config`: The configuration for EZS.
- `commands`: The command to run, as an array of strings, e.g., `["grep", "ERROR"]`.
- `input`: The input to provide to stdin of the command.

#### ez_run_wi_oec

Type: `EZS::EZSConfig -> Std::Array Std::String -> Std::String -> Std::IO (Std::String, Std::String, Std::U8)`

Run a command with input ("wi") and return its stdout ("o"), stderr ("e") and exit code ("c").

##### Parameters

- `config`: The configuration for EZS.
- `commands`: The command to run, as an array of strings, e.g., `["grep", "ERROR"]`.
- `input`: The input to provide to stdin of the command.

### namespace EZS::EZSConfig

#### default

Type: `EZS::EZSConfig`

Default configuration for EZS.

`execution_trace` is false, `eprint_stderr` is true.

## Types and aliases

### namespace EZS

#### EZSConfig

Defined as: `type EZSConfig = unbox struct { ...fields... }`

Configuration for EZS.

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