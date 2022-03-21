const {compose,pipe} = require("lodash/fp");

const trim = (string) => string.trim()
const add = (string) => "Mr." +string
const toLowercase = (string)=> string.toLowerCase()

// COMPOSE --- order from right
const res = compose(add,toLowercase,trim)

//PIPE --- order from left
const res2 = pipe(trim,toLowercase,add)

console.log(res("   shakib sarar arnab   "));
console.log(res2("      shakib sarar arnab   "));

