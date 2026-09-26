# Minilib.Thread.Future

Defined in minilib-thread@0.6.0

A computation that is performed in a TaskPool in parallel.

## Values

### namespace Minilib.Thread.Future

#### get

Type: `[m : Minilib.Monad.IO::MonadIOFail] Minilib.Thread.Future::Future a -> m a`

Gets the result of the Future.
It waits for future state to be either completed or canceled.

#### make

Type: `[m : Minilib.Monad.IO::MonadIOFail] Minilib.Thread.TaskPool::TaskPool -> Std::IO a -> m (Minilib.Thread.Future::Future a)`

`Future::make(task_pool, io) creates a Future.
`io` is performed in the task pool.
If the task pool has been shutdown, an error is thrown.

### namespace Minilib.Thread.Future::FutureToken

#### make

Type: `AsyncTask::Var::Var Minilib.Thread.Future::FutureState -> Std::IO () -> Minilib.Thread.Future::FutureToken`

#### set_state

Type: `[m : Minilib.Monad.IO::MonadIO] Minilib.Thread.Future::FutureState -> Minilib.Thread.Future::FutureToken -> m ()`

## Types and aliases

### namespace Minilib.Thread.Future

#### Future

Defined as: `type Future a = unbox struct { ...fields... }`

A computation that is performed in a TaskPool in parallel.

##### field `var_state`

Type: `AsyncTask::Var::Var Minilib.Thread.Future::FutureState`

##### field `var_result`

Type: `AsyncTask::Var::Var (Std::Option a)`

#### FutureState

Defined as: `type FutureState = unbox union { ...variants... }`

A state of a future.

##### variant `pending`

Type: `()`

##### variant `running`

Type: `()`

##### variant `completed`

Type: `()`

##### variant `canceled`

Type: `()`

#### FutureToken

Defined as: `type FutureToken = unbox struct { ...fields... }`

[nofixdoc]
A token of a future for the taskpool.
Since the taskpool has no type variable, it cannot perform `IO a`.
So the future token has `IO ()`.

##### field `var_state`

Type: `AsyncTask::Var::Var Minilib.Thread.Future::FutureState`

##### field `io_unit`

Type: `Std::IO ()`

## Traits and aliases

## Trait implementations