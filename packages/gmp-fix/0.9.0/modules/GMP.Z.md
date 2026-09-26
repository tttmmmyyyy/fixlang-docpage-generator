# GMP.Z

Defined in gmp-fix@0.9.0

Provides multiple-precision integer type `MPZ` and related functions.

Repository: https://github.com/tttmmmyyyy/fixlang-gmp

## Values

### namespace GMP.Z

#### c_SiZE_OF_MPZ

Type: `Std::FFI::CSizeT`

Size of `__mpz_struct`.

### namespace GMP.Z::MPZ

#### abs

Type: `GMP.Z::MPZ -> GMP.Z::MPZ`

Calculates the absolute value of a `MPZ` value.

##### Parameters

- `num`: The `MPZ` value to calculate the absolute value of.

#### addmul

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Calculates `x + a * b`.

##### Parameters

- `a`
- `b`
- `x`

#### and

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Logical and operation on two `MPZ` values.

##### Parameters

- `lhs`: The left-hand side value.
- `rhs`: The right-hand side value.

#### bin_ui

Type: `GMP.Z::MPZ -> Std::U64 -> GMP.Z::MPZ`

Calculates the binomial coefficient `n choose k`.

##### Parameters

- `n`: The total number of items.
- `k`: The number of items to choose.

#### cdiv_q

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Divides `n` by `d` and returns the quotient.

"c" means "ceiling", i.e., the quotient is rounded towards positive infinity.

##### Parameters

- `d`: The divisor.
- `n`: The dividend.

#### cdiv_q_2exp

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Divides `n` by `2^b` and returns the quotient.

"c" means "ceiling", i.e., the quotient is rounded towards positive infinity.

##### Parameters

- `bit`: The exponent of 2.
- `n`: The dividend.

#### cdiv_qr

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> (GMP.Z::MPZ, GMP.Z::MPZ)`

Divides `n` by `d` and returns the quotient and remainder.

"c" means "ceiling", i.e., the quotient is rounded towards positive infinity.

##### Parameters

- `d`: The divisor.
- `n`: The dividend.

#### cdiv_r

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Divides `n` by `d` and returns the remainder.

"c" means "ceiling", i.e., the quotient is rounded towards positive infinity.

##### Parameters

- `d`: The divisor.
- `n`: The dividend.

#### cdiv_r_2exp

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Divides `n` by `2^b` and returns the remainder.

"c" means "ceiling", i.e., the quotient is rounded towards positive infinity.

##### Parameters

- `bit`: The exponent of 2.
- `n`: The dividend.

#### clrbit

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Sets the specified bit in a `MPZ` value to `0`.

##### Parameters

- `bit`: The bit to clear.
- `n`: The `MPZ` value to modify.

#### cmp

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> Std::I64`

Compares two `MPZ` values.

##### Returns

- a negative if `lhs < rhs`
- zero if `lhs == rhs`
- a positive if `lhs > rhs`

##### Parameters

- `lhs`: The left-hand side value.
- `rhs`: The right-hand side value.

#### cmp_d

Type: `GMP.Z::MPZ -> Std::F64 -> Std::I64`

Compares a `MPZ` value and an `F64` value.

##### Returns

- a negative if `lhs < rhs`
- zero if `lhs == rhs`
- a positive if `lhs > rhs`

##### Parameters

- `lhs`: The left-hand side value.
- `rhs`: The right-hand side value.

#### cmpabs

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> Std::I64`

Compares absolute values of two `MPZ` values.

##### Returns

- a negative if `|lhs| < |rhs|`
- zero if `|lhs| == |rhs|`
- a positive if `|lhs| > |rhs|`

##### Parameters

- `lhs`: The left-hand side value.
- `rhs`: The right-hand side value.

#### cmpabs_d

Type: `GMP.Z::MPZ -> Std::F64 -> Std::I64`

Compares absolute values of a `MPZ` value and an `F64` value.

##### Returns

- a negative if `|lhs| < |rhs|`
- zero if `|lhs| == |rhs|`
- a positive if `|lhs| > |rhs|`

##### Parameters

- `lhs`: The left-hand side value.
- `rhs`: The right-hand side value.

#### com

Type: `GMP.Z::MPZ -> GMP.Z::MPZ`

Bitwise complement operation on a `MPZ` value.

##### Parameters

- `n`: The `MPZ` value to complement.

#### combit

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Toggles the specified bit in a `MPZ` value.

##### Parameters

- `bit`: The bit to toggle.
- `n`: The `MPZ` value to modify.

#### congruent_2exp_p

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ -> Std::Bool`

