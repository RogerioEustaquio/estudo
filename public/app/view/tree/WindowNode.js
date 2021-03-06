Ext.define('App.view.tree.WindowNode', {
    extend: 'Ext.window.Window',
    xtype: 'WindowNode',
    id: 'WindowNode',
    height: 200,
    width: 800,
    title: 'Níveis de Agrupamentos',
    requires:[
        'App.view.tree.PluginDragDropTag'
    ],
    layout: 'fit',
    constructor: function() {
        var me = this;

        var elementbx = Ext.create('Ext.form.field.Tag',{
            id: 'bxElement',
            itemId: 'bxElement',
            store: Ext.data.Store({
                fields: [{ name: 'idKey', type: 'string' }],
                proxy: {
                    type: 'ajax',
                    url: BASEURL + '/api/Tree/listarElementos',
                    timeout: 120000,
                    reader: {
                        type: 'json',
                        root: 'data'
                    }
                }
            }),
            width: '100%',
            name: 'idKey',
            queryParam: 'idKey',
            queryMode: 'local',
            displayField: 'idKey',
            valueField: 'idKey',
            emptyText: 'Ordem',
            fieldLabel: 'Agrupamentos',
            margin: '1 1 1 1',
            plugins:'dragdroptag',
            filterPickList: true,
            publishes: 'value',
            reference: 'idKeys'
        });

        var btnConfirm = Ext.create('Ext.button.Button',{

            text: 'Confirmar',
            // handler: function(form) {
            //     console.log(elementbx.getValue());
            // }
        });

        elementbx.store.load();

        Ext.applyIf(me, {
            
            items:[
                {
                    xtype:'panel',
                    layout: 'border',
                    items:[
                        {
                            xtype: 'form',
                            region: 'center',
                            items: [
                                elementbx
                            ]
                        },
                        {
                            xtype: 'toolbar',
                            region: 'south',
                            items: [
                                '->',
                                {
                                    xtype: 'form',
                                    items: [
                                        btnConfirm
                                    ]
                                }
                            ]
                        }
                    ]
                }
                
            ]
            
            

        });

        me.callParent(arguments);

    }

});
