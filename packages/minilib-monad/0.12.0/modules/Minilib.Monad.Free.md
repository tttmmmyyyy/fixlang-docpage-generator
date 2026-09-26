# Minilib.Monad.Free

Defined in minilib-monad@0.12.0

Free Monad.

You can create a Free Monad from any functor.

Free monads allow you to compose a sequence of computations as a data structure,
which can then be executed in interpreters customized for your purpose.

The type of a free monad is `Free f a`, where `f` is a functor.
Conceptually, `Free f a` is equal to `a | f a | f f a | f f f a | ...`.

You can interpret the data structure recursively by matching against `f_pure` or `f_functor`.

For more information, see the following article:
- [Haskell for all: Why free monads matter](https://www.haskellforall.com/2012/06/you-could-have-invented-free-monads.html)

## Values

### namespace Minilib.Monad.Free::Free

#### lift_f

Type: `[f : Std::Functor] f a -> Minilib.Monad.Free::Free f a`

Lifts a functor value into a free monad value.

##### Parameters

- `command`: a value of a functor

## Types and aliases

### namespace Minilib.Monad.Free

#### Free

Defined as: `type [f : *->*] Free f a = box union { ...variants... }`

The type of Free Monad

##### variant `f_pure`

Type: `a`

A pure state.

##### variant `f_functor`

Type: `f (Minilib.Monad.Free::Free f a)`

An effectful (impure) state.

## Traits and aliases

## Trait implementations

### impl `[f : Std::Functor, f : Minilib.Monad.IO::MonadIOFailIF] Minilib.Monad.Free::Free f : Minilib.Monad.IO::MonadIOFailIF`

### impl `[f : Std::Functor, f : Minilib.Monad.IO::MonadIOIF] Minilib.Monad.Free::Free f : Minilib.Monad.IO::MonadIOIF`

### impl `[f : Std::Functor] Minilib.Monad.Free::Free f : Std::Functor`

### impl `[f : Std::Functor] Minilib.Monad.Free::Free f : Std::Monad`