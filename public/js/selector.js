var month = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
var i = 0;

//click next and prev to toggle months 
function nextMonth(){
i = i + 1; //increase month by 1.
i = i % month.length; //if greater than start from zero again.
console.log( month[i]);


	
	
  };

 function prevMonth() {
 	var month = document.getElementById('MonthByName').innerHTML=month;
 	
	

 };

