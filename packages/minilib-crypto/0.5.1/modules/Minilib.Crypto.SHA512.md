# Minilib.Crypto.SHA512

Defined in minilib-crypto@0.5.1

SHA-512 secure hash function.

Implemented from specification of FIPS PUB 180-4:
https://csrc.nist.gov/files/pubs/fips/180-4/final/docs/fips180-4.pdf

NOTE: FIPS 180-4 (2012) is superseded by FIPS 180-4 (2015), with the only change being
made in the Applicability Clause. There are no changes to the technical specifications.
FIPS 180-4 (2015):
http://dx.doi.org/10.6028/NIST.FIPS.180-4

## Values

### namespace Minilib.Crypto.SHA512

#### digest

Type: `Std::Array Std::U8 -> Std::Array Std::U8`

`SHA512::digest(bytes)` computes SHA-512 secure hash function of `bytes`.

#### empty

Type: `Minilib.Crypto.SHA512::SHA512`

An empty SHA-512 hasher.

#### finalize

Type: `Minilib.Crypto.SHA512::SHA512 -> Std::Array Std::U8`

`sha512.finalize` retrieves a final SHA-512 hash value.

#### update

Type: `Std::Array Std::U8 -> Minilib.Crypto.SHA512::SHA512 -> Minilib.Crypto.SHA512::SHA512`

`sha512.update(bytes)` processes `bytes`, and updates its internal state.

### namespace Minilib.Crypto.SHA512::SHA384

#### digest

Type: `Std::Array Std::U8 -> Std::Array Std::U8`

`SHA384::digest(bytes)` computes SHA-384 secure hash function of `bytes`.

## Types and aliases

### namespace Minilib.Crypto.SHA512

#### SHA512

Defined as: `type SHA512 = unbox struct { ...fields... }`

SHA-512 hasher.
Usually it is sufficient to simply call `SHA512:digest(bytes)` without using this structure.

##### field `hash`

Type: `Std::Array Std::U64`

##### field `msglen`

Type: `Std::U64`

##### field `msgbuf`

Type: `Std::Array Std::U8`

## Traits and aliases

## Trait implementations