//call
let nata = { name: "Lalle" };

function getFullName(greeting) {
    console.log(this)
  return greeting + " " + this.name;
}

// console.log(getFullName(nata, "How are you?")); //would return the global object along with how are you? undefined
console.log(getFullName.call(nata,'How are you?')); //call would force the this to object passed as the first arguement. this is now set to the nata object

//apply 
let kams ={ name: 'kama', age:23}
function getDetails(greeting, thankyoumsg){
    console.log(this);
    return greeting+" "+this.name+". You are "+this.age+" years old. "+thankyoumsg;
}
console.log(getDetails.call(kams,'How are you?','Thank you for joining!'))// using call
console.log(getDetails.apply(kams,['How are you?','Thank you for joining!'])) //using apply
//apply does the same work as call except you now give an array for the arguements

//bind

//call and apply does not invoke the function. It binds the this to object arguement

let cheti = {name:'Chesthan',age: 45};
function spellMyName(greeting){
    return greeting+" "+this.name+"amma. You are "+this.age+" years old."
}
let chetifunc = spellMyName.bind(cheti,"Hello");
console.log(chetifunc())