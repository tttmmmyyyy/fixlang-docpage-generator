# Cairo.XlibSurface

Defined in cairo-fix@0.4.0

## Values

### namespace Cairo.XlibSurface

#### create_back_surface

Type: `Cairo.XlibSurface::Window -> Std::IO Cairo::Surface`

#### create_front_surface

Type: `Cairo.XlibSurface::Window -> Std::IO Cairo::Surface`

#### create_simple_window

Type: `(Std::I64, Std::I64) -> Std::IO Cairo.XlibSurface::Window`

#### destroy_window

Type: `Cairo.XlibSurface::Window -> Std::IO ()`

#### events_queued

Type: `Cairo.XlibSurface::QueuedMode -> Cairo.XlibSurface::Window -> Std::IO Std::I64`

#### flush

Type: `Cairo.XlibSurface::Window -> Std::IO ()`

#### keycode_to_keysym

Type: `Cairo.XlibSurface::KeyCode -> Cairo.XlibSurface::Window -> Std::IO Cairo.XlibSurface::KeySym`

#### next_event

Type: `Cairo.XlibSurface::Window -> Std::IO Cairo.XlibSurface::Event`

#### select_input

Type: `Cairo.XlibSurface::EventMask -> Cairo.XlibSurface::Window -> Std::IO ()`

#### string_to_keysym

Type: `Std::String -> Cairo.XlibSurface::KeySym`

#### swap_buffers

Type: `Cairo.XlibSurface::XbeSwapAction -> Cairo.XlibSurface::Window -> Std::IO ()`

### namespace Cairo.XlibSurface::EventMask

#### button_press

Type: `Cairo.XlibSurface::EventMask`

#### button_release

Type: `Cairo.XlibSurface::EventMask`

#### exposure

Type: `Cairo.XlibSurface::EventMask`

#### key_press

Type: `Cairo.XlibSurface::EventMask`

#### key_release

Type: `Cairo.XlibSurface::EventMask`

#### pointer_motion

Type: `Cairo.XlibSurface::EventMask`

#### structure_notify

Type: `Cairo.XlibSurface::EventMask`

### namespace Cairo.XlibSurface::QueuedMode

#### after_flush

Type: `Cairo.XlibSurface::QueuedMode`

#### already

Type: `Cairo.XlibSurface::QueuedMode`

#### reading

Type: `Cairo.XlibSurface::QueuedMode`

### namespace Cairo.XlibSurface::XbeSwapAction

#### background

Type: `Cairo.XlibSurface::XbeSwapAction`

#### copied

Type: `Cairo.XlibSurface::XbeSwapAction`

#### undefined

Type: `Cairo.XlibSurface::XbeSwapAction`

#### untouched

Type: `Cairo.XlibSurface::XbeSwapAction`

## Types and aliases

### namespace Cairo.XlibSurface

#### BackBufferId

Defined as: `type BackBufferId = Std::U64`

#### DisplayHandle

Defined as: `type DisplayHandle = Std::Ptr`

#### Event

Defined as: `type Event = unbox union { ...variants... }`

##### variant `key_press`

Type: `Cairo.XlibSurface::Event::KeyEvent`

##### variant `key_release`

Type: `Cairo.XlibSurface::Event::KeyEvent`

##### variant `button_press`

Type: `Cairo.XlibSurface::Event::ButtonEvent`

##### variant `button_release`

Type: `Cairo.XlibSurface::Event::ButtonEvent`

##### variant `motion_notify`

Type: `Cairo.XlibSurface::Event::MotionEvent`

##### variant `expose`

Type: `Cairo.XlibSurface::Event::ExposeEvent`

##### variant `destroy_notify`

Type: `Cairo.XlibSurface::Event::DestroyNotifyEvent`

##### variant `unimplemented`

Type: `()`

#### EventMask

Defined as: `type EventMask = Std::U64`

#### KeyCode

Defined as: `type KeyCode = Std::U32`

#### KeySym

Defined as: `type KeySym = Std::U64`

#### QueuedMode

Defined as: `type QueuedMode = Std::I32`

#### Window

Defined as: `type Window = box struct { ...fields... }`

##### field `width`

Type: `Std::I32`

##### field `height`

Type: `Std::I32`

#### WindowId

Defined as: `type WindowId = Std::U64`

#### XbeSwapAction

Defined as: `type XbeSwapAction = Std::U8`

### namespace Cairo.XlibSurface::Event

#### ButtonEvent

Defined as: `type ButtonEvent = box struct { ...fields... }`

##### field `type_`

Type: `Std::I32`

##### field `serial`

Type: `Std::U64`

##### field `send_event`

Type: `Std::I32`

##### field `time`

Type: `Std::U64`

##### field `x`

Type: `Std::I32`

##### field `y`

Type: `Std::I32`

##### field `x_root`

Type: `Std::I32`

##### field `y_root`

Type: `Std::I32`

##### field `state`

Type: `Std::U64`

##### field `button`

Type: `Std::U32`

##### field `same_screen`

Type: `Std::I32`

#### DestroyNotifyEvent

Defined as: `type DestroyNotifyEvent = box struct { ...fields... }`

##### field `type_`

Type: `Std::I32`

##### field `serial`

Type: `Std::U64`

##### field `send_event`

Type: `Std::I32`

#### ExposeEvent

Defined as: `type ExposeEvent = box struct { ...fields... }`

##### field `type_`

Type: `Std::I32`

##### field `serial`

Type: `Std::U64`

##### field `send_event`

Type: `Std::I32`

##### field `x`

Type: `Std::I32`

##### field `y`

Type: `Std::I32`

##### field `width`

Type: `Std::I32`

##### field `height`

Type: `Std::I32`

##### field `count`

Type: `Std::I32`

#### KeyEvent

Defined as: `type KeyEvent = box struct { ...fields... }`

##### field `type_`

Type: `Std::I32`

##### field `serial`

Type: `Std::U64`

##### field `send_event`

Type: `Std::I32`

##### field `time`

Type: `Std::U64`

##### field `x`

Type: `Std::I32`

##### field `y`

Type: `Std::I32`

##### field `x_root`

Type: `Std::I32`

##### field `y_root`

Type: `Std::I32`

##### field `state`

Type: `Std::U32`

##### field `keycode`

Type: `Std::U32`

##### field `same_screen`

Type: `Std::I32`

#### MotionEvent

Defined as: `type MotionEvent = box struct { ...fields... }`

##### field `type_`

Type: `Std::I32`

##### field `serial`

Type: `Std::U64`

##### field `send_event`

Type: `Std::I32`

##### field `time`

Type: `Std::U64`

##### field `x`

Type: `Std::I32`

##### field `y`

Type: `Std::I32`

##### field `x_root`

Type: `Std::I32`

##### field `y_root`

Type: `Std::I32`

##### field `state`

Type: `Std::U64`

##### field `is_hint`

Type: `Std::U8`

##### field `same_screen`

Type: `Std::I32`

## Traits and aliases

## Trait implementations