// Set your birthday (month is 0-based, so January is 0 and December is 11)
const birthdayMonth = 11; // Replace with your birth month
const birthdayDay = 20;  // Replace with your birth day
// Get the current date
const currentDate = new Date();
// Get the current year
const currentYear = currentDate.getFullYear();
// Set the next birthday
const nextBirthday = new Date(currentYear, birthdayMonth, birthdayDay);
// Check if the birthday has already occurred this year
if (currentDate > nextBirthday) {
  nextBirthday.setFullYear(currentYear + 1); // Set to next year
}
// Calculate the difference in days
const daysLeft = Math.ceil((nextBirthday - currentDate) / (24 * 60 * 60 * 1000));
console.log(`There are ${daysLeft} days left until your next birthday!`);