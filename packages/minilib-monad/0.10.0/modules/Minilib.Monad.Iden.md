# Minilib.Monad.Iden

Defined in minilib-monad@0.10.0

Identity monad

## Values

### namespace Minilib.Monad.Iden

#### get

Type: `Minilib.Monad.Iden::Iden a -> a`

Gets a value from an identity monad.

#### identity

Type: `a -> Minilib.Monad.Iden::Iden a`

`identity` is a synonym of `Iden::make`.

#### lift_identity

Type: `[m : Std::Monad] Minilib.Monad.Iden::Iden a -> m a`

Lifts an identity monad to any monad.

#### make

Type: `a -> Minilib.Monad.Iden::Iden a`

Creates an identity monad from a value.

#### run_identity

Type: `Minilib.Monad.Iden::Iden a -> a`

`run_identity` is a synonym of `Iden::get`.

## Types and aliases

### namespace Minilib.Monad.Iden

#### Iden

Defined as: `type Iden = Std::Identity`

The identity monad, which is an alias for `Std::Identity`.

## Traits and aliases

## Trait implementations