# HashSet

Defined in hashset@1.1.2

## Values

### namespace HashSet

#### contains

Type: `[k : Hash::HashKey] k -> HashSet::HashSet k -> Std::Bool`

Checks whether a hashset contains an element.

#### empty

Type: `Std::I64 -> HashSet::HashSet k`

Creates an empty HashSet which is reserved so that it will not rehash until size exceeds the spacified value.

#### erase

Type: `[k : Hash::HashKey] k -> HashSet::HashSet k -> HashSet::HashSet k`

Erases an element from a HashSet.

#### from_iter

Type: `[it : Std::Iterator, k : Hash::HashKey, Std::Iterator::Item it = k] it -> HashSet::HashSet k`

Constructs a HashSet from an iterator of elements.

#### get_capacity

Type: `HashSet::HashSet k -> Std::I64`

Gets capacity of a HashSet.

#### get_size

Type: `HashSet::HashSet k -> Std::I64`

Gets size (number of elements) of a HashSet.

#### insert

Type: `[k : Hash::HashKey] k -> HashSet::HashSet k -> HashSet::HashSet k`

Inserts an element into a HashSet.

#### intersect

Type: `[k : Hash::HashKey] HashSet::HashSet k -> HashSet::HashSet k -> HashSet::HashSet k`

Calculates intersection of two Hashsets.

#### merge

Type: `[k : Hash::HashKey] HashSet::HashSet k -> HashSet::HashSet k -> HashSet::HashSet k`

Calculates union of two HashSets.

#### reserve

Type: `[k : Hash::HashKey] Std::I64 -> HashSet::HashSet k -> HashSet::HashSet k`

Reserves a HashSet so that it will not rehash until size exceeds the spacified value.

#### to_iter

Type: `HashSet::HashSet k -> HashSet::HashSetIterator k`

Converts a HashSet into an iterator.

## Types and aliases

### namespace HashSet

#### HashSet

Defined as: `type HashSet k = unbox struct { ...fields... }`

#### HashSetIterator

Defined as: `type HashSetIterator a = Std::Iterator::MapIterator (HashMap::HashMapIterator (a, ())) (a, ()) a`

## Traits and aliases

## Trait implementations