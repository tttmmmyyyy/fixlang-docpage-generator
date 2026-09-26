# GMP.Z

Defined in gmp-fix@0.3.0

## Values

### namespace GMP.Z

#### c_SiZE_OF_MPZ

Type: `Std::FFI::CInt`

Size of `__mpz_struct`.

### namespace GMP.Z::MPZ

#### abs

Type: `GMP.Z::MPZ -> GMP.Z::MPZ`

Calculates the absolute value of a `MPZ` value.

#### from_I64

Type: `Std::I64 -> GMP.Z::MPZ`

Creats a `MPZ` value represented by an I64 value.

#### from_U64

Type: `Std::U64 -> GMP.Z::MPZ`

Creates a `MPZ` value represented by an U64 value.

#### from_decimal

Type: `Std::String -> Std::Option GMP.Z::MPZ`

Creates a `MPZ` value represented by a decimal string.

If the string is not a valid representation of an integer in the given base, this function returns none.

#### from_string

Type: `Std::String -> Std::I64 -> Std::Option GMP.Z::MPZ`

Creates a `MPZ` value represented by a string in the given base.

If the string is not a valid representation of an integer in the given base, this function returns none.
See document of `mpz_set_str` in GMP for details.

#### mul_2exp

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Multiplication by a power of 2.

#### set_I64

Type: `Std::I64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Sets the value of a MPZ to the given I64 value.

#### set_U64

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Sets the value of a MPZ to the given U64 value.

#### set_string

Type: `Std::String -> Std::I64 -> GMP.Z::MPZ -> Std::Option GMP.Z::MPZ`

Sets the value of a MPZ to the given string in the given base.

If the string is not a valid representation of an integer in the given base, this function returns none.
See document of `mpz_set_str` in GMP for details.

#### to_F64

Type: `GMP.Z::MPZ -> Std::F64`

Converts a `MPZ` value to an F64 value.

For details, see the document of `mpz_get_d` in GMP.

#### to_F64_2exp

Type: `GMP.Z::MPZ -> (Std::F64, Std::I64)`

Converts a `MPZ` value to the pair (F64 value, exponent).

For details, see the document of `mpz_get_d_2exp` in GMP.

#### to_I64

Type: `GMP.Z::MPZ -> Std::Option Std::I64`

Converts a `MPZ` value to an I64 value.

If the value is too large to fit in an I64, this function returns none.

#### to_U64

Type: `GMP.Z::MPZ -> Std::Option Std::U64`

Converts a `MPZ` value to an U64 value.

If the value is too large to fit in an U64, this function returns none.

#### zero

Type: `GMP.Z::MPZ`

The zero value.

## Types and aliases

### namespace GMP.Z

#### MPZ

Defined as: `type MPZ = unbox struct { ...fields... }`

Integer type with arbitrary precision.

#### MPZHandle

Defined as: `type MPZHandle = Std::Ptr`

A pointer to struct `__mpz_struct`.

## Traits and aliases

## Trait implementations

### impl `GMP.Z::MPZ : Hash::Hash`

### impl `GMP.Z::MPZ : Std::Add`

### impl `GMP.Z::MPZ : Std::Eq`

### impl `GMP.Z::MPZ : Std::Mul`

### impl `GMP.Z::MPZ : Std::Neg`

### impl `GMP.Z::MPZ : Std::Sub`

### impl `GMP.Z::MPZ : Std::ToString`