const personName = prompt("Welcome to GC mini golf! What is your name?");
const playTime = parseInt(prompt("Hi " + personName + "!" + " " + "Would you like to play 3 or 6 holes today?"));
let total = 0;
for (let i = 1; i < (playTime+1); i++) {
    let numberOfStrokes = Number( prompt("How many putts for hole " + i + "? (par is 3)") );
    total += numberOfStrokes;
}
let par = 0;
if (playTime === 3) {
    par = 9;
}
else {
    par = 18;
}
var totalScore = total - par

if (totalScore > 0) {
    alert("Nice Try, " + personName + "... Your total par was: +" + totalScore + ".");
    console.log("Nice Try, " + personName + "... Your total par was: +" + totalScore + ".");
    document.getElementById("demo").innerHTML = "Nice Try, " + personName + "... Your total par was: +" + totalScore + ".";
}
if (totalScore < 0) {
    alert("Great Job, " + personName + "! Your total par was: " + totalScore + ".");
    console.log("Great Job, " + personName + "! Your total par was: " + totalScore + ".")
    document.getElementById("demo").innerHTML = "Great Job, " + personName + "! Your total par was: " + totalScore + ".";
}
if (totalScore === 0 ) {
    alert("Good Game, " + personName + ". Your total par was: " + totalScore + ".");
    console.log("Good Game, " + personName + ". Your total par was: " + totalScore + ".")
    document.getElementById("demo").innerHTML = "Good Game, " + personName + ". Your total par was: " + totalScore + ".";
}