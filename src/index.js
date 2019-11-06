import Toast from './component'
import { iconsMap, titleMap } from './config'
const ToastPlugin = {
  install (Vue, options = {}) {
    const ToastConstructor = Vue.extend(Toast)
    Vue.prototype.$toast = toast

    function buildProps (args) {
      let props = {}
      props.message = args[0]

      if (args[1] && args[1].type) props.type = args[1].type
      else props.type = 'info'
      if (args[1] && args[1].position) props.position = args[1].position
      else props.position = 'topCenter'

      if (args[1] && args[1].closeTime) props.closeTime = args[1].closeTime
      else props.closeTime = 3

      if (args[1] && args[1].hasOwnProperty('autoClose')) props.autoClose = args[1].autoClose
      else props.autoClose = true

      if (args[1] && args[1].hasOwnProperty('width')) props.width = args[1].width
      else props.width = 300

      if (args[1] && args[1].hasOwnProperty('height')) props.height = args[1].height
      else props.height = 80

      props.title = titleMap[props.type]
      props.icon = iconsMap[props.type]
      props.callback = args[1] && args[1].callback ? args[1].callback : null

      return props
    }

    function toast () {
      if (!arguments[0]) return
      const propsData = buildProps(arguments)
      const instance = new ToastConstructor({ propsData })
      document.body.appendChild(instance.$mount().$el)
    }
  }
}

export default ToastPlugin