Checks if two values `a`, `b` are congruent modulo `2^b`.

##### Parameters

- `bit`: The exponent of 2.
- `a`: The first value.
- `b`: The second value.

#### congruent_p

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ -> Std::Bool`

Checks if two values `a`, `b` are congruent modulo `m`.

##### Parameters

- `m`: The modulus.
- `a`: The first value.
- `b`: The second value.

#### divexact

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Divides `n` by `d` and returns the quotient.

This function assumes that `n` is divisible by `d`.

##### Parameters

- `d`: The divisor.
- `n`: The dividend.

#### divisible_2exp_p

Type: `Std::U64 -> GMP.Z::MPZ -> Std::Bool`

Checks if `n` is divisible by `2^b`.

##### Parameters

- `bit`: The exponent of 2.
- `n`: The dividend.

#### divisible_p

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> Std::Bool`

Checks if `n` is divisible by `d`.

##### Parameters

- `d`: The divisor.
- `n`: The dividend.

#### fac2_ui

Type: `Std::U64 -> GMP.Z::MPZ`

Calculates the double factorial of a non-negative integer `n`.

##### Parameters

- `n`: The non-negative integer to calculate the double factorial of.

#### fac_ui

Type: `Std::U64 -> GMP.Z::MPZ`

Calculates the factorial of a non-negative integer `n`.

##### Parameters

- `n`: The non-negative integer to calculate the factorial of.

#### facm_uiui

Type: `Std::U64 -> Std::U64 -> GMP.Z::MPZ`

Calculates the factorial of `n!^(m)`

##### Parameters

- `m`
- `n`: The non-negative integer to calculate the factorial of.

#### fdiv_q

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Divides `n` by `d` and returns the quotient.

"f" means "floored", i.e., the quotient is rounded towards negative infinity.

##### Parameters

- `d`: The divisor.
- `n`: The dividend.

#### fdiv_q_2exp

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Divides `n` by `2^b` and returns the quotient.

"f" means "floored", i.e., the quotient is rounded towards negative infinity.

##### Parameters

- `bit`: The exponent of 2.
- `n`: The dividend.

#### fdiv_qr

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> (GMP.Z::MPZ, GMP.Z::MPZ)`

Divides `n` by `d` and returns the quotient and remainder.

"f" means "floored", i.e., the quotient is rounded towards negative infinity.

##### Parameters

- `d`: The divisor.
- `n`: The dividend.

#### fdiv_r

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Divides `n` by `d` and returns the remainder.

"f" means "floored", i.e., the quotient is rounded towards negative infinity.

##### Parameters

- `d`: The divisor.
- `n`: The dividend.

#### fdiv_r_2exp

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Divides `n` by `2^b` and returns the remainder.

"f" means "floored", i.e., the quotient is rounded towards negative infinity.

##### Parameters

- `bit`: The exponent of 2.
- `n`: The dividend.

#### fib2_ui

Type: `Std::U64 -> (GMP.Z::MPZ, GMP.Z::MPZ)`

Calculates the Fibonacci number at position `n` and returns both the Fibonacci number and the previous one.

##### Parameters

- `n`: The position in the Fibonacci sequence.

#### fib_ui

Type: `Std::U64 -> GMP.Z::MPZ`

Calculates the Fibonacci number at position `n`.

##### Parameters

- `n`: The position in the Fibonacci sequence.

#### gcd

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Calculates the greatest common divisor of two `MPZ` values.

##### Parameters

- `n`
- `m`

#### gcdext

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> (GMP.Z::MPZ, GMP.Z::MPZ, GMP.Z::MPZ)`

Calculates the greatest common divisor `gcd` of two `MPZ` values and also returns coefficients `s` and `t` such that `gcd = n * s + m * t`.

