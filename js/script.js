// Step 1: Convert the following highlighted identifiers to Camel Case notation
// let someMonth           // Declare a veriable
// function theMonth()     //Declare a function
// let currentMonth        // Declare a veriable
// let summerMonth         // Declare a veriable
// let myLibraryFunction   // Declare a veriable

// Step 2: The examples of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression
// 100.21  // Number
// "This course is very interesting!" //String
// false  // Boolean
// null   // null

// Step 3: two examples of complex / variable expressions
// let $myScore = (500*4-50)/4;
// let _myResult = null || undefined;

// Step 4: Declare 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. 
// Use Camel Casing and Hungarian Notation when naming your identifiers
// let firstName, lastName, address, city, state, zipCode, myAge, referralSource, mayWeContactYou  //Camel
// let txtFirstName, txtLastName, txtAddress, txtCity, txtState, numZipCode, numYourAge, txtReferralSource, celMayWeContactYou; // Hungarian Notation

// Step 5: demonstrate 3 ways for declaring and assigning values to some variables.
// Way 1
// let firstName, lastName, zipCode;
// firstName = 'Anne';
// lastName = 'Chao';
// zipCode = 92188;
// Way 2
// let firstName = 'Anne';
// let lastName = 'Chao';
// let zipCode = 92188;
// Way 3
// let firstName = 'Anne', lastName = 'Chao', zipCode = 92188;

// Step 6: Variable Coercion: A string + A number -->A string
// let age = 18;
// let myWord = "My age is";
// console.log(myWord +' ' + age);
// console.info(myWord + " " + `${age}`);

// Step 7: coerced result
// add a Boolean and a string and display the coerced result
// let isReal = true, thisThing = "The description my friend said is";
// let theTruth = thisThing + ' ' + isReal;
// console.log(theTruth);
// console.info(`${thisThing}` + ' ' +`${isReal}`);
// add a number and a Boolean and display the coerced result.
// let aNum = 100, isTrue = true;
// isNumber = aNum + isTrue;
// console.log(isNumber);

// Step 8: about escape sequence
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
// console.log(someString)

// Step 9: creat a null value and an undefined value
// Create a variable that produces a null value in the console window.
// let isNull = 200
// isNull = null
// alert(isNull)
// Create a variable that produces an undefined value in the console window.
// let isUndef
// alert(isUndef)

// Step 10: Use the unary typeof operator on various literals 
// to return the following types within the console window: string, number, Boolean, object, and undefined.
// let myFirstname = "Anne"
// console.log(typeof myFirstname)
// let myScore = 98
// console.log(typeof myScore)
// let isGood = false
// console.log(typeof isGood)
// let x = new Object()
// console.log(typeof x)
// let myGrade
// console.log(typeof myGrade)

// Step 11:
// Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
// Hello Zak Ruvalcaba, welcome to the JavaScript class!
// let theSpace = " ", myFirstname = "Anne"
// alert("Hello" + theSpace + myFirstname + ", welcome to the JavaScript class!" )

// Step 12:
// let greeting = "Hello ", name = "Anne", welcoming = "welcome to the JavaScript Class!"
// alert(greeting + `${name}` + ", " + welcoming)

// Step 13:
// let greeting = "Hello Anne ", course = "JavaScript"
// alert(greeting + ", " + "welcome to the " + `${course}` + " class!")

// Step 14: Line break
// alert("\nHello Zak Ruvalcaba, \nwelcome to the JavaScript class!")

// Step 15: prompt()
// let name = prompt("Please input your name:")
// alert("\nHello " + `${name}` + ", \nwelcome to the JavaScript class!")

// Step 16: prompt()
// let $yourName = prompt(`Please enter your name`);
// let _yourClass = prompt(`Please enter your class name`);
// alert('Hello' + ' ' + $yourName + '.\nWelcome to the' + ' ' + `${_yourClass}` + ' ' + 'class!');

// Step 17: Addition
// let x = 10, y = 20
// total = x + y
// console.log(total)

// Step 18: Add and assign
// let x = 20
// x += 20
// console.log(x)

// Step 19: Mutiply and assign
// let x = 20
// x *= 5
// console.log(x)

// Step 20: Modulus, divie and assign
// let x = 20 % 3
// x /= 1
// console.log(x)

// Step 21: Comparison and true
// let theNumber = Number(prompt("Please input a number: "))
// if (theNumber > 0) {
//     console.log("You entered a positive number!")
// } else {
//     if (theNumber === 0) {
//         console.log("You entered zero, please re-enter a number.")
//     } else {
//         console.log("You entered a negative number!")
//     }
// }

// Step 22: Comparison and false
// let runSpeed
// runSpeed = Number(prompt("Please enter your run speed: "))
// if (runSpeed <=100) {
//     console.log('You can\'t get a prize.')
// } else {
//     console.log('Congratunations! You will get a prize.')
// }; 