# Minilib.Trait.Semigroup

Defined in minilib-monad@0.7.2

Semigroup trait and its several implementations (Array, Iterator, String etc).

Semigroup has an associative binary operation, namely `sappend`.
It may or may not have an identity.

For details, see [Wikipedia: Semigroup](https://en.wikipedia.org/wiki/Semigroup).

## Values

### namespace Minilib.Trait.Semigroup::Semigroup

#### sappend

Type: `[a : Minilib.Trait.Semigroup::Semigroup] a -> a -> a`

Trait member of `Minilib.Trait.Semigroup::Semigroup`

`a.sappend(b)` appends `b` after `a`.

## Types and aliases

## Traits and aliases

### namespace Minilib.Trait.Semigroup

#### trait `a : Semigroup`

A trait that represents a semigroup.

##### method `sappend`

Type: `a -> a -> a`

`a.sappend(b)` appends `b` after `a`.

## Trait implementations

### impl `() : Minilib.Trait.Semigroup::Semigroup`

`()` does not change with `sappend`.

### impl `Std::Array a : Minilib.Trait.Semigroup::Semigroup`

For arrays, `sappend` appends two arrays.

### impl `Std::Iterator::DynIterator a : Minilib.Trait.Semigroup::Semigroup`

For iterators, `sappend` appends two iterators.

### impl `[a : Minilib.Trait.Semigroup::Semigroup] Std::Option a : Minilib.Trait.Semigroup::Semigroup`

For options, `sappand` appends two values if both is some.

### impl `Std::String : Minilib.Trait.Semigroup::Semigroup`

For strings, `sappend` concats two strings.