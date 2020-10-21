Ext.define('App.view.highcharts.WinHighCharts2', {
    extend: 'Ext.window.Window',
    xtype: 'winhighcharts2',
    id: 'winhighcharts2',
    height: Ext.getBody().getHeight() * 0.8,
    width: Ext.getBody().getWidth() * 0.9,
    requires: [ 
        'App.view.highcharts.ContainerHighCharts2'
    ],
    layout: 'fit',
    title: 'New win',
    border: true,
    maximizable: true,
    items: [
        {
            xtype: 'tradingchart2'
        }
    ]
     
});
