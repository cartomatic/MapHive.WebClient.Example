//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('ModernDesktopTest.view.main.MainController', {

        extend: 'mh.module.mainViewDesktop.MainViewDesktopController',

        alias: 'controller.main',

        mixins: [
            'mh.mixin.CallMeParent'
        ],

        init: function(){
            this.callMeParent('init', arguments);

            //intercept main view items created, so can verify them an observe specific events!
            this.watchGlobal('mainview::itemcreated', this.onMainViewItemCreated, this);
        },

        firstRouteRestore: true,

        onMainViewItemCreated: function(evtData){
            //handle custom main view setup for specific modules
        }

    });

}());