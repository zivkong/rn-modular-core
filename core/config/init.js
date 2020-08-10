import { providersInit, providersCleanup } from '../providers'

const coreInit = () => {
  // Initiate core functions AFTER navigation and redux is mounted
  providersInit()
}

const coreCleanup = () => {
  // Cleanup core functions when user restart the app
  providersCleanup()
}

export { coreInit, coreCleanup }
