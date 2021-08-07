// Dates & times
// Dates in Javascript are a type of data under the object type
// they are reference types, not primitive data types
// a constructor is used to create a new object
// here we use the new and date()constructor to designate a new object of date type
const now = new Date(); // This creates a date object that will always return the current time and date
console.log(now)
// this will log a date in long format Mon Aug 02 2021 21:26:13 GMT+1000 (Australian Eastern Standard Time)

// If we want to add a specific point in time as a date to a variable we must specify this as a string
const then = new Date('February 1 2020');
console.log(then) // Logs Sat Feb 01 2020 00:00:00 GMT+1100 (Australian Eastern Daylight Time)

// the format can be customized
console.log(now.getFullYear()); // 2021
console.log(now.getMonth()); // 7
console.log(now.getDate()); // 2
console.log(now.getDay()); //  1
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

// date strings
console.log(now.toDateString()); // Mon Aug 02 2021

// timestamps are represented in the number of milliseconds since 1970
console.log(now.getTime()); // 1627903855911
// Timestamps can be used to compare two dates

const before = new Date('February 1 2020');
const after = new Date();

console.log(before.getTime(),after.getTime()) // 1580475600000 1627951394650

// To find the time between two dates we simply subtract them to find the difference

console.log(after.getTime() - before.getTime()); //47475844788
const diff = after.getTime() - before.getTime();

// This can then be converted to other formats
const mins = Math.round(diff / 1000 / 60);
const hour = Math.round(mins / 60);
const days = Math.round(hour / 24);

console.log(`The blog was written ${mins} mins or ${hour} hours or ${days} days ago`);

// We can also convert time stamps to a date object
const timestamp = 47475844788;
console.log(new Date(timestamp)) // Sun Jul 04 1971 21:44:04 GMT+1000 (Australian Eastern Standard Time

/* creating a digital clock */

let clock = document.querySelector('#clock')
setInterval(() => {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    console.log(hours,minutes,seconds)
    clock.textContent = `${hours} : ${minutes} : ${seconds}`
}, 200);

/* Date-fns lib */
// Sometimes formatting in vanilla JS can be time consuming. 
// we can use a library to make this easier
// https://date-fns.org/
import { format, compareAsc } from 'date-fns'








