// Whole calendar
$(function() {
	$("#fullCalendar").datepicker({
//        	onSelect: function(date) {
//		window.location.href = location.href.slice(0,-8) + "/" + date;
 //           	window.location.href = "http://localhost/~kelseysuyehira/pages/day.php?day=" + date;
//        	},
//		inline: true,
//		dateFormat: "yy-mm-dd"
		});
  });

$(function() {
  	$( ".datepicker" ).datepicker();
  });


// Next Day Link
$(document).ready(function(){
$('a#next').click(function () {
event.preventDefault();
	var date=new Date(day.date);
	date.setDate(date.getDate()+1);
	var formatD = $.datepicker.formatDate('yy-mm-dd', date);
//	window.location.href = "http://localhost/~kelseysuyehira/pages/day.php?day=" + formatD;
	window.location.href = location.href + "/" + date;

})
});

// Previous Day Link
$(document).ready(function(){
$('a#previous').click(function () {
event.preventDefault();
	var date=new Date(day.date);
	date.setDate(date.getDate()-1);
	var formatD = $.datepicker.formatDate('yy-mm-dd', date);
//	window.location.href = "http://localhost/~kelseysuyehira/pages/day.php?day=" + formatD;
	window.location.href = location.href + "/" + date;

})
});
