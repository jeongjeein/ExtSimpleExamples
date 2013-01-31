/*
 * File: app/view/PlantsGridPanel.js
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

Ext.define('EditableGrid.view.PlantsGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.plantsgrid',

    frame: true,
    height: 300,
    width: 600,
    title: 'Edit Plants?',
    store: 'Plants',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    id: 'common',
                    dataIndex: 'common',
                    text: 'Common Name',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    width: 130,
                    dataIndex: 'light',
                    text: 'Light',
                    editor: {
                        xtype: 'combobox',
                        store: [
                            'Shade',
                            'Mostly Shady',
                            'Sun or Shade',
                            'Mostly Sunny',
                            'Sunny'
                        ]
                    }
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return Ext.util.Format.currency(value, '$', 2) 
                    },
                    width: 70,
                    align: 'right',
                    dataIndex: 'price',
                    text: 'Price',
                    editor: {
                        xtype: 'numberfield',
                        allowBlank: false,
                        maxValue: 100000,
                        minValue: 0
                    }
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        return value ? Ext.Date.dateFormat(value, 'M d, Y') : '';
                    },
                    width: 95,
                    dataIndex: 'availDate',
                    text: 'Available',
                    editor: {
                        xtype: 'datefield',
                        disabledDays: [
                            0,
                            6
                        ],
                        disabledDaysText: 'Plants are not available on the weekends',
                        format: 'm/d/y'
                    }
                },
                {
                    xtype: 'actioncolumn',
                    frame: false,
                    id: 'delete',
                    width: 30,
                    items: [
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                view.getStore().removeAt(rowIndex);
                            },
                            disabled: false,
                            icon: 'resources/delete.gif',
                            tooltip: 'Delete plant'
                        }
                    ]
                }
            ],
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    pluginId: 'CellEditing'
                })
            ],
            selModel: Ext.create('Ext.selection.CellModel', {

            }),
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                // Create a model instance
                                var r = Ext.create('EditableGrid.model.Plant', {
                                    common: 'New Plant 1',
                                    light: 'Mostly Shady',
                                    price: 0,
                                    availDate: Ext.Date.clearTime(new Date()),
                                    indoor: false
                                }),
                                plantsGrid = this.up('plantsgrid');

                                plantsGrid.getStore().insert(0, r);

                                plantsGrid.getPlugin('CellEditing').startEditByPosition({row: 0, column: 0});
                            },
                            id: 'add',
                            text: 'Add Plant'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});