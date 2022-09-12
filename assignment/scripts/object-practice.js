console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: "Chris",
  lastName: "Maki",
  hasSiblings: true,
  shoeCount: 4,
  favThreeFoods: ["Burgers","Smoothies","Chicken"]
};
console.log('A little about me:', me);
 /* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName + " " + me.lastName;
console.log(fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log(me.favThreeFoods[0]);
console.log(me.favThreeFoods[me.favThreeFoods.length-1])


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log("Shoe count:",me.shoeCount);
me.shoeCount++; 
console.log("New shoe count:",me.shoeCount);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = "Blue";
console.log(me);

// IMPORTANT: You asked to "do this the same way you updated the variable above"
// As you can see, it's not exactly the same way. I understand that I could have
// done me.shoeCount = 5, but that seems like a less flexible way to change
// that value. Maybe I'm wrong. Either way, I'm letting you know here that
// I understand I could have done it two different ways, but I'm leaving the
// "shoeCount++" version. I hope that's okay. 