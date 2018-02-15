import * as types from './mutation-types'

/**
 * Vuex fait le travail pour nous de dupliquer l'objet state. Donc contrairement à ce qui est ecrit, cela reste un objet immutable
 * @see
*/
const mutations = {
  [types.ADD_MESSAGE] (state, message) {
    state.messages.push(message)
  },
  [types.REMOVE_PERSONNALITY] (state, { characterLabel }) {
    state.personnalities = state.personnalities.filter(s => s !== characterLabel)
  },
  [types.ADD_PERSONNALITY] (state, { characterLabel }) {
    state.personnalities.push(characterLabel)
  }
}

export default mutations
