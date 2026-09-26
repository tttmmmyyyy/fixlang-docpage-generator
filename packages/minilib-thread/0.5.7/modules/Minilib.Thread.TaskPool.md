# Minilib.Thread.TaskPool

Defined in minilib-thread@0.5.7

A task pool that can be used parallel computation.

A task pool creates IOTasks and starts them.
Each task waits for request until shutdown.
When the task receives the request, it performs the request as a computation.
When the task pool is shutdown, all tasks are stopped.
Computations are never performed after shutdown.

## Values

### namespace Minilib.Thread.TaskPool

#### cancel_all_pendings_futures

Type: `Minilib.Thread.TaskPool::TaskPool -> Std::IO ()`

Cancel all pending futures and clears the queue.

#### is_shutdown

Type: `Minilib.Thread.TaskPool::TaskPool -> Std::IO Std::Bool`

Checks whether the taskpool has been shutdown.

#### make

Type: `Std::I64 -> Std::IO Minilib.Thread.TaskPool::TaskPool`

`TaskPool::make(task_count)` creates a TaskPool.

#### register_future

Type: `Minilib.Thread.Future::FutureToken -> Minilib.Thread.TaskPool::TaskPool -> Std::IO::IOFail ()`

Register a future.
It sends a future token to the channel.

#### shutdown

Type: `Minilib.Thread.TaskPool::TaskPool -> Std::IO Minilib.Thread.TaskPool::TaskPool`

Shutdowns a taskpool.

## Types and aliases

### namespace Minilib.Thread.TaskPool

#### TaskPool

Defined as: `type TaskPool = unbox struct { ...fields... }`

A task pool that manages a collection of IOTasks.

##### field `chan`

Type: `Minilib.Thread.Channel::Channel Minilib.Thread.Future::FutureToken`

##### field `tasks`

Type: `Std::Array (AsyncTask::AsyncIOTask::IOTask ())`

## Traits and aliases

## Trait implementations