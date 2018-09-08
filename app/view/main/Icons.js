//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('ModernDesktopTest.view.main.Icons', {
        singleton: true,
        requires: [
            'mh.FontIconsDictionary'
        ],
        constructor: function() {
            mh.FontIconsDictionary.addIcons({
                mainMenuMap: 'x-i54c i54c-globe',
                mainMenuUsers: 'x-i54 i54-group-1'
            });
        }
    });
    
}());