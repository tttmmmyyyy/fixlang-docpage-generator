# Random

Defined in random@1.1.1

Mersenne Twister, ported to Fix Language by https://github.com/pt9999.

## Values

### namespace Random

#### generate_F64

Type: `Random::Random -> (Random::Random, Std::F64)`

Generates a random number on [0, 1]-real-interval.

#### generate_F64_2

Type: `Random::Random -> (Random::Random, Std::F64)`

Generates a random number on [0, 1)-real-interval.

#### generate_F64_3

Type: `Random::Random -> (Random::Random, Std::F64)`

Generates a random number on (0, 1)-real-interval.

#### generate_I64_nonneg

Type: `Random::Random -> (Random::Random, Std::I64)`

Generates a random number on [0, 2^63-1]-interval.

#### generate_U64

Type: `Random::Random -> (Random::Random, Std::U64)`

Generates a random number on [0, 2^64-1]-interval.

#### init_by_array

Type: `Std::Array Std::U64 -> Random::Random`

Initializes `Random` with an array.

#### init_by_seed

Type: `Std::U64 -> Random::Random`

Initializes `Random` with a seed.

## Types and aliases

### namespace Random

#### Random

Defined as: `type Random = unbox struct { ...fields... }`

Random number generator.

##### field `mt`

Type: `Std::Array Std::U64`

##### field `mti`

Type: `Std::I64`

## Traits and aliases

## Trait implementations