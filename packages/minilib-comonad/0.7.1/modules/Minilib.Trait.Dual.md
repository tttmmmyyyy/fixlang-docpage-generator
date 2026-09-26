# Minilib.Trait.Dual

Defined in minilib-comonad@0.7.1

Dual functors.

Dual functors are a pair of functors that can be annihilated with the `zap` function.

Here is an example of a list of dual functors:

- `Identity` <-> `IdentityC`
- `Arrow e` <-> `Tuple2 e`
- `ReaderT e m` <-> `EnvT e w`
- `StateT e m` <-> `StoreT e w`
- `WriterT e m` <-> `TracedT e w`
- `Free f` <-> `Cofree g`, when `f` and `g` is dual
- `IO` <-> `IOStore`

For more information, see the following blog post:
[The Comonad.Reader: The Cofree Comonad and the Expression Problem](http://comonad.com/reader/2008/the-cofree-comonad-and-the-expression-problem/).

## Values

### namespace Minilib.Trait.Dual

#### zapp

Type: `[f : Minilib.Trait.Dual::Dual] f (a -> b) -> Minilib.Trait.Dual::Dual::DualOf f a -> b`

`zapp(ff, ga)` annihilates `f` and `g`, and returns `f(a)`.
This is a composition of `zap` and the function application.

##### Parameters

- `ff`: a function of the first Functor
- `ga`: a value of the second functor

### namespace Minilib.Trait.Dual::Dual

#### zap

Type: `[f : Minilib.Trait.Dual::Dual] (a -> b -> c) -> f a -> Minilib.Trait.Dual::Dual::DualOf f b -> c`

Trait member of `Minilib.Trait.Dual::Dual`

`zap(op, fa, gb)` annihilates `f` and `g`, and returns `op(a, b)`.

##### Parameters

- `op`: a operation of two arguments
- `fa`: a value of the first Functor
- `gb`: a value of the second functor

## Types and aliases

## Traits and aliases

### namespace Minilib.Trait.Dual

#### trait `[f : *->*] f : Dual`

A trait for a functor which has the dual functor.

##### type `DualOf`

Defined as: `DualOf f : *->*`

The dual functor of `f`, namely `g`.

##### method `zap`

Type: `(a -> b -> c) -> f a -> Minilib.Trait.Dual::Dual::DualOf f b -> c`

`zap(op, fa, gb)` annihilates `f` and `g`, and returns `op(a, b)`.

###### Parameters

- `op`: a operation of two arguments
- `fa`: a value of the first Functor
- `gb`: a value of the second functor

## Trait implementations

### impl `[g : Minilib.Trait.Dual::Dual, f : Minilib.Trait.Dual::Dual] Minilib.Comonad.Cofree::Cofree g : Minilib.Trait.Dual::Dual`

### impl `[w : Minilib.Trait.Comonad::Comonad, m : Std::Monad, w : Minilib.Trait.Dual::Dual] Minilib.Comonad.Env::EnvT e w : Minilib.Trait.Dual::Dual`

### impl `Minilib.Comonad.IOStore::IOStore : Minilib.Trait.Dual::Dual`

### impl `Minilib.Comonad.IdentityC::IdentityC : Minilib.Trait.Dual::Dual`

### impl `[w : Minilib.Trait.Comonad::Comonad, m : Std::Monad, w : Minilib.Trait.Dual::Dual] Minilib.Comonad.Store::StoreT s w : Minilib.Trait.Dual::Dual`

### impl `[w : Minilib.Trait.Comonad::Comonad, m : Std::Monad, w : Minilib.Trait.Dual::Dual] Minilib.Comonad.Traced::TracedT e w : Minilib.Trait.Dual::Dual`

### impl `[f : Minilib.Trait.Dual::Dual] Minilib.Monad.Free::Free f : Minilib.Trait.Dual::Dual`

### impl `[m : Std::Monad, w : Minilib.Trait.Comonad::Comonad, m : Minilib.Trait.Dual::Dual] Minilib.Monad.Reader::ReaderT e m : Minilib.Trait.Dual::Dual`

### impl `[m : Std::Monad, w : Minilib.Trait.Comonad::Comonad, m : Minilib.Trait.Dual::Dual] Minilib.Monad.State::StateT s m : Minilib.Trait.Dual::Dual`

### impl `[m : Std::Monad, w : Minilib.Trait.Comonad::Comonad, m : Minilib.Trait.Dual::Dual] Minilib.Monad.Writer::WriterT e m : Minilib.Trait.Dual::Dual`

### impl `Std::Arrow e : Minilib.Trait.Dual::Dual`

### impl `Std::IO : Minilib.Trait.Dual::Dual`

### impl `Std::Identity : Minilib.Trait.Dual::Dual`

### impl `Std::Tuple2 e : Minilib.Trait.Dual::Dual`