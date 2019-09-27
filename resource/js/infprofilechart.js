(function($) {
	var randomScalingFactor = function(){ return Math.round(Math.random()*500)};

	if ($(".graph.line").length>0) {
		(function(){
			// Data for line charts
			var lineChartData = {
				labels: ["2019-09-20", "2019-09-21", "2019-09-22", "2019-09-23", "2019-09-24", "2019-09-25", "2019-09-26"],
				datasets: [
				{
					label: "구독자 증가",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(255, 99, 132, 0.4)",
					borderColor: "rgba(255, 99, 132, 1)",
					borderCapStyle: 'round',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'round',
					pointBorderColor: "rgba(255, 99, 132,1)",
					pointBackgroundColor: "#fff",
					pointBorderWidth: 6,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: "rgba(255, 99, 132,1)",
					pointHoverBorderColor: "rgba(220,220,220,1)",
					pointHoverBorderWidth: 3,
					pointRadius: 1,
					pointHitRadius: 10,
					data: [65, 59, 80, 81, 56, 55, 40],
					spanGaps: false,
				},
				{
					label: "구독자 감소",
					fill: false,
					lineTension: 0.3,
					backgroundColor: "rgba(75,192,192,0.4)",
					borderColor: "rgba(75,192,192,1)",
					borderCapStyle: 'round',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'round',
					pointBorderColor: "rgba(75,192,192,1)",
					pointBackgroundColor: "#fff",
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: "rgba(75,192,192,1)",
					pointHoverBorderColor: "rgba(220,220,220,1)",
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: [45, 86, 23, 56, 78, 95, 41],
					spanGaps: false,
				},
				{
					label: "비율",
					fill: false,
					lineTension: 0.3,
					backgroundColor: "rgba(75,192,192,0.4)",
					borderColor: "rgba(75,192,192,1)",
					borderCapStyle: 'round',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'round',
					pointBorderColor: "rgba(75,192,192,1)",
					pointBackgroundColor: "#fff",
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: "rgba(75,192,192,1)",
					pointHoverBorderColor: "rgba(220,220,220,1)",
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: [45, 86, 23, 56, 78, 95, 41],
					spanGaps: false,
				}
				]
			};

			// Line Charts Initialization
			var ctx = document.getElementById("lines-graph").getContext("2d");
			var LineChart = new Chart(ctx, {
				type: 'line',
				data: lineChartData,
				responsive: true,
				maintainAspectRatio: true,
				bezierCurve : false
			});
		})();
	}

})(jQuery);
