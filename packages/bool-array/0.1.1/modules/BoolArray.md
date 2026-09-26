# BoolArray

Defined in bool-array@0.1.1

## Values

### namespace BoolArray::BoolArray

#### @

Type: `Std::I64 -> BoolArray::BoolArray -> Std::Bool`

Gets the bit at the specified index.

##### Parameters

- `index` : The index of the bit to get
- `self` : The target BoolArray

#### fill_true

Type: `BoolArray::BoolArray -> BoolArray::BoolArray`

Fills the specified BoolArray with true values.

##### Parameters

- `self` : The target BoolArray

#### get_size

Type: `BoolArray::BoolArray -> Std::I64`

Gets the size of the BoolArray.

##### Parameters

- `self` : The BoolArray instance.

#### make

Type: `Std::I64 -> BoolArray::BoolArray`

Creates a new BoolArray.

##### Parameters

- `size` : The size of the BoolArray in bits. It will be rounded up to the nearest multiple of 64.

#### set

Type: `Std::I64 -> Std::Bool -> BoolArray::BoolArray -> BoolArray::BoolArray`

Sets the bit at the specified index.

##### Parameters

- `index` : The index of the bit to set
- `value` : The value to set (true or false)
- `self` : The target BoolArray

## Types and aliases

### namespace BoolArray

#### BoolArray

Defined as: `type BoolArray = unbox struct { ...fields... }`

BoolArray is a structure that represents a sequence of boolean values, storing each value in 1 bit.

##### field `buf`

Type: `Std::Array Std::U64`

## Traits and aliases

## Trait implementations