##### Returns

A tuple `(gcd, s, t)`

##### Parameters

- `n`: The first value.
- `m`: The second value.

#### get_d

Type: `GMP.Z::MPZ -> Std::F64`

Converts a `MPZ` value to an F64 value.

For details, see the document of `mpz_get_d` in GMP.

#### get_d_exp

Type: `GMP.Z::MPZ -> (Std::F64, Std::I64)`

Converts a `MPZ` value to the pair (F64 value, exponent).

For details, see the document of `mpz_get_d_2exp` in GMP.

#### get_si

Type: `GMP.Z::MPZ -> Std::Option Std::I64`

Converts a `MPZ` value to an I64 value.

If the value is too large to fit in an I64, this function returns none.

#### get_str

Type: `Std::I64 -> GMP.Z::MPZ -> Std::String`

Get the string representation of a `MPZ` value in the given base.

##### Parameters

- `base`: The base of the string representation, which must be in the range [-36, -2] or [2, 62].
- `num`: The `MPZ` value to convert.

#### get_ui

Type: `GMP.Z::MPZ -> Std::Option Std::U64`

Converts a `MPZ` value to an U64 value.

If the value is too large to fit in an U64, this function returns none.

#### hamdist

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> Std::U64`

Calculates the Hamming distance between two `MPZ` values.

For the behavior when `lhs` or `rhs` is negative, see the document of `mpz_hamdist` in GMP.

##### Parameters

- `lhs`: The left-hand-side value.
- `rhs`: The right-hand-side value.

#### init_set_d

Type: `Std::F64 -> GMP.Z::MPZ`

Creates a `MPZ` value represented by a F64 value.

##### Parameters

- `val`: The F64 value to represent.

#### init_set_si

Type: `Std::I64 -> GMP.Z::MPZ`

Creates a `MPZ` value represented by an I64 value.

##### Parameters

- `val`: The I64 value to represent.

#### init_set_str

Type: `Std::String -> Std::I64 -> Std::Option GMP.Z::MPZ`

Creates a `MPZ` value represented by a string in the given base.

If the string is not a valid representation of an integer in the given base, this function returns none.
See document of `mpz_set_str` in GMP for details.

##### Parameters

- `str`: The string representation of the integer.
- `base`: The base of the string representation.

#### init_set_ui

Type: `Std::U64 -> GMP.Z::MPZ`

Creates a `MPZ` value represented by an U64 value.

##### Parameters

- `val`: The U64 value to represent.

#### invert

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> Std::Option GMP.Z::MPZ`

Calculates the modular inverse of `n` modulo `m`.

##### Parameters

- `m`: The modulus.
- `n`: The value to invert.

#### jacobi

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> Std::I64`

Calculates the Jacobi symbol (a/b) for two `MPZ` values.

##### Parameters

- `a`
- `b`

#### lcm

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Calculates the least common multiple of two `MPZ` values.

##### Parameters

- `n`: The first value.
- `m`: The second value.

#### legendre

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> Std::I64`

Calculates the Legendre symbol (a/p) for an `MPZ` value `a` and a prime `p`.

##### Parameters

- `a`: The value to calculate the Legendre symbol for.
- `p`: The prime number.

#### lucnum2_ui

Type: `Std::U64 -> (GMP.Z::MPZ, GMP.Z::MPZ)`

Calculates the Lucas number at position `n` and returns both the Lucas number and the previous one.

##### Parameters

- `n`: The position in the Lucas sequence.

#### lucnum_ui

Type: `Std::U64 -> GMP.Z::MPZ`

Calculates the Lucas number at position `n`.

##### Parameters

- `n`: The position in the Lucas sequence.

#### mod

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Calculates the remainder of `n` divided by `d`.

##### Parameters

- `d`: The divisor.
- `n`: The dividend.

#### mpz

Type: `Std::I64 -> GMP.Z::MPZ`

Create a `MPZ` value from an `I64`.

##### Parameters

- `n`: The `I64` value to convert.

#### mul_2exp

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Multiplies the `MPZ` value by `2^exp`.

##### Parameters

