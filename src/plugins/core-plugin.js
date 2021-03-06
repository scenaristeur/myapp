// import ForceGraph3D from '3d-force-graph';
import { Core /*Neurone, Brain,  Graph*/ } from '@/neurone-factory'
//
// let graph = undefined
const plugin = {
  install(Vue, opts = {}) {
    let store = opts.store
    Vue.prototype.$coreInit = async function(options = {}){
        let core = new Core(options)
      store.commit ('core/setCore', core)
    }
    Vue.prototype.$spinnerAdd = function(task){
      store.commit('core/spinnerAdd', task)
    }
    Vue.prototype.$spinnerRemove = function(task){
      store.commit('core/spinnerRemove', task)
    }
  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
