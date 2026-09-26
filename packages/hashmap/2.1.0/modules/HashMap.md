# HashMap

Defined in hashmap@2.1.0

## Values

### namespace HashMap

#### @capacity

Type: `HashMap::HashMap k v -> Std::I64`

Gets capacity of a HashMap: the number of elements it holds before it grows.

##### Parameters

- `mp` : HashMap to get capacity of.

#### @size

Type: `HashMap::HashMap k v -> Std::I64`

Gets size (number of elements) of a HashMap.

##### Parameters

- `mp` : HashMap to get size of.

#### contains_key

Type: `[k : Hash::HashKey] k -> HashMap::HashMap k v -> Std::Bool`

Checks whether a HashMap contains a key.

##### Parameters

- `k` : Key to search for.
- `mp` : HashMap to search in.

#### empty

Type: `Std::I64 -> HashMap::HashMap k v`

Creates an empty HashMap which is reserved so that it will not rehash until size exceeds the specified value.

##### Parameters

- `capacity` : Number of elements the HashMap is to hold before it rehashes.

#### erase

Type: `[k : Hash::HashKey] k -> HashMap::HashMap k v -> HashMap::HashMap k v`

Erases an element from a HashMap.

##### Parameters

- `k` : Key of the element to erase.
- `mp` : HashMap to erase from.

#### find

Type: `[k : Hash::HashKey] k -> HashMap::HashMap k v -> Std::Option v`

Finds an element from a HashMap.

##### Parameters

- `k` : Key to search for.
- `mp` : HashMap to search in.

#### find_or

Type: `[k : Hash::HashKey] k -> v -> HashMap::HashMap k v -> v`

Finds an element from a HashMap. If the map doesn't contain the key, it returns the given default value.

##### Parameters

- `k` : Key to search for.
- `def` : Default value to return if the key is not found.
- `mp` : HashMap to search in.

#### get_capacity

Type: `HashMap::HashMap k v -> Std::I64`

(Deprecated) Renamed `HashMap::get_capacity` to `HashMap::@capacity` for brevity.

The old name `HashMap::get_capacity` is now deprecated but will remain available
for the foreseeable future to maintain backward compatibility.

Gets capacity of a HashMap.

##### Parameters

- `mp` : HashMap to get capacity of.

#### get_size

Type: `HashMap::HashMap k v -> Std::I64`

(Deprecated) Renamed `HashMap::get_size` to `HashMap::@size` for brevity.
The old name `HashMap::get_size` is now deprecated but will remain available
for the foreseeable future to maintain backward compatibility.

Gets size (number of elements) of a HashMap.

##### Parameters

- `mp` : HashMap to get size of.

#### insert

Type: `[k : Hash::HashKey] k -> v -> HashMap::HashMap k v -> HashMap::HashMap k v`

Inserts an element into a HashMap.

##### Parameters

- `k` : Key of the element to insert.
- `v` : Value of the element to insert.
- `mp` : HashMap to insert into.

#### reserve

Type: `Std::I64 -> HashMap::HashMap k v -> HashMap::HashMap k v`

Reserves a HashMap so that it will not rehash until size exceeds the specified value.

##### Parameters

- `capacity` : Number of elements the HashMap is to hold before it rehashes.
- `mp` : HashMap to reserve.

#### to_iter

Type: `[?it : Std::Iterator, Std::Iterator::Item ?it = (k, v)] HashMap::HashMap k v -> ?it`

Converts a HashMap into an iterator.

##### Parameters

- `mp` : HashMap to convert to an iterator.

## Types and aliases

### namespace HashMap

#### HashMap

Defined as: `type HashMap k v = unbox struct { ...fields... }`

A hash table, holding a value under each key.

The entries lie directly in one array, a free slot holding `none`. An entry whose slot is taken
goes into the next free slot after it, and a lookup starts at the slot the hash names and steps
forward until it meets the entry or a free slot. A third of the slots are kept free, so that a
lookup soon meets one.

An entry carries the hash of its key beside the key, so a lookup rules a slot out by comparing
two 64-bit words, and both a deletion and a rehash find the slot an entry belongs in without
hashing its key again.

## Traits and aliases

## Trait implementations