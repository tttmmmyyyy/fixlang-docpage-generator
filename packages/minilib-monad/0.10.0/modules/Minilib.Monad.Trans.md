# Minilib.Monad.Trans

Defined in minilib-monad@0.10.0

Trait for a monad transformer.

## Values

### namespace Minilib.Monad.Trans::MonadTrans

#### lift_t

Type: `[m : Std::Monad, t : Minilib.Monad.Trans::MonadTrans] m a -> t m a`

Trait member of `Minilib.Monad.Trans::MonadTrans`

Lifts an underlying monad to a transformed monad.

## Types and aliases

## Traits and aliases

### namespace Minilib.Monad.Trans

#### trait `[t : (*->*)->*->*] t : MonadTrans`

Trait for a monad transformer.

##### method `lift_t`

Type: `[m : Std::Monad] m a -> t m a`

Lifts an underlying monad to a transformed monad.

## Trait implementations