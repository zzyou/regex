// Create some dates in Javascript.
// Create your Birthday
// Can you format/print a date in different formats?
var bday = new Date("February 16, 1984");
console.log(bday);

bday.getTime();


// Explain the "epoch time" to a friend. Why do you think "epoch time is useful?
// "Epoch Time" or "Unix Time" is the number of milliseconds since January 1, 1970 0:00:00.
// The advantage of working in milliseconds is that you are less likely to get an error from mishandling time zone conversion.


// Learn about other ways of working with dates
// Look at Moment.js documentation


// If you add (date1 + date2) or subtract (date1 - date2) two dates in Javascript, it returns the time difference in milliseconds. Can you write a function to subtract two dates but return the time difference in minutes? What about as a date object?
function timeDiff(date1, date2) {
    return Math.floor((date1 - date2)/1000/60);
}

var today = new Date();
var bday = new Date("February 16, 1984");

console.log(timeDiff(today, bday));

function dateObj(date1, date2) {
    return new Date(date1 - date2);
}

console.log(dateObj(today, bday));

// var diff = today - bday;
// console.log(diff);
// var minutes = Math.floor(diff/1000/60);
// var seconds = Math.floor(diff/1000%60);
// console.log(minutes);
// console.log(seconds);
// today + bday;