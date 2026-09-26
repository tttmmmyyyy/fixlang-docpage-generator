# Minilib.Comonad.Store

Defined in minilib-comonad@0.7.0

## Values

### namespace Minilib.Comonad.Store

#### get

Type: `[w : Minilib.Trait.Comonad::Comonad] Minilib.Comonad.Store::StoreT p w a -> (p, a)`

Gets the current position and the value.

#### run_store

Type: `Minilib.Comonad.Store::Store p a -> (p, p -> a)`

Runs a Store comonad.

#### run_store_t

Type: `Minilib.Comonad.Store::StoreT p w a -> (p, w (p -> a))`

Runs a StoreT comonad.

#### store

Type: `(p, p -> a) -> Minilib.Comonad.Store::Store p a`

Creates a store from a position and a value function.

##### Parameters

- `pair`: a position and a value function.

#### store_t

Type: `(p, w (p -> a)) -> Minilib.Comonad.Store::StoreT p w a`

Creates a store from a position and a comonad of a value function.

##### Parameters

- `pair`: a position and a comonad of a value function.

### namespace Minilib.Comonad.Store::ComonadStore::Default

#### default_experiment

Type: `[f : Std::Functor, sw : Minilib.Comonad.Store::ComonadStore] (Minilib.Comonad.Store::ComonadStoreIF::PositionType sw -> f (Minilib.Comonad.Store::ComonadStoreIF::PositionType sw)) -> sw a -> f a`

default implementation of `experiment`.

#### default_peeks

Type: `[sw : Minilib.Comonad.Store::ComonadStore] (Minilib.Comonad.Store::ComonadStoreIF::PositionType sw -> Minilib.Comonad.Store::ComonadStoreIF::PositionType sw) -> sw a -> a`

default implementation of `peeks`.

#### default_seek

Type: `[sw : Minilib.Comonad.Store::ComonadStore] Minilib.Comonad.Store::ComonadStoreIF::PositionType sw -> sw a -> sw a`

default implementation of `seek`.

#### default_seeks

Type: `[sw : Minilib.Comonad.Store::ComonadStore] (Minilib.Comonad.Store::ComonadStoreIF::PositionType sw -> Minilib.Comonad.Store::ComonadStoreIF::PositionType sw) -> sw a -> sw a`

default implementation of `seeks`.

### namespace Minilib.Comonad.Store::ComonadStoreIF

#### experiment

Type: `[f : Std::Functor, sw : Minilib.Comonad.Store::ComonadStoreIF] (Minilib.Comonad.Store::ComonadStoreIF::PositionType sw -> f (Minilib.Comonad.Store::ComonadStoreIF::PositionType sw)) -> sw a -> f a`

Trait member of `Minilib.Comonad.Store::ComonadStoreIF`

Takes measurements at various positions.

#### peek

Type: `[sw : Minilib.Comonad.Store::ComonadStoreIF] Minilib.Comonad.Store::ComonadStoreIF::PositionType sw -> sw a -> a`

Trait member of `Minilib.Comonad.Store::ComonadStoreIF`

Peeks the value at the specified position.

#### peeks

Type: `[sw : Minilib.Comonad.Store::ComonadStoreIF] (Minilib.Comonad.Store::ComonadStoreIF::PositionType sw -> Minilib.Comonad.Store::ComonadStoreIF::PositionType sw) -> sw a -> a`

Trait member of `Minilib.Comonad.Store::ComonadStoreIF`

Peeks the value at the position relative to the current position.

#### pos

Type: `[sw : Minilib.Comonad.Store::ComonadStoreIF] sw a -> Minilib.Comonad.Store::ComonadStoreIF::PositionType sw`

Trait member of `Minilib.Comonad.Store::ComonadStoreIF`

Gets the current position.

#### seek

Type: `[sw : Minilib.Comonad.Store::ComonadStoreIF] Minilib.Comonad.Store::ComonadStoreIF::PositionType sw -> sw a -> sw a`

Trait member of `Minilib.Comonad.Store::ComonadStoreIF`

Seeks the current position to the specified position.

#### seeks

Type: `[sw : Minilib.Comonad.Store::ComonadStoreIF] (Minilib.Comonad.Store::ComonadStoreIF::PositionType sw -> Minilib.Comonad.Store::ComonadStoreIF::PositionType sw) -> sw a -> sw a`

Trait member of `Minilib.Comonad.Store::ComonadStoreIF`

Seeks the current position with the specified function.

## Types and aliases

### namespace Minilib.Comonad.Store

#### Store

Defined as: `type Store p a = Minilib.Comonad.Store::StoreT p Minilib.Comonad.IdentityC::IdentityC a`

Store comonad.

#### StoreT

Defined as: `type [w : *->*] StoreT p w a = unbox struct { ...fields... }`

StoreT comonad.

##### field `data`

Type: `(p, w (p -> a))`

## Traits and aliases

### namespace Minilib.Comonad.Store

#### trait `ComonadStore = Minilib.Trait.Comonad::Comonad + Minilib.Comonad.Store::ComonadStoreIF`

Kind: `*->*`

A trait for the interface of store comonads.

#### trait `[sw : *->*] sw : ComonadStoreIF`

A trait for the store comonads.

Minimum definition: `PositionType`, `pos`, `peek`

##### type `PositionType`

Defined as: `PositionType sw`

The type of the position.

##### method `pos`

Type: `sw a -> Minilib.Comonad.Store::ComonadStoreIF::PositionType sw`

Gets the current position.

##### method `peek`

Type: `Minilib.Comonad.Store::ComonadStoreIF::PositionType sw -> sw a -> a`

Peeks the value at the specified position.

##### method `peeks`

Type: `(Minilib.Comonad.Store::ComonadStoreIF::PositionType sw -> Minilib.Comonad.Store::ComonadStoreIF::PositionType sw) -> sw a -> a`

Peeks the value at the position relative to the current position.

##### method `seek`

Type: `Minilib.Comonad.Store::ComonadStoreIF::PositionType sw -> sw a -> sw a`

Seeks the current position to the specified position.

##### method `seeks`

Type: `(Minilib.Comonad.Store::ComonadStoreIF::PositionType sw -> Minilib.Comonad.Store::ComonadStoreIF::PositionType sw) -> sw a -> sw a`

Seeks the current position with the specified function.

##### method `experiment`

Type: `[f : Std::Functor] (Minilib.Comonad.Store::ComonadStoreIF::PositionType sw -> f (Minilib.Comonad.Store::ComonadStoreIF::PositionType sw)) -> sw a -> f a`

Takes measurements at various positions.

## Trait implementations

### impl `[w : Minilib.Trait.Comonad::Comonad] Minilib.Comonad.Store::StoreT p w : Minilib.Comonad.Store::ComonadStoreIF`

### impl `[w : Minilib.Trait.Comonad::Comonad] Minilib.Comonad.Store::StoreT p w : Minilib.Trait.Comonad::Comonad`

### impl `[w : Std::Functor] Minilib.Comonad.Store::StoreT p w : Std::Functor`