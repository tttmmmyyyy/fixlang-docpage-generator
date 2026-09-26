# GMP.Q

Defined in gmp-fix@0.9.0

Provides multiple-precision rational number type `MPQ` and related functions.

Repository: https://github.com/tttmmmyyyy/fixlang-gmp

## Values

### namespace GMP.Q

#### c_SiZE_OF_MPQ

Type: `Std::FFI::CSizeT`

Size of `__mpq_struct`.

### namespace GMP.Q::MPQ

#### abs

Type: `GMP.Q::MPQ -> GMP.Q::MPQ`

Returns the absolute value of the `MPQ` value.

##### Parameters

- `num`: The `MPQ` value to be converted to its absolute value

#### cmp

Type: `GMP.Q::MPQ -> GMP.Q::MPQ -> Std::I64`

Compares two `MPQ` values.

##### Returns

- a negative if `lhs` is less than `rhs`,
- zero if they are equal,
- a positive if `lhs` is greater than `rhs`.

##### Parameters

- `lhs`: The left-hand side `MPQ` value.
- `rhs`: The right-hand side `MPQ` value.

#### cmp_z

Type: `GMP.Q::MPQ -> GMP.Z::MPZ -> Std::I64`

Compares an `MPQ` value with an `MPZ` value.

##### Returns

- a negative if `lhs` is less than `rhs`,
- zero if they are equal,
- a positive if `lhs` is greater than `rhs`.

##### Parameters

- `lhs`: The left-hand side `MPQ` value.
- `rhs`: The right-hand side `MPZ` value.

#### div_2exp

Type: `Std::U64 -> GMP.Q::MPQ -> GMP.Q::MPQ`

Divides the `MPQ` value by `2^exp`.

##### Parameters

- `exp`: The exponent of 2.
- `num`: The `MPQ` value to be divided.

#### equal

Type: `GMP.Q::MPQ -> GMP.Q::MPQ -> Std::Bool`

Checks if two `MPQ` values are equal.

##### Parameters

- `lhs`: The left-hand side `MPQ` value.
- `rhs`: The right-hand side `MPQ` value.

#### get_d

Type: `GMP.Q::MPQ -> Std::F64`

Converts a `MPZ` value to an F64 value.

For details, see the document of `mpz_get_d` in GMP.

##### Parameters

- `num`: The `MPQ` value to be converted to F64.

#### get_den

Type: `GMP.Q::MPQ -> GMP.Z::MPZ`

Gets the denominator of the `MPQ` value.

##### Parameters

- `num`: The `MPQ` value from which to get the denominator.

#### get_num

Type: `GMP.Q::MPQ -> GMP.Z::MPZ`

Gets the numerator of the `MPQ` value.

##### Parameters

- `num`: The `MPQ` value from which to get the numerator.

#### get_str

Type: `Std::I64 -> GMP.Q::MPQ -> Std::String`

Get the string representation of a `MPQ` value in the given base.

#### init_set_d

Type: `Std::F64 -> GMP.Q::MPQ`

Creates a new `MPQ` value from a floating-point number.

##### Parameters

- `f`: The floating-point number to be converted to `MPQ`.

#### init_set_si

Type: `Std::I64 -> Std::U64 -> GMP.Q::MPQ`

Creates a new `MPQ` value from I64 numerator and denominator.

##### Parameters

- `num`: The numerator as an `I64` value.
- `den`: The denominator as an `U64` value.

#### init_set_str

Type: `Std::String -> Std::I64 -> Std::Option GMP.Q::MPQ`

Creates new `MPQ` value from a string representation.

##### Parameters

- `str`: The string representation of the rational number.
- `base`: The base of the string representation.

#### init_set_ui

Type: `Std::U64 -> Std::U64 -> GMP.Q::MPQ`

Creates a new `MPQ` value from an `U64` value.

##### Parameters

- `num`: The numerator as an `U64` value.
- `den`: The denominator as an `U64` value.

#### init_set_z

