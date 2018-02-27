//1. Write a function that takes a word and returns true if the word ends with tonica.
function tonica(word) {
    return /tonica$/.test(word);
}

tonica("techtonica");
  

//2. Write a function expression that takes a string replaces all instances of symantec with semantic?
function semantic(string) {
    return string.replace(/symantec/g, "semantic");
}

semantic("This is symantec. And symantec is great!");


//3. Write a function that takes a string and deletes all words that end in ing?
function ing(string) {
    var arr = string.split(/[^A-Za-z0-9'_"-]/);
    console.log(arr);
    var newArr = [];
    for (let word of arr) {
      if (/ing$/i.test(word) === false) {
        newArr.push(word);
      }
    }
    return newArr.join(" ");
  }
  
ing("Playing hard. Studying hard. Ingredients are playing?");


//4. Write a function that takes a string and returns true if it is an email address? Compare your answer with your neighbor.
function email(string) {
    return /.+@.+\..+/.test(string);
  }
  
email("name@email.com");


//5. Write a function that takes a string containing names separated by commas like "Leah, Russell, Michelle" and returns an array of names, ["Leah", "Russell", "Michelle"]
function toArray(names) {
    return names.split(",");
  }

toArray("Leah, Russell, Michelle");


//Write a regular expression that matches any of the Techontica participants names but not the instructors
var ourNames = ["Michelle", "Stephanie", "Mary", "Ashley", "Zaire", "Lian", "TaLea", "Soona", "Vivian", "Zhenzhen", "Karla"];
//Only "Karla" is the instructor.

/^[^K]/i.test("Karla");


//What about a regular expression for all even-length strings?

