//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('ModernDesktopTest.AppLauncher', {
        requires: [
            'ModernDesktopTest.view.main.Main'
        ],

        constructor: function(config) {

            //disable aria warnings
            Ext.ariaWarn = Ext.emptyFn;

            //prevent default right click
            Ext.getBody().on(
                'contextmenu',
                function(e, target){
                    // don't show default context menu
                    e.preventDefault();
                }
            );

            Ext.create('ModernDesktopTest.view.main.Main');
        }

    });

}());