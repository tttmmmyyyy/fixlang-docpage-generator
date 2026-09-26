# Minilib.Math.Rational

Defined in minilib-math@0.9.0

Rational number arithmetic, for example `1/2 + 1/3 = 5/6`.

## Values

### namespace Minilib.Math.Rational::Rational

#### make

Type: `[a : Minilib.Math.Types::Euclid] a -> a -> Minilib.Math.Rational::Rational a`

`make(num, den)` creates a rational number `(num/den)`.
Aborts if `den` is zero.

#### rational

Type: `[a : Minilib.Math.Types::Euclid] a -> a -> Minilib.Math.Rational::Rational a`

Synonym for `make`.

#### reduce

Type: `[a : Minilib.Math.Types::Euclid] Minilib.Math.Rational::Rational a -> Minilib.Math.Rational::Rational a`

Reduces a rational number.

## Types and aliases

### namespace Minilib.Math.Rational

#### Rational

Defined as: `type Rational a = unbox struct { ...fields... }`

Rational number

##### field `num`

Type: `a`

##### field `den`

Type: `a`

## Traits and aliases

## Trait implementations

### impl `[a : Minilib.Math.Types::Euclid] Minilib.Math.Rational::Rational a : Std::Add`

### impl `[a : Minilib.Math.Types::Euclid] Minilib.Math.Rational::Rational a : Std::Div`

### impl `[a : Minilib.Math.Types::Euclid] Minilib.Math.Rational::Rational a : Std::Eq`

### impl `[a : Minilib.Math.Types::Euclid] Minilib.Math.Rational::Rational a : Std::Mul`

### impl `[a : Minilib.Math.Types::Euclid] Minilib.Math.Rational::Rational a : Std::Neg`

### impl `[a : Minilib.Math.Types::Euclid, a : Std::One] Minilib.Math.Rational::Rational a : Std::One`

### impl `[a : Minilib.Math.Types::Euclid] Minilib.Math.Rational::Rational a : Std::Sub`

### impl `[a : Minilib.Math.Types::Euclid, a : Std::ToString] Minilib.Math.Rational::Rational a : Std::ToString`

### impl `[a : Minilib.Math.Types::Euclid, a : Std::One] Minilib.Math.Rational::Rational a : Std::Zero`