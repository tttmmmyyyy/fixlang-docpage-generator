# GMP.Q

Defined in gmp-fix@0.3.5

## Values

### namespace GMP.Q

#### c_SiZE_OF_MPQ

Type: `Std::FFI::CInt`

Size of `__mpq_struct`.

### namespace GMP.Q::MPQ

#### from_I64

Type: `Std::I64 -> Std::I64 -> GMP.Q::MPQ`

Creates a new `MPQ` value from I64 numerator and denominator.

##### Parameters

- `num`: The numerator as an `I64` value.
- `den`: The denominator as an `I64` value.

#### from_MPZ

Type: `GMP.Z::MPZ -> GMP.Q::MPQ`

Creates a `MPQ` value represented by an MPZ value.

#### from_U64

Type: `Std::U64 -> Std::U64 -> GMP.Q::MPQ`

Creates a new `MPQ` value from an `U64` value.

##### Parameters

- `num`: The numerator as an `U64` value.
- `den`: The denominator as an `U64` value.

#### get_den

Type: `GMP.Q::MPQ -> GMP.Z::MPZ`

#### get_num

Type: `GMP.Q::MPQ -> GMP.Z::MPZ`

#### one

Type: `GMP.Q::MPQ`

The one value.

#### to_F64

Type: `GMP.Q::MPQ -> Std::F64`

Converts a `MPZ` value to an F64 value.

For details, see the document of `mpz_get_d` in GMP.

#### zero

Type: `GMP.Q::MPQ`

The zero value.

## Types and aliases

### namespace GMP.Q

#### MPQ

Defined as: `type MPQ = unbox struct { ...fields... }`

Rational number type, represented by a pair of `MPZ` values (numerator and denominator).

#### MPQHandle

Defined as: `type MPQHandle = Std::Ptr`

A pointer to struct `__mpz_struct`.

## Traits and aliases

## Trait implementations

### impl `GMP.Q::MPQ : Std::Add`

### impl `GMP.Q::MPQ : Std::Div`

### impl `GMP.Q::MPQ : Std::Eq`

### impl `GMP.Q::MPQ : Std::Mul`

### impl `GMP.Q::MPQ : Std::Neg`

### impl `GMP.Q::MPQ : Std::Sub`