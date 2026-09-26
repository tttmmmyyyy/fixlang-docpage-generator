# Minilib.Comonad.Cofree

Defined in minilib-comonad@0.7.0

## Values

### namespace Minilib.Comonad.Cofree

#### cofree

Type: `(a, f (Minilib.Comonad.Cofree::Cofree f a)) -> Minilib.Comonad.Cofree::Cofree f a`

#### coiter

Type: `[f : Std::Functor] (a -> f a) -> a -> Minilib.Comonad.Cofree::Cofree f a`

#### run_cofree

Type: `Minilib.Comonad.Cofree::Cofree f a -> (a, f (Minilib.Comonad.Cofree::Cofree f a))`

#### unfold

Type: `[f : Std::Functor] (b -> (a, f b)) -> b -> Minilib.Comonad.Cofree::Cofree f a`

### namespace Minilib.Comonad.Cofree::ComonadCofreeIF

#### unwrap

Type: `[w : Minilib.Comonad.Cofree::ComonadCofreeIF] w a -> Minilib.Comonad.Cofree::ComonadCofreeIF::FunctorType w (w a)`

Trait member of `Minilib.Comonad.Cofree::ComonadCofreeIF`

## Types and aliases

### namespace Minilib.Comonad.Cofree

#### Cofree

Defined as: `type [f : *->*] Cofree f a = box struct { ...fields... }`

##### field `data`

Type: `(a, f (Minilib.Comonad.Cofree::Cofree f a))`

## Traits and aliases

### namespace Minilib.Comonad.Cofree

#### trait `ComonadCofree = Minilib.Trait.Comonad::Comonad + Minilib.Comonad.Cofree::ComonadCofreeIF`

Kind: `*->*`

#### trait `[w : *->*] w : ComonadCofreeIF`

##### type `FunctorType`

Defined as: `FunctorType w : *->*`

##### method `unwrap`

Type: `w a -> Minilib.Comonad.Cofree::ComonadCofreeIF::FunctorType w (w a)`

## Trait implementations

### impl `[f : *->*] Minilib.Comonad.Cofree::Cofree f : Minilib.Comonad.Cofree::ComonadCofreeIF`

### impl `[f : Std::Functor] Minilib.Comonad.Cofree::Cofree f : Minilib.Trait.Comonad::Comonad`

### impl `[f : Std::Functor] Minilib.Comonad.Cofree::Cofree f : Std::Functor`