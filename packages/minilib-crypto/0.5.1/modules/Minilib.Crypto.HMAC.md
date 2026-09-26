# Minilib.Crypto.HMAC

Defined in minilib-crypto@0.5.1

The Keyed-Hash Message Authentication Code (HMAC)

Implemented from specification of FIPS 198-1:
https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.198-1.pdf
https://doi.org/10.6028/NIST.FIPS.198-1

## Values

### namespace Minilib.Crypto.HMAC::HMAC

#### digest

Type: `Std::Array Std::U8 -> Std::Array Std::U8 -> Minilib.Crypto.HMAC::HMAC -> Std::Array Std::U8`

`hmac.digest(key, text)` creates a message authentication code from `key` and `text`.

#### make

Type: `(Std::Array Std::U8 -> Std::Array Std::U8) -> Std::I64 -> Std::I64 -> Minilib.Crypto.HMAC::HMAC`

`HMAC::make(h,b,l)` creates an HMAC instance.
`h` is a secure hash function, such as MD5::digest or SHA1::digest.
`b` is the input block size of `h`.
`l` is the output block size of `h`.
`l` must be less than or equal to `b`.

## Types and aliases

### namespace Minilib.Crypto.HMAC

#### HMAC

Defined as: `type HMAC = unbox struct { ...fields... }`

A type that generates a message authentication code.

##### field `h`

Type: `Std::Array Std::U8 -> Std::Array Std::U8`

##### field `input_block_size`

Type: `Std::I64`

##### field `output_block_size`

Type: `Std::I64`

## Traits and aliases

## Trait implementations