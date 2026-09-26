# Minilib.Crypto.SecureRandom

Defined in minilib-random@0.6.3

Secure random number generator.

Currently only Linux is supported, because it uses `/dev/urandom` as a secure random source.

## Values

### namespace Minilib.Crypto.SecureRandom

#### generate_U64

Type: `Minilib.Crypto.SecureRandom::SecureRandom -> Std::IO::IOFail (Minilib.Crypto.SecureRandom::SecureRandom, Std::U64)`

Generates a random integer of U64.

#### generate_bytes

Type: `Std::I64 -> Minilib.Crypto.SecureRandom::SecureRandom -> Std::IO::IOFail (Minilib.Crypto.SecureRandom::SecureRandom, Std::Array Std::U8)`

Generates a random byte array with specified size.

#### make

Type: `Std::IO::IOFail Minilib.Crypto.SecureRandom::SecureRandom`

Creates a SecureRandom instance.

## Types and aliases

### namespace Minilib.Crypto.SecureRandom

#### SecureRandom

Defined as: `type SecureRandom = unbox struct { ...fields... }`

##### field `data`

Type: `Std::FFI::Destructor Std::IO::IOHandle`

## Traits and aliases

## Trait implementations

### impl `Minilib.Crypto.SecureRandom::SecureRandom : Minilib.Trait.Rng::Rng`