var wsurl = 'http://localhost:8080';
var d = new Date();
var year = d.getFullYear();
var daysInMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var today = new Date();
var currentDate;
today.setDate(today.getDate());
currentDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

document.getElementById('dateSpot').innerHTML = currentDate;

function selectedFrom() {
    var fromDate = document.getElementById('dateFrom').value;
    document.getElementById('displayFrom').innerHTML = fromDate;
    if (currentDate == fromDate ) {
		console.log("Hey there you selected todays date");
	}
}

var toDate = document.getElementById('dateTo').value;
document.getElementById('displayTo').innerHTML = toDate;

document.getElementById('date').innerHTML = monthArr[0];

var i = 0;
function nextMonth() {
    if (i == monthArr.length - 1)
        i = 0
    else
        i++;
    document.getElementById("date").innerHTML = monthArr[i];
}
function prevMonth() {
    if (i == 0)
        i = month.length - 1;
    else
        i--;
    document.getElementById("date").innerHTML = monthArr[i];
}



// function getDaysInMonth(month, year) {
//          // Since no month has fewer than 28 days
//          var date = new Date(year, month, 1);
//          var days = [];
//          console.log('month', month, 'date.getMonth()', date.getMonth())
//          while (date.getMonth() === month) {
//             days.push(new Date(date));
//             date.setDate(date.getDate() + 1);
//          }
//          return days;
//     }
        
//     console.log(getDaysInMonth(5, 2018))
// var Obj = JSON.stringify(month); 




// fetch('./api/getDates')
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' + response.status);
//         return;
//       }
//       // Examine the text in the response
//       response.json().then(function(weeks) {	
   	
       
    
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });


