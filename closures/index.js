//When inner function has access to outer function/scope variables 

let name = "Adithya";

function sayMyName(){
    console.log(name); //gives adithya. Why? Because sayMyName has access to global scope variables
}
sayMyName();

function sumMeA(){
    let a = 10;
    function total(){
        let b = 20;
        console.log(a+b);
    }
    total();
}
// total()// wouldn't work. Why because it's top to down and global scope doesn't have access to sumMeA's lexical scope 
sumMeA() // would return 30