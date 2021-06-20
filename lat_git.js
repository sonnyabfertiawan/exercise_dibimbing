//REGEX (REGULAR EXPRESSION)

//literals object regex
let regex = /hello/;

console.log(regex.exec('hello world')); //
console.log(regex.test('hello world')); // test untuk melihat ada kata hello gak di kalimat inputannya 
console.log(regex.test('haloo')); // test untuk melihat ada kata hello gak di kalimat inputannya 

console.log('-----------------------');

//regex number
let regexNum = /[0-9]/;
console.log(regexNum.test('1')); //TRUE
console.log(regexNum.test('A')); //FALSE

console.log('-----------------------');

//regex character
let regexChar = /@/;
console.log(regexChar.test('@pratama'));
console.log(regexChar.test('%%%'));