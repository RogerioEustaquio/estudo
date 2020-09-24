Ext.Loader.setConfig({enabled: true, disableCaching: true});

Ext.application({
    name: 'App',
    appFolder: 'app',

    paths: {
        'Ext.ux': 'app/ux'
    },

    requires: [
        'Ext.ux.util.Format',
        'App.view.Viewport',
        'App.controller.NfEstoqueController',
        'App.controller.RighChartsController',
        'App.controller.TreeController'
    ],
    
    controllers: [
        'ApplicationController'
    ],
    
    mainView: 'App.view.Viewport',

    defaultToken: 'home',
    
    launch: function() {

        if(!USUARIO && USUARIO != '""')
        window.location.href = BASEURL + '/login';

        // Recupera os dados do usuário
        USUARIO = Ext.decode(USUARIO);

        // console.log(USUARIO);
    }

});