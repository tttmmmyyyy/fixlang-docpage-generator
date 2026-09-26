# Minilib.Monad.IO

Defined in minilib-monad@0.7.1

Monadic traits which can lift IO and IOFail monad.

## Values

### namespace Minilib.Monad.IO::MonadIOFailIF

#### lift_iofail

Type: `[m : Minilib.Monad.IO::MonadIOFailIF] Std::IO::IOFail a -> m a`

Trait member of `Minilib.Monad.IO::MonadIOFailIF`

### namespace Minilib.Monad.IO::MonadIOIF

#### lift_io

Type: `[m : Minilib.Monad.IO::MonadIOIF] Std::IO a -> m a`

Trait member of `Minilib.Monad.IO::MonadIOIF`

## Types and aliases

## Traits and aliases

### namespace Minilib.Monad.IO

#### trait `MonadIO = Std::Monad + Minilib.Monad.IO::MonadIOIF`

Kind: `*->*`

A monadic trait which can lift IO monad.

#### trait `MonadIOFail = Std::Monad + Minilib.Monad.IO::MonadIOIF + Minilib.Monad.IO::MonadIOFailIF`

Kind: `*->*`

A monadic trait which can lift IO and IOFail monad.

#### trait `[m : *->*] m : MonadIOFailIF`

An interface of a monadic trait which can lift IOFail monad.

##### method `lift_iofail`

Type: `Std::IO::IOFail a -> m a`

#### trait `[m : *->*] m : MonadIOIF`

An interface of a monadic trait which can lift IO monad.

##### method `lift_io`

Type: `Std::IO a -> m a`

## Trait implementations

### impl `Std::IO : Minilib.Monad.IO::MonadIOIF`

### impl `Std::IO::IOFail : Minilib.Monad.IO::MonadIOFailIF`

### impl `Std::IO::IOFail : Minilib.Monad.IO::MonadIOIF`