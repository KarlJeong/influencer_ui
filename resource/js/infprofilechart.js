(function($) {
	var randomScalingFactor = function(){ return Math.round(Math.random()*500)};

	if ($(".graph.line").length>0) {
		(function(){
			// Data for line charts




			if (document.getElementById("subscriber-linechart") != null) {
				var subscriberChartData = {
					labels: ["2019-09-20", "2019-09-21", "2019-09-22", "2019-09-23", "2019-09-24", "2019-09-25", "2019-09-26"],
					datasets: [
					{
						label: "증가 수",
						id: "y-axis-0",
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
						pointHoverBorderColor: "rgba(220, 220, 220, 1)",
						pointHoverBorderWidth: 3,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [12, 9, 7, 21, 15, 14, 4],
						spanGaps: false
					},
					{
						label: "이탈 수",
						id: "y-axis-0",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(54, 162, 235, 0.4)",
						borderColor: "rgba(54, 162, 235, 1)",
						borderCapStyle: 'round',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'round',
						pointBorderColor: "rgba(54, 162, 235, 1)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 6,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(54, 162, 235, 1)",
						pointHoverBorderColor: "rgba(220, 220, 220, 1)",
						pointHoverBorderWidth: 3,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [-1, -5, -2, -10, -24, -9, -2],
						spanGaps: false
					},
					{
						label: "변동률",
						id: "y-axis-1",
						fill: false,
						lineTension: 0.3,
						backgroundColor: "rgba(255, 159, 64, 0.4)",
						borderColor: "rgba(255, 159, 64, 1)",
						borderCapStyle: 'round',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'round',
						pointBorderColor: "rgba(255, 159, 64, 1)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 6,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(255, 159, 64, 1)",
						pointHoverBorderColor: "rgba(220, 220, 220, 1)",
						pointHoverBorderWidth: 3,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [12/(12-1), 9/(9-5), 7/(7-2), 21/(21-10), 15/(15-24), 14/(14-9), 4/(4-2)],
						spanGaps: false
					}
				]
				};

				// Line Charts Initialization
				var subscriberLinechartCtx = document.getElementById("subscriber-linechart").getContext("2d");
				var subscriberLinechart = new Chart(subscriberLinechartCtx, {
					type: 'line',
					data: subscriberChartData,
					responsive: true,
					maintainAspectRatio: true,
					bezierCurve : false,
	  		  options: {
							scales: {
				      xAxes: [{
				        stacked: true
				      }],
				      yAxes: [{
				        stacked: true,
				        position: "left",
				        id: "y-axis-0",
				      }, {
				        stacked: false,
				        position: "right",
				        id: "y-axis-1",
				      }]
			    }}
				});
			}

			if (document.getElementById("channel-linechart") != null) {
				var channelChartData = {
					labels: ["2019-09-20", "2019-09-21", "2019-09-22", "2019-09-23", "2019-09-24", "2019-09-25", "2019-09-26"],
					datasets: [
					{
						label: "조회수",
						id: "y-axis-3",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(255, 206, 86, 0.4)",
						borderColor: "rgba(255, 206, 86, 1)",
						borderCapStyle: 'round',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'round',
						pointBorderColor: "rgba(255, 206, 86)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 6,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(255, 206, 86, 1)",
						pointHoverBorderColor: "rgba(220, 220, 220, 1)",
						pointHoverBorderWidth: 3,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [875092, 572948, 688652, 858962, 918582, 705742, 618592],
						spanGaps: false
					},
					{
						label: "좋아요",
						id: "y-axis-3",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(153, 102, 255, 0.4)",
						borderColor: "rgba(153, 102, 255, 1)",
						borderCapStyle: 'round',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'round',
						pointBorderColor: "rgba(153, 102, 255, 1)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 6,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(153, 102, 255, 1)",
						pointHoverBorderColor: "rgba(220, 220, 220, 1)",
						pointHoverBorderWidth: 3,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [68493, 38684, 93846, 102894, 580296, 120485, 284905],
						spanGaps: false
					},
					{
						label: "싫어요",
						id: "y-axis-4",
						fill: false,
						lineTension: 0.3,
						backgroundColor: "rgba(75, 192, 192, 0.4)",
						borderColor: "rgba(75, 192, 192, 1)",
						borderCapStyle: 'round',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'round',
						pointBorderColor: "rgba(75, 192, 192, 1)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 6,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
						pointHoverBorderColor: "rgba(220, 220, 220, 1)",
						pointHoverBorderWidth: 3,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [6974, 5832, 9765, 1824, 5425, 6732, 1924],
						spanGaps: false
					}
				]
				};

				// Line Charts Initialization
				var channelLinechartCtx = document.getElementById("channel-linechart").getContext("2d");
				var channelLinechart = new Chart(channelLinechartCtx, {
					type: 'line',
					data: channelChartData,
					responsive: true,
					maintainAspectRatio: true,
					bezierCurve : false
				});
			}

			if (document.getElementById("first72hours-linechart") != null) {
				var first72hoursData = {
					labels: ["2019-09-20 17:00", "2019-09-20 17:30", "2019-09-20 18:00", "2019-09-20 18:30", "2019-09-20 19:00", "2019-09-20 19:30", "2019-09-20 20:00",
				"2019-09-20 20:30", "2019-09-20 21:00", "2019-09-20 21:30", "2019-09-20 22:00", "2019-09-20 22:30"],
					datasets: [
					{
						label: "조회수",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(255, 206, 86, 0.4)",
						borderColor: "rgba(255, 206, 86, 1)",
						borderCapStyle: 'round',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'round',
						pointBorderColor: "rgba(255, 206, 86)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 6,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(255, 206, 86, 1)",
						pointHoverBorderColor: "rgba(220, 220, 220, 1)",
						pointHoverBorderWidth: 3,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [10, 58, 281, 290, 410, 482, 582, 829, 1002, 1201, 1828, 1901],
						spanGaps: false
					},
					{
						label: "좋아요",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(153, 102, 255, 0.4)",
						borderColor: "rgba(153, 102, 255, 1)",
						borderCapStyle: 'round',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'round',
						pointBorderColor: "rgba(153, 102, 255, 1)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 6,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(153, 102, 255, 1)",
						pointHoverBorderColor: "rgba(220, 220, 220, 1)",
						pointHoverBorderWidth: 3,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [1, 5, 11, 13, 17, 36, 42, 50, 52, 85, 102, 145],
						spanGaps: false
					},
					{
						label: "싫어요",
						fill: false,
						lineTension: 0.3,
						backgroundColor: "rgba(75, 192, 192, 0.4)",
						borderColor: "rgba(75, 192, 192, 1)",
						borderCapStyle: 'round',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'round',
						pointBorderColor: "rgba(75, 192, 192, 1)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 6,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
						pointHoverBorderColor: "rgba(220, 220, 220, 1)",
						pointHoverBorderWidth: 3,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [0, 0, 4, 5, 7, 11, 14, 15, 15, 17, 19, 21],
						spanGaps: false
					}
				]
				};

				// Line Charts Initialization
				var first72hoursLinechartCtx = document.getElementById("first72hours-linechart").getContext("2d");
				var first72hoursLinechart = new Chart(first72hoursLinechartCtx, {
					type: 'line',
					data: first72hoursData,
					responsive: true,
					maintainAspectRatio: true,
					bezierCurve : false
				});
			};

			if (document.getElementById("agegender-barchart") != null) {

				var agegenderData = {
			    labels: ["9세 이하", "10대", "20대", "30대", "40대", "50대", "60대 이상"],
					datasets: [{
					label: '남성',
					backgroundColor: 'rgba(54, 162, 235, 0.7)',
					borderColor: 'rgba(54, 162, 235, 1)',
					hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
					borderWidth: 1,
					data: [1, 60, 14, 102, 194, 42, 4]
				}, {
					label: '여성',
					backgroundColor: 'rgba(255, 99, 132, 0.7)',
					borderColor: 'rgba(255, 99, 132, 1)',
					hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
					borderWidth: 1,
					data: [2, 129, 87, 405, 323, 198, 42]
				}]
			};

				var agegenderBarchartCtx = document.getElementById("agegender-barchart").getContext("2d");
				var agegenderBarchart = new Chart(agegenderBarchartCtx, {
					type: 'bar',
					data: agegenderData,
					responsive : true
				});
			}

			if (document.getElementById("region-doughnutchart") != null) {

				var regionDoughnutData = {
					labels: [
						'대한민국',
						'미국',
						'일본',
						'중국',
						'인도네시아'
					],
					datasets: [
					{
						data: [1200, 320, 180, 99, 40],
						backgroundColor: [
							'rgba(255, 99, 132, 0.7)',
							'rgba(54, 162, 235, 0.7)',
							'rgba(255, 206, 86, 0.7)',
							'rgba(75, 192, 192, 0.7)',
							'rgba(153, 102, 255, 0.7)'
						],
						hoverBackgroundColor: [
							'rgba(255, 99, 132, 0.4)',
							'rgba(54, 162, 235, 0.4)',
							'rgba(255, 206, 86, 0.4)',
							'rgba(75, 192, 192, 0.4)',
							'rgba(153, 102, 255, 0.4)'
						]
					}]
				};

				var regionDoughnutchartCtx = document.getElementById("region-doughnutchart").getContext("2d");
				var regionDoughnutchart = new Chart(regionDoughnutchartCtx, {
					type: 'doughnut',
					data: regionDoughnutData,
					responsive : true
				});
			}

			if (document.getElementById("adv-linechart") != null) {
				var advChartData = {
					labels: ["2019-09-20", "2019-09-21", "2019-09-22", "2019-09-23", "2019-09-24", "2019-09-25", "2019-09-26"],
					datasets: [
					{
						label: "인플루언서 유입수",
						id: "y-axis-3",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(255, 206, 86, 0.4)",
						borderColor: "rgba(255, 206, 86, 1)",
						borderCapStyle: 'round',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'round',
						pointBorderColor: "rgba(255, 206, 86)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 6,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(255, 206, 86, 1)",
						pointHoverBorderColor: "rgba(220, 220, 220, 1)",
						pointHoverBorderWidth: 3,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [15, 8, 49, 14, 18, 24, 33],
						spanGaps: false
					},
					{
						label: "인플루언서 판매수",
						id: "y-axis-3",
						fill: false,
						lineTension: 0.1,
						backgroundColor: "rgba(153, 102, 255, 0.4)",
						borderColor: "rgba(153, 102, 255, 1)",
						borderCapStyle: 'round',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'round',
						pointBorderColor: "rgba(153, 102, 255, 1)",
						pointBackgroundColor: "#fff",
						pointBorderWidth: 6,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: "rgba(153, 102, 255, 1)",
						pointHoverBorderColor: "rgba(220, 220, 220, 1)",
						pointHoverBorderWidth: 3,
						pointRadius: 1,
						pointHitRadius: 10,
						data: [4, 8, 21, 10, 12, 9, 13],
						spanGaps: false
					}
				]
				};

				// Line Charts Initialization
				var advLinechartCtx = document.getElementById("adv-linechart").getContext("2d");
				var advLinechart = new Chart(advLinechartCtx, {
					type: 'line',
					data: advChartData,
					responsive: true,
					maintainAspectRatio: true,
					bezierCurve : false
				});
			}


		})();
	}

})(jQuery);
