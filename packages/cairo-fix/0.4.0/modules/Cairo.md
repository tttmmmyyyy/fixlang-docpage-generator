# Cairo

Defined in cairo-fix@0.4.0

## Values

### namespace Cairo

#### append_path

Type: `Cairo::Path -> Cairo::Cairo -> Std::IO ()`

#### arc

Type: `(Std::F64, Std::F64) -> Std::F64 -> Std::F64 -> Std::F64 -> Cairo::Cairo -> Std::IO ()`

#### arc_negative

Type: `(Std::F64, Std::F64) -> Std::F64 -> Std::F64 -> Std::F64 -> Cairo::Cairo -> Std::IO ()`

#### borrow_io

Type: `(Cairo::CairoHandle -> Std::IO a) -> Cairo::Cairo -> Std::IO a`

#### clip

Type: `Cairo::Cairo -> Std::IO ()`

#### clip_extents

Type: `Cairo::Cairo -> Std::IO (Std::F64, Std::F64, Std::F64, Std::F64)`

#### clip_preserve

Type: `Cairo::Cairo -> Std::IO ()`

#### close_path

Type: `Cairo::Cairo -> Std::IO ()`

#### copy_clip_rectangle_list

Type: `Cairo::Cairo -> Std::IO Cairo::RectangleList`

#### copy_page

Type: `Cairo::Cairo -> Std::IO ()`

#### copy_path

Type: `Cairo::Cairo -> Std::IO Cairo::Path`

#### copy_path_flat

Type: `Cairo::Cairo -> Std::IO Cairo::Path`

#### create

Type: `Cairo::Surface -> Std::IO Cairo::Cairo`

#### curve_to

Type: `(Std::F64, Std::F64) -> (Std::F64, Std::F64) -> (Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO ()`

#### device_to_user

Type: `(Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO (Std::F64, Std::F64)`

#### device_to_user_distance

Type: `(Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO (Std::F64, Std::F64)`

#### fill

Type: `Cairo::Cairo -> Std::IO ()`

#### fill_extents

Type: `Cairo::Cairo -> Std::IO (Std::F64, Std::F64, Std::F64, Std::F64)`

#### fill_preserve

Type: `Cairo::Cairo -> Std::IO ()`

#### font_extents

Type: `Cairo::Cairo -> Std::IO Cairo::FontExtents`

#### get_antialias

Type: `Cairo::Cairo -> Std::IO Cairo::Antialias`

#### get_current_point

Type: `Cairo::Cairo -> Std::IO (Std::F64, Std::F64)`

#### get_dash

Type: `Cairo::Cairo -> Std::IO (Std::Array Std::F64, Std::F64)`

#### get_dash_count

Type: `Cairo::Cairo -> Std::IO Std::I64`

#### get_fill_rule

Type: `Cairo::Cairo -> Std::IO Cairo::FillRule`

#### get_font_face

Type: `Cairo::Cairo -> Std::IO Cairo::FontFace`

#### get_font_matrix

Type: `Cairo::Cairo -> Std::IO Cairo::Matrix`

#### get_font_options

Type: `Cairo::Cairo -> Std::IO Cairo::FontOptions`

#### get_group_target

Type: `Cairo::Cairo -> Std::IO Cairo::Surface`

#### get_hairline

Type: `Cairo::Cairo -> Std::IO Std::Bool`

#### get_line_cap

Type: `Cairo::Cairo -> Std::IO Cairo::LineCap`

#### get_line_join

Type: `Cairo::Cairo -> Std::IO Cairo::LineJoin`

#### get_line_width

Type: `Cairo::Cairo -> Std::IO Std::F64`

#### get_matrix

Type: `Cairo::Cairo -> Std::IO Cairo::Matrix`

#### get_miter_limit

Type: `Cairo::Cairo -> Std::IO Std::F64`

#### get_operator

Type: `Cairo::Cairo -> Std::IO Cairo::Operator`

#### get_scaled_font

Type: `Cairo::Cairo -> Std::IO Cairo::ScaledFont`

#### get_source

Type: `Cairo::Cairo -> Std::IO Cairo::Pattern`

#### get_target

Type: `Cairo::Cairo -> Std::IO Cairo::Surface`

#### get_tolerance

Type: `Cairo::Cairo -> Std::IO Std::F64`

#### glyph_extents

