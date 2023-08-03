// determine random race number
let raceNumber = Math.floor(Math.random() * 1000);

// variables to determine race time
var earlyReg = true;
var runnerAge = 31;

// conditionals to determine race time and race numbers
if (earlyReg && runnerAge > 18) {
    raceNumber += 1000;
}

if (earlyReg && runnerAge > 18) {
    console.log(`You will race at 9:30am, your race number is ${raceNumber}.`);
} else if (!earlyReg && runnerAge > 18) {
    console.log(`You will race at 11:00am, your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`You will race at 12:30pm, your race number is ${raceNumber}.`)
} else {
    console.log(`Please see the registration desk.`)
}
