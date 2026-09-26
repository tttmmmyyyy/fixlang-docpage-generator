# Minilib.Encoding.Binary

Defined in minilib-binary@0.7.0

Binary utility, such as:
- Byte order
- Byte buffer

## Values

### namespace Minilib.Encoding.Binary

#### get_u16_be

Type: `Std::I64 -> Std::Array Std::U8 -> Std::U16`

Decodes U16 from `array` at position `i` with big endian.

#### get_u16_le

Type: `Std::I64 -> Std::Array Std::U8 -> Std::U16`

Decodes U16 from `array` at position `i` with little endian.

#### get_u32_be

Type: `Std::I64 -> Std::Array Std::U8 -> Std::U32`

Decodes U32 from `array` at position `i` with big endian.

#### get_u32_le

Type: `Std::I64 -> Std::Array Std::U8 -> Std::U32`

Decodes U32 from `array` at position `i` with little endian.

#### get_u64_be

Type: `Std::I64 -> Std::Array Std::U8 -> Std::U64`

Decodes U64 from `array` at position `i` with big endian.

#### get_u64_le

Type: `Std::I64 -> Std::Array Std::U8 -> Std::U64`

Decodes U64 from `array` at position `i` with little endian.

#### get_u8_be

Type: `Std::I64 -> Std::Array Std::U8 -> Std::U8`

Decodes U8 from `array` at position `i` with big endian.

#### get_u8_le

Type: `Std::I64 -> Std::Array Std::U8 -> Std::U8`

Decodes U8 from `array` at position `i` with little endian.

#### set_u16_be

Type: `Std::I64 -> Std::U16 -> Std::Array Std::U8 -> Std::Array Std::U8`

Encodes U16 into `array` at position `i` with big endian.

#### set_u16_le

Type: `Std::I64 -> Std::U16 -> Std::Array Std::U8 -> Std::Array Std::U8`

Encodes U16 into `array` at position `i` with little endian.

#### set_u32_be

Type: `Std::I64 -> Std::U32 -> Std::Array Std::U8 -> Std::Array Std::U8`

Encodes U32 into `array` at position `i` with big endian.

#### set_u32_le

Type: `Std::I64 -> Std::U32 -> Std::Array Std::U8 -> Std::Array Std::U8`

Encodes U32 into `array` at position `i` with little endian.

#### set_u64_be

Type: `Std::I64 -> Std::U64 -> Std::Array Std::U8 -> Std::Array Std::U8`

Encodes U64 into `array` at position `i` with big endian.

#### set_u64_le

Type: `Std::I64 -> Std::U64 -> Std::Array Std::U8 -> Std::Array Std::U8`

Encodes U64 into `array` at position `i` with little endian.

#### set_u8_be

Type: `Std::I64 -> Std::U8 -> Std::Array Std::U8 -> Std::Array Std::U8`

Encodes U8 into `array` at position `i` with big endian.

#### set_u8_le

Type: `Std::I64 -> Std::U8 -> Std::Array Std::U8 -> Std::Array Std::U8`

Encodes U8 into `array` at position `i` with little endian.

### namespace Minilib.Encoding.Binary::ByteBuffer

#### @size

Type: `Minilib.Encoding.Binary::ByteBuffer -> Std::I64`

Gets the size of internal byte array.

#### empty

Type: `Std::I64 -> Minilib.Encoding.Binary::ByteOrder -> Minilib.Encoding.Binary::ByteBuffer`

`ByteBuffer::empty(capacity, byte_order)` creates new byte buffer such that:
- The internal byte array is an empty array with capacity `capacity`
- The byte order is `byte_order`

#### ensure_size

Type: `Std::I64 -> Minilib.Encoding.Binary::ByteBuffer -> Minilib.Encoding.Binary::ByteBuffer`

`buf.ensure_size(req_size)` ensures that the size of the byte buffer is at least `req_size`.
If not, appends zeros at the end of the byte buffer.

#### fill

Type: `Std::I64 -> Std::U8 -> Minilib.Encoding.Binary::ByteOrder -> Minilib.Encoding.Binary::ByteBuffer`

`ByteBuffer::fill(size, value, byte_order)` creates new byte buffer such that:
- The internal byte array is initialized by size `size` and filled with `value`
- The byte order is `byte_order`

#### from_u32_array

Type: `Std::Array Std::U32 -> Minilib.Encoding.Binary::ByteOrder -> Minilib.Encoding.Binary::ByteBuffer`

#### get_bytes

Type: `Minilib.Encoding.Binary::ByteBuffer -> Std::Array Std::U8`

Gets the internal byte array.

#### get_position

Type: `Minilib.Encoding.Binary::ByteBuffer -> Std::I64`

Gets the read/write position.

#### get_size

Type: `Minilib.Encoding.Binary::ByteBuffer -> Std::I64`

Synonym of `ByteBuffer::@size`.

#### get_u16

Type: `Std::I64 -> Minilib.Encoding.Binary::ByteBuffer -> Std::U16`

Decodes U16 from the byte buffer at position `i`.

#### get_u32

Type: `Std::I64 -> Minilib.Encoding.Binary::ByteBuffer -> Std::U32`

