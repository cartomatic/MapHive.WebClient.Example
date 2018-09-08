//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict'
    
    Ext.define('ModernDesktopTest.view.testComposite.TestComposite', {
        extend: 'mh.module.dataView.CompositeDataView',
    
        xtype: 'testcomposite',

    requires: [
        'ModernDesktopTest.view.map.Map',
        'mh.module.dataView.users.DataView'
    ],

    items: [
            {
                xtype: 'map',
                iconAlign: 'left'
            },
            {
                xtype: 'mh-users-data-view',
                iconAlign: 'left'
            }
        ]
    });
}());
