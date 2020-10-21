Ext.define('App.view.tree.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'treemain',
    id: 'treemain',
    itemId: 'treemain',
    requires: [
        'App.view.tree.WindowNode'
    ],
    title: 'Tree',
    layout: 'border',

            constructor: function() {
                var me = this;

                Ext.applyIf(me, {

                    items: [
                        // {
                        //     xtype: 'treepanel',
                        //     region: 'north',
                        // },
                        {
                            xtype: 'panel',
                            layout: 'fit' ,
                            region: 'center',
                            tbar:[
                                {
                                    xtype: 'form',
                                    items:[
                                        {
                                            xtype: 'button',
                                            iconCls: 'fa fa-list',
                                            handler: function() {

                                                var objWindow = Ext.getCmp('WindowNode');
                        
                                                if(!objWindow){
                                                    objWindow = Ext.create('App.view.tree.WindowNode');
                                                    objWindow.show();
                                                }

                                                var btnConfirmar = objWindow.down('panel').down('toolbar').down('form').down('button');

                                                btnConfirmar.on('click',
                                                    function(){

                                                        var niveis = objWindow.down('panel').down('form').down('#bxElement').getValue();
                                                        console.log(niveis);

                                                        var storeTree = me.down('panel').down('#treegrid').getStore();
                                                        var proxyTree = storeTree.getProxy();

                                                        proxyTree.setExtraParams( {niveis: Ext.encode(niveis)});

                                                        console.log(proxyTree);
                                                        storeTree.load();

                                                    }
                                                );


                                            }
                                        }
                                    ]
                                }
                            ],
                            items:[
                                {
                                    xtype: 'treegrid'
                                }
                            ]
                        }
                    ]
                });

                me.callParent(arguments);
        
            }
});