Decodes U32 from the byte buffer at position `i`.

#### get_u64

Type: `Std::I64 -> Minilib.Encoding.Binary::ByteBuffer -> Std::U64`

Decodes U64 from the byte buffer at position `i`.

#### get_u8

Type: `Std::I64 -> Minilib.Encoding.Binary::ByteBuffer -> Std::U8`

Decodes U8 from the byte buffer at position `i`.

#### make

Type: `Std::Array Std::U8 -> Minilib.Encoding.Binary::ByteOrder -> Minilib.Encoding.Binary::ByteBuffer`

`ByteBuffer::make(array, byte_order)` creates new byte buffer such that:
- The internal byte array is `array`
- The byte order is `byte_order`

#### set_u16

Type: `Std::I64 -> Std::U16 -> Minilib.Encoding.Binary::ByteBuffer -> Minilib.Encoding.Binary::ByteBuffer`

Encodes U16 into the byte buffer at position `i`.

#### set_u32

Type: `Std::I64 -> Std::U32 -> Minilib.Encoding.Binary::ByteBuffer -> Minilib.Encoding.Binary::ByteBuffer`

Encodes U32 into the byte buffer at position `i`.

#### set_u64

Type: `Std::I64 -> Std::U64 -> Minilib.Encoding.Binary::ByteBuffer -> Minilib.Encoding.Binary::ByteBuffer`

Encodes U64 into the byte buffer at position `i`.

#### set_u8

Type: `Std::I64 -> Std::U8 -> Minilib.Encoding.Binary::ByteBuffer -> Minilib.Encoding.Binary::ByteBuffer`

Encodes U8 into the byte buffer at position `i`.

#### to_u32_array

Type: `Minilib.Encoding.Binary::ByteBuffer -> Std::Array Std::U32`

#### to_u8_array

Type: `Minilib.Encoding.Binary::ByteBuffer -> Std::Array Std::U8`

### namespace Minilib.Encoding.Binary::Marshal

#### marshal

Type: `[a : Minilib.Encoding.Binary::Marshal] a -> Minilib.Encoding.Binary::ByteBuffer -> Minilib.Encoding.Binary::ByteBuffer`

Trait member of `Minilib.Encoding.Binary::Marshal`

Encodes a value to the byte buffer.

### namespace Minilib.Encoding.Binary::Unmarshal

#### unmarshal

Type: `[a : Minilib.Encoding.Binary::Unmarshal] Minilib.Encoding.Binary::ByteBuffer -> Std::Result Std::ErrMsg (a, Minilib.Encoding.Binary::ByteBuffer)`

Trait member of `Minilib.Encoding.Binary::Unmarshal`

Decodes a value from the byte buffer.

## Types and aliases

### namespace Minilib.Encoding.Binary

#### ByteBuffer

Defined as: `type ByteBuffer = unbox struct { ...fields... }`

A type of byte buffer that supports encoding values to/decoding values from memory.

##### field `array`

Type: `Std::Array Std::U8`

internal byte array

##### field `byte_order`

Type: `Minilib.Encoding.Binary::ByteOrder`

byte order

##### field `position`

Type: `Std::I64`

read/write position

#### ByteOrder

Defined as: `type ByteOrder = unbox union { ...variants... }`

A union type of byte order (endianness).
For example, `0x12345678_U32` is encoded as `[0x78_U8, 0x56_U8, 0x34_U8, 0x12_U8]` in little endian,
`[0x12_U8, 0x34_U8, 0x56_U8, 0x78_U8]` in big endian.

##### variant `little_endian`

Type: `()`

##### variant `big_endian`

Type: `()`

## Traits and aliases

### namespace Minilib.Encoding.Binary

#### trait `a : Marshal`

Trait for a type that supports marshalling (encoding) a value to a byte buffer.
For details, see https://en.wikipedia.org/wiki/Marshalling_(computer_science).

##### method `marshal`

Type: `a -> Minilib.Encoding.Binary::ByteBuffer -> Minilib.Encoding.Binary::ByteBuffer`

Encodes a value to the byte buffer.

#### trait `a : Unmarshal`

Trait for a type that supports unmarshalling (decoding) a value from a byte buffer.
For details, see https://en.wikipedia.org/wiki/Marshalling_(computer_science).

##### method `unmarshal`

Type: `Minilib.Encoding.Binary::ByteBuffer -> Std::Result Std::String (a, Minilib.Encoding.Binary::ByteBuffer)`

Decodes a value from the byte buffer.

## Trait implementations

### impl `Std::U16 : Minilib.Encoding.Binary::Marshal`

### impl `Std::U16 : Minilib.Encoding.Binary::Unmarshal`

### impl `Std::U32 : Minilib.Encoding.Binary::Marshal`

### impl `Std::U32 : Minilib.Encoding.Binary::Unmarshal`

### impl `Std::U64 : Minilib.Encoding.Binary::Marshal`

### impl `Std::U64 : Minilib.Encoding.Binary::Unmarshal`

### impl `Std::U8 : Minilib.Encoding.Binary::Marshal`

### impl `Std::U8 : Minilib.Encoding.Binary::Unmarshal`