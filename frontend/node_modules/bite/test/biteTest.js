var assert = require('chai').assert;
var bite = require('../index');

suite('bite', function() {
    suite('decodeWord', function() {
        var buffer = new Buffer([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09]);

        suite('Unsigned', function () {
            suite('Little endian', function () {
                var sum = 0;

                for (var n = 1; n <= buffer.length; ++n) {
                    sum = sum + n*Math.pow(256, n-1);

                    var foo = function () {
                        var word = buffer.slice(0, n);
                        var value = sum;

                        test('Decodes ' + n + '-byte word', function () {
                            assert.equal(bite.decodeWord(word), value);
                        });
                    }();
                }
            });

            suite('Big endian', function () {
                var sum = 0;

                for (var n = 1; n <= buffer.length; ++n) {
                    sum = sum*256 + n;

                    var foo = function () {
                        var word = buffer.slice(0, n);
                        var value = sum;

                        test('Decodes ' + n + '-byte word', function () {
                            assert.equal(bite.decodeWord(word, false, true), value);
                        });
                    }();
                }
            });
        });

        suite('Signed', function () {
            suite('Little endian', function () {
                var sum = 0;

                for (var n = 1; n <= buffer.length; ++n) {
                    sum = sum + n*Math.pow(256, n-1);

                    var foo = function () {
                        var word = buffer.slice(0, n);
                        var value = sum;

                        test('Decodes ' + n + '-byte word', function () {
                            assert.equal(bite.decodeWord(word, true), value);
                        });
                    }();
                }

                test('Decodes positive 2-byte word', function () {
                    var word = new Buffer([0xFF, 0x7F]);

                    assert.equal(bite.decodeWord(word, true), 32767);
                });

                test('Decodes negative 2-byte word', function () {
                    var word = new Buffer([0x7F, 0xFF]);

                    assert.equal(bite.decodeWord(word, true), -129);
                });
            });

            suite('Big endian', function () {
                var sum = 0;

                for (var n = 1; n <= buffer.length; ++n) {
                    sum = sum*256 + n;

                    var foo = function () {
                        var word = buffer.slice(0, n);
                        var value = sum;

                        test('Decodes ' + n + '-byte word', function () {
                            assert.equal(bite.decodeWord(word, true, true), value);
                        });
                    }();
                }

                test('Decodes positive 2-byte word', function () {
                    var word = new Buffer([0x7F, 0xFF]);

                    assert.equal(bite.decodeWord(word, true, true), 32767);
                });

                test('Decodes negative 2-byte word', function () {
                    var word = new Buffer([0xFF, 0x7F]);

                    assert.equal(bite.decodeWord(word, true, true), -129);
                });
            });
        });
    });

    suite('encodeWord', function() {
        suite('Unsigned', function () {
            suite('Little endian', function () {
                var sum = 0;

                for (var n = 1; n <= 4; ++n) {
                    sum = sum*256 + n;

                    var foo = function () {
                        var buffer = new Buffer(n);
                        var value = sum;

                        test('Encodes ' + n + '-byte word', function () {
                            bite.encodeWord(buffer, value);
                            assert.equal(bite.decodeWord(buffer), value);
                        });
                    }();

                }
            });

            suite('Big endian', function () {
                var sum = 0;

                for (var n = 1; n <= 4; ++n) {
                    sum = sum*256 + n;

                    var foo = function () {
                        var buffer = new Buffer(n);
                        var value = sum;

                        test('Encodes ' + n + '-byte word', function () {
                            bite.encodeWord(buffer, value, false, true);
                            assert.equal(bite.decodeWord(buffer, false, true), value);
                        });
                    }();

                }
            });
        });

        suite('Signed', function () {
            suite('Little endian', function () {
                var sum = 0;

                for (var n = 1; n <= 4; ++n) {
                    sum = sum*256 + n;

                    var foo = function () {
                        var buffer = new Buffer(n);
                        var value = sum;

                        test('Encodes ' + n + '-byte word', function () {
                            bite.encodeWord(buffer, value, true);
                            assert.equal(bite.decodeWord(buffer, true), value);
                        });
                    }();
                }

                test('Encodes positive 2-byte word', function () {
                    var value = 3456;

                    var word = bite.encodeWord(new Buffer(2), value, true);
                    assert.equal(bite.decodeWord(word, true), value);
                });

                test('Encodes negative 2-byte word', function () {
                    var value = -3456;

                    var word = bite.encodeWord(new Buffer(2), value, true);
                    assert.equal(bite.decodeWord(word, true), value);
                });
            });

            suite('Big endian', function () {
                var sum = 0;

                for (var n = 1; n <= 4; ++n) {
                    sum = sum*256 + n;

                    var foo = function () {
                        var buffer = new Buffer(n);
                        var value = sum;

                        test('Encodes ' + n + '-byte word', function () {
                            bite.encodeWord(buffer, value, true, true);
                            assert.equal(bite.decodeWord(buffer, true, true), value);
                        });
                    }();
                }

                test('Encodes positive 2-byte word', function () {
                    var value = 3456;

                    var word = bite.encodeWord(new Buffer(2), value, true, true);
                    assert.equal(bite.decodeWord(word, true, true), value);
                });

                test('Encodes negative 2-byte word', function () {
                    var value = -3456;

                    var word = bite.encodeWord(new Buffer(2), value, true, true);
                    assert.equal(bite.decodeWord(word, true, true), value);
                });
            });
        });
    });
});
