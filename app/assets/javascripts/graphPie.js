window.newGraph = "true";
$(document).ready(function(){

    $( "#pie" ).click(function( event ) {
        event.preventDefault();
	var startDate = $('[name="startDateP"]').datepicker('getDate');
	var endDate = $('[name="endDateP"]').datepicker('getDate');
	var formatSD = $.datepicker.formatDate('yy-mm-dd', startDate);
	var formatED = $.datepicker.formatDate('yy-mm-dd', endDate);

	var totalsIds = {};
	var all = 0;
	var tasks = [];
	for ( var i = 0; i < jsonS.length; i++ ) {
		if ((jsonS[i].day >= formatSD) && (jsonS[i].day <= formatED)) {
			var currTask = jsonS[i].label;
			if (currTask in totalsIds) {
				totalsIds[currTask] = totalsIds[currTask] + parseInt(jsonS[i].amount);
				all = all + parseInt(jsonS[i].amount);
			} else {
				totalsIds[currTask] = parseInt(jsonS[i].amount);
				tasks.push(jsonS[i].label);
				all = all + parseInt(jsonS[i].amount);
			}
		}	
	 }
	
	var total = [];
	$.each(totalsIds, function(id,amt) {
		total.push(amt);
	});
	if (window.newGraph != "true"){
		pie.remove();
		p.remove();
	}
	window.newGraph = "false";

 		p = Raphael("canvas_container_pie"),
		pie = p.piechart(300, 160, 110, total, { legend: tasks, legendpos: "east"});

                pie.hover(function () {
			this.sector.stop();
			this.sector.scale(1.1, 1.1, this.cx, this.cy);

			if (this.label) {
				this.label[0].stop();
				this.label[0].attr({ p: 7.5 });
				this.label[1].attr({ "font-weight": 800 });
			}
	
			$.each(total, function(id) {
				total[id] = ("" + total[id]);
			});

			var curr = jQuery.inArray((""+totalsIds[(tasks[this.value.order])]), total);
			var flagText = ("" + Math.floor((total[curr])/60) + " Hrs " + (total[curr]%60) + " Mins");
			this.sector.flag = this.sector.paper.flag(this.sector.middle.x, this.sector.middle.y, flagText);

		}, function () {
			this.sector.animate({ transform: 's1 1 ' + this.cx + ' ' + this.cy }, 500, "bounce");

			if (this.label) {
			this.label[0].animate({ p: 5 }, 500, "bounce");
			this.label[1].attr({ "font-weight": 400 });
			}

			var self = this;
			this.sector.flag.stop().animate({ opacity: 0 }, 300, function () {
				self.sector.flag.remove();
			});

		});
    })
});


