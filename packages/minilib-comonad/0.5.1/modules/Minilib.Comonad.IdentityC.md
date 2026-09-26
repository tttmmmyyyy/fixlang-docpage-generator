# Minilib.Comonad.IdentityC

Defined in minilib-comonad@0.5.1

Identity comonad

## Values

### namespace Minilib.Comonad.IdentityC

#### get

Type: `Minilib.Comonad.IdentityC::IdentityC a -> a`

Gets a value from an identity comonad.

#### make

Type: `a -> Minilib.Comonad.IdentityC::IdentityC a`

Creates an identity comonad from a value.

## Types and aliases

### namespace Minilib.Comonad.IdentityC

#### IdentityC

Defined as: `type IdentityC a = unbox struct { ...fields... }`

Identity comonad

##### field `data`

Type: `a`

## Traits and aliases

## Trait implementations

### impl `Minilib.Comonad.IdentityC::IdentityC : Minilib.Trait.Comonad::Comonad`

### impl `Minilib.Comonad.IdentityC::IdentityC : Std::Functor`