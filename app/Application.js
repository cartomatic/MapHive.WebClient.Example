(function(){
    //Make sure strict mode is on
    'use strict';


    Ext.define('ModernDesktopTest.Application', {
        extend: 'mh.Application',

        name: 'ModernDesktopTest',

        quickTips: false,
        platformConfig: {
            desktop: {
                quickTips: true
            }
        },

        requires: [
            'ModernDesktopTest.AppLauncher'
        ],

        mixins: [
            'mh.mixin.CallMeParent'
        ],

        controllers: [
            'mh.controller.Root',
            'ModernDesktopTest.controller.Auth',
            'mh.controller.Organization',
            'mh.controller.Splash'
        ],

        stores: [
            'ModernDesktopTest.store.RoutesMainMenu',
            'ModernDesktopTest.store.RoutesNonMainMenu'
        ],

        defaultToken: null,
        appShortName: 'mdtp',

        //here goes a custom app launcher class. If not overridden, it will default to mh.AppLauncher
        //Note: in this case ModernDesktopTest.AppLauncher just inherits from mh.AppLauncher and is used instead
        appLauncher: 'ModernDesktopTest.AppLauncher',

        /**
         * internal app launch procedure
         * @param cfg
         * @param cfg.userConfig
         * @param cfg.orgCtx
         */
        internalAppLaunch: function(cfg){

            //first make sure the base does what's required!
            this.callMeParent('internalAppLaunch', arguments);

            //start the external route watcher - this will watch changes advised by a parent, and pass own changes to a parent
            this.fireGlobal('root::watchexternalroutes', {host: true});


            //finally force reroute to the specified route so the router kicks in and handles nav properly
            //make sure though to postpone this a bit, so all the other stuff that can still be potentially configuring has some time to finish
            Ext.defer(
                function(){
                    this.redirectTo(window.location.hash.replace('#', ''), true);
                },
                250,
                this
            );
        }
    });

}());

