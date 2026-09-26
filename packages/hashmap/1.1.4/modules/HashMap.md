# HashMap

Defined in hashmap@1.1.4

## Values

### namespace HashMap

#### contains_key

Type: `[k : Hash::HashKey] k -> HashMap::HashMap k v -> Std::Bool`

Checks whether a hashmap contains a key.

##### Parameters

- `k` : Key to search for.
- `mp` : HashMap to search in.

#### empty

Type: `Std::I64 -> HashMap::HashMap k v`

Creates an empty HashMap which is reserved so that it will not rehash until size exceeds the spacified value.

##### Parameters

- `capacity` : Initial capacity of the HashMap.

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

Gets capacity of a HashMap.

##### Parameters

- `mp` : HashMap to get capacity of.

#### get_size

Type: `HashMap::HashMap k v -> Std::I64`

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

Type: `[k : Hash::HashKey] Std::I64 -> HashMap::HashMap k v -> HashMap::HashMap k v`

Reserves a HashMap so that it will not rehash until size exceeds the spacified value.

##### Parameters

- `capacity` : Capacity to reserve.
- `mp` : HashMap to reserve.

#### to_iter

Type: `HashMap::HashMap k v -> HashMap::HashMapIterator (k, v)`

Converts a HashMap into an iterator.

##### Parameters

- `mp` : HashMap to convert to an iterator.

## Types and aliases

### namespace HashMap

#### HashMap

Defined as: `type HashMap k v = unbox struct { ...fields... }`

#### HashMapIterator

Defined as: `type HashMapIterator kv = Std::Iterator::FlattenIterator (Std::Iterator::MapIterator Std::Iterator::RangeIterator Std::I64 (Std::Iterator::FlattenIterator (Std::Iterator::MapIterator Std::Iterator::RangeIterator Std::I64 (Std::Option::OptionIterator (Std::Option kv))) (Std::Option::OptionIterator (Std::Option kv)))) (Std::Iterator::FlattenIterator (Std::Iterator::MapIterator Std::Iterator::RangeIterator Std::I64 (Std::Option::OptionIterator (Std::Option kv))) (Std::Option::OptionIterator (Std::Option kv)))`

## Traits and aliases

## Trait implementations