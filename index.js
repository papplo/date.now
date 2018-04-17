/**
 * Represents a countDown to chosen date.
 * @constructor
 * @param {timestamp} toDate - The day we count down to.
 */
function countDown (toDate) {
  // Calculate the value of 1 full day in ms
  let oneDay = 1000*60*60*24;
  // Get date of Today - formatted
  let today = Date.now();
  // Get date that is passed - formatted
  toDate = Date.parse(toDate);

   // Calculate difference -formatted from ms to readable
  let remainDays = function() {
    let res = (arguments[1] - arguments[0]) / oneDay;
    return Math.ceil(res) + " dagar kvar";
  }

  return remainDays(today, toDate);
}


// return alternate view on DOM depending on how near we are
console.log(countDown("May 24, 2018"));

document.getElementById("title").innerHTML = countDown("May 24, 2018");
