//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('ModernDesktopTest.view.map.MapLocalization', {
        requires: [
            'mh.localization.Localization'
        ],
        statics: {
            localization: {
                viewName: {
                    en: 'Map',
                    pl: 'Mapa'
                }
            }
        }

    }, function(){
        mh.localization.Localization.registerTranslations(this);
    });
    
}());