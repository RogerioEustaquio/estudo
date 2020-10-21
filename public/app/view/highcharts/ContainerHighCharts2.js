Ext.define('App.view.highcharts.ContainerHighCharts2', {
    extend: 'Ext.Container',
    xtype: 'tradingchart2',
    itemId: 'tradingchart2',
    requires: [ 
    ],
    
    // controller: 'chart',
    layout: 'border',
    border: true,

    chart: null,

    constructor: function(config) {
        var me = this;
    
        Ext.applyIf(me, {
            items: [
                {
                    region: 'center',
                    xtype: 'container',
                    flex: 1,
                    listeners: {
                        afterLayout: function(el){
                            if(me.chart){
                                me.chart.setSize(el.getWidth(), el.getHeight())
                            }
                        },
                        afterrender: function(el){
                            me.buildChartContainer(el)
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    buildChartContainer: function(el){
        var me = this;

        me.chart =  Highcharts.chart(el.id, {

                credits:{
                    enabled: false
                },

                chart: {
                    type: 'column'
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                title: {
                    text: 'Fruit Consumption'
                },
                "xAxis": {
                    "type": "category",
                  },
                series: [
                    {
                        name: 'Fruits',
                        data:[
                            {
                                name: 'Jane',
                                y: 8,
                                drilldown: 'Jane'
                            },
                            {
                                name: 'John',
                                y: 2,
                                drilldown: 'John'
                            }
                        ]
                    }
                ],
                drilldown: {

                    series: [
                        {
                            name: 'Jane',
                            id: 'Jane',
                            data:[
                                ['Banana',1],
                                ['Maçã',3],
                                ['Mamão',4]
                                // {
                                //     name: 'Banana',
                                //     y: 1
                                // },
                                // {
                                //     name: 'maçã',
                                //     y: 3
                                // },
                                // {
                                //     name: 'Mamão',
                                //     y: 4
                                // }
                            ]
                        }
                    ]
                }
            });

    }
});