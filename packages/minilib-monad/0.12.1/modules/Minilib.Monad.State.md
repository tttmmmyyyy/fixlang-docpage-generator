# Minilib.Monad.State

Defined in minilib-monad@0.12.1

State Monad which maintains a mutable state.

Example:
```
main: IO () = (
    let sm: StateT String IO () = do {
        let str = *get_state;
        println(str).lift_io;;    // will print "hello"
        put_state("world")
    };
    let (str, ()) = *sm.run_state_t("hello");
    assert_eq(|_| "str", "world", str)
);
```

## Values

### namespace Minilib.Monad.State

#### eval_state

Type: `s -> Minilib.Monad.State::State s a -> a`

Runs a State monad with the supplied initial state and return the final value, discarding the final state.

#### eval_state_t

Type: `[m : Std::Monad] s -> Minilib.Monad.State::StateT s m a -> m a`

Runs a StateT monad with the supplied initial state and return the final value, discarding the final state.

Example:
```
    let sm: StateT I64 IO String = do {
        State::mod_state(add(22));;
        pure $ (*get_state).to_string
    };
    let str = *sm.eval_state_t(20);  // returns "42"
```

#### exec_state

Type: `s -> Minilib.Monad.State::State s a -> s`

Runs a State monad with the supplied initial state and return the final state, discarding the final value.

#### exec_state_t

Type: `[m : Std::Monad] s -> Minilib.Monad.State::StateT s m a -> m s`

Runs a StateT monad with the supplied initial state and return the final state, discarding the final value.

Example:
```
    let sm: StateT String IO () = do {
        State::mod_state(concat(" world"));;
        pure $ ()
    };
    let str = *sm.exec_state_t("hello");  // returns "hello world"
```

#### gets

Type: `[sm : Minilib.Monad.State::MonadState] (Minilib.Monad.State::MonadStateIF::StateType sm -> a) -> sm a`

`gets(f)` is same as `get_state.map(f)`.

#### lens_state

Type: `((s -> Minilib.Functor.Pair::PairLT a Minilib.Monad.Iden::Iden s) -> t -> Minilib.Functor.Pair::PairLT a Minilib.Monad.Iden::Iden t) -> Minilib.Monad.State::State s a -> Minilib.Monad.State::State t a`

Transforms a State monad with a lens action.

For example, if `Foo` has a field `bar: Bar`, then `act_bar` is a function of type
`[f: Functor] (Bar -> f Bar) -> (Foo -> f Foo)`.
Using `act_bar`, a state monad of `Bar` can be transformed to a state monad of `Foo`.

Note that `act_xxx` can be composed, for example `Foo::act_bar << Bar::act_baz << Baz::act_qux`.

Example:
```
change_bar: State Bar ();
change_bar = ...;
change_foo: State Foo ();
change_foo = change_bar.lens_state(Foo::act_bar);
```

#### lens_state_t

Type: `[m : Std::Functor, m : Std::Monad] ((s -> Minilib.Functor.Pair::PairLT a m s) -> t -> Minilib.Functor.Pair::PairLT a m t) -> Minilib.Monad.State::StateT s m a -> Minilib.Monad.State::StateT t m a`

Transforms a StateT monad with a lens action.

For example, if `Foo` has a field `bar: Bar`, then `act_bar` is a function of type
`[f: Functor] (Bar -> f Bar) -> (Foo -> f Foo)`.
Using `act_bar`, a state monad of `Bar` can be transformed to a state monad of `Foo`.

Note that `act_xxx` can be composed, for example `Foo::act_bar << Bar::act_baz << Baz::act_qux`.

Example:
```
change_bar: StateT Bar IO ();
change_bar = ...;
change_foo: StateT Foo IO ();
change_foo = change_bar.lens_state_t(Foo::act_bar);
```

#### make_state_monad

Type: `(s -> (s, a)) -> Minilib.Monad.State::State s a`

Creates a State monad from a function.

#### make_state_t_monad

Type: `[m : Std::Monad] (s -> m (s, a)) -> Minilib.Monad.State::StateT s m a`

Creates a StateT monad from a function.

#### map_state_t

Type: `[m : Std::Monad, n : Std::Monad] (m (s, a) -> n (s, b)) -> Minilib.Monad.State::StateT s m a -> Minilib.Monad.State::StateT s n b`

Maps both the return value and final state.

#### mod_state

Type: `[sm : Minilib.Monad.State::MonadState] (Minilib.Monad.State::MonadStateIF::StateType sm -> Minilib.Monad.State::MonadStateIF::StateType sm) -> sm ()`

A monad that modifies the current state with the specified function.

#### run_state

Type: `s -> Minilib.Monad.State::State s a -> (s, a)`

Runs a State monad with the supplied initial state.

#### run_state_t

Type: `[m : Std::Monad] s -> Minilib.Monad.State::StateT s m a -> m (s, a)`

Runs a StateT monad with the supplied initial state.

Example:
```
    let sm: StateT String IO I64 = do {
        State::mod_state(concat(" world"));;
        pure $ 42
    };
    let (str, i64val) = *sm.run_state_t("hello");  // returns ("hello world", 42)
```

#### state

Type: `(s -> (s, a)) -> Minilib.Monad.State::State s a`

Synonym of `make_state_monad`.

#### state_t

Type: `[m : Std::Monad] (s -> m (s, a)) -> Minilib.Monad.State::StateT s m a`

Synonym of `make_state_t_monad`.

### namespace Minilib.Monad.State::MonadStateIF

#### get_state

