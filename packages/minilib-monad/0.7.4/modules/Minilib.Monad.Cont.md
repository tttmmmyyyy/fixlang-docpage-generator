# Minilib.Monad.Cont

Defined in minilib-monad@0.7.4

Continuation Monad.

## Values

### namespace Minilib.Monad.Cont

#### cont

Type: `((a -> r) -> r) -> Minilib.Monad.Cont::Cont r a`

Creates a Cont monad from a function which receives a continuation function and returns the result value.

#### cont_t

Type: `[m : Std::Monad] ((a -> m r) -> m r) -> Minilib.Monad.Cont::ContT r m a`

Creates a ContT monad from a function which receives a continuation function and returns the monadic value of the result.

#### lift_cont

Type: `[m : Std::Monad] m a -> Minilib.Monad.Cont::ContT r m a`

Deprecated: Please use `MonadTrans::lift_t`.

Lifts an underlying monad to a continuation monad.

#### run_cont

Type: `(a -> r) -> Minilib.Monad.Cont::Cont r a -> r`

Runs a Cont monad with the supplied continuation function.

#### run_cont_t

Type: `[m : Std::Monad] (a -> m r) -> Minilib.Monad.Cont::ContT r m a -> m r`

Runs a ContT monad with the supplied continuation function.

### namespace Minilib.Monad.Cont::MonadContIF

#### call_cc

Type: `[cm : Minilib.Monad.Cont::MonadContIF] ((a -> cm b) -> cm a) -> cm a`

Trait member of `Minilib.Monad.Cont::MonadContIF`

`call_cc(f)` calls `f` with the current continuation, and returns a continuation monad.
`f` takes the current continuation (the exit function) and should return a continuation monad.
For example, `call_cc(|exit| ... if condition { exit(false) }; ... pure(true))`.
The exit function can be passed to another function.

## Types and aliases

### namespace Minilib.Monad.Cont

#### Cont

Defined as: `type Cont r = Minilib.Monad.Cont::ContT r Minilib.Monad.Iden::Iden`

A continuation monad whose undelying monad is Iden.

#### ContT

Defined as: `type [m : *->*] ContT r m a = unbox struct { ...fields... }`

A continuation monad transformer.
`r` is a type of the result of the continuation function.
`m` is a type of an underlyind monad.
`a` is a type of a value.

##### field `data`

Type: `(a -> m r) -> m r`

## Traits and aliases

### namespace Minilib.Monad.Cont

#### trait `MonadCont = Std::Monad + Minilib.Monad.Cont::MonadContIF`

Kind: `*->*`

A trait for the interface of generic continuation  monads.

#### trait `[cm : *->*] cm : MonadContIF`

A trait for generic continuation  monads.

##### method `call_cc`

Type: `((a -> cm b) -> cm a) -> cm a`

`call_cc(f)` calls `f` with the current continuation, and returns a continuation monad.
`f` takes the current continuation (the exit function) and should return a continuation monad.
For example, `call_cc(|exit| ... if condition { exit(false) }; ... pure(true))`.
The exit function can be passed to another function.

## Trait implementations

### impl `Minilib.Monad.Cont::ContT r : Minilib.Monad.Trans::MonadTrans`

### impl `[m : Std::Monad] Minilib.Monad.Cont::ContT r m : Minilib.Monad.Cont::MonadContIF`

### impl `[m : Std::Monad] Minilib.Monad.Cont::ContT r m : Std::Functor`

### impl `[m : Std::Monad] Minilib.Monad.Cont::ContT r m : Std::Monad`