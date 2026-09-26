# Minilib.Monad.Yield

Defined in minilib-monad@0.8.1

A simple generator monad.

`Yield e a` is a generator monad that yields elements of type `e`,
then terminates with the final result of type `a`.

It is a functor and a monad over type `a`, as well as an iterator of type `e`.

Example:
```
main: IO () = (
  // Generates collatz sequence
  let collatz: I64 -> Yield I64 () = fix $ |collatz, i| (
    yield(i);;
    if i <= 1 { pure() };
    if i % 2 == 0 { collatz(i/2) } else { collatz(3 * i + 1) }
  );
  collatz(7).fold_m((), |i, _| println(i.to_string))
);
```

## Values

### namespace Minilib.Monad.Yield

#### collect_yield

Type: `Minilib.Monad.Yield::Yield e a -> (Std::Array e, a)`

Collects all elements of a generator.

##### Parameters

* `gen` - The generator.

##### Return value

The array of elements and the final result of the generator.

#### fold_yield

Type: `s -> (e -> s -> s) -> Minilib.Monad.Yield::Yield e a -> (s, a)`

Folds the elements of a generator from left to right.

##### Parameters

* `s` - The initial state.
* `body` - The function to be called on the pair of an element and the current state.
* `gen` - The generator to be folded.

##### Return value

The folded state and the final result of the generator.

#### take_array

Type: `Std::I64 -> Minilib.Monad.Yield::Yield e a -> (Std::Array e, Minilib.Monad.Yield::Yield e a)`

Collects elements upto the specified count.

##### Parameters

* `count` - The maximum number of elements to be collected.
* `gen` - The generator.

##### Return value

The array of elements and the remaining generator.

### namespace Minilib.Monad.Yield::MonadYieldIF

#### yield

Type: `[m : Minilib.Monad.Yield::MonadYieldIF] Minilib.Monad.Yield::MonadYieldIF::YieldType m -> m ()`

Trait member of `Minilib.Monad.Yield::MonadYieldIF`

Writes an element to the generator output.

##### Parameters

* `e` - An element to be yielded.

## Types and aliases

### namespace Minilib.Monad.Yield

#### Yield

Defined as: `type Yield e a = unbox union { ...variants... }`

`Yield e a` is a generator monad that yields elements of type `e`,
then terminates with the final result of type `a`.

##### variant `y_pure`

Type: `a`

##### variant `y_yield`

Type: `(e, () -> Minilib.Monad.Yield::Yield e a)`

## Traits and aliases

### namespace Minilib.Monad.Yield

#### trait `MonadYield = Std::Functor + Std::Monad + Minilib.Monad.Yield::MonadYieldIF`

Kind: `*->*`

A trait for the interface of generic generator monads.

#### trait `[m : *->*] m : MonadYieldIF`

A trait for generic generator monads that supports `yield` operation.

##### type `YieldType`

Defined as: `YieldType m`

The type of an element.

##### method `yield`

Type: `Minilib.Monad.Yield::MonadYieldIF::YieldType m -> m ()`

Writes an element to the generator output.

###### Parameters

* `e` - An element to be yielded.

## Trait implementations

### impl `Minilib.Monad.Yield::Yield e : Minilib.Monad.Yield::MonadYieldIF`

`Yield e` is a generator of type `e`.

### impl `Minilib.Monad.Yield::Yield e : Std::Functor`

`Yield e` is a functor.

Note that `Yield e` supports both `Functor::map` and `Iterator::map`,
but their functionality is completely different.
- `Functor::map(f: a -> b)` transforms `Yield e a` to `Yield e b`.
- `Iterator::map(f: e -> e2)` transforms `Yield e a` to an iterator of type `e2`.

### impl `Minilib.Monad.Yield::Yield e : Std::Monad`

`Yield e` is a monad.
- `pure` produces a monadic value, which may be the final result.
- `bind` combines two generator outputs.

### impl `Minilib.Monad.Yield::Yield e a : Std::Iterator`

`Yield e a` is an Iterator of type `e`.
Note that iterators do not return the final state, so `a` will be discarded.