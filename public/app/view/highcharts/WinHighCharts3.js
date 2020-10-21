Ext.define('App.view.highcharts.WinHighCharts3', {
    extend: 'Ext.window.Window',
    xtype: 'winhighcharts3',
    itemId: 'winhighcharts3',
    height: Ext.getBody().getHeight() * 0.8,
    width: Ext.getBody().getWidth() * 0.9,
    requires: [ 
        'App.view.highcharts.ContainerHighCharts3'
    ],
    layout: 'fit',
    title: 'New win',
    border: true,
    maximizable: true,
    items: [
        {
            xtype: 'tradingchart3'
        }
    ]
     
});
