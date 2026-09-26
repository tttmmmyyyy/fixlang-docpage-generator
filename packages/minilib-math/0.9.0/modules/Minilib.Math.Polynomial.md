# Minilib.Math.Polynomial

Defined in minilib-math@0.9.0

Polynomial of one variable, for example `x^2 + 2x + 1`. The coefficients can be any ring.

## Values

### namespace Minilib.Math.Polynomial

#### at_degree

Type: `[a : Minilib.Math.Types::Ring] Std::I64 -> a -> Minilib.Math.Polynomial::Polynomial a`

`a.at_degree(n)` creates a polynomial `a * x ^ n`.

#### generate

Type: `Std::I64 -> Std::I64 -> Std::Iterator::DynIterator (Minilib.Math.Polynomial::Polynomial (Minilib.Math.Modular::Modular Std::I64))`

`generate(p,m)` generates polynomials of degree `m` or lower in GF(p).

#### generate_primitive_polynomials

Type: `Std::I64 -> Std::I64 -> Std::Iterator::DynIterator (Minilib.Math.Polynomial::Polynomial (Minilib.Math.Modular::Modular Std::I64))`

`generate_primitive_polynomials(p, m)` generates primitive polynomials of degree `m` in GF(p).

#### get

Type: `[a : Minilib.Math.Types::Ring] Std::I64 -> Minilib.Math.Polynomial::Polynomial a -> a`

`f.get(i)` returns the coefficient of degree `i`.

#### get_degree

Type: `Minilib.Math.Polynomial::Polynomial a -> Std::I64`

`f.get_degree` returns the degree of a polynomial `f`.

#### is_primitive

Type: `Minilib.Math.Polynomial::Polynomial (Minilib.Math.Modular::Modular Std::I64) -> Std::Bool`

Checks whether it is a primitive polynomial.

#### make

Type: `[a : Minilib.Math.Types::Ring] Std::Array a -> Minilib.Math.Polynomial::Polynomial a`

`Polynomial::make(coeff)` creates a polynomial from coefficients.
For example, `Polynomial::make([1,2,3])` makes a polynomial `3x^2 + 2x + 1`.
For polynomials with degree greater than zero, the coefficient array is
truncated so that the coefficient of highest degree is not zero.

#### polynomial

Type: `[a : Minilib.Math.Types::Ring] Std::Array a -> Minilib.Math.Polynomial::Polynomial a`

Synonym for `Polynomial::make`.

#### set

Type: `[a : Minilib.Math.Types::Ring] Std::I64 -> a -> Minilib.Math.Polynomial::Polynomial a -> Minilib.Math.Polynomial::Polynomial a`

`f.set(i, a)` sets the coefficient of degree `i`.

#### subst

Type: `[a : Minilib.Math.Types::Ring] a -> Minilib.Math.Polynomial::Polynomial a -> a`

`f.subst(x)` substitutes the indeterminate of a polynomial with `x`.

#### subst0

Type: `[a : Minilib.Math.Types::Ring] a -> (c -> a -> a) -> Minilib.Math.Polynomial::Polynomial c -> a`

`f.subst0(x, mul_coeff)` substitutes the indeterminate of a polynomial with `x`.
`mul_coeff` is a function that multiplies a value of type `a` by a coefficient of type `c`.

## Types and aliases

### namespace Minilib.Math.Polynomial

#### Polynomial

Defined as: `type Polynomial a = unbox struct { ...fields... }`

A structure that represents a polynomial over a ring.
The coefficient array is ascending order of degree.
For example, `[1,2,3]` means a polynomial `3x^2 + 2x + 1`.

##### field `coeff`

Type: `Std::Array a`

## Traits and aliases

## Trait implementations

### impl `Minilib.Math.Polynomial::Polynomial : Std::Functor`

### impl `[a : Minilib.Math.Types::Field] Minilib.Math.Polynomial::Polynomial a : Minilib.Math.Types::DivMod`

`divmod(num, den)` calculates a quotient `quo = num / den`
and a reminder `rem = num % den`.
Returns `(quo, rem)`.
The type of coefficients must be a field.
If the division of the field does not fulfill the requirement
(ie. `forall a b, a == a / b * b`),
this function may return an incorrect result.

### impl `[a : Minilib.Math.Types::Ring] Minilib.Math.Polynomial::Polynomial a : Minilib.Math.Types::MulScalar`

### impl `[a : Minilib.Math.Types::Ring] Minilib.Math.Polynomial::Polynomial a : Std::Add`

### impl `[a : Minilib.Math.Types::Field] Minilib.Math.Polynomial::Polynomial a : Std::Div`

### impl `[a : Minilib.Math.Types::Ring] Minilib.Math.Polynomial::Polynomial a : Std::Eq`

### impl `[a : Minilib.Math.Types::Ring] Minilib.Math.Polynomial::Polynomial a : Std::Mul`

### impl `[a : Minilib.Math.Types::Ring] Minilib.Math.Polynomial::Polynomial a : Std::Neg`

### impl `[a : Minilib.Math.Types::Ring] Minilib.Math.Polynomial::Polynomial a : Std::One`

### impl `[a : Minilib.Math.Types::Field] Minilib.Math.Polynomial::Polynomial a : Std::Rem`

### impl `[a : Minilib.Math.Types::Ring] Minilib.Math.Polynomial::Polynomial a : Std::Sub`

### impl `[a : Minilib.Math.Types::Ring, a : Std::ToString] Minilib.Math.Polynomial::Polynomial a : Std::ToString`

### impl `[a : Minilib.Math.Types::Ring] Minilib.Math.Polynomial::Polynomial a : Std::Zero`