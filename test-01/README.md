Simple example of a mocha test for a math module.

Run `npm install` to install dependencies (mocha has been added to package.json
devDependencies).

To test, run either of the following commands:

    $ mocha

or

    $ npm test

The second command works because mocha has been added to package.json scripts.
Just like 'start', 'test' is special. Normally script commands must be run using
the following format:

   $ npm run &lt;script&gt;

Of course, the full format also works for 'start' and 'test'.

Note that the mocha test module looks a bit weird. Similar to how node loads
a module that has been required by another module and implicitly wraps it in
a function, mocha also does something similar. You do not need to export anything
from your mocha tests.

