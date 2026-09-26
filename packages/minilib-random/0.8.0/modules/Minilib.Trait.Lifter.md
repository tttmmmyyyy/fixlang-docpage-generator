# Minilib.Trait.Lifter

Defined in minilib-random@0.8.0

A trait which converts a value of a type to a value of another type.

## Values

### namespace Minilib.Trait.Lifter::Lifter

#### lift_from

Type: `[lf : Minilib.Trait.Lifter::Lifter] Minilib.Trait.Lifter::Lifter::LiftFrom lf -> lf -> Minilib.Trait.Lifter::Lifter::LiftTo lf`

Trait member of `Minilib.Trait.Lifter::Lifter`

Converts a value of type `LiftFrom lf` to a value of type `LiftTo lf`.
NOTE: The second argument `lf` is ignored. It is required to select the implementation of `Lifter` trait.

#### lifter

Type: `[lf : Minilib.Trait.Lifter::Lifter] lf`

Trait member of `Minilib.Trait.Lifter::Lifter`

A singleton instance of the lifter.
NOTE: This instance is required to select the implementation of `Lifter` trait.

## Types and aliases

### namespace Minilib.Trait.Lifter

#### LifterImpl

Defined as: `type LifterImpl from to = unbox struct { ...fields... }`

An empty structure for `Lifter` implementation.

## Traits and aliases

### namespace Minilib.Trait.Lifter

#### trait `lf : Lifter`

A trait which converts a value of a type to a value of another type.

##### type `LiftTo`

Defined as: `LiftTo lf`

A type that the `lifter` converts to.

##### type `LiftFrom`

Defined as: `LiftFrom lf`

A type that the `lifter` converts from.

##### method `lifter`

Type: `lf`

A singleton instance of the lifter.
NOTE: This instance is required to select the implementation of `Lifter` trait.

##### method `lift_from`

Type: `Minilib.Trait.Lifter::Lifter::LiftFrom lf -> lf -> Minilib.Trait.Lifter::Lifter::LiftTo lf`

Converts a value of type `LiftFrom lf` to a value of type `LiftTo lf`.
NOTE: The second argument `lf` is ignored. It is required to select the implementation of `Lifter` trait.

## Trait implementations

### impl `[m : Minilib.Monad.IO::MonadIO] Minilib.Trait.Lifter::LifterImpl (Std::IO a) (m a) : Minilib.Trait.Lifter::Lifter`

A lifter implementation which lifts `IO` monad to a monad of `MonadIO`.

### impl `[m : Minilib.Monad.IO::MonadIOFail] Minilib.Trait.Lifter::LifterImpl (Std::IO::IOFail a) (m a) : Minilib.Trait.Lifter::Lifter`

A lifter implementation which lifts `IOFail` monad to a monad of `MonadIOFail`.

### impl `[m : Std::Monad] Minilib.Trait.Lifter::LifterImpl (Std::Identity a) (m a) : Minilib.Trait.Lifter::Lifter`

A lifter implementation which lifts `Iden` monad to any monad.