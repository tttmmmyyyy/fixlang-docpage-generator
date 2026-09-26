# Minilib.Crypto.AES.GCM

Defined in minilib-crypto@0.5.1

Galois/Counter Mode (GCM) for AES

Implemented from specification of NIST Special Publication 800-38D:
Recommendation for Block Cipher Modes of Operation: Galois/Counter Mode (GCM) and GMAC
https://doi.org/10.6028/NIST.SP.800-38D

## Values

### namespace Minilib.Crypto.AES.GCM::Block

#### get_block_be

Type: `Std::I64 -> Std::Array Std::U8 -> Minilib.Crypto.AES.GCM::Block`

`buf.get_block_be(i)` reads a 128 bit block in big endian at position `i` in array `buf`.

#### make

Type: `Std::U64 -> Std::U64 -> Minilib.Crypto.AES.GCM::Block`

`Block::make(hi, lo)` creates a 128 bit block.

#### set_block_be

Type: `Std::I64 -> Minilib.Crypto.AES.GCM::Block -> Std::Array Std::U8 -> Std::Array Std::U8`

`buf.set_block_be(i, block)` writes a 128 bit block in big endian at position `i` in array `buf`.

### namespace Minilib.Crypto.AES.GCM::GCM

#### gcm_ad

Type: `(Minilib.Crypto.AES.GCM::Block -> Minilib.Crypto.AES.GCM::Block) -> Std::Array Std::U8 -> Std::Array Std::U8 -> Std::Array Std::U8 -> Std::Array Std::U8 -> Std::I64 -> Std::Result Std::ErrMsg (Std::Array Std::U8)`

Performs authenticated decryption.
Input:
- cipher: 128-bit block cipher
- iv: initialization vector, typically 96 bits
- ciphertext: a byte sequence which will be decrypted
- auth_data: a byte sequence which will not be encrypted
- tag: authentication tag
Output: ok(plaintext) or err(ErrMsg)
- ok(plaintext): decrypted byte sequence
- err(ErrMsg): inauthenticity

#### gcm_ae

Type: `(Minilib.Crypto.AES.GCM::Block -> Minilib.Crypto.AES.GCM::Block) -> Std::Array Std::U8 -> Std::Array Std::U8 -> Std::Array Std::U8 -> Std::I64 -> (Std::Array Std::U8, Std::Array Std::U8)`

Performs authenticated encryption.
Input:
- cipher: 128-bit block cipher
- iv: initialization vector, typically 96 bits
- plaintext: a byte sequence which will be encrypted
- auth_data: a byte sequence which will not be encrypted
- len_t: tag length in bits
Output: (c, t)
- c: ciphertext
- t: authentication tag

## Types and aliases

### namespace Minilib.Crypto.AES.GCM

#### Block

Defined as: `type Block = unbox struct { ...fields... }`

A block is a bit string of 128 bits.
We use two U64 as a representation.
When converted to a bit string, it is encoded in big-endian.
If a byte sequence is encoded to a bit string, MSB of the first byte becomes the leftmost bit.

##### field `hi`

Type: `Std::U64`

##### field `lo`

Type: `Std::U64`

## Traits and aliases

## Trait implementations

### impl `Minilib.Crypto.AES.GCM::Block : Minilib.Text.Hex::ToStringHex`

### impl `Minilib.Crypto.AES.GCM::Block : Std::Eq`

### impl `Minilib.Crypto.AES.GCM::Block : Std::FromBytes`

### impl `Minilib.Crypto.AES.GCM::Block : Std::ToBytes`

### impl `Minilib.Crypto.AES.GCM::Block : Std::ToString`