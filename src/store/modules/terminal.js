// import Vue from 'vue'
// import idb from '@/api/idb-nodes';
// import { v4 as uuidv4 } from 'uuid';
//
// const vocab = "https://scenaristeur.github.io/agent/"

const state = () => ({
  showTerminal: false
})

const mutations = {
  toggleTerminal(state){
    state.showTerminal = ! state.showTerminal
  },
}

const actions = {
  // async pushCommandHistory(context, c){
  //   context.commit('setCommand', c)
  //   context.commit('pushHistory',c)
  //   if(c.type == "triplet"){
  //     let subjectNode = context.state.nodes.find(x => x.name == c.value.subject)
  //     subjectNode == undefined ? subjectNode = await Vue.prototype.$newNode({name: c.value.subject}) : ""
  //     if (c.value.predicate.startsWith('.'))
  //     {
  //       let p = c.value.predicate.slice(1)
  //           let n = await Vue.prototype.$addProp({node: subjectNode, propertie: p, value: c.value.object})
  //             await context.dispatch('saveNode', n)
  //       await context.dispatch('getNodes')
  //     }
  //     else
  //     {
  //       let objectNode = context.state.nodes.find(x => x.id == c.value.object || x.name == c.value.object)
  //       objectNode == undefined ? objectNode = await Vue.prototype.$newNode({name: c.value.object}) : ""
  //       let nodes2save  = await Vue.prototype.$addLink({subject: subjectNode, predicate:c.value.predicate, object:objectNode})
  //       nodes2save.forEach(async function(n) {
  //         await context.dispatch('saveNode', n)
  //       });
  //       await context.dispatch('getNodes') // pose problème de rafraichissement, certainement car on a enlevé __ob & __threeObj
  //     }
  //   }
  // },

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
