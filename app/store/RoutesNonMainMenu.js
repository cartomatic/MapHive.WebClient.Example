//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('ModernDesktopTest.store.RoutesNonMainMenu', {
        extend: 'Ext.data.Store',

    requires: [
        'ModernDesktopTest.view.testComposite.TestComposite',
        'mh.data.model.Route',
        'mh.data.model.User',
        'mh.module.dataView.users.DataView'
    ],

    model: 'mh.data.model.Route',

        data: [
            //Note: this entry intercepts the 'users' nav route and points to a composite data view that handles its subviews visibility
            {
                id: 'users',
                xtype: 'testcomposite',
                navigationRoute: mh.module.dataView.users.DataView.navigationRoute,
                dataRoute: mh.data.model.User.getEntityNavigationUrlBase(), //data routes handle specific models, so take it of a model
            }
        ]
    });

}());