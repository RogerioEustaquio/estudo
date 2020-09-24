Ext.define('App.view.righcharts.WinRighCharts', {
    extend: 'Ext.window.Window',
    xtype: 'WinRighCharts',
    id: 'WinRighCharts',
    height: Ext.getBody().getHeight() * 0.8,
    width: Ext.getBody().getWidth() * 0.9,
    maximizable: true,
    title: 'Graf',
    layout: 'fit',
    items: [
        {
            xtype: 'panel',
            html: '<div id="container" class="container" style="width:100%; height:400px;"></div><b>Excel</b><pre id="preview"></pre>'
        }
    ]
});
