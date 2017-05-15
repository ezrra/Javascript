/**
  An array containing hashes of names.
  Return a string formatted as list of names sparated by commas.
  Test:

  list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
  // returns 'Bart, Lisa & Maggie'
  list([ {name: 'Bart'}, {name: 'Lisa'} ])
  // returns 'Bart & Lisa'
  list([ {name: 'Bart'} ])
  // returns 'Bart'
  list([])
  // returns ''
  */

// First try
function list(names) {
  var string;
  var last;
  var ampersand = ' & ';
  var comma = ', ';

  names = names.map(function (item) {
    return item.name;
  });

  // print list
  console.log(names);

  if (names.length > 2) {
    last = names.pop();
    string = names.join(comma) + [ampersand, last].join('');
    // print test
    // console.log(names.join(comma))
  } else if (names.length > 1) {
    string = names.join(ampersand);
  } else {
    string = names[0] || '';
  }

  // print the last item
  // console.log(names.pop());

  // print result
  // console.log(string)
};

/*
 * Objects
 */
var names   = [{ name: 'kevin' }, { name: 'John'}, { name: 'Josh' }];
var names1  = [{ name: 'kevin' }, { name: 'John'}];
var names2  = [{ name: 'kevin' }];
var names3  = [{ name: 'kevin' }, { name: 'John'}, { name: 'Josh' }, { name: 'Michael' }];

list(names3);