Type: `Std::Array Cairo::Glyph -> Cairo::Cairo -> Std::IO Cairo::TextExtents`

#### glyph_path

Type: `Std::Array Cairo::Glyph -> Cairo::Cairo -> Std::IO ()`

#### has_current_point

Type: `Cairo::Cairo -> Std::IO Std::Bool`

#### identity_matrix

Type: `Cairo::Cairo -> Std::IO ()`

#### in_clip

Type: `(Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO Std::Bool`

#### in_fill

Type: `(Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO Std::Bool`

#### in_stroke

Type: `(Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO Std::Bool`

#### line_to

Type: `(Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO ()`

#### mask

Type: `Cairo::Pattern -> Cairo::Cairo -> Std::IO ()`

#### mask_surface

Type: `Cairo::Surface -> (Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO ()`

#### move_to

Type: `(Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO ()`

#### new_path

Type: `Cairo::Cairo -> Std::IO ()`

#### new_sub_path

Type: `Cairo::Cairo -> Std::IO ()`

#### paint

Type: `Cairo::Cairo -> Std::IO ()`

#### paint_with_alpha

Type: `Std::F64 -> Cairo::Cairo -> Std::IO ()`

#### path_extents

Type: `Cairo::Cairo -> Std::IO (Std::F64, Std::F64, Std::F64, Std::F64)`

#### pop_group

Type: `Cairo::Cairo -> Std::IO Cairo::Pattern`

#### pop_group_to_source

Type: `Cairo::Cairo -> Std::IO ()`

#### push_group

Type: `Cairo::Cairo -> Std::IO ()`

#### push_group_with_content

Type: `Cairo::Content -> Cairo::Cairo -> Std::IO ()`

#### rectangle

Type: `(Std::F64, Std::F64) -> (Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO ()`

#### rel_curve_to

Type: `(Std::F64, Std::F64) -> (Std::F64, Std::F64) -> (Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO ()`

#### rel_line_to

Type: `(Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO ()`

#### rel_move_to

Type: `(Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO ()`

#### reset_clip

Type: `Cairo::Cairo -> Std::IO ()`

#### restore

Type: `Cairo::Cairo -> Std::IO ()`

#### rotate

Type: `Std::F64 -> Cairo::Cairo -> Std::IO ()`

#### save

Type: `Cairo::Cairo -> Std::IO ()`

#### scale

Type: `(Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO ()`

#### select_font_face

Type: `Std::String -> Cairo::FontSlant -> Cairo::FontWeight -> Cairo::Cairo -> Std::IO ()`

#### set_antialias

Type: `Cairo::Antialias -> Cairo::Cairo -> Std::IO ()`

#### set_dash

Type: `Std::Array Std::F64 -> Std::F64 -> Cairo::Cairo -> Std::IO ()`

#### set_fill_rule

Type: `Cairo::FillRule -> Cairo::Cairo -> Std::IO ()`

#### set_font_face

Type: `Cairo::FontFace -> Cairo::Cairo -> Std::IO ()`

#### set_font_matrix

Type: `Cairo::Matrix -> Cairo::Cairo -> Std::IO ()`

#### set_font_options

Type: `Cairo::FontOptions -> Cairo::Cairo -> Std::IO ()`

#### set_font_size

Type: `Std::F64 -> Cairo::Cairo -> Std::IO ()`

#### set_hairline

Type: `Std::Bool -> Cairo::Cairo -> Std::IO ()`

#### set_line_cap

Type: `Cairo::LineCap -> Cairo::Cairo -> Std::IO ()`

#### set_line_join

Type: `Cairo::LineJoin -> Cairo::Cairo -> Std::IO ()`

#### set_line_width

Type: `Std::F64 -> Cairo::Cairo -> Std::IO ()`

#### set_matrix

Type: `Cairo::Matrix -> Cairo::Cairo -> Std::IO ()`

#### set_miter_limit

Type: `Std::F64 -> Cairo::Cairo -> Std::IO ()`

#### set_operator

Type: `Cairo::Operator -> Cairo::Cairo -> Std::IO ()`

#### set_scaled_font

Type: `Cairo::ScaledFont -> Cairo::Cairo -> Std::IO ()`

#### set_source

Type: `Cairo::Pattern -> Cairo::Cairo -> Std::IO ()`

#### set_source_rgb

Type: `(Std::F64, Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO ()`

#### set_source_rgba

