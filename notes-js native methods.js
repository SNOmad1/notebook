// Native methods that check if... 								// boolean result

jsDatatype.isArray()                                            // it's an array
jsArray.every()                 jsArray.some()                  // every|any element in an array pass a test
jsArrayOrString.includes()                                      // contains the specified element or string/chars
jsString.startsWith()           jsString.endsWith()             // begins|ends with specified chars

// Native methods that return the index of...

jsArrayOrString.indexOf()       jsArrayOrString.lastIndexOf()   // first|last found occurrence of a specified value
jsArray.findIndex()                                             // first element in an array that pass a test
jsString.search()                                               // a specified value or REGEX

// Native methods that return...

jsArrayOrString[]                                               // char or element at a specified index
jsString.charAt()               jsString.charCodeAt()           // char|unicode of the char at a specified index
jsArray.find()                                                  // the first array element that passes a test
jsString.match()                                                // matches against a REGEX

// Native methods that mutate the array by...

jsArray.shift()                 jsArray.pop()                   // removing the first/last element and returns that element
jsArray.unshift()               jsArray.push()                  // adding new elements to the begin|end and returns new length
jsArray.splice()                                                // adding|removing elements from an array
jsArray.copyWithin()                                            // copying elements to and from specified positions
jsArray.reverse()               								// reversing the order of the elements in an array
jsArray.sort()                  								// sorting the elements of an array
jsArray.fill()                                                  // filling the elements from a start index to an end index with a static value

// Native methods to create a new array/string based on an existent one...

jsArrayOrString.concat()                                        // by joining two or more strings/arrays
jsArray.map()                                                   // with the result of calling a function on each element
jsArray.reduce()                jsArray.reduceRight()           // reducing values to a single value (left-right|right-left)
jsArray.filter()                                                // with every element in an array that pass a test
jsArray.forEach()                                               // calling a function for each array element
jsArrayOrString.slice()                                         // with a selected part
jsString.replace()                                              // with a specified value replacing a specified value or REGEX
jsString.substr()               jsString.substring()            // extracts chars from a specified index and length|two indexes
jsString.toLowerCase()          jsString.toUpperCase()          // with the string converted to lowercase|uppercase letters
jsString.trim()                                                 // removes whitespace from both ends of a string
jsArray.entries()                                               // with the key/value pairs for each index in the array
jsArray.keys()                                                  // the keys for each index in the array

// Native methods to create a new datatype based on an existent one by...

jsArray.join()                                                  // joining all elements into a string (you can define a separator)
jsDatatype.toString()                                           // converting to a string and returns the result
jsString.split()                                                // spliting a string into an array of substrings
JSON.parse()                    JSON.stringify()                // parsing a JSON string into a JS value or object and vice versa
jsDate.parse()                                                  // parsing a jsDate string and returns millisecs since Jan 1, 1970
jsDate.toDateString()                                           // converting the jsDate portion of a Date object into a string
jsIterableObject.from()                                         // creating an array from an iterable object

// Native jsDate methods to...

jsDate.getFullYear()            jsDate.setFullYear()            // get|set year as a four digit number (yyyy)
jsDate.getMonth()               jsDate.setMonth()               // get|set month as a number (0-11)
jsDate.getDate()                jsDate.setDate()                // get|set day as a number (1-31)
jsDate.getHours()               jsDate.setHours()               // get|set hour (0-23)
jsDate.getMinutes()             jsDate.setMinutes()             // get|set minute (0-59)
jsDate.getSeconds()             jsDate.setSeconds()             // get|set second (0-59)
jsDate.getMilliseconds()        jsDate.setMilliseconds()        // get|set millisecond (0-999)
jsDate.getTime()                jsDate.setTime()                // get|set time (milliseconds since January 1, 1970)
jsDate.getDay()                                                 // get weekday as a number (0-6)

jsDate.now()                                                    // Returns milliseconds since midnight Jan 1, 1970

// JS regular expressions
// syntax: /pattern/modifiers; 

var regex = /w3schools/i;       // e.g. w3schools is a pattern, i is a modifier 

jsRegex.test(string)            // search a string for a pattern and returns true or false
jsRegex.exec(string)            // search a string for a pattern and returns the found text or null

// regExp patterns to match...

[abc]   [^abc]                  // any of the characters between|not between the brackets range
[0-9]   [^0-9]                  // any of the digits between|NOT between the brackets range
(x|y)                           // any of the alternatives separated with |

.                               // a single character, except newline or line terminator
\b      \B                      // a match at the beginning/end|not at the beginning/end of a word
\w      \W                      // a word|non-word character
\d      \D                      // a digit|non-digit character
\s      \S                      // a whitespace|non-whitespace character
\t      \v                      // a tab|vertical tab character
\n                              // a new line character
\0                              // a NUL character
\f                              // a form feed character
\r                              // a carriage return character
\xxx    \xdd                    // the character specified by an octal number xxx|hexadecimal number dd
\uxxxx                          // the Unicode character specified by a hexadecimal number xxxx

n*      n+      n?              // any string that contains 0+|1+|0 or 1 occurrences of n
n{X}                            // any string that contains a sequence of X n's
n{X,Y}                          // any string that contains a sequence of X to Y n's
n{X,}                           // any string that contains a sequence of at least X n's
^n      n$                      // any string with n at the beginning/end of it
?=n     ?!n                     // any string that is followed|not followed by a specific string n

// regExp modifiers to...

i                               // case-insensitive matching
g                               // global match (find all matches rather than stopping after first match)
m                               // multiline matching
x                               // ignore whitespace

// JS Math object relevant methods and properties that return...

Math.pow()      or: x ** y      // the value of x to the power of y
Math.sqrt()     Math.cbrt()     // the square|cubic root of x

Math.max()      Math.min()      // the number with the max/min value
Math.floor()    Math.ceil()     // rounds downwards|upwards the nearest integer
Math.round()                    // rounds to the nearest integer
Math.trunc()                    // the integer part of a number
Math.abs()                      // the absolute value

Math.random()                   // a random number between 0 and 1
Math.PI         Math.SQRT2      // PI|square root of 2

// JS properties

jsArrayOrString.constructor     // returns the function that created the datatype object's prototype
jsArrayOrString.length          // gets or returns the number of elements in a datatype
jsDatatype.prototype            // to add properties and methods to a datatype