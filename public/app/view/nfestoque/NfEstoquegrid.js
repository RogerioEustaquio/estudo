Ext.define('App.view.nfestoque.NfEstoquegrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'NfEstoquegrid',
    id: 'NfEstoquegrid',
    itemId: 'NfEstoquegrid',
    requires: [
        'Ext.grid.feature.GroupingSummary'
    ],
    constructor: function() {

        Ext.define('App.view.pvvaloresproduto.modelgrid', {
            extend: 'Ext.data.Model',
            fields:[{name:'grupo',mapping:'grupo'},
                    {name:'idEmpresa',mapping:'idEmpresa'},
                    {name:'idItem',mapping:'idItem'},
                    {name:'vdMes',mapping:'vdMes'},
                    {name:'vdAno',mapping:'vdAno'},
                    {name:'qtMes',mapping:'qtMes',type:'number'},
                    {name:'idCategoria',mapping:'idCategoria'},
                    {name:'qtEstoqueAtual',mapping:'qtEstoqueAtual',type:'number'}
                    ]
        });

        Ext.applyIf(this, {

            store: Ext.create('Ext.data.Store', {
                model: 'App.view.pvvaloresproduto.modelgrid',
                proxy: {
                    type: 'ajax',
                    method:'POST',
                    url : BASEURL + '/api/NfEstoque/listarNfEstoque',
                    encode: true,
                    format: 'json',
                    reader: {
                        type: 'json',
                        rootProperty: 'data'
                    }
                },
                autoLoad: true,
                grouper: {
                    property: 'grupo'
                }
            }),
            columns: [
                {
                    text: 'Emp',
                    width: 52,
                    dataIndex: 'idEmpresa',
                    summaryType: 'count'
                },
                {
                    text: 'Item ',
                    dataIndex: 'idItem',
                    width: 140
                },
                {
                    text: 'Mês Ano',
                    dataIndex: 'vdMes',
                    width: 110,
                    summaryType: 'min',
                    summaryRenderer: function(index){
                        
                        index = index.substr(3,4);
                        return Ext.String.format(index);
                    }
                },
                {
                    text: 'Qt. Mês ',
                    dataIndex: 'qtMes',            
                    width: 110,
                    summaryType: 'sum'
                },
                {
                    text: 'Estoque',
                    dataIndex: 'qtEstoqueAtual',            
                    width: 120
                }
            ],
            features: [
                {
                    groupHeaderTpl: '{name}',
                    ftype: 'groupingsummary',
                    hideGroupedHeader: false,
                    enableGroupingMenu: false,
                    startCollapsed: false
                },
                {
                    ftype: 'summary',
                    dock: 'bottom'
                }
            ],
            listeners: {

            }
        });

        this.callParent(arguments);
    }
});