Type: `(Std::F64, Std::F64, Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO ()`

#### set_source_surface

Type: `Cairo::Surface -> (Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO ()`

#### set_tolerance

Type: `Std::F64 -> Cairo::Cairo -> Std::IO ()`

#### show_glyphs

Type: `Std::Array Cairo::Glyph -> Cairo::Cairo -> Std::IO ()`

#### show_page

Type: `Cairo::Cairo -> Std::IO ()`

#### show_text

Type: `Std::String -> Cairo::Cairo -> Std::IO ()`

#### show_text_glyphs

Type: `Std::String -> Std::Array Cairo::Glyph -> Std::Array Cairo::TextCluster -> Cairo::TextClusterFlags -> Cairo::Cairo -> Std::IO ()`

#### status

Type: `Cairo::Cairo -> Std::IO Cairo::Status`

#### stroke

Type: `Cairo::Cairo -> Std::IO ()`

#### stroke_extents

Type: `Cairo::Cairo -> Std::IO (Std::F64, Std::F64, Std::F64, Std::F64)`

#### stroke_preserve

Type: `Cairo::Cairo -> Std::IO ()`

#### text_extents

Type: `Std::String -> Cairo::Cairo -> Std::IO Cairo::TextExtents`

#### text_path

Type: `Std::String -> Cairo::Cairo -> Std::IO ()`

#### transform

Type: `Cairo::Matrix -> Cairo::Cairo -> Std::IO ()`

#### translate

Type: `(Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO ()`

#### user_to_device

Type: `(Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO (Std::F64, Std::F64)`

#### user_to_device_distance

Type: `(Std::F64, Std::F64) -> Cairo::Cairo -> Std::IO (Std::F64, Std::F64)`

### namespace Cairo::Antialias

#### best

Type: `Cairo::Antialias`

#### default

Type: `Cairo::Antialias`

#### fast

Type: `Cairo::Antialias`

#### good

Type: `Cairo::Antialias`

#### gray

Type: `Cairo::Antialias`

#### none

Type: `Cairo::Antialias`

#### subpixel

Type: `Cairo::Antialias`

### namespace Cairo::Content

#### alpha

Type: `Cairo::Content`

#### color

Type: `Cairo::Content`

#### color_alpha

Type: `Cairo::Content`

### namespace Cairo::Extend

#### none

Type: `Cairo::Extend`

#### pad

Type: `Cairo::Extend`

#### reflect

Type: `Cairo::Extend`

#### repeat

Type: `Cairo::Extend`

### namespace Cairo::FillRule

#### even_odd

Type: `Cairo::FillRule`

#### winding

Type: `Cairo::FillRule`

### namespace Cairo::Filter

#### best

Type: `Cairo::Filter`

#### bilinear

Type: `Cairo::Filter`

#### fast

Type: `Cairo::Filter`

#### gaussian

Type: `Cairo::Filter`

#### good

Type: `Cairo::Filter`

#### nearest

Type: `Cairo::Filter`

### namespace Cairo::FontExtents

#### create

Type: `Cairo::FontExtents`

### namespace Cairo::FontFace

#### get_type

Type: `Cairo::FontFace -> Cairo::FontType`

#### status

Type: `Cairo::FontFace -> Cairo::Status`

### namespace Cairo::FontOptions

#### default

Type: `Cairo::FontOptions`

#### equal

Type: `Cairo::FontOptions -> Cairo::FontOptions -> Std::Bool`

#### get_antialias

Type: `Cairo::FontOptions -> Cairo::Antialias`

#### get_hint_metrics

Type: `Cairo::FontOptions -> Cairo::HintMetrics`

#### get_hint_style

Type: `Cairo::FontOptions -> Cairo::HintStyle`

#### get_subpixel_order

Type: `Cairo::FontOptions -> Cairo::SubpixelOrder`

#### get_variations

Type: `Cairo::FontOptions -> Std::String`

#### hash

Type: `Cairo::FontOptions -> Std::U64`

#### merge

Type: `Cairo::FontOptions -> Cairo::FontOptions -> Cairo::FontOptions`

#### set_antialias

Type: `Cairo::Antialias -> Cairo::FontOptions -> Cairo::FontOptions`

#### set_hint_metrics

Type: `Cairo::HintMetrics -> Cairo::FontOptions -> Cairo::FontOptions`

