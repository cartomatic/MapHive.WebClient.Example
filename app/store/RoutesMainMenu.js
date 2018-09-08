//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

        Ext.define('ModernDesktopTest.store.RoutesMainMenu', {
        extend: 'Ext.data.Store',

    requires: [
        'ModernDesktopTest.view.map.Map',
        'ModernDesktopTest.view.testComposite.TestComposite',
        'mh.FontIconsDictionary',
        'mh.data.model.Route',
        'mh.data.model.User',
        'mh.module.dataView.users.DataView'
    ],

    model: 'mh.data.model.Route',

        //see comments in mh.data.model.Route on how to use the route models

        data: [
            // {
            //     id: 'map',
            //     xtype: 'map',
            //     navigationRoute: 'map',
            //     //dataRoute: 'map',
            //     iconCls: 'mainMenuMap'
            // },
            // {
            //     id: 'users',
            //     xtype: 'mh-users-data-view',
            //     navigationRoute: mh.module.dataView.users.DataView.navigationRoute,
            //     dataRoute: mh.data.model.User.getEntityNavigationUrlBase(), //data routes handle specific models, so take it of a model!
            //     iconCls: 'mainMenuUsers'
            // }
            //Note: with composite views, the other views (not the first / default view MUST be registered in the RoutesNonMainMenu store!)
            {
                id: 'composite',
                xtype: 'testcomposite',
                navigationRoute: 'map',
                dataRoute: 'map',
                iconCls: 'mainMenuMap'
            },
        ]
    });

}());