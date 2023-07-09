currentDate = new Date();
startDate = new Date(currentDate.getFullYear(), 0, 1);
var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

var weekNumber = Math.ceil(days / 7);

// Display the calculated result
console.log("Week number of " + currentDate + " is :   " + weekNumber);

if (weekNumber % 3 === 0) {
  $("#output").text("Bedo diese Woche Bad, Göko diese Woche Diele und Treppen, Malik diese Woche Küche...");
} else if (weekNumber % 3 === 1) {
  $("#output").text("Bedo diese Woche Diele und Treppen, Göko diese Woche Küche, Malik diese Woche Bad...");
} else if (weekNumber % 3 === 2) {
  $("#output").text("Bedo diese Woche Küche, Göko diese Woche Bad, Malik diese Woche Diele und Treppen...");
}