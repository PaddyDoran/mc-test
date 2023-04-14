import { ComponentSettings, Manager } from '@managed-components/types'

export default async function (manager: Manager, settings: ComponentSettings) {
  manager.addEventListener('pageview', event => {
    console.log('The current date is:', new Date())
  })
}
