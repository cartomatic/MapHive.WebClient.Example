//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict'
    
    Ext.define('ModernDesktopTest.controller.Auth', {
        extend: 'mh.controller.Auth',

        /**
         * Shows a logon UI.
         */
        showLogonUi: function(){
            //Note: Authentication controller requires a UI module exposing a standardised API! see mh.module.auth.Auth for details

            this.hideSplash();

            //<debug>
            //this.getAuthUiInstance().showLogonView();
            //</debug>

            //<debug>
            if(true){
                this.getAuthUiInstance().showLogonViewWithAutoLogon('queen@maphive.net', 'test');
            }
            else {
                //</debug>
                this.getAuthUiInstance().showLogonView();
                //<debug>
            }
            //</debug>
        },

    });
}());
