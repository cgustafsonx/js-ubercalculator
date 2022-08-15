const readlineSync = require("readline-sync");

let costPerMinute = 0.25;
let costPerKm = 1.15;
let bookingFee = 2.25;

const distanceKilometers = readlineSync.question("What is the distance? ");
const durationMinutes = readlineSync.question("How long does it take? ");

console.log(
  "Your chosen distance is ",
  distanceKilometers + " " + "kilometers"
);

console.log("It will take a total of ", durationMinutes + " " + "minutes");

const rideType = readlineSync.question(
  "Choose your type of ride: Pop, SUV or Luxury "
);
console.log("You've chosen for:", rideType);

const isRushHour = readlineSync.keyInYN("Is it Rush Hour? ");
console.log("Rush Hour ", isRushHour);

if (rideType === "Pop") {
} else if (rideType === "SUV") {
  costPerKm = 1.5;
  bookingFee = 0;
} else if (rideType === "Luxury") {
  costPerKm = 2.0;
  bookingFee = 0;
} else {
  console.log("You did not make a choice!");
  process.exit();
}

if (isRushHour === true) {
  console.log("It is Rush Hour:", isRushHour);
  costPerMinute = costPerMinute * 2;
}

const totalFare =
  durationMinutes * costPerMinute + distanceKilometers * costPerKm + bookingFee;
console.log("Your total fare is: ", totalFare);
