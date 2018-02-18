import mutations from '@/store/mutations'
import getters from '@/store/getters'

/**
 * Data Store unit tests
 */

test('store a new message', () => {
  const state = {
    messages: []
  }
  mutations.ADD_MESSAGE(state, {})
  expect(state.messages.length).toBe(1)
})

test('add a new personnality ', () => {
  const state = {
    personnalities: []
  }
  mutations.ADD_PERSONNALITY(state, 'newPersonnality')
  expect(state.personnalities.length).toBe(1)
})

test('remove a personnality ', () => {
  const state = {
    personnalities: ['personnality1', 'personnality2', 'personnality1']
  }
  mutations.REMOVE_PERSONNALITY(state, {characterLabel: 'personnality1'})
  expect(state.personnalities.length).toBe(1)
})

test('getMessages', () => {
  const state = {
    messages: [{from: 'someone', content: 'Hi'}]
  }
  expect(getters.messages(state).length).toBe(1)
  expect(getters.messages(state)[0].from).toEqual('someone')
})

test('getPersonnalities', () => {
  const state = {
    personnalities: ['someone']
  }
  expect(getters.personnalities(state).length).toBe(1)
  expect(getters.personnalities(state)[0]).toEqual('someone')
})
