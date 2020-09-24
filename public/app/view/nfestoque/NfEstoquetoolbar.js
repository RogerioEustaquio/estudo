Ext.define('App.view.nfestoque.NfEstoquetoolbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'nfestoquetoolbar',
    id: 'nfestoquetoolbar',
    itemId: 'nfestoquetoolbar',
    // title: 'Consulta Nf Estoque',
    requires: [
    ],
    margin: '1 1 1 1',
    constructor: function() {
        var me = this;

        var empbx = Ext.create('Ext.form.field.ComboBox',{
            width: 70,
            name: 'empresa',
            itemId: 'comboempresa',
            store: Ext.data.Store({
                fields: [{ name: 'coditem' }, { name: 'descricao' }],
                proxy: {
                    type: 'ajax',
                    url: BASEURL + '/api/NfEstoque/listarempresas',
                    reader: {
                        type: 'json',
                        root: 'data'
                    }
                }
            }),
            queryParam: 'codigo',
            queryMode: 'local',
            displayField: 'nome',
            valueField: 'nome',
            emptyText: 'Emp',
            forceSelection: true,
            disabled: true,
            listeners: {
                select: function (form){
        
                    // var valor = form.getRawValue();
                    // var proxyprod = this.up('grid').down('#comboproduto').getStore().getProxy();

                    // proxyprod.setExtraParams({emp: valor});
                }                    
            }
        });

        empbx.store.load(function(r){
            empbx.enable();
            empbx.select(USUARIO.empresa);

        });

        btnPlay = Ext.create('Ext.button.Button',{
            iconCls: 'fa fa-play',
            tooltip: 'Filtro',
            margin: '1 10 1 1',
            handler: function() {

                console.log('Load Grid');
            }
        });

        Ext.applyIf(me, {    
            items: [
                empbx,
                btnPlay
            ]

        });

        me.callParent(arguments);

    }

});
