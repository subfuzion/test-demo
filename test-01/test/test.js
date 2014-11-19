// assert is a core module
var assert = require('assert');

// require our math module. This works because the math
// module is in ../lib/index.js (and index.js can be
// implicitly loaded)
var math = require('../lib');

// 'describe' is used to create test groups (or suites)
// mocha will read this file and call the callback functions
// for each test group. These describe functions can be
// nested to create sub-groups
describe('add', function() {

  // each 'it' sets up a test case and registers a callback
  // that mocha will call
  it ('should return 5 when called with 2 and 3', function() {
    var expected = 5;
	var actual = math.add(2, 3);

	// ultimately, anything that raises an exception will
	// fail the test. assert works by testing that an actual
	// value matched the expected value.
	// assert also has convenience functions that can be used
	// (see the node docs)
	assert(actual, expected);
  });

});

describe('sub', function() {

  it ('should return 2 when called with 5, 3', function() {
    // an extra argument can be used to provide better error messages
	// when an assert fails
    assert(math.sub(5, 3), 2, "error: the sub function is stupid");
  });

});

  
