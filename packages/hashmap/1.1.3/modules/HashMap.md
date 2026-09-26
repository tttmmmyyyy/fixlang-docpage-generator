# HashMap

Defined in hashmap@1.1.3

## Values

### namespace HashMap

#### contains_key

Type: `[k : Hash::HashKey] k -> HashMap::HashMap k v -> Std::Bool`

Checks whether a hashmap contains a key.

#### empty

Type: `Std::I64 -> HashMap::HashMap k v`

Creates an empty HashMap which is reserved so that it will not rehash until size exceeds the spacified value.

#### erase

Type: `[k : Hash::HashKey] k -> HashMap::HashMap k v -> HashMap::HashMap k v`

Erases an element from a HashMap.

#### find

Type: `[k : Hash::HashKey] k -> HashMap::HashMap k v -> Std::Option v`

Finds an element from a HashMap.

#### find_or

Type: `[k : Hash::HashKey] k -> v -> HashMap::HashMap k v -> v`

Finds an element from a HashMap. If the map doesn't contain the key, it returns the given default value.

#### get_capacity

Type: `HashMap::HashMap k v -> Std::I64`

Gets capacity of a HashMap.

#### get_size

Type: `HashMap::HashMap k v -> Std::I64`

Gets size (number of elements) of a HashMap.

#### insert

Type: `[k : Hash::HashKey] k -> v -> HashMap::HashMap k v -> HashMap::HashMap k v`

Inserts an element into a HashMap.

#### reserve

Type: `[k : Hash::HashKey] Std::I64 -> HashMap::HashMap k v -> HashMap::HashMap k v`

Reserves a HashMap so that it will not rehash until size exceeds the spacified value.

#### to_iter

Type: `HashMap::HashMap k v -> HashMap::HashMapIterator (k, v)`

Converts a HashMap into an iterator.

## Types and aliases

### namespace HashMap

#### HashMap

Defined as: `type HashMap k v = unbox struct { ...fields... }`

#### HashMapIterator

Defined as: `type HashMapIterator kv = Std::Iterator::FlattenIterator (Std::Iterator::MapIterator Std::Iterator::RangeIterator Std::I64 (Std::Iterator::FlattenIterator (Std::Iterator::MapIterator Std::Iterator::RangeIterator Std::I64 (Std::Option::OptionIterator (Std::Option kv))) (Std::Option::OptionIterator (Std::Option kv)))) (Std::Iterator::FlattenIterator (Std::Iterator::MapIterator Std::Iterator::RangeIterator Std::I64 (Std::Option::OptionIterator (Std::Option kv))) (Std::Option::OptionIterator (Std::Option kv)))`

## Traits and aliases

## Trait implementations