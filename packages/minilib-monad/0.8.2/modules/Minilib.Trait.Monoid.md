# Minilib.Trait.Monoid

Defined in minilib-monad@0.8.2

Monoid trait and its several implementations (Array, Iterator, String etc).

Monoid is a semigroup with an identity.

For details, see [Wikipedia: Monoid](https://en.wikipedia.org/wiki/Monoid).

## Values

### namespace Minilib.Trait.Monoid

#### mconcat

Type: `[a : Minilib.Trait.Monoid::Monoid] Std::Iterator::DynIterator a -> a`

Concats an iterator of monoids to a monoid.

### namespace Minilib.Trait.Monoid::MEmpty

#### mempty

Type: `[a : Minilib.Trait.Monoid::MEmpty] a`

Trait member of `Minilib.Trait.Monoid::MEmpty`

An identity of a monoid, such as an empty instance.

## Types and aliases

## Traits and aliases

### namespace Minilib.Trait.Monoid

#### trait `a : MEmpty`

A trait that represents an identity of a monoid.

##### method `mempty`

Type: `a`

An identity of a monoid, such as an empty instance.

#### trait `Monoid = Minilib.Trait.Semigroup::Semigroup + Minilib.Trait.Monoid::MEmpty`

Kind: `*`

A trait that represents a monoid.

## Trait implementations

### impl `() : Minilib.Trait.Monoid::MEmpty`

### impl `Std::Array a : Minilib.Trait.Monoid::MEmpty`

### impl `Std::Iterator::DynIterator a : Minilib.Trait.Monoid::MEmpty`

### impl `[a : Minilib.Trait.Semigroup::Semigroup] Std::Option a : Minilib.Trait.Monoid::MEmpty`

### impl `Std::String : Minilib.Trait.Monoid::MEmpty`