//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict'
    
    /**
     * Created by domin on 08.09.2018.
     */
    Ext.define('ModernDesktopTest.view.testComposite.TestCompositeLocalization', {
        requires: [
            'mh.localization.Localization'
        ],
        statics: {
            localization: {
                viewName:{
                    pl: 'Testowy złożony',
                    en: 'Test composite'
                }
            }
        }
    }, function(){
        mh.localization.Localization.registerTranslations(this);
    });
}());
