# Minilib.Math.BigInt

Defined in minilib-math@0.9.0

Arbitrary-precision integer.

## Values

### namespace Minilib.Math.BigInt

#### abs

Type: `Minilib.Math.BigInt::BigInt -> Minilib.Math.BigInt::BigInt`

`a.abs` returns the absolute value of `a`.

#### bit_length

Type: `Minilib.Math.BigInt::BigInt -> Std::U64`

Returns the bit length of `a.@nat`, ie. one plus the bit position of most significant `1`.
Returns 0 if `a` is zero.

#### cmp

Type: `Minilib.Math.BigInt::BigInt -> Minilib.Math.BigInt::BigInt -> Std::I64`

`BigInt::cmp(a,b)` returns 1 if `a > b`, -1 if `a < b`, 0 if `a == b`.

#### divmod_by_two

Type: `Minilib.Math.BigInt::BigInt -> (Minilib.Math.BigInt::BigInt, Minilib.Math.BigInt::BigInt)`

`BigInt::divmod_by_two(a)` returns `(a/2, a%2)`.

#### from_I64

Type: `Std::I64 -> Minilib.Math.BigInt::BigInt`

`BigInt::from_I64(i64val)` creates new BigInt object from `i64val`.

#### from_U64

Type: `Std::U64 -> Minilib.Math.BigInt::BigInt`

`BigInt::from_U64(u64val)` creates new BigInt object from `u64val`.

#### generate_bigint

Type: `[m : Minilib.Monad.Random::MonadRandom] Std::I64 -> m Minilib.Math.BigInt::BigInt`

`generate_bigint(bit_length)` generates a random BigInt of the specified bit length.

#### generate_bigint_range

Type: `[m : Minilib.Monad.Random::MonadRandom] Minilib.Math.BigInt::BigInt -> Minilib.Math.BigInt::BigInt -> m Minilib.Math.BigInt::BigInt`

`generate_bigint_range(begin, end)` generates a random BigInt `r` such that `begin <= r && r < end`.

#### i64

Type: `Minilib.Math.BigInt::BigInt -> Std::I64`

Converts BigInt to I64. If overflow, it produces unexpected result.

#### is_even

Type: `Minilib.Math.BigInt::BigInt -> Std::Bool`

`a.is_even` returns true iff `a` is an even number.

#### is_negative

Type: `Minilib.Math.BigInt::BigInt -> Std::Bool`

`a.is_negative` returns true iff `a` is a negative number.

#### is_odd

Type: `Minilib.Math.BigInt::BigInt -> Std::Bool`

`a.is_odd` returns true iff `a` is an odd number.

#### is_positive

Type: `Minilib.Math.BigInt::BigInt -> Std::Bool`

`a.is_positive` returns true iff `a` is a positive number.

#### is_zero

Type: `Minilib.Math.BigInt::BigInt -> Std::Bool`

`a.is_zero` returns true iff `a` is zero.

#### make

Type: `Std::I64 -> Std::Array Std::U32 -> Minilib.Math.BigInt::BigInt`

`BigInt::make(sign, nat)` creates new BigInt object.

#### repeat_by_BigInt

Type: `(a -> a -> a) -> a -> a -> Minilib.Math.BigInt::BigInt -> a`

`repeat_by_BigInt(op, x, a, n)` calculates `x.op(a).op(a)...` for `n` times.
`op` is an associative binary operation.

#### shift_left

Type: `Std::U64 -> Minilib.Math.BigInt::BigInt -> Minilib.Math.BigInt::BigInt`

Shifts `@nat` to left. NOTE `@sign` does not affect at all.

#### shift_right

Type: `Std::U64 -> Minilib.Math.BigInt::BigInt -> Minilib.Math.BigInt::BigInt`

Shifts `@nat` to right. NOTE `@sign` does not affect at all.

#### two

Type: `Minilib.Math.BigInt::BigInt`

BigInt constant representing 2.

## Types and aliases

### namespace Minilib.Math.BigInt

#### BigInt

Defined as: `type BigInt = unbox struct { ...fields... }`

Arbitrary-precision integer.

##### field `sign`

Type: `Std::I64`

##### field `nat`

Type: `Std::Array Std::U32`

## Traits and aliases

## Trait implementations

### impl `Minilib.Math.BigInt::BigInt : Minilib.Math.Types::DivMod`

`divmod(a,b)` returns `(a/b, a%b)`.
NOTE: -8 / 3 == -2 and -8 % 3 == -2, as with the Fix language.

### impl `Minilib.Math.BigInt::BigInt : Std::Add`

### impl `Minilib.Math.BigInt::BigInt : Std::Div`

NOTE: -8 / 3 == -2, as with the Fix language.

### impl `Minilib.Math.BigInt::BigInt : Std::Eq`

Checks two BigInts are equal.

### impl `Minilib.Math.BigInt::BigInt : Std::FromBytes`

### impl `Minilib.Math.BigInt::BigInt : Std::FromString`

Converts BigInt from a decimal string.

### impl `Minilib.Math.BigInt::BigInt : Std::LessThan`

Compares two BigInts.

### impl `Minilib.Math.BigInt::BigInt : Std::LessThanOrEq`

Compares two BigInts.

### impl `Minilib.Math.BigInt::BigInt : Std::Mul`

### impl `Minilib.Math.BigInt::BigInt : Std::Neg`

### impl `Minilib.Math.BigInt::BigInt : Std::One`

### impl `Minilib.Math.BigInt::BigInt : Std::Rem`

NOTE: -8 % 3 == -2, as with the Fix language.

### impl `Minilib.Math.BigInt::BigInt : Std::Sub`

### impl `Minilib.Math.BigInt::BigInt : Std::ToBytes`

NOTE: Unneeded zeros might be placed at the beginning

### impl `Minilib.Math.BigInt::BigInt : Std::ToString`

Converts BigInt to a decimal string.

### impl `Minilib.Math.BigInt::BigInt : Std::Zero`