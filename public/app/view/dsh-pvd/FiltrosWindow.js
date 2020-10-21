Ext.define('App.view.dsh-pvd.FiltrosWindow', {
    extend: 'Ext.window.Window',
    xtype: 'filtroswindow',
    itemId: 'filtroswindow',
    height: Ext.getBody().getHeight() * 0.9,
    width: Ext.getBody().getWidth() * 0.9,
    title: 'Filtros',
    requires:[
        'App.view.dsh-pvd.PluginDragDropTag',
        'App.view.dsh-pvd.PanelFilter'
    ],
    // layout: 'fit',
    modal: true,
    defaults:{
        padding: 10
    },

    constructor: function() {
        var me = this;

        var elTagEmpresa = Ext.create('Ext.form.field.Tag',{
            name: 'elEmp',
            itemId: 'elEmp',
            store: Ext.data.Store({
                fields: [
                    { name: 'emp', type: 'string' }
                ],
                proxy: {
                    type: 'ajax',
                    url: BASEURL + '/api/dshpvd/listarEmpresas',
                    timeout: 120000,
                    reader: {
                        type: 'json',
                        root: 'data'
                    }
                }
            }),
            width: '100%',
            name: 'emp',
            queryParam: 'emp',
            queryMode: 'local',
            displayField: 'emp',
            valueField: 'emp',
            emptyText: 'Ordem',
            fieldLabel: 'Empresas',
            labelWidth: 60,
            margin: '1 1 1 1',
            plugins:'dragdroptag',
            filterPickList: true,
            publishes: 'value'
        });

        elTagEmpresa.store.load();

        var elTagMarca = Ext.create('Ext.form.field.Tag',{
            name: 'marca',
            itemId: 'marca',
            store: Ext.data.Store({
                fields: [
                    { name: 'marca', type: 'string' }
                ],
                proxy: {
                    type: 'ajax',
                    url: BASEURL + '/api/dshpvd/listarmarca',
                    timeout: 120000,
                    reader: {
                        type: 'json',
                        root: 'data'
                    }
                }
            }),
            width: '100%',
            name: 'marca',
            queryParam: 'marca',
            queryMode: 'local',
            displayField: 'marca',
            valueField: 'marca',
            emptyText: 'Ordem',
            fieldLabel: 'Marca',
            labelWidth: 60,
            margin: '1 1 1 1',
            plugins:'dragdroptag',
            filterPickList: true,
            publishes: 'value'
        });


        Ext.applyIf(me, {
            
            items:[
                elTagEmpresa,
                elTagMarca
                
            ]
            
            

        });

        me.callParent(arguments);

    }

});
