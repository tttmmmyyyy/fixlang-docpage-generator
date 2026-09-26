# Minilib.Encoding.Json

Defined in minilib-json@0.5.1

Definition of the structure of a JSON value.

## Values

### namespace Minilib.Encoding.Json

#### to_object

Type: `Std::Array (Std::String, Minilib.Encoding.Json::Json) -> Minilib.Encoding.Json::Json`

Converts an array of keys and values to a JSON object.

## Types and aliases

### namespace Minilib.Encoding.Json

#### Json

Defined as: `type Json = box union { ...variants... }`

A structure representing a JSON value.

##### variant `null`

Type: `()`

##### variant `bool`

Type: `Std::Bool`

##### variant `number`

Type: `Std::F64`

##### variant `string`

Type: `Std::String`

##### variant `object`

Type: `Minilib.Collection.OrderedMap::OrderedMap Std::String Minilib.Encoding.Json::Json`

##### variant `array`

Type: `Std::Array Minilib.Encoding.Json::Json`

## Traits and aliases

## Trait implementations

### impl `Minilib.Encoding.Json::Json : Std::Eq`

Checks whether two JSON values are equal.

### impl `Minilib.Encoding.Json::Json : Std::ToString`