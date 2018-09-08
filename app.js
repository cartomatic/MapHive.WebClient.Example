/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ModernDesktopTest.Application',

    name: 'ModernDesktopTest',

    requires: [
        // This will automatically load all classes in the ModernDesktopTest namespace
        // so that application classes do not need to require each other.
        'ModernDesktopTest.*'
    ]

    /////Do not create a view yet. Let the app decide how to handle it
    //mainView: 'ModernDesktopTest.view.main.Main'
});
