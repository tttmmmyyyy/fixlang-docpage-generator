# Minilib.Comonad.IOStore

Defined in minilib-comonad@0.7.0

`IOStore` comonad.

This is a specialized Store comonad whose state is `IOState`.

## Values

### namespace Minilib.Comonad.IOStore::IOStore

#### from_iostate

Type: `Std::IO::IOState -> Minilib.Comonad.IOStore::IOStore Std::IO::IOState`

Creates an `IOStore` comonad from `IOState` and an identity function.

#### make

Type: `(Std::IO::IOState, Std::IO::IOState -> a) -> Minilib.Comonad.IOStore::IOStore a`

Creates an `IOStore` comonad from `IOState` and a retrieval function.

#### run_io_store

Type: `Minilib.Comonad.IOStore::IOStore a -> (Std::IO::IOState, Std::IO::IOState -> a)`

Runs an `IOStore` comonad.

## Types and aliases

### namespace Minilib.Comonad.IOStore

#### IOStore

Defined as: `type IOStore a = unbox struct { ...fields... }`

A specialized Store comonad whose state is `IOState`.

##### field `data`

Type: `(Std::IO::IOState, Std::IO::IOState -> a)`

## Traits and aliases

## Trait implementations

### impl `Minilib.Comonad.IOStore::IOStore : Minilib.Comonad.Store::ComonadStoreIF`

### impl `Minilib.Comonad.IOStore::IOStore : Minilib.Trait.Comonad::Comonad`

### impl `Minilib.Comonad.IOStore::IOStore : Std::Functor`