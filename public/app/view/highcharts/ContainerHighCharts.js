Ext.define('App.view.highcharts.ContainerHighCharts', {
    extend: 'Ext.Container',
    xtype: 'tradingchart',
    itemId: 'tradingchart',
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
                    type: 'bar'
                },
                plotOptions: {
                    series: {
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: function () {
                                    alert('Category: ' + this.category + ', value: ' + this.y);
                                }
                            }
                        }
                    }
                },
                title: {
                    text: 'Fruit Consumption'
                },
                xAxis: {
                    categories: ['Apples', 'Bananas', 'Oranges']
                },
                yAxis: {
                    title: {
                        text: 'Fruit eaten'
                    }
                },
                series: [{
                    name: 'Jane',
                    data: [1, 8, 4]
                }, {
                    name: 'John',
                    data: [5, 7, 3]
                }]
            });

    }
});