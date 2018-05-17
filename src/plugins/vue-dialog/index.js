import VueDialog from './VueDialog'
import './themes/default.css'

export default {
  install (Vue, options = {}) {
    const CONSTRUCTOR = Vue.extend(VueDialog)
    const CACHE = {}
    const mergedOptions = Object.assign(VueDialog.OPTIONS_TEMPLATE, options)

    Vue.alert = Vue.prototype.$alert = (args = {}) => {
      return vueDialog('alert', args)
    }
    Vue.confirm = Vue.prototype.$confirm = (args = {}) => {
      return vueDialog('confirm', args)
    }
    Vue.prompt = Vue.prototype.$prompt = (args = {}) => {
      return vueDialog('prompt', args)
    }

    const vueDialog = (mode, args) => {
      if (typeof args === 'string') {
        let title = args
        args = { title }
      }
      args.mode = mode || 'alert'
      switch (mode) {
        case 'alert':
          args.lbHide = true
          break
        case 'confirm':
          break
        case 'prompt':
          break
        default:
          args.lbHide = true
          break
      }
      let dialog = CACHE[mergedOptions.id] || (CACHE[mergedOptions.id] = new CONSTRUCTOR())
      if (!dialog.$el) {
        let vm = dialog.$mount()
        document.querySelector(args.parent || 'body').appendChild(vm.$el)
      }
      return dialog.enqueue(args)
    }
  }
}