#### set_hint_style

Type: `Cairo::HintStyle -> Cairo::FontOptions -> Cairo::FontOptions`

#### set_subpixel_order

Type: `Cairo::SubpixelOrder -> Cairo::FontOptions -> Cairo::FontOptions`

#### set_variations

Type: `Std::String -> Cairo::FontOptions -> Cairo::FontOptions`

#### status

Type: `Cairo::FontOptions -> Cairo::Status`

### namespace Cairo::FontSlant

#### italic

Type: `Cairo::FontSlant`

#### normal

Type: `Cairo::FontSlant`

#### oblique

Type: `Cairo::FontSlant`

### namespace Cairo::FontType

#### ft

Type: `Cairo::FontType`

#### quartz

Type: `Cairo::FontType`

#### toy

Type: `Cairo::FontType`

#### user

Type: `Cairo::FontType`

#### win32

Type: `Cairo::FontType`

### namespace Cairo::FontWeight

#### bold

Type: `Cairo::FontWeight`

#### normal

Type: `Cairo::FontWeight`

### namespace Cairo::Format

#### a1

Type: `Cairo::Format`

#### a8

Type: `Cairo::Format`

#### argb

Type: `Cairo::Format`

#### rgb16_565

Type: `Cairo::Format`

#### rgb24

Type: `Cairo::Format`

#### rgb30

Type: `Std::I32`

#### stride_for_width

Type: `Cairo::Format -> Std::I32 -> Std::I32`

### namespace Cairo::HintMetrics

#### default

Type: `Cairo::HintMetrics`

#### off

Type: `Cairo::HintMetrics`

#### on

Type: `Cairo::HintMetrics`

### namespace Cairo::HintStyle

#### default

Type: `Cairo::HintStyle`

#### full

Type: `Cairo::HintStyle`

#### medium

Type: `Cairo::HintStyle`

#### none

Type: `Cairo::HintStyle`

#### slight

Type: `Cairo::HintStyle`

### namespace Cairo::LineCap

#### butt

Type: `Cairo::LineCap`

#### round

Type: `Cairo::LineCap`

#### square

Type: `Cairo::LineCap`

### namespace Cairo::LineJoin

#### bevel

Type: `Cairo::LineJoin`

#### miter

Type: `Cairo::LineJoin`

#### round

Type: `Cairo::LineJoin`

### namespace Cairo::Matrix

#### identity

Type: `Cairo::Matrix`

#### init_rotate

Type: `Std::F64 -> Cairo::Matrix`

#### init_scale

Type: `(Std::F64, Std::F64) -> Cairo::Matrix`

#### init_translate

Type: `(Std::F64, Std::F64) -> Cairo::Matrix`

#### invert

Type: `Cairo::Matrix -> Std::Option Cairo::Matrix`

#### multiply

Type: `Cairo::Matrix -> Cairo::Matrix -> Cairo::Matrix`

The transformation b.multiply(a) first applies the transformation a to the point and then applies the transformation b to the result.

#### rotate

Type: `Std::F64 -> Cairo::Matrix -> Cairo::Matrix`

#### scale

Type: `(Std::F64, Std::F64) -> Cairo::Matrix -> Cairo::Matrix`

#### transform_distance

Type: `(Std::F64, Std::F64) -> Cairo::Matrix -> (Std::F64, Std::F64)`

#### transform_point

Type: `(Std::F64, Std::F64) -> Cairo::Matrix -> (Std::F64, Std::F64)`

#### transform_vector

Type: `(Std::F64, Std::F64) -> Cairo::Matrix -> (Std::F64, Std::F64)`

#### translate

Type: `(Std::F64, Std::F64) -> Cairo::Matrix -> Cairo::Matrix`

### namespace Cairo::Operator

#### add

Type: `Cairo::Operator`

#### atop

Type: `Cairo::Operator`

#### clear

Type: `Cairo::Operator`

#### color_burn

Type: `Cairo::Operator`

#### color_dodge

Type: `Cairo::Operator`

#### darken

Type: `Cairo::Operator`

#### dest

Type: `Cairo::Operator`

#### dest_atop

Type: `Cairo::Operator`

#### dest_in

Type: `Cairo::Operator`

#### dest_out

Type: `Cairo::Operator`

#### dest_over

Type: `Cairo::Operator`

#### difference

Type: `Cairo::Operator`

