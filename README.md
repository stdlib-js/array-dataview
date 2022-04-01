<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# DataView

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Constructor][mdn-dataview] which returns a data view representing a provided array buffer.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
DataView = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@umd/bundle.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@umd/bundle.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.DataView;
})();
</script>
```

#### DataView( buffer\[, byteOffset\[, byteLength]] )

Returns a [`DataView`][mdn-dataview] representing a provided array buffer.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );

var buf = new ArrayBuffer( 5 );
// returns <ArrayBuffer>

var dv = new DataView( buf );
// returns <DataView>
```

* * *

### Properties

#### DataView.prototype.buffer

**Read-only** property which returns the underlying array buffer.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );

var buf1 = new ArrayBuffer( 5 );
var dv = new DataView( buf1 );

var buf2 = dv.buffer;
// returns <ArrayBuffer>

var bool = ( buf1 === buf2 );
// returns true
```

#### DataView.prototype.byteLength

**Read-only** property which returns the length (in bytes) of the [`DataView`][mdn-dataview].

<!-- eslint-disable stdlib/require-globals -->

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );

var buf = new ArrayBuffer( 5 );
var dv = new DataView( buf );

var byteLength = dv.byteLength;
// returns 5
```

#### DataView.prototype.byteOffset

**Read-only** property which returns the number of bytes from the [`DataView`][mdn-dataview] to the start of the underlying array buffer.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );

var buf = new ArrayBuffer( 5 );
var dv = new DataView( buf, 3 );

var byteOffset = dv.byteOffset;
// returns 3
```

* * *

### Methods

TODO: document methods

</section>

<!-- /.usage -->

* * *

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-uint8-base-to-binary-string@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@umd/bundle.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@umd/bundle.js"></script>
<script type="text/javascript">
(function () {

// Create a new ArrayBuffer:
var buf = new ArrayBuffer( 64 );

// Create a new DataView:
var dv = new DataView( buf );

// Set values in the view:
var i;
for ( i = 0; i < dv.byteLength/8; i++ ) {
    dv.setFloat64( i*8, randu()*100.0, IS_LITTLE_ENDIAN );
}

// Create a "bytes" view of the underlying array buffer:
var bytes = new Uint8Array( dv.buffer );

// Print the bytes:
for ( i = 0; i < bytes.length; i++ ) {
    console.log( 'byte %d: %s', i, toBinaryString( bytes[ i ] ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/buffer`][@stdlib/array/buffer]</span><span class="delimiter">: </span><span class="description">ArrayBuffer.</span>
-   <span class="package-name">[`@stdlib/array/typed`][@stdlib/array/typed]</span><span class="delimiter">: </span><span class="description">create a typed array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-dataview.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-dataview

[test-image]: https://github.com/stdlib-js/array-dataview/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-dataview/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-dataview/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-dataview?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-dataview.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-dataview/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-dataview/tree/deno
[umd-url]: https://github.com/stdlib-js/array-dataview/tree/umd
[esm-url]: https://github.com/stdlib-js/array-dataview/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-dataview/main/LICENSE

[mdn-dataview]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView

<!-- <related-links> -->

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer/tree/umd

[@stdlib/array/typed]: https://github.com/stdlib-js/array-typed/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