Type: `[sm : Minilib.Monad.State::MonadStateIF] sm (Minilib.Monad.State::MonadStateIF::StateType sm)`

Trait member of `Minilib.Monad.State::MonadStateIF`

A monad that returns the internal state as a value.

#### mod_state_

Type: `[sm : Minilib.Monad.State::MonadStateIF] (Minilib.Monad.State::MonadStateIF::StateType sm -> Minilib.Monad.State::MonadStateIF::StateType sm) -> sm ()`

Trait member of `Minilib.Monad.State::MonadStateIF`

A monad that modifies the current state with the specified function.

#### put_state

Type: `[sm : Minilib.Monad.State::MonadStateIF] Minilib.Monad.State::MonadStateIF::StateType sm -> sm ()`

Trait member of `Minilib.Monad.State::MonadStateIF`

A monad that puts the specified value to the internal state.

### namespace Minilib.Monad.State::SVar

#### get

Type: `[m : Minilib.Monad.State::MonadState, Minilib.Monad.State::MonadStateIF::StateType m = s] Minilib.Monad.State::SVar s a -> m a`

Get the substate from a variable.

Example:
```
let a = *svar.get;
```

##### Parameters

- `svar` - A variable

#### make

Type: `(s -> (a -> Std::Result a a) -> Std::Result a s) -> Minilib.Monad.State::SVar s a`

Create a variable bound to a substate.

Example:
```
let svar = SVar::make(|s| s[^a]);
```

##### Parameters

- `f` - A function from a state to the store of a substate.

#### mod

Type: `[m : Minilib.Monad.State::MonadState, Minilib.Monad.State::MonadStateIF::StateType m = s] (a -> a) -> Minilib.Monad.State::SVar s a -> m ()`

Modify the substate using a variable.

Example:
```
svar.mod(|val| val + 123);;
```

##### Parameters

- `f` - A function to modify the substate
- `svar` - A variable

#### set

Type: `[m : Minilib.Monad.State::MonadState, Minilib.Monad.State::MonadStateIF::StateType m = s] a -> Minilib.Monad.State::SVar s a -> m ()`

Set the substate to a variable.

Example:
```
svar.SVar::set(123);;
```

##### Parameters

- `val` - A value to set
- `svar` - A variable

#### whole_state

Type: `Minilib.Monad.State::SVar s s`

A variable bound to the whole state.

## Types and aliases

### namespace Minilib.Monad.State

#### SVar

Defined as: `type SVar s a = unbox struct { ...fields... }`

A variable bound to a substate of the StateT monad (including State monad).
You can get, set, and modify the bound substate.
This is similar to `AsyncTask::Var`, but the result of each operation is a StateT monad, not an IO monad.

Example:
```
type S = unbox struct { a: I64 };

main: IO ();
main = (
   eval_state_t(S{ a: 123 }) $ do {
     let v = SVar::make(|s| s[^a]);
     let a = *v.get;
     println("a=" + a.to_string).lift_io;;
     v.SVar::set(456);;
     println("a=" + (*v.get).to_string).lift_io;;
     v.mod(|a| a + 78);;
     println("a=" + (*v.get).to_string).lift_io
   }
);
```

##### field `data`

Type: `s -> (a -> Std::Result a a) -> Std::Result a s`

#### State

Defined as: `type State s = Minilib.Monad.State::StateT s Minilib.Monad.Iden::Iden`

`State s` is an alias of `StateT s Iden`.

#### StateT

Defined as: `type [m : *->*] StateT s m a = unbox struct { ...fields... }`

State monad wraps a function from a initial state to a pair of a value and a final state.

##### field `data`

Type: `s -> m (s, a)`

## Traits and aliases

### namespace Minilib.Monad.State

#### trait `MonadState = Std::Monad + Minilib.Monad.State::MonadStateIF`

Kind: `*->*`

A trait for the interface of generic state monads.

#### trait `[sm : *->*] sm : MonadStateIF`

A trait for generic state monads that manages the internal state.

##### type `StateType`

Defined as: `StateType sm`

The type of the internal state.

##### method `get_state`

Type: `sm (Minilib.Monad.State::MonadStateIF::StateType sm)`

A monad that returns the internal state as a value.

##### method `put_state`

Type: `Minilib.Monad.State::MonadStateIF::StateType sm -> sm ()`

A monad that puts the specified value to the internal state.

##### method `mod_state_`

Type: `(Minilib.Monad.State::MonadStateIF::StateType sm -> Minilib.Monad.State::MonadStateIF::StateType sm) -> sm ()`

A monad that modifies the current state with the specified function.

## Trait implementations

### impl `Minilib.Monad.State::StateT s : Minilib.Monad.Trans::MonadTrans`

### impl `[m : Minilib.Monad.Error::MonadError] Minilib.Monad.State::StateT s m : Minilib.Monad.Error::MonadErrorIF`

### impl `[m : Minilib.Monad.IO::MonadIOFail] Minilib.Monad.State::StateT s m : Minilib.Monad.IO::MonadIOFailIF`

### impl `[m : Minilib.Monad.IO::MonadIO] Minilib.Monad.State::StateT s m : Minilib.Monad.IO::MonadIOIF`

### impl `[m : Std::Monad] Minilib.Monad.State::StateT s m : Minilib.Monad.State::MonadStateIF`

### impl `[m : Std::Monad] Minilib.Monad.State::StateT s m : Std::Functor`

### impl `[m : Std::Monad] Minilib.Monad.State::StateT s m : Std::Monad`