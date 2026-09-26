# Minilib.Monad.FreeRandom

Defined in minilib-random@0.6.2

Free Random Monad.

## Values

### namespace Minilib.Monad.FreeRandom::FreeRandom

#### interpret

Type: `[m : Minilib.Monad.Random::MonadRandom] Minilib.Monad.FreeRandom::FreeRandom a -> m a`

## Types and aliases

### namespace Minilib.Monad.FreeRandom

#### FreeRandom

Defined as: `type FreeRandom a = box union { ...variants... }`

Free Random Monad.

This type may be used in a situation such as polymorphic types cannot be used,
for example an interface of an API.

##### variant `fr_pure`

Type: `a`

##### variant `fr_u64`

Type: `Std::U64 -> Minilib.Monad.FreeRandom::FreeRandom a`

##### variant `fr_bytes`

Type: `(Std::I64, Std::Array Std::U8 -> Minilib.Monad.FreeRandom::FreeRandom a)`

## Traits and aliases

## Trait implementations

### impl `Minilib.Monad.FreeRandom::FreeRandom : Minilib.Monad.Random::MonadRandomIF`

### impl `Minilib.Monad.FreeRandom::FreeRandom : Std::Functor`

### impl `Minilib.Monad.FreeRandom::FreeRandom : Std::Monad`