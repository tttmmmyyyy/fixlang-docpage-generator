# HashMap

Defined in hashmap@2.0.1

## Values

### namespace HashMap

#### @capacity

Type: `HashMap::HashMap k v -> Std::I64`

Gets capacity of a HashMap.

##### Parameters

- `mp` : HashMap to get capacity of.

#### @size

Type: `HashMap::HashMap k v -> Std::I64`

Gets size (number of elements) of a HashMap.

##### Parameters

- `mp` : HashMap to get size of.

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

Type: `[k : Hash::HashKey] Std::I64 -> HashMap::HashMap k v -> HashMap::HashMap k v`

Reserves a HashMap so that it will not rehash until size exceeds the spacified value.

##### Parameters

- `capacity` : Capacity to reserve.
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

## Traits and aliases

## Trait implementations