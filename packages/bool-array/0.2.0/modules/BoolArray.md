# BoolArray

Defined in bool-array@0.2.0

## Values

### namespace BoolArray::BoolArray

#### @

Type: `Std::I64 -> BoolArray::BoolArray -> Std::Bool`

Gets the element at the specified index.

##### Parameters

- `index` : The index of the element to get. If out of range, the program aborts.
- `self` : The target BoolArray

#### @size

Type: `BoolArray::BoolArray -> Std::I64`

Gets the number of elements of the BoolArray.

##### Parameters

- `self` : The target BoolArray

#### fill

Type: `Std::I64 -> Std::Bool -> BoolArray::BoolArray`

Creates a BoolArray of the specified size, every element of which is the specified value.

##### Parameters

- `size` : The number of elements. If negative, the program aborts.
- `value` : The value of every element

#### fill_true

**Deprecated**: Use `BoolArray::fill(size, true)` instead.

Type: `BoolArray::BoolArray -> BoolArray::BoolArray`

Deprecated. Sets every element to true.

##### Parameters

- `self` : The target BoolArray

#### get_size

**Deprecated**: Use `BoolArray::@size` instead. Unlike `get_size`, which rounds the number of elements up to a multiple of 64, `@size` returns the size given when the BoolArray was created.

Type: `BoolArray::BoolArray -> Std::I64`

Deprecated. Gets the number of elements rounded up to a multiple of 64.

##### Parameters

- `self` : The target BoolArray

#### make

**Deprecated**: Use `BoolArray::fill(size, false)` instead. `make` rounds the size up to a multiple of 64, and `fill` keeps the size as given.

Type: `Std::I64 -> BoolArray::BoolArray`

Deprecated. Creates a BoolArray whose elements are all false, rounding the size up to a multiple of 64.

##### Parameters

- `size` : The number of elements before the rounding. If negative, the program aborts.

#### set

Type: `Std::I64 -> Std::Bool -> BoolArray::BoolArray -> BoolArray::BoolArray`

Sets the element at the specified index.

##### Parameters

- `index` : The index of the element to set. If out of range, the program aborts.
- `value` : The value to set
- `self` : The target BoolArray

## Types and aliases

### namespace BoolArray

#### BoolArray

Defined as: `type BoolArray = unbox struct { ...fields... }`

BoolArray is a structure that represents a sequence of boolean values, storing each value in 1 bit.

`BoolArray` implements `Indexable`, so an element can also be read and written by the index syntax.

##### Examples

```fix
let bits = BoolArray::fill(100, false).set(3, true);
assert(|_|"", bits.@(3));;
assert(|_|"", !bits[3].imod(not).@(3));;
assert_eq(|_|"", bits.@size, 100)
```

## Traits and aliases

## Trait implementations

### impl `BoolArray::BoolArray : Std::Indexable`