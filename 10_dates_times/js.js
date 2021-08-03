// Dates & times
// Dates in Javascript are a type of data under the object type
// they are reference types, not primitive data types
// a constructor is used to create a new object
// here we use the new and date()constructor to designate a new object of date type
const now = new Date();
console.log(now)
// this will log a date in long format Mon Aug 02 2021 21:26:13 GMT+1000 (Australian Eastern Standard Time)
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