Type: `GMP.Z::MPZ -> GMP.Q::MPQ`

Creates a `MPQ` value by an MPZ value.

##### Parameters

- `val`: The `MPZ` value to be converted to `MPQ

#### inv

Type: `GMP.Q::MPQ -> GMP.Q::MPQ`

Returns the multiplicative inverse of the `MPQ` value.

##### Parameters

- `num`: The `MPQ` value to be inverted.

#### mpq

Type: `Std::I64 -> Std::I64 -> GMP.Q::MPQ`

Creates a new `MPQ` value from I64 numerator and denominator.

##### Parameters

- `num`: The numerator as an `I64` value.
- `den`: The denominator as an `I64` value.

#### mul_2exp

Type: `Std::U64 -> GMP.Q::MPQ -> GMP.Q::MPQ`

Multiplies the `MPQ` value by `2^exp`.

##### Parameters

- `exp`: The exponent of 2.
- `num`: The `MPQ` value to be multiplied.

#### set_d

Type: `Std::F64 -> GMP.Q::MPQ -> GMP.Q::MPQ`

Sets the `MPQ` value to a floating-point number.

##### Parameters

- `f`: The floating-point number to set.
- `q`: The `MPQ` value to be set.

#### set_si

Type: `Std::I64 -> Std::U64 -> GMP.Q::MPQ -> GMP.Q::MPQ`

Sets the `MPQ` value to a rational number represented by an `I64` numerator and an `U64` denominator.

##### Parameters

- `num`: The numerator as an `I64` value.
- `den`: The denominator as an `U64` value.
- `q`: The `MPQ` value to be set.

#### set_str

Type: `Std::String -> Std::I64 -> GMP.Q::MPQ -> Std::Option GMP.Q::MPQ`

Sets the `MPQ` value from a string representation.

##### Parameters

- `str`: The string representation of the rational number.
- `base`: The base of the string representation.
- `q`: The `MPQ` value to be set.

#### set_ui

Type: `Std::U64 -> Std::U64 -> GMP.Q::MPQ -> GMP.Q::MPQ`

Sets the `MPQ` value to a rational number represented by an `U64` numerator and an `U64` denominator.

##### Parameters

- `num`: The numerator as an `U64` value.
- `den`: The denominator as an `U64` value.
- `q`: The `MPQ` value to be set.

#### set_z

Type: `GMP.Z::MPZ -> GMP.Q::MPQ -> GMP.Q::MPQ`

Sets the `MPQ` value to an `MPZ` value.

##### Parameters

- `z`: The `MPZ` value to be set.
- `q`: The `MPQ` value to be set.

#### sgn

Type: `GMP.Q::MPQ -> Std::I64`

Returns the sign of a `MPQ` value.

##### Returns

- `-1` if `n < 0`
- `0` if `n == 0`
- `1` if `n > 0`

## Types and aliases

### namespace GMP.Q

#### MPQ

Defined as: `type MPQ = unbox struct { ...fields... }`

Rational number type, represented by a pair of `MPZ` values (numerator and denominator).

#### MPQHandle

Defined as: `type MPQHandle = Std::Ptr`

A pointer to struct `__mpq_struct`.

## Traits and aliases

## Trait implementations

### impl `GMP.Q::MPQ : Hash::Hash`

### impl `GMP.Q::MPQ : Std::Add`

### impl `GMP.Q::MPQ : Std::Div`

### impl `GMP.Q::MPQ : Std::Eq`

### impl `GMP.Q::MPQ : Std::FromString`

### impl `GMP.Q::MPQ : Std::LessThan`

### impl `GMP.Q::MPQ : Std::LessThanOrEq`

### impl `GMP.Q::MPQ : Std::Mul`

### impl `GMP.Q::MPQ : Std::Neg`

### impl `GMP.Q::MPQ : Std::One`

### impl `GMP.Q::MPQ : Std::Sub`

### impl `GMP.Q::MPQ : Std::ToString`

### impl `GMP.Q::MPQ : Std::Zero`