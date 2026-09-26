# Minilib.Crypto.MD5

Defined in minilib-crypto@0.5.1

MD5 secure hash function.

Implemented from specification of RFC 1321:
https://www.rfc-editor.org/rfc/rfc1321.txt

## Values

### namespace Minilib.Crypto.MD5

#### digest

Type: `Std::Array Std::U8 -> Std::Array Std::U8`

`MD5::digest(bytes)` computes MD5 secure hash function of `bytes`.

#### empty

Type: `Minilib.Crypto.MD5::MD5`

An empty MD5 hasher.

#### finalize

Type: `Minilib.Crypto.MD5::MD5 -> Std::Array Std::U8`

`md5.finalize` retrieves a final MD5 hash value.

#### update

Type: `Std::Array Std::U8 -> Minilib.Crypto.MD5::MD5 -> Minilib.Crypto.MD5::MD5`

`md5.update(bytes)` processes `bytes`, and updates its internal state.

## Types and aliases

### namespace Minilib.Crypto.MD5

#### MD5

Defined as: `type MD5 = unbox struct { ...fields... }`

MD5 hasher.
Usually it is sufficient to simply call `MD5:digest(bytes)` without using this structure.

##### field `hash`

Type: `Std::Array Std::U32`

##### field `msglen`

Type: `Std::U64`

##### field `msgbuf`

Type: `Std::Array Std::U8`

## Traits and aliases

## Trait implementations