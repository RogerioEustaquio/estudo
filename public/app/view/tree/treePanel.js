Ext.define('App.view.tree.treePanel',{
    extend: 'Ext.tree.Panel',
    xtype: 'treepanel',
    title: 'Simple Tree',
    // width: 200,
    // height: 200,
    rootVisible: false,
    constructor: function() {
        var me = this;

        var store = Ext.create('Ext.data.TreeStore', {
            root: {
                expanded: true,
                children: [
                    { text: 'detention', leaf: true },
                    { text: 'homework', expanded: true, children: [
                        { text: 'book report', leaf: true },
                        { text: 'algebra', leaf: true}
                    ] },
                    { text: 'buy lottery tickets', leaf: true }
                ]
            }
        });

        Ext.applyIf(me, {

            store: store

        });

        me.callParent(arguments);

    }
    
});