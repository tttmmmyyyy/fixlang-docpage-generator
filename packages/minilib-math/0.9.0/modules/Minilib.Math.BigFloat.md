# Minilib.Math.BigFloat

Defined in minilib-math@0.9.0

Arbitrary-precision floating point number.

A BigFloat is composed from a mantissa and the exponent of base 2.

Each BigFloat has a precision. It is same as the precision of the mantissa,
and determined by the length of the underlying array (= BigNat).

The precision of a BigNat can be changed with `set_prec()`.

For unary operator such as `-a`, the precision of the result is the same as the precision of the operand.

For binary operator such as `a + b`, `a - b`, `a * b`, `a / b`, the precision of the result is the maximum precision of the two operands.

## Values

### namespace Minilib.Math.BigFloat

#### abs

Type: `Minilib.Math.BigFloat::BigFloat -> Minilib.Math.BigFloat::BigFloat`

Returns the absolute value of `a`.

#### epsilon

Type: `Minilib.Math.BigFloat::BigFloat -> Minilib.Math.BigFloat::BigFloat`

Gets a BigInt that represents the smallest change in the mantissa of this BigInt.

#### f64

Type: `Minilib.Math.BigFloat::BigFloat -> Std::F64`

Converts BigFloat to F64. If BigFloat is out of range of F64, unexpected result is returned.

#### from_F64

Type: `Std::F64 -> Minilib.Math.BigFloat::BigFloat`

Converts F64 to BigFloat.

#### from_string_precision

Type: `Std::String -> Std::I64 -> Std::Result Std::ErrMsg Minilib.Math.BigFloat::BigFloat`

Converts a string to BigFloat with the precision specified in base 10.

#### get_prec

Type: `Minilib.Math.BigFloat::BigFloat -> Std::I64`

Gets the precision of a BigFloat in base 2. It is multiple of 32.

#### get_prec10

Type: `Minilib.Math.BigFloat::BigFloat -> Std::I64`

Gets the precision of a BigFloat in base 10.
It calls `get_prec()` and converts the precision from base 2.

#### is_negative

Type: `Minilib.Math.BigFloat::BigFloat -> Std::Bool`

Returns true iff the BigFloat is negative.

#### is_positive

Type: `Minilib.Math.BigFloat::BigFloat -> Std::Bool`

Returns true iff the BigFloat is positive.

#### is_zero

Type: `Minilib.Math.BigFloat::BigFloat -> Std::Bool`

Returns true iff the BigFloat is zero.

#### make

Type: `Minilib.Math.BigInt::BigInt -> Std::I64 -> Minilib.Math.BigFloat::BigFloat`

Creates a BigFloat from a BigInt and the exponent of base 2.

#### mul_pow2

Type: `Std::I64 -> Minilib.Math.BigFloat::BigFloat -> Minilib.Math.BigFloat::BigFloat`

Calculates `a * 2^e`.

#### pow_by_U64

Type: `Std::U64 -> Minilib.Math.BigFloat::BigFloat -> Minilib.Math.BigFloat::BigFloat`

Calculates `a^n`.

#### set_prec

Type: `Std::I64 -> Minilib.Math.BigFloat::BigFloat -> Minilib.Math.BigFloat::BigFloat`

Set the precision of a BigFloat in base2.
The precision is round-up to multiple of 32, except if `prec == 0` then the precision is set to 32.

#### set_prec10

Type: `Std::I64 -> Minilib.Math.BigFloat::BigFloat -> Minilib.Math.BigFloat::BigFloat`

Sets the precision of a BigFloat in base 10.
It calls `set_prec()` after converting the precision to base 2.

#### sqrt

Type: `Minilib.Math.BigFloat::BigFloat -> Minilib.Math.BigFloat::BigFloat`

Returns the square root of `a`.

#### to_string_exp

Type: `Minilib.Math.BigFloat::BigFloat -> Std::String`

Convert a BigFloat to a string of exponential form.

#### to_string_exp_precision

Type: `Std::I64 -> Minilib.Math.BigFloat::BigFloat -> Std::String`

Convert a BigFloat to a string of exponential form with specified precision (i.e., number of digits after the decimal point).

#### to_string_precision

Type: `Std::I64 -> Minilib.Math.BigFloat::BigFloat -> Std::String`

Convert a BigFloat to a string with specified precision (i.e., number of digits after the decimal point).

## Types and aliases

### namespace Minilib.Math.BigFloat

#### BigFloat

Defined as: `type BigFloat = unbox struct { ...fields... }`

Arbitrary-precision floating point number.
It is interpreted as `mantissa * 2 ^ exponent`.

##### field `int`

Type: `Minilib.Math.BigInt::BigInt`

##### field `exp`

Type: `Std::I64`

NOTE: @int.@nat might have trailing zeros.

## Traits and aliases

## Trait implementations

### impl `Minilib.Math.BigFloat::BigFloat : Std::Add`

### impl `Minilib.Math.BigFloat::BigFloat : Std::Div`

### impl `Minilib.Math.BigFloat::BigFloat : Std::Eq`

### impl `Minilib.Math.BigFloat::BigFloat : Std::FromString`

Converts a string to BigFloat with the precision estimated from the string.

### impl `Minilib.Math.BigFloat::BigFloat : Std::LessThan`

### impl `Minilib.Math.BigFloat::BigFloat : Std::LessThanOrEq`

### impl `Minilib.Math.BigFloat::BigFloat : Std::Mul`

### impl `Minilib.Math.BigFloat::BigFloat : Std::Neg`

### impl `Minilib.Math.BigFloat::BigFloat : Std::One`

### impl `Minilib.Math.BigFloat::BigFloat : Std::Sub`

### impl `Minilib.Math.BigFloat::BigFloat : Std::ToString`

### impl `Minilib.Math.BigFloat::BigFloat : Std::Zero`