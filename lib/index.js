/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Constructor which returns a data view representing a provided array buffer.
*
* @module @stdlib/array-dataview
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
* var DataView = require( '@stdlib/array-dataview' );
*
* var buf = new ArrayBuffer( 10 );
* // returns <ArrayBuffer>
*
* var dv = new DataView( buf );
* // returns <DataView>
*/

// MODULES //

var hasDataViewSupport = require( '@stdlib/assert-has-dataview-support' );
var builtin = require( './main.js' );
var polyfill = require( './polyfill.js' );


// MAIN //

var ctor;
if ( hasDataViewSupport() ) {
	ctor = builtin;
} else {
	ctor = polyfill;
}


// EXPORTS //

module.exports = ctor;
