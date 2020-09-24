Ext.define('App.view.righcharts.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'righchartsmain',
    id: 'righchartsmain',
    itemId: 'righchartsmain',
    requires: [
        'App.view.righcharts.WinRighCharts',
        'App.view.righcharts.WinRighCharts2'
    ],
    title: 'Panel RighCharts',
    layout: 'border',
    items: [
        {
            xtype: 'panel',
            id:'panelcenter',
            itemId: 'panelcenter',
            layout: 'fit',
            // title: 'RighCharts',
            region:'center',
            margin: '0 0 0 0',
            items:[
                {
                    xtype:'form',
                    items:[
                        {
                            xtype: 'button',
                            iconCls: 'fa fa-search',
                            tooltip: 'Consultar',
                            margin: '1 1 1 10',
                            handler: function(form) {

                                var objWindow = Ext.getCmp('WinRighCharts2');

                                if(!objWindow){
                                    objWindow = Ext.create( 'App.view.righcharts.WinRighCharts2');
                                    objWindow.show();
                                }
        
                                    // Highcharts.chart('container', {
                                    //     chart: {
                                    //         type: 'bar'
                                    //     },
                                    //     plotOptions: {
                                    //         series: {
                                    //             cursor: 'pointer',
                                    //             point: {
                                    //                 events: {
                                    //                     click: function () {
                                    //                         alert('Category: ' + this.category + ', value: ' + this.y);
                                    //                     }
                                    //                 }
                                    //             }
                                    //         }
                                    //     },
                                    //     title: {
                                    //         text: 'Fruit Consumption'
                                    //     },
                                    //     xAxis: {
                                    //         categories: ['Apples', 'Bananas', 'Oranges']
                                    //     },
                                    //     yAxis: {
                                    //         title: {
                                    //             text: 'Fruit eaten'
                                    //         }
                                    //     },
                                    //     series: [{
                                    //         name: 'Jane',
                                    //         data: [1, 8, 4]
                                    //     }, {
                                    //         name: 'John',
                                    //         data: [5, 7, 3]
                                    //     }]
                                    // });

                                //    var chart = Highcharts.chart('container', {

                                //         chart: {
                                //         //     // renderTo: 'container',
                                //         //     // type: 'column'
                                //         //     // type: 'bar'
                                //         //     // type: 'area'
                                //             type: 'line'
                                //         },

                                //         title: {
                                //             text: 'Solar Employment Growth by Sector, 2010-2016'
                                //         },
                                    
                                //         subtitle: {
                                //             text: 'Source: thesolarfoundation.com'
                                //         },
                                    
                                //         yAxis: {
                                //             title: {
                                //                 text: 'Number of Employees'
                                //             }
                                //         },
                                    
                                //         xAxis: {
                                //             accessibility: {
                                //                 rangeDescription: 'Range: 2010 to 2017'
                                //             }
                                //         },
                                    
                                //         legend: {
                                //             layout: 'vertical',
                                //             align: 'right',
                                //             verticalAlign: 'middle'
                                //         },
                                    
                                //         plotOptions: {
                                //             series: {
                                //                 label: {
                                //                     connectorAllowed: false
                                //                 },
                                //                 pointStart: 2010
                                //             }
                                //         },
                                    
                                //         series: [{
                                //             name: 'Installation',
                                //             data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                                //             },
                                //             {
                                //                 name: 'Manufacturing',
                                //                 data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                                //             }, {
                                //                 name: 'Sales & Distribution',
                                //                 data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                                //             }, {
                                //                 name: 'Project Development',
                                //                 data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                                //             },
                                //             {
                                //                 name: 'Other',
                                //                 data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                                //             }
                                //         ],
                                    
                                //         responsive: {
                                //             rules: [{
                                //                 condition: {
                                //                     maxWidth: 500
                                //                 },
                                //                 chartOptions: {
                                //                     legend: {
                                //                         layout: 'horizontal',
                                //                         align: 'center',
                                //                         verticalAlign: 'bottom'
                                //                     }
                                //                 }
                                //             }]
                                //         }
                                    
                                    // });

                                    // document.getElementById('preview').innerHTML = chart.getCSV();

                                    // Highcharts.chart('container', {
                                    //     chart: {
                                    //         plotBackgroundColor: null,
                                    //         plotBorderWidth: null,
                                    //         plotShadow: false,
                                    //         type: 'pie'
                                    //     },
                                    //     title: {
                                    //         text: 'Browser market shares in January, 2018'
                                    //     },
                                    //     tooltip: {
                                    //         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                                    //     },
                                    //     accessibility: {
                                    //         point: {
                                    //             valueSuffix: '%'
                                    //         }
                                    //     },
                                    //     plotOptions: {
                                    //         pie: {
                                    //             allowPointSelect: true,
                                    //             cursor: 'pointer',
                                    //             dataLabels: {
                                    //                 enabled: true,
                                    //                 format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                    //             }
                                    //         }
                                    //     },
                                    //     series: [{
                                    //         name: 'Brands',
                                    //         colorByPoint: true,
                                    //         data: [{
                                    //             name: 'Chrome',
                                    //             y: 61.41,
                                    //             // sliced: true,
                                    //             // selected: true
                                    //         }, {
                                    //             name: 'Internet Explorer',
                                    //             y: 11.84
                                    //         }, {
                                    //             name: 'Firefox',
                                    //             y: 10.85
                                    //         }, {
                                    //             name: 'Edge',
                                    //             y: 4.67
                                    //         }, {
                                    //             name: 'Safari',
                                    //             y: 4.18
                                    //         }, {
                                    //             name: 'Sogou Explorer',
                                    //             y: 1.64
                                    //         }, {
                                    //             name: 'Opera',
                                    //             y: 1.6
                                    //         }, {
                                    //             name: 'QQ',
                                    //             y: 1.2
                                    //         }, {
                                    //             name: 'Other',
                                    //             y: 2.61
                                    //         }]
                                    //     }]
                                    // });

                                    // Highcharts.chart('container', {
                                    //     title: {
                                    //         text: 'Combination chart'
                                    //     },
                                    //     xAxis: {
                                    //         categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
                                    //     },
                                    //     labels: {
                                    //         items: [{
                                    //             html: 'Total fruit consumption',
                                    //             style: {
                                    //                 left: '50px',
                                    //                 top: '18px',
                                    //                 color: ( // theme
                                    //                     Highcharts.defaultOptions.title.style &&
                                    //                     Highcharts.defaultOptions.title.style.color
                                    //                 ) || 'black'
                                    //             }
                                    //         }]
                                    //     },
                                    //     series: [{
                                    //         type: 'column',
                                    //         name: 'Jane',
                                    //         data: [3, 2, 1, 3, 4]
                                    //     }, {
                                    //         type: 'column',
                                    //         name: 'John',
                                    //         data: [2, 3, 5, 7, 6]
                                    //     }, {
                                    //         type: 'column',
                                    //         name: 'Joe',
                                    //         data: [4, 3, 3, 9, 0]
                                    //     }, {
                                    //         type: 'spline',
                                    //         name: 'Average',
                                    //         data: [3, 2.67, 3, 6.33, 3.33],
                                    //         marker: {
                                    //             lineWidth: 2,
                                    //             lineColor: Highcharts.getOptions().colors[3],
                                    //             fillColor: 'white'
                                    //         }
                                    //     }, {
                                    //         type: 'pie',
                                    //         name: 'Total consumption',
                                    //         data: [{
                                    //             name: 'Jane',
                                    //             y: 13,
                                    //             color: Highcharts.getOptions().colors[0] // Jane's color
                                    //         }, {
                                    //             name: 'John',
                                    //             y: 23,
                                    //             color: Highcharts.getOptions().colors[1] // John's color
                                    //         }, {
                                    //             name: 'Joe',
                                    //             y: 19,
                                    //             color: Highcharts.getOptions().colors[2] // Joe's color
                                    //         }],
                                    //         center: [100, 80],
                                    //         size: 100,
                                    //         showInLegend: false,
                                    //         dataLabels: {
                                    //             enabled: false
                                    //         }
                                    //     }]
                                    // });

                                    /// inicio
                                    // function getColorPattern(i) {
                                    //     var colors = Highcharts.getOptions().colors,
                                    //         patternColors = [colors[2], colors[0], colors[3], colors[1], colors[4]],
                                    //         patterns = [
                                    //             'M 0 0 L 5 5 M 4.5 -0.5 L 5.5 0.5 M -0.5 4.5 L 0.5 5.5',
                                    //             'M 0 5 L 5 0 M -0.5 0.5 L 0.5 -0.5 M 4.5 5.5 L 5.5 4.5',
                                    //             'M 1.5 0 L 1.5 5 M 4 0 L 4 5',
                                    //             'M 0 1.5 L 5 1.5 M 0 4 L 5 4',
                                    //             'M 0 1.5 L 2.5 1.5 L 2.5 0 M 2.5 5 L 2.5 3.5 L 5 3.5'
                                    //         ];
                                    
                                    //     return {
                                    //         pattern: {
                                    //             path: patterns[i],
                                    //             color: patternColors[i],
                                    //             width: 5,
                                    //             height: 5
                                    //         }
                                    //     };
                                    // }
                                    
                                    // Highcharts.chart('container', {
                                    //     chart: {
                                    //         type: 'pie'
                                    //     },
                                    
                                    //     title: {
                                    //         text: 'Primary desktop/laptop screen readers'
                                    //     },
                                    
                                    //     subtitle: {
                                    //         text: 'Source: WebAIM. Click on point to visit official website'
                                    //     },
                                    
                                    //     tooltip: {
                                    //         valueSuffix: '%',
                                    //         borderColor: '#8ae'
                                    //     },
                                    
                                    //     plotOptions: {
                                    //         series: {
                                    //             dataLabels: {
                                    //                 enabled: true,
                                    //                 connectorColor: '#777',
                                    //                 format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                    //             },
                                    //             point: {
                                    //                 events: {
                                    //                     click: function () {
                                    //                         // window.location.href = this.website;
                                    //                         console.log( this);
                                    //                     }
                                    //                 }
                                    //             },
                                    //             cursor: 'pointer',
                                    //             borderWidth: 3
                                    //         }
                                    //     },
                                    
                                    //     series: [{
                                    //         name: 'Screen reader usage',
                                    //         data: [{
                                    //             name: 'NVDA',
                                    //             y: 40.6,
                                    //             color: Highcharts.getOptions().colors[0], // getColorPattern(0),
                                    //             website: 'https://www.nvaccess.org',
                                    //             accessibility: {
                                    //                 description: 'This is the most used desktop screen reader'
                                    //             }
                                    //         }, {
                                    //             name: 'JAWS',
                                    //             y: 40.1,
                                    //             color: Highcharts.getOptions().colors[1],//getColorPattern(1),
                                    //             website: 'https://www.freedomscientific.com/Products/Blindness/JAWS'
                                    //         }, {
                                    //             name: 'VoiceOver',
                                    //             y: 12.9,
                                    //             color: Highcharts.getOptions().colors[2],//getColorPattern(2),
                                    //             website: 'http://www.apple.com/accessibility/osx/voiceover'
                                    //         }, {
                                    //             name: 'ZoomText',
                                    //             y: 2,
                                    //             color: Highcharts.getOptions().colors[3],//getColorPattern(3),
                                    //             website: 'http://www.zoomtext.com/products/zoomtext-magnifierreader'
                                    //         }, {
                                    //             name: 'Other',
                                    //             y: 4.4,
                                    //             color: Highcharts.getOptions().colors[4], //getColorPattern(4),
                                    //             website: 'http://www.disabled-world.com/assistivedevices/computer/screen-readers.php'
                                    //         }]
                                    //     }],
                                    
                                    //     responsive: {
                                    //         rules: [{
                                    //             condition: {
                                    //                 maxWidth: 500
                                    //             },
                                    //             chartOptions: {
                                    //                 plotOptions: {
                                    //                     series: {
                                    //                         dataLabels: {
                                    //                             format: '<b>{point.name}</b>'
                                    //                         }
                                    //                     }
                                    //                 }
                                    //             }
                                    //         }]
                                    //     }
                                    // });
                                    /// fim
                            }
                        }
                    ]
                }
                
            ]
        }
    ]
});