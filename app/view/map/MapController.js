//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict'
    
    Ext.define('ModernDesktopTest.view.map.MapController', {
        extend: 'Ext.app.ViewController',

        alias: 'controller.map',

        requires: [
            'ModernDesktopTest.view.map.MapLocalization',
        ],

        mixins: [
            'mh.mixin.Localization'
        ],

        /**
         * Called when the view is created
         */
        init: function() {
            this.injectLocalizationToViewModel();
        }
    });
}());
