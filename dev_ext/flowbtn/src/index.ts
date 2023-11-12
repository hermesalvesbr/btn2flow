import { defineInterface } from '@directus/extensions'
import InterfaceBtn2Flow from './interface.vue'
import { useApi } from '@directus/extensions-sdk'

let flowsList: { text: String; value: String } | null = null
export default defineInterface({
  id: 'btn-2-flow',
  name: 'Button 2 Flow',
  description: 'Click action by button',
  icon: 'smart_button',
  component: InterfaceBtn2Flow,
  hideLabel: true,
  hideLoader: true,
  autoKey: true,
  localTypes: ['presentation'],
  types: ['alias'],
  group: 'presentation',
  // options: null,
  options: (collection) => {    
      useApi()
        .get('flows')
        .then(({ data }) => {
          flowsList = data.data.map(({ name, id }) => {
            return {
              text: name,
              value: id,
            }
          })
        })

    return [
      {
        field: 'flows',
        name: 'Flows',
        type: 'json',
        meta: {
          interface: 'list',
          options: {
            fields: [
              {
                field: 'label',
                type: 'string',
                name: '$t:label',
                meta: {
                  width: 'full',
                  interface: 'system-input-translated-string',
                  options: {
                    placeholder: '$t:label',
                  },
                },
              },
              {
                field: 'icon',
                name: '$t:icon',
                type: 'string',
                meta: {
                  width: 'half',
                  interface: 'select-icon',
                },
              },
              {
                field: 'type',
                name: '$t:type',
                type: 'string',
                meta: {
                  width: 'half',
                  interface: 'select-dropdown',
                  default_value: 'normal',
                  options: {
                    choices: [
                      { text: '$t:primary', value: 'primary' },
                      { text: '$t:normal', value: 'normal' },
                      { text: '$t:info', value: 'info' },
                      { text: '$t:success', value: 'success' },
                      { text: '$t:warning', value: 'warning' },
                      { text: '$t:danger', value: 'danger' },
                    ],
                  },
                },
                schema: {
                  default_value: 'normal',
                },
              },
              {
                field: 'id',
                name: '$t:flow',
                type: 'string',
                meta: {
                  width: 'full',
                  interface: 'select-dropdown',
                  options: {
                    choices: flowsList,
                  },
                },
              },
       
            ],
          },
        },
      },
    ]
  },
})
