# HashMap

Defined in hashmap@2.2.0

Provides `HashMap k v`, a hash table that holds a value under each key. A key type is one that
implements `HashKey` of the `hash` library.

`empty` creates a map, `insert` puts a value under a key, `find` looks a key up, and `erase`
removes it. The index syntax `mp[k]` reaches the value under a key the map holds, and `mod_or`
modifies the value under a key, putting one in when the key is absent.

```fix
let mp = HashMap::empty(0).insert("one", 1).insert("two", 2).insert("one", 10);
assert_eq(|_|"", mp.find("one"), some(10));;
assert_eq(|_|"", mp.@size, 2);;
let mp = mp["one"].imod(add(5)).mod_or("three", 0, add(3));
assert_eq(|_|"", mp["one"].iget, 15);;
assert_eq(|_|"", mp.find("three"), some(3));;
let mp = mp.erase("two");
assert_eq(|_|"", mp.find("two"), none());;
assert_eq(|_|"", mp.find_or("two", 0), 0)
```

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

#### act_or

Type: `[f : Std::Functor, k : Hash::HashKey] k -> v -> (v -> f v) -> HashMap::HashMap k v -> f (HashMap::HashMap k v)`

Modifies the value under a key by a functorial action. When the key is absent, the action
acts on `def`, and its result goes in under the key.

The value reaches `f` unique when the map and the value are unique, so `f` can update an array
it receives in place.

##### Parameters

- `k` : Key of the value to act on.
- `def` : Value to act on when the key is absent.
- `f` : Functorial action to perform on the value.
- `mp` : HashMap to act on.

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

Finds an element from a HashMap, and returns the given default value when the key is absent.

##### Parameters

- `k` : Key to search for.
- `def` : Value to return when the key is absent.
- `mp` : HashMap to search in.

#### get_capacity

Type: `HashMap::HashMap k v -> Std::I64`

(Deprecated) Use `HashMap::@capacity` instead. This name remains available for backward
compatibility.

Gets capacity of a HashMap: the number of elements it holds before it grows.

##### Parameters

- `mp` : HashMap to get capacity of.

#### get_size

Type: `HashMap::HashMap k v -> Std::I64`

(Deprecated) Use `HashMap::@size` instead. This name remains available for backward
compatibility.

Gets size (number of elements) of a HashMap.

##### Parameters

- `mp` : HashMap to get size of.

#### insert

Type: `[k : Hash::HashKey] k -> v -> HashMap::HashMap k v -> HashMap::HashMap k v`

Inserts an element into a HashMap. A key the map already holds takes the new value, and the
size stays as it is.

##### Parameters

- `k` : Key of the element to insert.
- `v` : Value of the element to insert.
- `mp` : HashMap to insert into.

#### mod_or

Type: `[k : Hash::HashKey] k -> v -> (v -> v) -> HashMap::HashMap k v -> HashMap::HashMap k v`

Modifies the value under a key by a function. When the key is absent, the function applies to
`def`, and its result goes in under the key.

The value reaches `f` unique when the map and the value are unique, so `f` can update an array
it receives in place.

```fix
let words = ["a", "b", "a"];
let counts = words.to_iter.fold(HashMap::empty(0), |w, mp| mp.mod_or(w, 0, add(1)));
assert_eq(|_|"", counts.find("a"), some(2));;
assert_eq(|_|"", counts.find("b"), some(1))
```

##### Parameters

- `k` : Key of the value to modify.
- `def` : Value to modify when the key is absent.
- `f` : Function to apply to the value.
- `mp` : HashMap to modify.

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

### impl `[k : Hash::HashKey] HashMap::HashMap k v : Std::Indexable`

The index syntax `mp[k]` reaches the value under the key `k`. Reaching a key the map does not
hold stops the program; `act_or` and `mod_or` put a value under an absent key.

The value reaches the action unique when the map and the value are unique, so
`mp[k].imod(f)` can update an array under `k` in place.