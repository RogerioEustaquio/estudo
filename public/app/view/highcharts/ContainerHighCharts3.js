Ext.define('App.view.highcharts.ContainerHighCharts3', {
    extend: 'Ext.Container',
    xtype: 'tradingchart3',
    itemId: 'tradingchart3',
    requires: [ 
    ],
    
    // controller: 'chart',
    layout: 'border',
    border: true,

    chart: null,

    constructor: function(config) {
        var me = this;


        Ext.Ajax.request({
            url: BASEURL + '/api/highcharts/listaritem',
            method: 'POST',
            // params: {dados: Ext.encode(params)},
            success: function (response) {

                var result = Ext.decode(response.responseText);
                if(result.success){

                    // console.log(result.data);
                    var cont = 0;

                    var pcategories = new Array();

                    var pseries = new Array();

                    result.data.forEach(function(record){

                        var myrecord = record;

                        if(!(pcategories.find(element => element == myrecord.apelido))){
                            pcategories.push(myrecord.apelido)
                        }

                        // pseries[cont] = { name : record.ano};

                        if(!(pseries.find(element2 => element2 === myrecord.ano))){
                            pseries.push(record.ano);
                        }
                        // pseries[cont].data = record.totalNota;

                        pcategories.forEach(function(record){
                            
                            console
                            if(record.apelido == myrecord.apelido){

                                pseries.forEach(function(record,index){

                                    if(record.ano == myrecord.ano){

                                        pseries[index].data.push(myrecord.totalNota);
                                    }
                                });
                            }
                        });

                        cont++;
                    });

                    console.log(pcategories);
                    console.log(pseries);
                    
                    
                }else{
                    alert('Erro na solicitação!');
                }
                me.setLoading(false);
            }
        });
    
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