// Liste des actions déclenchable par les composants de l'application
// Ce peut etre des fonctions asynchrones
// Elles peuvent s'appuyer sur des services.
// Elle déclenchent nos commits
import * as types from './mutation-types'

const actions = {
  sendMessage ({ commit }, {from, content}) {
    commit(types.ADD_MESSAGE, {from, content})
  },
  addPersonnality ({ commit }, characterLabel) {
    commit(types.ADD_PERSONNALITY, { characterLabel })
    commit(types.ADD_MESSAGE, { from: '', content: 'characterLabel joined the conversation.' })
  },
  removePersonnality ({ commit }, characterLabel) {
    commit(types.REMOVE_PERSONNALITY, { characterLabel })
    commit(types.ADD_MESSAGE, { from: '', content: 'characterLabel left the conversation.' })
  }
}

export default actions
