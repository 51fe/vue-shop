import Notification from './components/Notification.vue'

export default {
  install (Vue, options = {}) {
    const mergedOptions = Object.assign(Notification.OPTIONS_TEMPLATE, options)
    const VueToast = Vue.extend(Notification)
    const toast = new VueToast({
      data: mergedOptions
    })

    Vue.prototype.$toast = {
      success(message, title) {
        return toast.success(message, title)
      },
      info(message, title) {
        toast.info(message, title)
      },
      warn(message, title) {
        toast.warning(message, title)
      },
      error(message, title) {
        toast.error(message, title)
      }
    }

    if (!toast.$el) {
      let vm = toast.$mount()
      document.body.appendChild(vm.$el)
    }

  }
}