#### exclusion

Type: `Cairo::Operator`

#### hard_light

Type: `Cairo::Operator`

#### hsl_color

Type: `Cairo::Operator`

#### hsl_hue

Type: `Cairo::Operator`

#### hsl_luminosity

Type: `Cairo::Operator`

#### hsl_saturation

Type: `Cairo::Operator`

#### in_

Type: `Cairo::Operator`

#### lighten

Type: `Cairo::Operator`

#### multiply

Type: `Cairo::Operator`

#### out

Type: `Cairo::Operator`

#### over

Type: `Cairo::Operator`

#### overlay

Type: `Cairo::Operator`

#### saturate

Type: `Cairo::Operator`

#### screen

Type: `Cairo::Operator`

#### soft_light

Type: `Cairo::Operator`

#### source

Type: `Cairo::Operator`

#### xor

Type: `Cairo::Operator`

### namespace Cairo::Overlap

#### in_

Type: `Cairo::Overlap`

#### out

Type: `Cairo::Overlap`

#### part

Type: `Cairo::Overlap`

### namespace Cairo::Pattern

#### add_color_stop_rgb

Type: `Std::F64 -> (Std::F64, Std::F64, Std::F64) -> Cairo::Pattern -> Std::IO ()`

#### add_color_stop_rgba

Type: `Std::F64 -> (Std::F64, Std::F64, Std::F64, Std::F64) -> Cairo::Pattern -> Std::IO ()`

#### create_for_surface

Type: `Cairo::Surface -> Std::IO Cairo::Pattern`

#### create_linear

Type: `(Std::F64, Std::F64) -> (Std::F64, Std::F64) -> Cairo::Pattern`

#### create_mesh

Type: `Cairo::Pattern`

#### create_radial

Type: `(Std::F64, Std::F64, Std::F64) -> (Std::F64, Std::F64, Std::F64) -> Cairo::Pattern`

#### create_rgb

Type: `(Std::F64, Std::F64, Std::F64) -> Cairo::Pattern`

#### create_rgba

Type: `(Std::F64, Std::F64, Std::F64, Std::F64) -> Cairo::Pattern`

#### get_color_stop_count

Type: `Cairo::Pattern -> Std::IO Std::I64`

#### get_color_stop_rgba

Type: `Std::I32 -> Cairo::Pattern -> Std::IO (Std::Result Cairo::Status (Std::F64, Std::F64, Std::F64, Std::F64))`

#### get_extend

Type: `Cairo::Pattern -> Std::IO Cairo::Extend`

#### get_filter

Type: `Cairo::Pattern -> Std::IO Cairo::Filter`

#### get_linear_points

Type: `Cairo::Pattern -> Std::IO (Std::Result Cairo::Status ((Std::F64, Std::F64), (Std::F64, Std::F64)))`

#### get_matrix

Type: `Cairo::Pattern -> Std::IO Cairo::Matrix`

#### get_radial_circles

Type: `Cairo::Pattern -> Std::IO (Std::Result Cairo::Status ((Std::F64, Std::F64, Std::F64), (Std::F64, Std::F64, Std::F64)))`

#### get_rgba

Type: `Cairo::Pattern -> Std::IO (Std::Result Cairo::Status (Std::F64, Std::F64, Std::F64, Std::F64))`

#### get_surface

Type: `Cairo::Pattern -> Std::IO (Std::Result Cairo::Status Cairo::Surface)`

#### get_type

Type: `Cairo::Pattern -> Std::IO Cairo::PatternType`

#### linear

Type: `Cairo::PatternType`

#### mesh

Type: `Cairo::PatternType`

#### mesh_begin_patch

Type: `Cairo::Pattern -> Std::IO ()`

#### mesh_curve_to

Type: `(Std::F64, Std::F64) -> (Std::F64, Std::F64) -> (Std::F64, Std::F64) -> Cairo::Pattern -> Std::IO ()`

#### mesh_end_patch

Type: `Cairo::Pattern -> Std::IO ()`

#### mesh_get_control_point

Type: `Std::I64 -> Cairo::Pattern -> Std::IO (Std::Result Cairo::Status (Std::F64, Std::F64))`

#### mesh_get_corner_color_rgba

Type: `Std::I64 -> Cairo::Pattern -> Std::IO (Std::Result Cairo::Status (Std::F64, Std::F64, Std::F64, Std::F64))`

