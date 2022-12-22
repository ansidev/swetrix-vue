import * as Swetrix from 'swetrix'
import type { LibOptions, PageViewsOptions } from 'swetrix/dist/esnext/Lib'
import { watchEffect } from 'vue'
import type { App, Plugin } from 'vue'
import type { SwetrixVuePluginOptions } from './types'

export type { SwetrixVuePluginOptions } from './types'

/**
 * Vue Composition API for automatically tracking navigation changes on Vue v3 apps.
 *
 * @param pid the Swetrix Project ID.
 * @param initOptions configuration of the Swetrix init method.
 * @param pageViewsOptions configuration of the Swetrix trackViews method.
 */
export const useSwetrix = (pid: string, initOptions: LibOptions = {}, pageViewsOptions: PageViewsOptions = {}) => {
  watchEffect(() => {
    Swetrix.init(pid, initOptions)
    Swetrix.trackViews(pageViewsOptions)
  })
}

const plugin: Plugin = {
  install: (_: App, options: SwetrixVuePluginOptions) => {
    useSwetrix(options.pid, options.initOptions, options.pageViewsOptions)
  },
}

export default plugin
