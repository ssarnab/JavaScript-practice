const greet = (abc) => {
    console.log(abc());
}
const abc = ()=>{
    return "Hello Milky Way"
}
greet(abc)

const greet2 = ()=> {
    return ()=>{
        return "Hello Milky Way!"
    };
}
console.log(greet2()());