#### mesh_get_patch_count

Type: `Cairo::Pattern -> Std::IO (Std::Result Cairo::Status Std::I64)`

#### mesh_get_path

Type: `Std::I64 -> Cairo::Pattern -> Std::IO Cairo::Path`

#### mesh_line_to

Type: `(Std::F64, Std::F64) -> Cairo::Pattern -> Std::IO ()`

#### mesh_move_to

Type: `(Std::F64, Std::F64) -> Cairo::Pattern -> Std::IO ()`

#### mesh_set_control_point

Type: `(Std::F64, Std::F64) -> Cairo::Pattern -> Std::IO ()`

#### mesh_set_corner_color_rgb

Type: `Std::I64 -> (Std::F64, Std::F64, Std::F64) -> Cairo::Pattern -> Std::IO ()`

#### mesh_set_corner_color_rgba

Type: `Std::I64 -> (Std::F64, Std::F64, Std::F64, Std::F64) -> Cairo::Pattern -> Std::IO ()`

#### radial

Type: `Cairo::PatternType`

#### raster_source

Type: `Cairo::PatternType`

#### set_extend

Type: `Cairo::Extend -> Cairo::Pattern -> Std::IO ()`

#### set_filter

Type: `Cairo::Filter -> Cairo::Pattern -> Std::IO ()`

#### set_matrix

Type: `Cairo::Matrix -> Cairo::Pattern -> Std::IO ()`

#### solid

Type: `Cairo::PatternType`

#### status

Type: `Cairo::Pattern -> Std::IO Cairo::Status`

#### surface

Type: `Cairo::PatternType`

### namespace Cairo::Region

#### contains_point

Type: `(Std::I32, Std::I32) -> Cairo::Region -> Std::Bool`

#### contains_rectangle

Type: `Cairo::RectangleInt -> Cairo::Region -> Cairo::Overlap`

#### create

Type: `Cairo::Region`

#### create_rectangle

Type: `Cairo::RectangleInt -> Cairo::Region`

#### create_rectangles

Type: `Std::Array Cairo::RectangleInt -> Cairo::Region`

#### equal

Type: `Cairo::Region -> Cairo::Region -> Std::Bool`

#### get_extents

Type: `Cairo::Region -> Cairo::RectangleInt`

#### get_rectangle

Type: `Std::I32 -> Cairo::Region -> Cairo::RectangleInt`

#### intersect

Type: `Cairo::Region -> Cairo::Region -> Std::Result Cairo::Status Cairo::Region`

#### intersect_rectangle

Type: `Cairo::RectangleInt -> Cairo::Region -> Std::Result Cairo::Status Cairo::Region`

#### is_empty

Type: `Cairo::Region -> Std::Bool`

#### num_rectangles

Type: `Cairo::Region -> Std::I32`

#### status

Type: `Cairo::Region -> Cairo::Status`

#### subtract

Type: `Cairo::Region -> Cairo::Region -> Std::Result Cairo::Status Cairo::Region`

#### subtract_rectangle

Type: `Cairo::RectangleInt -> Cairo::Region -> Std::Result Cairo::Status Cairo::Region`

#### translate

Type: `(Std::I32, Std::I32) -> Cairo::Region -> Cairo::Region`

#### union_

Type: `Cairo::Region -> Cairo::Region -> Std::Result Cairo::Status Cairo::Region`

#### union_rectangle

Type: `Cairo::RectangleInt -> Cairo::Region -> Std::Result Cairo::Status Cairo::Region`

#### xor

Type: `Cairo::Region -> Cairo::Region -> Std::Result Cairo::Status Cairo::Region`

#### xor_rectangle

Type: `Cairo::RectangleInt -> Cairo::Region -> Std::Result Cairo::Status Cairo::Region`

### namespace Cairo::ScaledFont

#### extents

Type: `Cairo::ScaledFont -> Cairo::FontExtents`

#### get_ctm

Type: `Cairo::ScaledFont -> Cairo::Matrix`

#### get_font_face

Type: `Cairo::ScaledFont -> Cairo::FontFace`

#### get_font_matrix

Type: `Cairo::ScaledFont -> Cairo::Matrix`

#### get_font_options

Type: `Cairo::ScaledFont -> Cairo::FontOptions`

#### get_scale_matrix

