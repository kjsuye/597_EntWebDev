window.newGraph = "true";
$(document).ready(function(){

    $( "#bar" ).click(function( event ) {
	event.preventDefault();
	var selectTask = $("#task").val();
	var startDate = $('[name="startDateB"]').datepicker('getDate');
	var endDate = $('[name="endDateB"]').datepicker('getDate');
	var formatSD = $.datepicker.formatDate('yy-mm-dd', startDate);
	var formatED = $.datepicker.formatDate('yy-mm-dd', endDate);

	function sortjson(a, b) {
		return a.day > b.day ? 1 : -1;
	}
	jsonS = jsonS.sort(sortjson);

	var amounts = [];
	var dates = [];
	for ( var i = 0; i < jsonS.length; i++ ) {
		if ((jsonS[i].day >= formatSD) && (jsonS[i].day <= formatED)) {
	        	if (jsonS[i].taskId == selectTask) {
				dates.push(jsonS[i].day);
				amounts.push(jsonS[i].amount);
			}
		}	
	 }

	if (window.newGraph != "true"){
		c.remove();
		r.remove();
	}
	window.newGraph = "false";

	r = Raphael("canvas_container_bar"),

		fin = function () {
			var y = [], res = [];
			for (var i = this.bars.length; i--;) {
				y.push(this.bars[i].y);
				res.push((Math.floor((this.bars[i].value)/60))+" Hrs "+ (this.bars[i].value % 60)  +" Mins" || "0");
			}
			this.flag = r.popup(this.bars[0].x, Math.min.apply(Math, y), res.join(", ")).insertBefore(this);
		},
		fout = function () {
			this.flag.animate({opacity: 0}, 300, function () {this.remove();});
		},
		txtattr = { font: "12px sans-serif" };
                
		c = r.barchart(150, 50, 300, 220, [amounts], {stacked: true, type: "soft"}).hoverColumn(fin, fout);

		c.customLabel = function (labels) {
			labels = labels || [];
			this.labels = r.set();
			for (var i = 0; i < this.bars[0].length; i++) {
				x = this.bars[0][i].x - 15;
				y = this.bars[0][i].y + this.bars[0][i].h + 25;
				r.text(x, y, labels[i]).rotate(-45);  
			}
			return this;
		};
		c.customLabel(dates);
 
	})
});
