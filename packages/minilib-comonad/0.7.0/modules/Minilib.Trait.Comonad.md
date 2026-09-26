# Minilib.Trait.Comonad

Defined in minilib-comonad@0.7.0

Comonad trait and associated functions.

For details, see web sites below.
- [Comonads in Haskell](https://www.slideshare.net/davidoverton/comonad)
- [Haskell: Control.Comonad](https://hackage.haskell.org/package/comonad-5.0.8/docs/Control-Comonad.html)

## Values

### namespace Minilib.Trait.Comonad::Comonad

#### duplicate

Type: `[w : Minilib.Trait.Comonad::Comonad] w a -> w (w a)`

Duplicates a comonad.

#### extend

Type: `[w : Minilib.Trait.Comonad::Comonad] (w b -> a) -> w b -> w a`

Trait member of `Minilib.Trait.Comonad::Comonad`

Extends a comonad with a function.

#### extendF

Type: `[w : Minilib.Trait.Comonad::Comonad] w b -> (w b -> a) -> w a`

Flipped version of `extend`.

#### extract

Type: `[w : Minilib.Trait.Comonad::Comonad] w a -> a`

Trait member of `Minilib.Trait.Comonad::Comonad`

Extracts a value from a comonad.

## Types and aliases

## Traits and aliases

### namespace Minilib.Trait.Comonad

#### trait `[w : *->*] w : Comonad`

##### method `extract`

Type: `w a -> a`

Extracts a value from a comonad.

##### method `extend`

Type: `(w b -> a) -> w b -> w a`

Extends a comonad with a function.

## Trait implementations