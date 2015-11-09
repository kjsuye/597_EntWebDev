//$(document).ready(function(){

//                var p = Raphael("canvas_container_pie"),
//                    pie = p.piechart(360, 140, 100, [55, 20, 13, 32, 5, 1, 2, 10], { legend: ["%%.%% - Enterprise Users", "IE Users"], legendpos: "west", href: ["http://raphaeljs.com", "http://g.raphaeljs.com"]});

//                pie.hover(function () {
//                    this.sector.stop();
//                    this.sector.scale(1.1, 1.1, this.cx, this.cy);

//                    if (this.label) {
//                        this.label[0].stop();
//                        this.label[0].attr({ p: 7.5 });
//                        this.label[1].attr({ "font-weight": 800 });
//                    }
//                }, function () {
//                    this.sector.animate({ transform: 's1 1 ' + this.cx + ' ' + this.cy }, 500, "bounce");

//                    if (this.label) {
//                      this.label[0].animate({ p: 5 }, 500, "bounce");
//                        this.label[1].attr({ "font-weight": 400 });
//                    }
//                });
//});


//window.onload = function() {  

//	var startDate = document.getElementById("startDate");
//	var endDate = document.getElementById("endDate");
//	var task = document.getElementById("task");
//	alert(startDate);
//	var r = Raphael("canvas_container_bar"),
//                    fin = function () {
//                        this.flag = r.popup(this.bar.x, this.bar.y, this.bar.value || "0").insertBefore(this);
//                    },
//                    fout = function () {
//                        this.flag.animate({opacity: 0}, 300, function () {this.remove();});
//                    },
//                    fin2 = function () {
//                        var y = [], res = [];
//                       for (var i = this.bars.length; i--;) {
//                            y.push(this.bars[i].y);
//                            res.push(this.bars[i].value || "0");
//                        }
//                        this.flag = r.popup(this.bars[0].x, Math.min.apply(Math, y), res.join(", ")).insertBefore(this);
//                    },
//                    fout2 = function () {
//                        this.flag.animate({opacity: 0}, 300, function () {this.remove();});
//                   },
//                   txtattr = { font: "12px sans-serif" };
                
//                var c = r.barchart(200, 50, 300, 220, [[55, 20, 13, 32, 5, 1, 2, 10], [10, 2, 1, 5, 32, 13, 20, 55]], {stacked: true, type: "soft"}).hoverColumn(fin2, fout2);
//            };

$( document ).ready(function() {
 
    $( "#pie" ).click(function( event ) {
        event.preventDefault();
 
        alert("here(pie)");
    });

})


$( document ).ready(function() {
 
    $( "#bar" ).click(function( event ) {
        event.preventDefault();
 
        alert("here(bar)");
    });
});

//$(document).ready(function(){
//window.onload = function() {
//	alert("here!");
//	$("pie").onclick = pieGraph;
//	$("bar").onclick = barGraph;
//});

//function barGraph() {
//	var startDate = document.getElementById("startDate");
//	var endDate = document.getElementById("endDate");
//	var task = document.getElementById("task");
//	alert(startDate);
//
//}

//function pieGraph() {
//	var startDate = document.getElementById("startDate");
//	var endDate = document.getElementById("endDate");
//	alert(startDate);
//
//}
