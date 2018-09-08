//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('ModernDesktopTest.view.main.Main', {
        extend: 'mh.module.mainViewDesktop.MainViewDesktop',

    requires: [
        'ModernDesktopTest.view.main.MainController',
        'mh.module.mainViewDesktop.NavMenu',
        'mh.module.mainViewDesktop.NavMenu',
        //default user profile view for side nav menu
        'mh.module.userProfile.UserProfile'
    ],

    xtype: 'main',

        controller: 'main',

        navMenu: {
            xtype: 'mh-main-view-nav-menu',
            ui: 'dark micro',
            menuStore: 'ModernDesktopTest.store.RoutesMainMenu' //registered via application.stores
        },

        nonMenuRoutesStore: 'ModernDesktopTest.store.RoutesNonMainMenu' //registered via application.stores
    });

}());