- `exp`: The exponent of 2.
- `num`: The `MPZ` value to multiply.

#### nextprime

Type: `GMP.Z::MPZ -> GMP.Z::MPZ`

Calculates (probabilistically) the next prime number greater than `x`.

##### Parameters

- `x`: The value to find the next prime of.

#### or

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Logical or operation on two `MPZ` values.

##### Parameters

- `lhs`: The left-hand-side value.
- `rhs`: The right-hand-side value.

#### perfect_power_p

Type: `GMP.Z::MPZ -> Std::Bool`

Checks if `x` is a perfect power, i.e., `x = a^b` for some integers `a` and `b >= 2`.

#### perfect_square_p

Type: `GMP.Z::MPZ -> Std::Bool`

Checks if `x` is a perfect square, i.e., `x = a^2` for some integer `a`.

#### popcount

Type: `GMP.Z::MPZ -> Std::U64`

Counts the number of bits set to `1` in a `MPZ` value.

For the behavior when `n` is negative, see the document of `mpz_popcount` in GMP.

##### Parameters

- `n`: The `MPZ` value to count bits in.

#### pow_ui

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Calculates `b^e`.

##### Parameters

- `e`: The exponent.
- `b`: The base.

#### powm

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Calculates `b^e mod m`.

##### Parameters

- `e`: The exponent.
- `m`: The modulus.
- `b`: The base.

#### powm_sec

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Calculates `b^e mod m`.

This is a secure version of `powm`. For details, see the document of `mpz_powm_sec` in GMP.

##### Parameters

- `e`: The exponent.
- `m`: The modulus.
- `b`: The base.

#### primorial_ui

Type: `Std::U64 -> GMP.Z::MPZ`

Calculates the primorial of a non-negative integer `n`, which is the product of all prime numbers less than or equal to `n`.

##### Parameters

- `n`

#### probab_prime_p

Type: `Std::I64 -> GMP.Z::MPZ -> Std::I64`

Checks if `x` is a prime number.

##### Returns

2 if `x` is definitely prime, 1 if it is probably prime, and 0 if it is definitely composite.

##### Parameters

- `k`: The number of iterations to perform for the probabilistic test.
- `x`: The value to check.

#### remove

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> (GMP.Z::MPZ, Std::U64)`

Removes the factor `f` from `n`.

##### Returns

A tuple `(m, count)` where `m` is the result and `count` is the number of times `f` was removed from `n`.

##### Parameters

- `f`: The factor to remove.
- `n`: The value to remove the factor from.

#### root

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Calculates the integer part of the n-th root of `x`.

##### Parameters

- `n`: The root to calculate.
- `x`: The value to calculate the root of.

#### root_rem

Type: `Std::U64 -> GMP.Z::MPZ -> (GMP.Z::MPZ, GMP.Z::MPZ)`

Calculates the n-th root of `x` and the remainder.

##### Returns

A pair (root, remainder) such that `x = root^n + remainder`.

##### Parameters

- `n`: The root to calculate.
- `x`: The value to calculate the root of.

#### scan0

Type: `Std::U64 -> GMP.Z::MPZ -> Std::U64`

Scans `0` bit in a `MPZ` value starting from the specified bit.

##### Parameters

- `bit`: The bit to start scanning from.
- `n`: The `MPZ` value to scan.

#### scan1

Type: `Std::U64 -> GMP.Z::MPZ -> Std::U64`

Scans `1` bit in a `MPZ` value starting from the specified bit.

##### Parameters

- `bit`: The bit to start scanning from.
- `n`: The `MPZ` value to scan.

#### set_d

Type: `Std::F64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Sets the value of a MPZ to the integer part of a F64 value.

#### set_q

Type: `GMP.Q::MPQ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Sets the value of a MPZ to the integer part of a MPQ value.

##### Parameters

- `q`: The `MPQ` value to set.
- `x`: The `MPZ` value to set.

#### set_si

Type: `Std::I64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Sets the value of a MPZ to the given I64 value.

##### Parameters

- `val`: The I64 value to set.
- `x`: The `MPZ` value to set.

#### set_str

