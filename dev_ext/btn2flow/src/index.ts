import { defineInterface } from '@directus/extensions'
import InterfaceBtn2Flow from './interface.vue'

export default defineInterface({
  id: 'btn-2-flow',
  name: 'Button 2 Flow',
  description: 'Click action by button',
  icon: 'smart_button',
  component: InterfaceBtn2Flow,
  type: 'interface',
  types: ['string'],
  group: 'presentation',
  // options: null,
  options: ({ collection }) => [
    //   {
    //     field: 'links',
    //     name: '$t:interfaces.btn-2-flow.links',
    //     type: 'json',
    //     meta: {
    //       interface: 'list',
    //       options: {
    //         fields: [
    //           {
    //             field: 'label',
    //             type: 'string',
    //             name: '$t:label',
    //             meta: {
    //               width: 'full',
    //               interface: 'system-input-translated-string',
    //               options: {
    //                 placeholder: '$t:label',
    //               },
    //             },
    //           },
    //           {
    //             field: 'icon',
    //             name: '$t:icon',
    //             type: 'string',
    //             meta: {
    //               width: 'half',
    //               interface: 'select-icon',
    //             },
    //           },
    //           {
    //             field: 'type',
    //             name: '$t:type',
    //             type: 'string',
    //             meta: {
    //               width: 'half',
    //               interface: 'select-dropdown',
    //               default_value: 'normal',
    //               options: {
    //                 choices: [
    //                   { text: '$t:primary', value: 'primary' },
    //                   { text: '$t:normal', value: 'normal' },
    //                   { text: '$t:info', value: 'info' },
    //                   { text: '$t:success', value: 'success' },
    //                   { text: '$t:warning', value: 'warning' },
    //                   { text: '$t:danger', value: 'danger' },
    //                 ],
    //               },
    //             },
    //             schema: {
    //               default_value: 'normal',
    //             },
    //           },
    //           {
    //             field: 'url',
    //             type: 'string',
    //             name: '$t:url',
    //             meta: {
    //               width: 'full',
    //               interface: 'system-display-template',
    //               options: {
    //                 collectionName: collection,
    //                 font: 'monospace',
    //                 placeholder:
    //                   'https://example.com/articles/{{ id }}/{{ slug }}',
    //               },
    //             },
    //           },
    //         ],
    //       },
    //     },
    //   },
  ],
})