Type: `Cairo::ScaledFont -> Cairo::Matrix`

#### get_type

Type: `Cairo::ScaledFont -> Cairo::FontType`

#### glyph_extents

Type: `Std::Array Cairo::Glyph -> Cairo::ScaledFont -> Cairo::TextExtents`

#### status

Type: `Cairo::ScaledFont -> Cairo::Status`

#### text_extents

Type: `Std::String -> Cairo::ScaledFont -> Cairo::TextExtents`

### namespace Cairo::Status

#### clip_not_representable

Type: `Cairo::Status`

#### device_error

Type: `Cairo::Status`

#### device_type_mismatch

Type: `Cairo::Status`

#### file_not_found

Type: `Cairo::Status`

#### font_type_mismatch

Type: `Cairo::Status`

#### invalid_clusters

Type: `Cairo::Status`

#### invalid_content

Type: `Cairo::Status`

#### invalid_dash

Type: `Cairo::Status`

#### invalid_dsc_comment

Type: `Cairo::Status`

#### invalid_format

Type: `Cairo::Status`

#### invalid_index

Type: `Cairo::Status`

#### invalid_matrix

Type: `Cairo::Status`

#### invalid_path_data

Type: `Cairo::Status`

#### invalid_pop_group

Type: `Cairo::Status`

#### invalid_restore

Type: `Cairo::Status`

#### invalid_size

Type: `Cairo::Status`

#### invalid_slant

Type: `Cairo::Status`

#### invalid_status

Type: `Cairo::Status`

#### invalid_stride

Type: `Cairo::Status`

#### invalid_string

Type: `Cairo::Status`

#### invalid_visual

Type: `Cairo::Status`

#### invalid_weight

Type: `Cairo::Status`

#### negative_count

Type: `Cairo::Status`

#### no_current_point

Type: `Cairo::Status`

#### no_memory

Type: `Cairo::Status`

#### null_pointer

Type: `Cairo::Status`

#### pattern_type_mismatch

Type: `Cairo::Status`

#### read_error

Type: `Cairo::Status`

#### success

Type: `Cairo::Status`

#### surface_finished

Type: `Cairo::Status`

#### surface_type_mismatch

Type: `Cairo::Status`

#### temp_file_error

Type: `Cairo::Status`

#### user_font_error

Type: `Cairo::Status`

#### user_font_immutable

Type: `Cairo::Status`

#### user_font_not_implemented

Type: `Cairo::Status`

#### write_error

Type: `Cairo::Status`

### namespace Cairo::SubpixelOrder

#### bgr

Type: `Cairo::SubpixelOrder`

#### default

Type: `Cairo::SubpixelOrder`

#### rgb

Type: `Cairo::SubpixelOrder`

#### vbgr

Type: `Cairo::SubpixelOrder`

#### vrgb

Type: `Cairo::SubpixelOrder`

### namespace Cairo::Surface

#### flush

Type: `Cairo::Surface -> Std::IO ()`

#### mark_dirty

Type: `Cairo::Surface -> Std::IO ()`

#### write_to_png

Type: `Std::Path -> Cairo::Surface -> Std::IO ()`

### namespace Cairo::TextClusterFlags

#### backward

Type: `Cairo::TextClusterFlags`

### namespace Cairo::TextExtents

#### create

Type: `Cairo::TextExtents`

### namespace Cairo::ToyFontFace

#### create

Type: `Std::String -> Cairo::FontSlant -> Cairo::FontWeight -> Cairo::FontFace`

#### get_family

Type: `Cairo::FontFace -> Std::String`

#### get_slant

Type: `Cairo::FontFace -> Cairo::FontSlant`

#### get_weight

Type: `Cairo::FontFace -> Cairo::FontWeight`

## Types and aliases

### namespace Cairo

#### Antialias

Defined as: `type Antialias = Std::I32`

#### Cairo

Defined as: `type Cairo = unbox struct { ...fields... }`

#### CairoHandle

Defined as: `type CairoHandle = Std::Ptr`

#### Content

Defined as: `type Content = Std::I32`

#### Extend

Defined as: `type Extend = Std::I32`

#### FillRule

Defined as: `type FillRule = Std::I32`

#### Filter

Defined as: `type Filter = Std::I32`

#### FontExtents

Defined as: `type FontExtents = unbox struct { ...fields... }`

##### field `ascent`

