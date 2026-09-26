# Minilib.Media.Svg

Defined in minilib-media@0.7.0

Scalable Vector Graphics (SVG) 1.1

This module uses `Minilib.Encoding.Xml` to handle XML.

## Values

### namespace Minilib.Media.Svg::PathData

#### arcto

Type: `[a : Minilib.Media.Svg::SvgNum, b : Minilib.Media.Svg::SvgNum, r : Minilib.Media.Svg::SvgNum] a -> a -> r -> b -> b -> a -> a -> Minilib.Media.Svg::PathData -> Minilib.Media.Svg::PathData`

`pathdata.arcto(rx, ry, x_axis_rotation, large_arc_flag, sweep_flag, x, y)` draws a elliptical arc.
Coordinates are absolute.
For details, see [W3C SVG 1.1: 8.3.8 The elliptical arc curve commands](https://www.w3.org/TR/SVG11/paths.html#PathDataEllipticalArcCommands).

#### closepath

Type: `Minilib.Media.Svg::PathData -> Minilib.Media.Svg::PathData`

`pathdata.closepath` ends the current sub-path by connecting it back to its initial point.

#### curveto

Type: `[a : Minilib.Media.Svg::SvgNum] a -> a -> a -> a -> a -> a -> Minilib.Media.Svg::PathData -> Minilib.Media.Svg::PathData`

`pathdata.curveto(x1, y1, x2, y2, x, y)` draws a cubic Bézier curve
from the current point to `(x,y)` using `(x1,y1)` as the control point
at the beginning of the curve and `(x2,y2)` as the control point at the end of the curve.
Coordinates are absolute.

#### empty

Type: `Minilib.Media.Svg::PathData`

`PathData::empty` is an empty PathData.

#### lineto

Type: `[a : Minilib.Media.Svg::SvgNum] a -> a -> Minilib.Media.Svg::PathData -> Minilib.Media.Svg::PathData`

`pathdata.lineto(x, y)` draws a line from the current point to the given `(x,y)` coordinates
which becomes the new current point.
Coordinates are absolute.

#### moveto

Type: `[a : Minilib.Media.Svg::SvgNum] a -> a -> Minilib.Media.Svg::PathData -> Minilib.Media.Svg::PathData`

`pathdata.moveto(x, y)` starts a new sub-path at the given `(x,y)` coordinates.
Coordinates are absolute.

#### newpath

Type: `Minilib.Media.Svg::PathData`

Synonym for `PathData::empty`.

#### quadto

Type: `[a : Minilib.Media.Svg::SvgNum] a -> a -> a -> a -> Minilib.Media.Svg::PathData -> Minilib.Media.Svg::PathData`

`pathdata.quadto(x1, y1, x, y)` draws a quadratic Bézier curve from the
current point to (x,y) using (x1,y1) as the control point.
Coordinates are absolute.

#### rlineto

Type: `[a : Minilib.Media.Svg::SvgNum] a -> a -> Minilib.Media.Svg::PathData -> Minilib.Media.Svg::PathData`

Same as `lineto` but coordinates are relative.

#### rmoveto

Type: `[a : Minilib.Media.Svg::SvgNum] a -> a -> Minilib.Media.Svg::PathData -> Minilib.Media.Svg::PathData`

Same as `moveto` but coordinates are relative.

#### scurveto

Type: `[a : Minilib.Media.Svg::SvgNum] a -> a -> a -> a -> Minilib.Media.Svg::PathData -> Minilib.Media.Svg::PathData`

Shorthand/smooth version of `curveto`.

#### squadto

Type: `[a : Minilib.Media.Svg::SvgNum] a -> a -> Minilib.Media.Svg::PathData -> Minilib.Media.Svg::PathData`

Shorthand/smooth version of `quadto`.

### namespace Minilib.Media.Svg::Svg

#### attr_num

Type: `[a : Minilib.Media.Svg::SvgNum] Std::String -> a -> Minilib.Encoding.Xml::XmlElement -> Minilib.Encoding.Xml::XmlElement`

`element.attr_num(name, value)` sets an attribute of specified name to the element.

#### circle

Type: `[a : Minilib.Media.Svg::SvgNum] a -> a -> a -> Minilib.Encoding.Xml::XmlElement`

`Svg::circle(cx, cy, r)` creates a `<circle>` element.

#### ellipse

Type: `[a : Minilib.Media.Svg::SvgNum] a -> a -> a -> a -> Minilib.Encoding.Xml::XmlElement`

`Svg::ellipse(cx, cy, rx, ry)` creates an `<ellipse>` element.

#### fill

Type: `Std::String -> Minilib.Encoding.Xml::XmlElement -> Minilib.Encoding.Xml::XmlElement`

`element.fill(paint)` sets a `fill` attribute to the element.
NOTE: this function may conflict with `Array::fill`.

#### fill_

Type: `Std::String -> Minilib.Encoding.Xml::XmlElement -> Minilib.Encoding.Xml::XmlElement`

Synonym for `Svg::fill` to avoid conflicts.

#### font_family

Type: `Std::String -> Minilib.Encoding.Xml::XmlElement -> Minilib.Encoding.Xml::XmlElement`

`element.font_family()` sets a `font-family` attribute to the element.

#### font_size

Type: `[a : Minilib.Media.Svg::SvgNum] a -> Minilib.Encoding.Xml::XmlElement -> Minilib.Encoding.Xml::XmlElement`

`element.font_size()` sets a `font-size` attribute to the element.

#### group

Type: `Minilib.Encoding.Xml::XmlElement`

`Svg::group` is an empty `<g>` element.

#### line

Type: `[a : Minilib.Media.Svg::SvgNum] a -> a -> a -> a -> Minilib.Encoding.Xml::XmlElement`

`Svg::line(x1, y1, x2, y2)` creates a `<line>` element.

#### path

Type: `Minilib.Media.Svg::PathData -> Minilib.Encoding.Xml::XmlElement`

`Svg::path(pathdata)` creates a `<path>` element from a pathdata.

#### polygon

Type: `[a : Minilib.Media.Svg::SvgNum] a -> Minilib.Encoding.Xml::XmlElement`

`Svg::polygon(points)` creates a `<polygon>` element.
In most cases, `points` is an array of `(x, y)`, for example `[(x1, y1), (x2, y2), ...]`.

#### polyline

Type: `[a : Minilib.Media.Svg::SvgNum] a -> Minilib.Encoding.Xml::XmlElement`

`Svg::polyline(points)` creates a `<polyline>` element.
In most cases, `points` is an array of `(x, y)`, for example `[(x1, y1), (x2, y2), ...]`.

#### rect

Type: `[a : Minilib.Media.Svg::SvgNum] a -> a -> a -> a -> Minilib.Encoding.Xml::XmlElement`

`Svg::rect(x, y, width, height)` creates a `<rect>` element.

#### stroke

Type: `Std::String -> Minilib.Encoding.Xml::XmlElement -> Minilib.Encoding.Xml::XmlElement`

`element.stroke(paint)` sets a `stroke` attribute to the element.

#### stroke_width

Type: `[a : Minilib.Media.Svg::SvgNum] a -> Minilib.Encoding.Xml::XmlElement -> Minilib.Encoding.Xml::XmlElement`

`element.stroke_width(num)` sets a `stroke-width` attribute to the element.

#### svg

Type: `[a : Minilib.Media.Svg::SvgNum] a -> a -> Minilib.Encoding.Xml::XmlElement`

 `Svg::svg(width, height)` creates a `<svg>` element.

#### text

Type: `Std::String -> Minilib.Encoding.Xml::XmlElement`

`Svg::text(content)` creates a `<text>` element.

#### view_box

Type: `[a : Minilib.Media.Svg::SvgNum] a -> a -> a -> a -> Minilib.Encoding.Xml::XmlElement -> Minilib.Encoding.Xml::XmlElement`

`element.view_box(min_x, min_y, width, height)` sets the `viewBox` attribute to the element.
`element` must be one of `<svg>`, `<marker>`, `<pattern>`, `<symbol>`, `<view>`.

#### write_file

Type: `Std::String -> Minilib.Encoding.Xml::XmlElement -> Std::IO::IOFail ()`

`element.write_file(filepath)` writes a SVG file.
`element` must be a `<svg>` element.

#### xy

Type: `[a : Minilib.Media.Svg::SvgNum] a -> a -> Minilib.Encoding.Xml::XmlElement -> Minilib.Encoding.Xml::XmlElement`

`element.xy(x, y)` sets `x` and `y` attributes to the element.

### namespace Minilib.Media.Svg::SvgNum

#### to_attr_value

Type: `[a : Minilib.Media.Svg::SvgNum] a -> Std::String`

Trait member of `Minilib.Media.Svg::SvgNum`

Convert to an attribute value of a SVG element.

## Types and aliases

### namespace Minilib.Media.Svg

#### PathData

Defined as: `type PathData = unbox struct { ...fields... }`

Path data of `<path>` element.

##### field `data`

Type: `Std::String`

## Traits and aliases

### namespace Minilib.Media.Svg

#### trait `a : SvgNum`

A trait that can be converted to an attribute value of a SVG element.
For example, a number, or a list of numbers is an instance of this trait.

##### method `to_attr_value`

Type: `a -> Std::String`

Convert to an attribute value of a SVG element.

## Trait implementations

### impl `[a : Minilib.Media.Svg::SvgNum] (a, a) : Minilib.Media.Svg::SvgNum`

`(a, a)` is converted to a string `a a`.
For example, `(123.45, 100.00)` -> `"123.45 100"`.

### impl `[a : Minilib.Media.Svg::SvgNum] Std::Array a : Minilib.Media.Svg::SvgNum`

An array is converted to a string by joining elements with `", "`.
For example, `[(123.45, 100.00), (234.60, 345.70)]` -> `"123.45 100, 234.6 345.7"`.

### impl `Std::Bool : Minilib.Media.Svg::SvgNum`

Bool is converted to either "1" or "0". For example,
`true` -> `"1"`, `false` -> `"0"`.

### impl `Std::F64 : Minilib.Media.Svg::SvgNum`

F64 is converted to a decimal string. Trailing zeros and trailing periods are stripped.
For example, `123.45` -> `"123.45"`, `100.00` -> `"100"`.

### impl `Std::I64 : Minilib.Media.Svg::SvgNum`

I64 is converted to a decimal string.
For example, `100` -> `"100"`.