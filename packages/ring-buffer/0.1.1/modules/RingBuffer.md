# RingBuffer

Defined in ring-buffer@0.1.1

Provides a ring buffer implementation.

Ring buffer can be used as deque, with armortized O(1) complexity for push/pop operations at both ends (front and back).

## Values

### namespace RingBuffer

#### @

Type: `Std::I64 -> RingBuffer::RingBuffer a -> a`

Get the element at the specified index in the ring buffer.

##### Parameters

- `i`: The index to get the element from.
- `rb`: The ring buffer to get the element from.

#### act

Type: `[f : Std::Functor] Std::I64 -> (a -> f a) -> RingBuffer::RingBuffer a -> f (RingBuffer::RingBuffer a)`

Apply a functional action to the element at the specified index in the ring buffer.

##### Parameters

- `i`: The index to apply the action to.
- `f`: The functional action to apply to the element.
- `rb`: The ring buffer to apply the action in.

#### create

Type: `Std::Array a -> RingBuffer::RingBuffer a`

Create a new ring buffer from an array.

Note: This takes O(n) since it copies the elements from the array into the ring buffer.

##### Parameters

- `arr`: The array to initialize the ring buffer with.

#### get_back

Type: `RingBuffer::RingBuffer a -> Std::Option a`

Get the back element of the ring buffer.

##### Parameters

- `rb`: The ring buffer to get the back element from.

#### get_front

Type: `RingBuffer::RingBuffer a -> Std::Option a`

Get the front element of the ring buffer.

##### Parameters

- `rb`: The ring buffer to get the front element from.

#### get_size

Type: `RingBuffer::RingBuffer a -> Std::I64`

Get the size of a ring buffer.

##### Parameters

- `rb`: The ring buffer to get the size of.

#### is_empty

Type: `RingBuffer::RingBuffer a -> Std::Bool`

Check if the ring buffer is empty.

##### Parameters

- `rb`: The ring buffer to check.

#### mod

Type: `Std::I64 -> (a -> a) -> RingBuffer::RingBuffer a -> RingBuffer::RingBuffer a`

Modify the element at the specified index in the ring buffer.

##### Parameters

- `i`: The index to modify the element at.
- `f`: The function to apply to the element.
- `rb`: The ring buffer to modify the element in.

#### pop_back

Type: `RingBuffer::RingBuffer a -> RingBuffer::RingBuffer a`

Pop the back element from the ring buffer.

##### Parameters

- `rb`: The ring buffer to pop the back element from.

#### pop_front

Type: `RingBuffer::RingBuffer a -> RingBuffer::RingBuffer a`

Pop the front element from the ring buffer.

##### Parameters

- `rb`: The ring buffer to pop the front element from.

#### push_back

Type: `a -> RingBuffer::RingBuffer a -> RingBuffer::RingBuffer a`

Push a value to the back of the ring buffer.

##### Parameters

- `v`: The value to push to the back.
- `rb`: The ring buffer to push the value to the back of.

#### push_front

Type: `a -> RingBuffer::RingBuffer a -> RingBuffer::RingBuffer a`

Push a value to the front of the ring buffer.

##### Parameters

- `v`: The value to push to the front.
- `rb`: The ring buffer to push the value to the front of.

#### set

Type: `Std::I64 -> a -> RingBuffer::RingBuffer a -> RingBuffer::RingBuffer a`

Set the element at the specified index in the ring buffer.

##### Parameters

- `i`: The index to set the element at.
- `v`: The value to set.
- `rb`: The ring buffer to set the element in.

## Types and aliases

### namespace RingBuffer

#### RingBuffer

Defined as: `type RingBuffer a = unbox struct { ...fields... }`

##### field `data`

Type: `Std::Array (Std::Option a)`

##### field `start`

Type: `Std::I64`

##### field `count`

Type: `Std::I64`

## Traits and aliases

## Trait implementations