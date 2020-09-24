Ext.define('App.view.tree.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'treemain',
    id: 'treemain',
    itemId: 'treemain',
    requires: [

    ],
    title: 'Tree',
    layout: 'border',
    items: [
        // {
        //     xtype: 'treepanel',
        //     region: 'north',
        // },
        {
            xtype: 'treegrid',
            region: 'center',
        }
    ]
});