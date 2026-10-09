# Math

Defined in math@2.0.1

A math library.

This module requires `libm` installed.

## Values

### namespace Math

#### acos

Type: `Std::F64 -> Std::F64`

Calculates arc cosine of the argument.

This is wrapper of C's acos.

##### Parameters

* `x` - The cosine of the angle, in [-1, 1].

#### asin

Type: `Std::F64 -> Std::F64`

Calculates arc sine of the argument.

This is wrapper of C's asin.

##### Parameters

* `x` - The sine of the angle, in [-1, 1].

#### atan

Type: `Std::F64 -> Std::F64`

Calculates arc tangent of the argument.

This is wrapper of C's atan.

##### Parameters

* `x` - The tangent of the angle.

#### atan2

Type: `Std::F64 -> Std::F64 -> Std::F64`

`atan2(y, x)` calculates an angle t such that (cos(t), sin(t)) is parallel to (x, y).

This is wrapper of C's atan2.

##### Parameters

* `y` - The y-coordinate of the point.
* `x` - The x-coordinate of the point.

#### binomial_coefficients

Type: `Std::I64 -> Std::Array (Std::Array Std::I64)`

Calculates table (2-dimensional array) of binomial coefficients.

Deprecated: this function will be moved to another project in the future.

`binomial_coefficients(m)` evaluates to an array of arrays `table` where `table.@(n).@(r)` is the binomial coefficient "binom(n, r)" for 0 <= n <= m and 0 <= r <= n.
Here `m` has to be less than or equal to 66 to avoid overflow.

##### Parameters

* `m` - The largest `n` of the table, in [0, 66].

#### ceil

Type: `Std::F64 -> Std::F64`

Calculates the smallest integral value not less than the argument.

This is wrapper of C's ceil.

##### Parameters

* `x` - The number to round up.

#### cos

Type: `Std::F64 -> Std::F64`

Calculates the cosine of the argument.

This is wrapper of C's cos.

##### Parameters

* `x` - The angle, in radians.

#### cosh

Type: `Std::F64 -> Std::F64`

Calculates the hyperbolic cosine of the argument.

This is wrapper of C's cosh.

##### Parameters

* `x` - The argument of the hyperbolic cosine.

#### e32

Type: `Std::F32`

Napier's constant as F32

#### e64

Type: `Std::F64`

Napier's constant as F64

#### exp

Type: `Std::F64 -> Std::F64`

Calculates the natural exponential of the argument.

This is wrapper of C's exp.

##### Parameters

* `x` - The exponent.

#### floor

Type: `Std::F64 -> Std::F64`

Calculates the largest integral value not greater than the argument.

This is wrapper of C's floor.

##### Parameters

* `x` - The number to round down.

#### fmod

Type: `Std::F64 -> Std::F64 -> Std::F64`

Calculates the floating point remainder of division.

`x.fmod(y)` evaluates to the remainder of dividing x by y.

This is wrapper of C's fmod.

##### Parameters

* `y` - The divisor.
* `x` - The dividend.

#### frexp

Type: `Std::F64 -> (Std::F64, Std::I32)`

Splits a floating point number to normalized fraction and an exponent.

This is wrapper of C's frexp.

##### Parameters

* `x` - The number to split.

#### gcd

Type: `Std::I64 -> Std::I64 -> Std::I64`

Calculates greatest common divisor of two integers.
Deprecated: this function will be moved to another project in the future.

NOTE: currently, this function does not support I64::minimum.

##### Parameters

* `n` - One of the integers.
* `m` - The other integer.

#### ldexp

Type: `Std::I32 -> Std::F64 -> Std::F64`

Multiplies a floating point number by power of two.

This is wrapper of C's ldexp.

##### Parameters

* `e` - The exponent of two.
* `x` - The number to multiply.

#### log

Type: `Std::F64 -> Std::F64`

Calculates natural logarithm.

This is wrapper of C's log.

##### Parameters

* `x` - The number to take the logarithm of.

#### log10

Type: `Std::F64 -> Std::F64`

Calculates base-10 logarithm.

This is wrapper of C's log10.

##### Parameters

* `x` - The number to take the logarithm of.

#### modf

Type: `Std::F64 -> (Std::F64, Std::F64)`

Converts a floating pointer number into the pair of fractional part and integral part.

This is wrapper of C's modf.

##### Parameters

* `x` - The number to split.

#### pi32

Type: `Std::F32`

pi as F32

#### pi64

Type: `Std::F64`

pi as F64

#### pow

Type: `Std::F64 -> Std::F64 -> Std::F64`

Power function.

`x.pow(y)` evaluates to x^y.

This is wrapper of C's pow.

##### Parameters

* `y` - The exponent.
* `x` - The base.

#### round

Type: `Std::F64 -> Std::F64`

Calculates the nearest integral value to the argument.

##### Parameters

* `x` - The number to round.

#### sin

Type: `Std::F64 -> Std::F64`

Calculates the sine of the argument.

This is wrapper of C's sin.

##### Parameters

* `x` - The angle, in radians.

#### sinh

Type: `Std::F64 -> Std::F64`

Calculates the hyperbolic sine of the argument.

This is wrapper of C's sinh.

##### Parameters

* `x` - The argument of the hyperbolic sine.

#### sqrt

Type: `Std::F64 -> Std::F64`

Calculates square root of the argument.

This is wrapper of C's sqrt.

##### Parameters

* `x` - The number to take the square root of.

#### tan

Type: `Std::F64 -> Std::F64`

Calculates the tangent of the argument.

This is wrapper of C's tan.

##### Parameters

* `x` - The angle, in radians.

#### tanh

Type: `Std::F64 -> Std::F64`

Calculates the hyperbolic tangent of the argument.

This is wrapper of C's tanh.

##### Parameters

* `x` - The argument of the hyperbolic tangent.

## Types and aliases

## Traits and aliases

## Trait implementations