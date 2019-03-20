//Convert
//1
function sayHello(name){
    console.log(`Hi, ${name}!`)
}
2//
function getOlder(age){
    return age+50
}

//Used arrow function to convert
//1
sayHello = name => console.log(`Hi, ${name}!`);

//2
//if put return I must use the curly brackets otherwise it won't work
getOlder = age => {return age+50;}

//Debug
//missing parenthesies  
const multiply = (num1, num2) => console.log(num1 * num2); 

//missing curly brackets in the beginning and end of the arrow function
//subtractFive num the logic is to switch the 5 and num in the constant diff 
const subtractFive = num => {
	const diff = 5-num; 
	console.log(diff);
}
//missing closing curly brackets and the arrow of the function
const printName = name => function() {
    console.log(name);
}  

//Exporting JS files with Node
module.exports = {
    sayHello: sayHello,
    getOlder: getOlder,
    multiply: multiply,
    subtractFive: subtractFive,
    printName: printName
}
