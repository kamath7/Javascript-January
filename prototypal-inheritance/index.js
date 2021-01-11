var person = {
  fname: "Default",
  lname: "Default",
  getFullName: function () {
    return this.fname + " " + this.lname;
  },
};

var nata = {
  fname: "Nata",
  lname: "Lalle",
};

//Shouldn't use this. Leads to performance problems

nata.__proto__ = person;
console.log(nata.getFullName());
console.log(nata.fname); //you get nata here because the object nata has the fname property and the engine need not look down the prototype chain

var seere = {
    fname: 'Seere'
};
seere.__proto__ = person;
console.log(seere.getFullName()); 
console.log(seere.fname);
console.log(seere.lname); //gives default. Why? Because seere does not have  a lname. Goes down the prototype chain and voila, finds it on person object