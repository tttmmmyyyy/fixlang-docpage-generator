# Minilib.Media.Png

Defined in minilib-media@0.5.3

 PNG image I/O.

 How to use:
 1. Install PNG library. For example, run the command below.
    `$ sudo apt install libpng-dev`
 2. Add `-d png` option to `fix run` and `fix build` arguments.

NOTE: Currently only writing is supported. Reading is not supported yet.

## Values

### namespace Minilib.Media.Png

#### write_png_file

Type: `Std::String -> Minilib.Media.Image::Image -> Std::IO::IOFail ()`

#### write_png_to_memory

Type: `Minilib.Media.Image::Image -> Std::IO::IOFail (Std::Array Std::U8)`

### namespace Minilib.Media.Png::PngImageIO

#### get_message

Type: `Minilib.Media.Png::PngImageIO -> Std::IO::IOFail Std::String`

#### get_warning_or_error

Type: `Minilib.Media.Png::PngImageIO -> Std::IO::IOFail Std::I64`

#### make

Type: `Std::IO::IOFail Minilib.Media.Png::PngImageIO`

#### parse_format

Type: `Std::String -> Std::Result Std::ErrMsg Std::I64`

#### set_format

Type: `Std::I64 -> Minilib.Media.Png::PngImageIO -> Std::IO::IOFail ()`

#### set_image_size

Type: `Std::I64 -> Std::I64 -> Minilib.Media.Png::PngImageIO -> Std::IO::IOFail ()`

#### write_to_file

Type: `Std::String -> Std::Bool -> Std::Array Std::U8 -> Std::I64 -> Minilib.Media.Png::PngImageIO -> Std::IO::IOFail ()`

#### write_to_memory

Type: `Std::Bool -> Std::Array Std::U8 -> Std::I64 -> Minilib.Media.Png::PngImageIO -> Std::IO::IOFail (Std::Array Std::U8)`

## Types and aliases

### namespace Minilib.Media.Png

#### PngImageIO

Defined as: `type PngImageIO = unbox struct { ...fields... }`

##### field `dtor`

Type: `Std::FFI::Destructor Std::Ptr`

## Traits and aliases

## Trait implementations