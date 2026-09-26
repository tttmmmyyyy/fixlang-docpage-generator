# Minilib.Media.Image

Defined in minilib-media@0.5.3

Basic image definitions.

## Values

### namespace Minilib.Media.Image

#### calc_channels_by_format

Type: `Std::String -> Std::I64`

#### calc_index

Type: `Std::I64 -> Std::I64 -> Std::I64 -> Minilib.Media.Image::Image -> Std::I64`

#### get

Type: `Std::I64 -> Minilib.Media.Image::Image -> Std::U8`

#### get_rgb

Type: `Std::I64 -> Minilib.Media.Image::Image -> (Std::U8, Std::U8, Std::U8)`

#### make

Type: `Std::I64 -> Std::I64 -> Std::String -> Minilib.Media.Image::Image`

#### set

Type: `Std::I64 -> Std::U8 -> Minilib.Media.Image::Image -> Minilib.Media.Image::Image`

#### set_rgb

Type: `Std::I64 -> (Std::U8, Std::U8, Std::U8) -> Minilib.Media.Image::Image -> Minilib.Media.Image::Image`

## Types and aliases

### namespace Minilib.Media.Image

#### Image

Defined as: `type Image = unbox struct { ...fields... }`

##### field `width`

Type: `Std::I64`

##### field `height`

Type: `Std::I64`

##### field `channels`

Type: `Std::I64`

##### field `format`

Type: `Std::String`

##### field `data`

Type: `Std::Array Std::U8`

## Traits and aliases

## Trait implementations