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
    return Math.ceil(res) + "!";
  }

  return remainDays(today, toDate);
}


function checkUncheck() {
  const input = document.getElementById("dn");

  if (input.checked === true) {
    console.log('Checked!');
    document.body.style.backgroundColor = "#fe7702";

  } else {
    console.log('Unhecked!');
    document.body.style.backgroundColor = '';
  }
}

function check() {
    document.getElementById("dn").checked = true;
}

function uncheck() {
    document.getElementById("dn").checked = false;
}


// return alternate view on DOM depending on how near we are
console.log(countDown("July 12, 2018"));

document.getElementById("title").innerHTML = countDown("July 12, 2018");