Type: `Std::F64`

##### field `descent`

Type: `Std::F64`

##### field `height`

Type: `Std::F64`

##### field `max_x_advance`

Type: `Std::F64`

##### field `max_y_advance`

Type: `Std::F64`

#### FontFace

Defined as: `type FontFace = unbox struct { ...fields... }`

#### FontOptions

Defined as: `type FontOptions = unbox struct { ...fields... }`

#### FontSlant

Defined as: `type FontSlant = Std::I32`

#### FontType

Defined as: `type FontType = Std::I32`

#### FontWeight

Defined as: `type FontWeight = Std::I32`

#### Format

Defined as: `type Format = Std::I32`

#### Glyph

Defined as: `type Glyph = unbox struct { ...fields... }`

##### field `index`

Type: `Std::U64`

##### field `x`

Type: `Std::F64`

##### field `y`

Type: `Std::F64`

#### HintMetrics

Defined as: `type HintMetrics = Std::I32`

#### HintStyle

Defined as: `type HintStyle = Std::I32`

#### LineCap

Defined as: `type LineCap = Std::I32`

#### LineJoin

Defined as: `type LineJoin = Std::I32`

#### Matrix

Defined as: `type Matrix = unbox struct { ...fields... }`

##### field `xx`

Type: `Std::F64`

##### field `yx`

Type: `Std::F64`

##### field `xy`

Type: `Std::F64`

##### field `yy`

Type: `Std::F64`

##### field `x0`

Type: `Std::F64`

##### field `y0`

Type: `Std::F64`

#### Operator

Defined as: `type Operator = Std::I32`

#### Overlap

Defined as: `type Overlap = Std::I32`

#### Path

Defined as: `type Path = unbox struct { ...fields... }`

#### Pattern

Defined as: `type Pattern = unbox struct { ...fields... }`

#### PatternType

Defined as: `type PatternType = Std::I32`

#### RectangleInt

Defined as: `type RectangleInt = unbox struct { ...fields... }`

##### field `x`

Type: `Std::I32`

##### field `y`

Type: `Std::I32`

##### field `width`

Type: `Std::I32`

##### field `height`

Type: `Std::I32`

#### RectangleList

Defined as: `type RectangleList = unbox struct { ...fields... }`

#### Region

Defined as: `type Region = unbox struct { ...fields... }`

#### ScaledFont

Defined as: `type ScaledFont = unbox struct { ...fields... }`

#### Status

Defined as: `type Status = Std::I32`

#### SubpixelOrder

Defined as: `type SubpixelOrder = Std::I32`

#### Surface

Defined as: `type Surface = unbox struct { ...fields... }`

#### TextCluster

Defined as: `type TextCluster = unbox struct { ...fields... }`

##### field `num_bytes`

Type: `Std::I32`

##### field `num_glyphs`

Type: `Std::I32`

#### TextClusterFlags

Defined as: `type TextClusterFlags = Std::U32`

#### TextExtents

Defined as: `type TextExtents = unbox struct { ...fields... }`

##### field `x_bearing`

Type: `Std::F64`

##### field `y_bearing`

Type: `Std::F64`

##### field `width`

Type: `Std::F64`

##### field `height`

Type: `Std::F64`

##### field `x_advance`

Type: `Std::F64`

##### field `y_advance`

Type: `Std::F64`

### namespace Cairo::FontFace

#### FontFaceHandle

Defined as: `type FontFaceHandle = Std::Ptr`

### namespace Cairo::FontOptions

#### FontOptionsHandle

Defined as: `type FontOptionsHandle = Std::Ptr`

### namespace Cairo::Path

#### PathHandle

Defined as: `type PathHandle = Std::Ptr`

### namespace Cairo::Pattern

#### PatternHandle

Defined as: `type PatternHandle = Std::Ptr`

### namespace Cairo::RectangleList

#### RectangleListHandle

Defined as: `type RectangleListHandle = Std::Ptr`

### namespace Cairo::Region

#### RegionHandle

Defined as: `type RegionHandle = Std::Ptr`

### namespace Cairo::ScaledFont

#### ScaledFontHandle

Defined as: `type ScaledFontHandle = Std::Ptr`

### namespace Cairo::Surface

#### SurfaceHandle

Defined as: `type SurfaceHandle = Std::Ptr`

## Traits and aliases

## Trait implementations