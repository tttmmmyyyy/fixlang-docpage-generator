# Minilib.Crypto.AES

Defined in minilib-crypto@0.5.1

Advanced Encryption Standard (AES)

Implemented from specification of FIPS 197:
https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197-upd1.pdf
https://doi.org/10.6028/NIST.FIPS.197-upd1

## Values

### namespace Minilib.Crypto.AES::AES

#### decrypt_block

Type: `Std::Array Std::U8 -> Minilib.Crypto.AES::AES -> Std::Array Std::U8`

`aes.decrypt_block(ciphertext)` decrypts a block of ciphertext to a block of plaintext.
`ciphertext` must be a byte array of 128 bits (= 16 bytes).

#### encrypt_block

Type: `Std::Array Std::U8 -> Minilib.Crypto.AES::AES -> Std::Array Std::U8`

`aes.encrypt_block(plaintext)` encrypts a block of plaintext to a block of ciphertext.
`plaintext` must be a byte array of 128 bits (= 16 bytes).

#### make

Type: `Std::Array Std::U8 -> Minilib.Crypto.AES::AES`

`AES::make(key)` creates an AES cipher.
`key` must be a byte array of 128 bits (= 16 bytes), 192 bits (= 24 bytes), or
256 bits (= 32 bytes).

## Types and aliases

### namespace Minilib.Crypto.AES

#### AES

Defined as: `type AES = unbox struct { ...fields... }`

##### field `key_length`

Type: `Std::I64`

##### field `key`

Type: `Std::Array Std::U8`

##### field `w`

Type: `Std::Array Std::U32`

##### field `c01`

Type: `Std::U64`

##### field `c23`

Type: `Std::U64`

## Traits and aliases

## Trait implementations