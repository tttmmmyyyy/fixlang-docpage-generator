# Minilib.Math.Types

Defined in minilib-math@0.9.0

Type definitions for mathematical concepts, for example AdditiveGroup, Ring, Field.

## Values

### namespace Minilib.Math.Types::DivMod

#### divmod

Type: `[a : Minilib.Math.Types::DivMod] a -> a -> (a, a)`

Trait member of `Minilib.Math.Types::DivMod`

`divmod(a, b)` returns `(a/b, a%b)`.

### namespace Minilib.Math.Types::MulScalar

#### mul_scalar

Type: `[a : Minilib.Math.Types::MulScalar] Minilib.Math.Types::MulScalar::ScalarType a -> a -> a`

Trait member of `Minilib.Math.Types::MulScalar`

## Types and aliases

## Traits and aliases

### namespace Minilib.Math.Types

#### trait `AdditiveGroup = Std::Eq + Std::Zero + Std::Neg + Std::Add + Std::Sub`

Kind: `*`

A trait that represents an [additive group](https://en.wikipedia.org/wiki/Additive_group),
which has addition(`add`), subtraction(`sub`), additive inverse(`neg`), additive unit(`zero`).

#### trait `a : DivMod`

A trait for division-with-remainder.

##### method `divmod`

Type: `a -> a -> (a, a)`

`divmod(a, b)` returns `(a/b, a%b)`.

#### trait `Euclid = Minilib.Math.Types::Ring + Std::Div + Std::Rem + Minilib.Math.Types::DivMod`

Kind: `*`

A trait that represents an [Euclidean domain](https://en.wikipedia.org/wiki/Euclidean_domain),
which is a ring with following division-with-remainder.
```
forall a b, a = (a / b) * b + (a % b)
```

#### trait `Field = Minilib.Math.Types::Ring + Std::Div`

Kind: `*`

A trait that represents a [field](https://en.wikipedia.org/wiki/Field_(mathematics)),
which is a ring with division(`div`).

The division must meet following condition.
```
forall a b, a = a * b / b
```

#### trait `a : MulScalar`

A trait that represents scalar multiplication.

##### type `ScalarType`

Defined as: `ScalarType a`

##### method `mul_scalar`

Type: `Minilib.Math.Types::MulScalar::ScalarType a -> a -> a`

#### trait `Ordered = Std::Eq + Std::LessThan + Std::LessThanOrEq`

Kind: `*`

[Total order](https://en.wikipedia.org/wiki/Total_order)

#### trait `OrderedField = Minilib.Math.Types::Field + Std::LessThan + Std::LessThanOrEq`

Kind: `*`

[Ordered field](https://en.wikipedia.org/wiki/Ordered_field)

#### trait `Ring = Minilib.Math.Types::AdditiveGroup + Std::One + Std::Mul`

Kind: `*`

A trait that represents a [ring](https://en.wikipedia.org/wiki/Ring_(mathematics)),
which has addition(`add`), subtraction(`sub`), additive inverse(`neg`), additive unit(`zero`),
multiplication(`mul`), multiplicative unit(`one`).

## Trait implementations

### impl `Std::I64 : Minilib.Math.Types::DivMod`

### impl `Std::U64 : Minilib.Math.Types::DivMod`