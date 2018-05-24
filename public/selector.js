var month = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
var i = 0;

document.getElementById("MonthByName").innerHTML = month[i];

function nextMonth() {
	if(i == month.length - 1)
	   i = 0
	else
	   i++;
    document.getElementById("MonthByName").innerHTML = month[i];
	}

function prevMonth() {
	if(i == 0)
	   i = month.length - 1;
	 else
	   i--;
	document.getElementById("MonthByName").innerHTML = month[i];
	}

