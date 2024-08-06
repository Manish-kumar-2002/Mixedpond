(function () {
    "use strict";

    /* column chart with datalabels */
    var options = {
        series: [{
            name: 'Percentage',
            data: [16.97, 45.61, 17.96, 11.4, 4.85, 3.3]
        }],
        chart: {
            height: 320,
            type: 'bar',
            toolbar: {
                show: false // Hide the toolbar
              }
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        plotOptions: {
            bar: {
                borderRadius: 0,
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#8c9097"]
            }
        },
        colors: ["#15CE6A"],
      
        xaxis: {
            categories: ['18 - 24','25 - 34','35 - 44','45 - 54','55 - 64','65+'],
            position: 'bottom',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                }
            },
            tooltip: {
                enabled: false,
            },
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val + "%";
                }
            }

        },
        title: {
            text: 'Monthly Inflation in Argentina, 2002',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
                color: '#444'
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#column-datalabels"), options);
    chart.render();

  // Dynamically setting column colors based on values
  chart.updateOptions({
    plotOptions: {
      bar: {
        colors: {
          ranges: [{
            from: 0,
            to: 10,
            color: '#CEFFE4'
          }, {
            from: 11,
            to: 22,
            color: '#15CE6A'
          }, {
            from: 23,
            to: 100,
            color: '#1EB764'
          }]
        }
      }
    }
  });
 /* basic pie chart */
 var options = {
    series: [71.24, 28.76],
    chart: {
        height: 400,
        type: 'pie',
    },
    colors: ["#15CE6A", "#003437",],
    labels: ['Male', 'Female'],
    legend: {
        position: "bottom"
    },
    dataLabels: {
        dropShadow: {
            enabled: false
        },
        style: {
            fontSize: '20px',
            fontWeight: '600',
          
            },
    },
};
var chart = new ApexCharts(document.querySelector("#pie-basic"), options);
chart.render();


    /* line with data labels */
    var options = {
        series: [
            {
                name: "High - 2024",
                data: [0.772, 0.803, 1.06, 1.29, 1.18, 1.25]
            }
        ],
        chart: {
            height: 320,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        colors: ['#15CE6A', '#003437'],
        dataLabels: {
            enabled: false,
        },
        title: {
            text: '',
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        markers: {
            size: 6,
            hover:{sizeOffset:2,strokeWidth:2}
        },
        xaxis: {
            categories: ['2019', '2020', '2021', '2022', '2023', '2024'],
            title: {
                text: '',
                fontSize: '13px',
                fontWeight: 'bold',
                style: {
                    color: "#8c9097"
                }
            },
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
        },
        yaxis: {
            title: {
                text: 'Revenue',
                fontSize: '13px',
                fontWeight: 'bold',
                style: {
                    color: "#8c9097"
                }
            },
            labels: {
                formatter: function (value) {
                    return "$" + " " + value.toFixed(2) + " " + "B" ;
                 },
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
            min: 0.5,
            max: 1.50,
            tickAmount: 5,
        },
        stroke: {
            width: 2
          },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    };
    var chart = new ApexCharts(document.querySelector("#line-chart-datalabels"), options);
    chart.render();


    

    /* organization-growth line with data labels */
    var options = {
        series: [
            {
                name: "High - 2024",
                data: [3.89, 37.66, 67.53, 53.24, 62.33]
            }
        ],
        chart: {
            height: 320,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        colors: ['#15CE6A', '#003437'],
        dataLabels: {
            enabled: false,
        },
        title: {
            text: '',
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        markers: {
            size: 6,
            hover:{sizeOffset:2,strokeWidth:2}
        },
        xaxis: {
            categories: ['2019','2020', '2021', '2022', '2023', '2024'],
            title: {
                text: 'Month',
                fontSize: '13px',
                fontWeight: 'bold',
                style: {
                    color: "#8c9097"
                }
            },
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
        },
        yaxis: {
            title: {
                text: 'Growth-Rate',
                fontSize: '13px',
                fontWeight: 'bold',
                style: {
                    color: "#8c9097"
                }
            },
            labels: {
                formatter: function (value) {
                    return value.toFixed(2) + " " + "%" ;
                 },
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
            min: 0,
            max: 100,
            tickAmount: 5,
        },
        stroke: {
            width: 2
          },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    };
    var chart = new ApexCharts(document.querySelector("#organization-growth"), options);
    chart.render();

})();