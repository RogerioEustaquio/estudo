Ext.define('App.view.righcharts.WinRighCharts2', {
    extend: 'Ext.window.Window',
    xtype: 'WinRighCharts2',
    id: 'WinRighCharts2',
    height: Ext.getBody().getHeight() * 0.8,
    width: Ext.getBody().getWidth() * 0.9,
    requires: [ 
        'App.view.righcharts.ContainerRighCharts'
    ],
    layout: 'fit',
    title: 'New win',
    border: true,
    maximizable: true,
    items: [
        {
            xtype: 'tradingchart'
        }
    ]
     
});