Type: `Std::String -> Std::I64 -> GMP.Z::MPZ -> Std::Option GMP.Z::MPZ`

Sets the value of a MPZ to the given string in the given base.

If the string is not a valid representation of an integer in the given base, this function returns none.
See document of `mpz_set_str` in GMP for details.

##### Parameters

- `str`: The string representation of the integer.
- `base`: The base of the string representation.
- `num`: The `MPZ` value to set.

#### set_ui

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Sets the value of a MPZ to the given U64 value.

##### Parameters

- `val`: The U64 value to set.
- `x`: The `MPZ` value to set.

#### setbit

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Sets the specified bit in a `MPZ` value to `1`.

##### Parameters

- `bit`: The bit to set.
- `n`: The `MPZ` value to modify.

#### sgn

Type: `GMP.Z::MPZ -> Std::I64`

Returns the sign of a `MPZ` value.

##### Returns

- `-1` if `n < 0`
- `0` if `n == 0`
- `1` if `n > 0`

#### sqrt

Type: `GMP.Z::MPZ -> GMP.Z::MPZ`

Calculates the integer part of the root of `x` and the remainder.

##### Parameters

- `x`: The value to calculate the root of.

#### sqrt_rem

Type: `GMP.Z::MPZ -> (GMP.Z::MPZ, GMP.Z::MPZ)`

Calculates the square root of `x` and the remainder.

##### Returns

A pair (root, remainder) such that `x = root^2 + remainder

##### Parameters

- `x`: The value to calculate the square root of.

#### submul

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Calculates `x - a * b`.

##### Parameters

- `a`
- `b`
- `x`

#### tdiv_q

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Divides `n` by `d` and returns the quotient.

"t" means "truncated", i.e., the quotient is rounded towards zero.

##### Parameters

- `d`: The divisor.
- `n`: The dividend.

#### tdiv_q_2exp

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Divides `n` by `2^b` and returns the quotient.

"t" means "truncated", i.e., the quotient is rounded towards zero.

##### Parameters

- `bit`: The exponent of 2.
- `n`: The dividend.

#### tdiv_qr

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> (GMP.Z::MPZ, GMP.Z::MPZ)`

Divides `n` by `d` and returns the quotient and remainder.

"t" means "truncated", i.e., the quotient is rounded towards zero.

##### Parameters

- `d`: The divisor.
- `n`: The dividend.

#### tdiv_r

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Divides `n` by `d` and returns the remainder.

"t" means "truncated", i.e., the quotient is rounded towards zero.

##### Parameters

- `d`: The divisor.
- `n`: The dividend.

#### tdiv_r_2exp

Type: `Std::U64 -> GMP.Z::MPZ -> GMP.Z::MPZ`

Divides `n` by `2^b` and returns the remainder.

"t" means "truncated", i.e., the quotient is rounded towards zero.

##### Parameters

- `bit`: The exponent of 2.
- `n`: The dividend.

#### tstbit

Type: `Std::U64 -> GMP.Z::MPZ -> Std::Bool`

Checks if the specified bit in a `MPZ` value is set to `1`.

##### Parameters

- `bit`: The bit to check.
- `n`: The `MPZ` value to check.

#### xor

Type: `GMP.Z::MPZ -> GMP.Z::MPZ -> GMP.Z::MPZ`

Logical xor operation on two `MPZ` values.

##### Parameters

- `lhs`: The left-hand-side value.
- `rhs`: The right-hand-side value.

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

### impl `GMP.Z::MPZ : Std::Div`

### impl `GMP.Z::MPZ : Std::Eq`

### impl `GMP.Z::MPZ : Std::FromString`

### impl `GMP.Z::MPZ : Std::LessThan`

### impl `GMP.Z::MPZ : Std::LessThanOrEq`

### impl `GMP.Z::MPZ : Std::Mul`

### impl `GMP.Z::MPZ : Std::Neg`

### impl `GMP.Z::MPZ : Std::One`

### impl `GMP.Z::MPZ : Std::Rem`

### impl `GMP.Z::MPZ : Std::Sub`

### impl `GMP.Z::MPZ : Std::ToString`

### impl `GMP.Z::MPZ : Std::Zero`