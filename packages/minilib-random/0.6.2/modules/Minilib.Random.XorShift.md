# Minilib.Random.XorShift

Defined in minilib-random@0.6.2

A random number generator which uses Xorshift algorithm.

For details, see: [Wikipedia: Xorshift](https://en.wikipedia.org/wiki/Xorshift)

## Values

### namespace Minilib.Random.XorShift

#### init_by_seed

Type: `Std::U64 -> Minilib.Random.XorShift::XorShift`

Initializes a random number generator by a specified seed.

## Types and aliases

### namespace Minilib.Random.XorShift

#### XorShift

Defined as: `type XorShift = unbox struct { ...fields... }`

A random number generator which uses Xorshift algorithm.

##### field `data`

Type: `Std::U64`

## Traits and aliases

## Trait implementations

### impl `Minilib.Random.XorShift::XorShift : Minilib.Trait.Rng::Rng`