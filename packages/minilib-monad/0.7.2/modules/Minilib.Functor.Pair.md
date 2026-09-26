# Minilib.Functor.Pair

Defined in minilib-monad@0.7.2

## Values

### namespace Minilib.Functor.Pair::PairL

#### get

Type: `Minilib.Functor.Pair::PairL r l -> (l, r)`

#### make

Type: `(l, r) -> Minilib.Functor.Pair::PairL r l`

### namespace Minilib.Functor.Pair::PairLT

#### get

Type: `Minilib.Functor.Pair::PairLT r f l -> f (l, r)`

#### make

Type: `f (l, r) -> Minilib.Functor.Pair::PairLT r f l`

### namespace Minilib.Functor.Pair::PairR

#### get

Type: `Minilib.Functor.Pair::PairR l r -> (l, r)`

#### make

Type: `(l, r) -> Minilib.Functor.Pair::PairR l r`

### namespace Minilib.Functor.Pair::PairRT

#### get

Type: `Minilib.Functor.Pair::PairRT l f r -> f (l, r)`

#### make

Type: `f (l, r) -> Minilib.Functor.Pair::PairRT l f r`

## Types and aliases

### namespace Minilib.Functor.Pair

#### PairL

Defined as: `type PairL r l = unbox struct { ...fields... }`

A functor on the left component. This is a swapped version of `Tuple2`.

##### field `data`

Type: `(l, r)`

#### PairLT

Defined as: `type [f : *->*] PairLT r f l = unbox struct { ...fields... }`

A functor on the left component with an underlying functor.

##### field `data`

Type: `f (l, r)`

#### PairR

Defined as: `type PairR l r = unbox struct { ...fields... }`

A functor on the right component. This is same as `Tuple2`.

##### field `data`

Type: `(l, r)`

#### PairRT

Defined as: `type [f : *->*] PairRT l f r = unbox struct { ...fields... }`

A functor on the right component with an underlying functor.

##### field `data`

Type: `f (l, r)`

## Traits and aliases

## Trait implementations

### impl `Minilib.Functor.Pair::PairL r : Std::Functor`

### impl `[f : Std::Functor] Minilib.Functor.Pair::PairLT r f : Std::Functor`

### impl `Minilib.Functor.Pair::PairR l : Std::Functor`

### impl `[f : Std::Functor] Minilib.Functor.Pair::PairRT l f : Std::Functor`