Ext.define('App.view.nfestoque.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'nfestoquecamain',
    id: 'nfestoquecamain',
    itemId: 'nfestoquecamain',
    requires: [

    ],
    // title: 'Consulta',
    layout: 'border',
    items: [
        {
            xtype: 'nfestoquetoolbar',
            region: 'north'
        },
        {
            xtype: 'panel',
            id:'panelcenter',
            itemId: 'panelcenter',
            layout: 'fit',
            // title: 'Detalhes',
            region:'center',
            margin: '0 0 0 0',
            items:[
                {
                    xtype: 'NfEstoquegrid'
                }
            ]
        }
    ]
});