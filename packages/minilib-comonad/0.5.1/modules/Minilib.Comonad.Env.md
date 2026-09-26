# Minilib.Comonad.Env

Defined in minilib-comonad@0.5.1

Env comonad. (a.k.a CoReader comonad)

For details, see [blog post: The Reader and Writer Monads and Comonads](https://www.olivierverdier.com/posts/2014/12/31/reader-writer-monad-comonad/).

## Values

### namespace Minilib.Comonad.Env::Env

#### env

Type: `e -> a -> Minilib.Comonad.Env::Env e a`

Creates an env comonad from an enviroment and a value.

#### env_t

Type: `[w : Minilib.Trait.Comonad::Comonad] e -> w a -> Minilib.Comonad.Env::EnvT e w a`

Creates a generic env comonad from an enviroment and a value.

#### get_env

Type: `[w : Minilib.Trait.Comonad::Comonad] Minilib.Comonad.Env::EnvT e w a -> e`

Gets the envirionment from an env comonad.

#### get_value

Type: `[w : Minilib.Trait.Comonad::Comonad] Minilib.Comonad.Env::EnvT e w a -> a`

Gets the value from an env comonad.

#### to_tuple

Type: `[w : Minilib.Trait.Comonad::Comonad] Minilib.Comonad.Env::EnvT e w a -> (e, a)`

Converts a env comonad to a pair of an enviroment and a value.

## Types and aliases

### namespace Minilib.Comonad.Env

#### Env

Defined as: `type Env e a = Minilib.Comonad.Env::EnvT e Minilib.Comonad.IdentityC::IdentityC a`

#### EnvT

Defined as: `type [w : *->*] EnvT e w a = unbox struct { ...fields... }`

Env comonad wraps a pair of an environment and a value.
`e` is a type of an environment.
`w` is a type of an underlyind comonad.
`a` is a type of a value.

##### field `env`

Type: `e`

##### field `value`

Type: `w a`

## Traits and aliases

## Trait implementations

### impl `[w : Minilib.Trait.Comonad::Comonad] Minilib.Comonad.Env::EnvT e w : Minilib.Trait.Comonad::Comonad`

### impl `[w : Minilib.Trait.Comonad::Comonad] Minilib.Comonad.Env::EnvT e w : Std::Functor`