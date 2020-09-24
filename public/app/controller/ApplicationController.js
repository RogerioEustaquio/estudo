Ext.define('App.controller.ApplicationController', {
    extend: 'Ext.app.Controller',

    requires: [
        
    ],

    control: {

    },

    routes: {
        'home': { action: 'nfestoqueAction' },
        'righcharts': { action: 'righchartsAction' },
        'tree': { action: 'treeAction' }
    },
    
    getViewport: function(){
        return App.getApplication().getMainView();
    },
    
    init: function() {
        var me = this;

        // Se não tiver logado
        me.mainAction();
    },
    
    mainAction: function(){
        var me = this,
            viewport = me.getViewport();

    },

    homeAction: function(){
        var me = this,
            viewport = me.getViewport();
    },
    righchartsAction: function(){
        var me = this,
            viewport = me.getViewport();

        viewport.add({
            xtype: 'righchartsmain'
        });

        // console.log(righcharts);
    },
    treeAction: function(){
        var me = this,
            viewport = me.getViewport();

        viewport.add({
            xtype: 'treemain'
        });

        // console.log(righcharts);
    },
    
    nfestoqueAction: function(){
        var me = this;
        me.addMasterTab('nfestoquecamain');
    },

    addMasterTab: function(xtype){
        var me = this,
            viewport = me.getViewport();

        viewport.add({
            closable: false,
            xtype: xtype,
            listeners: {

            }
        });
    }
    
});
