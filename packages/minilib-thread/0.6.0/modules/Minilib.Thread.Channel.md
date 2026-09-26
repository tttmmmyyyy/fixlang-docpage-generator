# Minilib.Thread.Channel

Defined in minilib-thread@0.6.0

A Channel that can be used for the communication of threads.

## Values

### namespace Minilib.Thread.Channel

#### clear

Type: `[m : Minilib.Monad.IO::MonadIO] Minilib.Thread.Channel::Channel a -> m ()`

`channel.clear` clears the queue of the channel.

#### close

Type: `[m : Minilib.Monad.IO::MonadIO] Minilib.Thread.Channel::Channel a -> m ()`

`channel.close` closes a channel.
After close, `send()` will fail.

#### closed_error

Type: `Std::ErrMsg`

An error message which is reported when the channel is closed.

#### is_closed

Type: `[m : Minilib.Monad.IO::MonadIO] Minilib.Thread.Channel::Channel a -> m Std::Bool`

`channel.is_closed` checks whether the channel is closed.

#### is_empty

Type: `[m : Minilib.Monad.IO::MonadIO] Minilib.Thread.Channel::Channel a -> m Std::Bool`

`channel.is_empty` checks whether the queue of the channel is empty.

#### make

Type: `[m : Minilib.Monad.IO::MonadIO] m (Minilib.Thread.Channel::Channel a)`

`Channel::make` creates a new channel.

#### recv

Type: `[m : Minilib.Monad.IO::MonadIOFail] Minilib.Thread.Channel::Channel a -> m a`

`channel.recv` receives a data from the queue of the channel.
If the queue is empty, it waits until any data is sent, or the channel is closed.
If the channel is closed and the queue is empty, it throws `closed_error`.

#### send

Type: `[m : Minilib.Monad.IO::MonadIOFail] a -> Minilib.Thread.Channel::Channel a -> m ()`

`channel.send(a)` sends a data to the queue of the channel.
If the channel is closed, it throws `closed_error`.

#### take_and_clear

Type: `[m : Minilib.Monad.IO::MonadIO] Minilib.Thread.Channel::Channel a -> m (Std::Iterator::DynIterator a)`

`channel.take_and_clear` takes all items away from the queue of the channel
and clears the queue.
This function can be used after the channel is closed.

#### try_recv

Type: `[m : Minilib.Monad.IO::MonadIOFail] Minilib.Thread.Channel::Channel a -> m (Std::Option a)`

`channel.recv` tries to receive a data from a channel.
If there is no data, `none` is returned.
If the channel is closed and the queue is empty, it throws `closed_error`.

## Types and aliases

### namespace Minilib.Thread.Channel

#### Channel

Defined as: `type Channel a = unbox struct { ...fields... }`

A Channel that can be used for the communication of threads.

##### field `var`

Type: `AsyncTask::Var::Var (Minilib.Thread.Channel::ChannelData a)`

#### ChannelData

Defined as: `type ChannelData a = unbox struct { ...fields... }`

The channel data

##### field `deque`

Type: `Minilib.Collection.Deque::Deque a`

##### field `closed`

Type: `Std::Bool`

## Traits and aliases

## Trait implementations