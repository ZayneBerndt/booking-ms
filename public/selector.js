var wsurl = 'http://localhost:8080';

var today = new Date();
var currentDate;
	today.setDate(today.getDate());
	currentDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

// define variables
var nativePicker = document.querySelector('.nativeDatePicker');
var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');
var fromDaySelect = document.querySelector('#fromDay');
var toDaySelect = document.querySelector('#toDay');
document.getElementById('fromDay').min = currentDate;

toDaySelect.disabled = true;

fromDaySelect.onchange = function fromDaySelected() {
  if (fromDaySelect.value < currentDate) {
  } else {
      toDaySelect.disabled = false;
      document.getElementById('toDay').min = fromDaySelect.value;
  }
}

toDaySelect.onchange = function toDaySelected() {
  console.log("You have booked " + fromDaySelect.value + " to the " + toDaySelect.value);
}

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
  })
  .then(response => response.json()) // parses response to JSON
}



postData(wsurl + '/api/sendMail', {answer: 42, name: 'hgjghjgh'})
 .then(data => console.log(data)) 
 .catch(error => console.error(error))
















// // test whether a new date input falls back to a text input or not
// var test = document.createElement('input');
// test.type = 'date';
// // if it does, run the code inside the if() {} block
// if(test.type === 'text') {
//   // hide the native picker and show the fallback
//   nativePicker.style.display = 'none';
//   // populate the days and years dynamically
//   // (the months are always the same, therefore hardcoded)
//   populateDays(monthSelect.value);
//   populateYears();
// }

// function populateDays(month) {
//   // delete the current set of <option> elements out of the
//   // day <select>, ready for the next set to be injected
//   while(daySelect.firstChild){
//     daySelect.removeChild(daySelect.firstChild);
//   }
//   // Create variable to hold new number of days to inject
//   var dayNum;
//   // 31 or 30 days?
//   if(month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
//     dayNum = 31;
//   } else if(month === 'April' || month === 'June' || month === 'September' || month === 'November') {
//     dayNum = 30;
//   } else {
//   // If month is February, calculate whether it is a leap year or not
//     var year = yearSelect.value;
//     (year - 2016) % 4 === 0 ? dayNum = 29 : dayNum = 28;
//   }
//   // inject the right number of new <option> elements into the day <select>
//   for(i = 1; i <= dayNum; i++) {
//     var option = document.createElement('option');
//     option.textContent = i;
//     daySelect.appendChild(option);
//   }
//   // if previous day has already been set, set daySelect's value
//   // to that day, to avoid the day jumping back to 1 when you
//   // change the year
//   if(previousDay) {
//     daySelect.value = previousDay;
//     // If the previous day was set to a high number, say 31, and then
//     // you chose a month with less total days in it (e.g. February),
//     // this part of the code ensures that the highest day available
//     // is selected, rather than showing a blank daySelect
//     if(daySelect.value === "") {
//       daySelect.value = previousDay - 1;
//     }
//     if(daySelect.value === "") {
//       daySelect.value = previousDay - 2;
//     }
//     if(daySelect.value === "") {
//       daySelect.value = previousDay - 3;
//     }
//   }
// }

// function populateYears() {
//   // get this year as a number
//   var date = new Date();
//   var year = date.getFullYear();

//   // Make this year, and the 100 years before it available in the year <select>
//   for(var i = 0; i <= 100; i++) {
//     var option = document.createElement('option');
//     option.textContent = year-i;
//     yearSelect.appendChild(option);
//   }
// }

// // when the month or year <select> values are changed, rerun populateDays()
// // in case the change affected the number of available days
// yearSelect.onchange = function() {
//   populateDays(monthSelect.value);
// }

// monthSelect.onchange = function() {
//   populateDays(monthSelect.value);
// }

// //preserve day selection
// var previousDay;

// // update what day has been set to previously
// // see end of populateDays() for usage
// daySelect.onchange = function() {
//   previousDay = daySelect.value;
// }
















