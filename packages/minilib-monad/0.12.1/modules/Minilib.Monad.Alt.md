# Minilib.Monad.Alt

Defined in minilib-monad@0.12.1

The interface and implementations of Alternative Monad (`MonadAlt`), which is either a success or a failure.

## Values

### namespace Minilib.Monad.Alt

#### filter

Type: `[m : Minilib.Monad.Alt::MonadAlt] (a -> Std::Bool) -> m a -> m a`

`monad.filter(condition)` performs `monad`, and if it succeeds, then checks whether the condition holds.
If the condition does not hold, it fails.

#### guard

Type: `[m : Minilib.Monad.Alt::MonadAlt] Std::Bool -> m ()`

`guard(condition)` checks if the condition holds.
If the condition does not hold, it fails.

#### if_exists

Type: `[m : Minilib.Monad.Alt::MonadAlt] m a -> m (Std::Option a)`

`monad.if_exists` performs `monad`.
If `monad` succeeded, returns `some(x)` where `x` is the result value of `monad`.
If `monad` failed, returns `none()`.

#### one_or_more

Type: `[m : Minilib.Monad.Alt::MonadAlt] m a -> m (Std::Array a)`

`one_or_more(monad)` attempts to perform `monad` repeatedly until it fails.
Returns an array of the succeeded results when `monad` succeeded at least once.
If `monad` failed with no success, it fails.

#### try_all

Type: `[m : Minilib.Monad.Alt::MonadAlt] Std::Array (m a) -> m (Std::Array a)`

`try_all(monads)` attempts to perform each monad in turn,
and returns an array of all successful results.
The returned array may be empty.

#### try_first

Type: `[m : Minilib.Monad.Alt::MonadAlt] Std::Array (m a) -> m a`

`try_first(monads)` performs each monad in turn until any of them succeeds.
If any of `monads` succeeded, returns its result.
If all of `monads` failed, it fails.

#### zero_or_more

Type: `[m : Minilib.Monad.Alt::MonadAlt] m a -> m (Std::Array a)`

`zero_or_more(monad)` attempts to perform `monad` repeatedly until it fails.
Returns an array of the succeeded results. The returned array may be empty.

### namespace Minilib.Monad.Alt::MonadAltIF

#### fail

Type: `[m : Minilib.Monad.Alt::MonadAltIF] m a`

Trait member of `Minilib.Monad.Alt::MonadAltIF`

`fail` is a monad which always fails.

#### or_else

Type: `[m : Minilib.Monad.Alt::MonadAltIF] m a -> m a -> m a`

Trait member of `Minilib.Monad.Alt::MonadAltIF`

`first.or_else(second)` is a monad. It performs `first` first, and if it failed, then performs `second`.

##### Parameters

* `second`: a monad which is performed secondly.
* `first`: a monad which is performed firstly.

## Types and aliases

## Traits and aliases

### namespace Minilib.Monad.Alt

#### trait `MonadAlt = Std::Monad + Std::Functor + Minilib.Monad.Alt::MonadAltIF`

Kind: `*->*`

#### trait `[m : *->*] m : MonadAltIF`

An interface of monad which returns a successful result, or fails.

For each type `a`, the type `m a` must be a monoid where `fail` is the unit and `or_else` is the binary operation.
That is, the following conditions must be met:
```
fail.or_else(ma) == ma
ma.or_else(fail) == ma
ma1.or_else(ma2).or_else(ma3) == ma1.or_else(ma2.or_else(ma3))
```

##### method `fail`

Type: `m a`

`fail` is a monad which always fails.

##### method `or_else`

Type: `m a -> m a -> m a`

`first.or_else(second)` is a monad. It performs `first` first, and if it failed, then performs `second`.

###### Parameters

* `second`: a monad which is performed secondly.
* `first`: a monad which is performed firstly.

## Trait implementations

### impl `[m : Std::Monad] Minilib.Monad.Option::OptionT m : Minilib.Monad.Alt::MonadAltIF`

### impl `[m : Std::Monad, e : Std::Zero] Minilib.Monad.Result::ResultT e m : Minilib.Monad.Alt::MonadAltIF`

### impl `[m : Minilib.Monad.Alt::MonadAlt] Minilib.Monad.State::StateT s m : Minilib.Monad.Alt::MonadAltIF`

### impl `Std::Array : Minilib.Monad.Alt::MonadAltIF`

### impl `Std::IO::IOFail : Minilib.Monad.Alt::MonadAltIF`

### impl `Std::Option : Minilib.Monad.Alt::MonadAltIF`

### impl `[e : Std::Zero] Std::Result e : Minilib.Monad.Alt::MonadAltIF`