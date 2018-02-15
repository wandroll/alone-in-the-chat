import * as types from './mutation-types'

const mutations = {
  [types.ADD_MESSAGE] (state, message) {
    state.messages.push(message)
  }
}

export default mutations
