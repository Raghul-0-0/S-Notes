bite
==========

Lightweight library for word decoding in pure javascript. Contains methods for
decoding/encoding bytestring words to/from numbers (signed and unsigned, big and little
endian).

API
----------
* **decodeWord**(< _Buffer_ >buffer, [< _bool_ >signed], [< _bool_ >bigEndian]) - (_void_)  
    Decodes a word contained in `buffer`, i.e. all of `buffer` is treated as
    _one_ word. Treats the word as signed if `signed` is set to `true`
    (`false` is default), and big endian if `bigEndian` is set to `true`
    (`false` is default).

* **encodeWord**(< _Buffer_ >buffer, < _number_ >value, [< _bool_ >signed], [< _bool_ >bigEndian]) - (_buffer_)  
    Encodes a number `value` into a bytestring word of the same length as
    `buffer`, and stores the result in `buffer`. Will create the word as signed
    if `signed` is set to `true` (`false` is default), and big endian if
    `bigEndian` is set to `true` (`false` is default). The buffer provided is
    returned for convenience.

Example
----------
```javascript
var bite = require('bite');

var buffer = new Buffer([0xFF, 0xFF]);
var value = bite.decodeWord(buffer, true); // = -1
var word = bite.encodeWord(new Buffer(2), value); // = <Buffer ff ff>
```
