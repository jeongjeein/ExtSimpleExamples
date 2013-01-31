/*
 * File: app/store/ComboStore.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.ComboStore', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyArrayStore',
            data: [
                [
                    'One'
                ],
                [
                    'Two'
                ],
                [
                    'Three'
                ]
            ],
            proxy: {
                type: 'memory',
                reader: {
                    type: 'array'
                }
            },
            fields: [
                {
                    name: 'text'
                }
            ]
        }, cfg)]);
    }
});