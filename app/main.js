(function () {


    require.config({
        baseUrl:'/',
        paths: {
            'jquery': 'vendors/jquery/jquery',
            'underscore': 'vendors/underscore/underscore',
            'backbone': 'vendors/backbone/backbone',
            'text': 'vendors/require-text/text'

        },

        shim: {
            'underscore': {
                exports: '_'
            },
            'jquery':{
                exports: '$'
            },

            'backbone':{
                deps:['jquery','underscore'],
                exports:'Backbone'
            },
            'public/assets/js/jquery.ui.widget':{
                deps:['jquery']
            },
            'public/assets/js/metro-core':{
                deps:['public/assets/js/jquery.ui.widget']
            }
        }
    });

    require(['app/app'], function (app) {
        app.initialize();
    });

}());