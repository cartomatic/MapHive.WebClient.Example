/**
 * Created by domin on 15.07.2018.
 */
Ext.define('ModernDesktopTest.view.map.Map', {
    extend: 'Ext.Panel',

    requires: [
        'mh.FontIconsDictionary',
        'ModernDesktopTest.view.map.Icons'
    ],

    requires: [
        'Ext.layout.Fit',
        'ModernDesktopTest.view.map.MapController',
        'ModernDesktopTest.view.map.MapModel',
        'mh.FontIconsDictionary',
        'mh.module.map.Ol3MapContainer'
    ],

    xtype: 'map',

    controller: 'map',

    viewModel: {
        type: 'map'
    },

    bind: {
        title: '{localization.viewName}'
    },

    iconCls: mh.FontIconsDictionary.getIcon('mapMap'),

    layout: 'fit',

    items: [
        {
            xtype: 'mh-ol3-map-container'
        }
    ]
});