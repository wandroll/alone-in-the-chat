import mutations from '@/store/mutations'

/**
 * Data Store unit tests
 */

test('store a new message', () => {
  const state = {
    messages: []
  }
  mutations.ADD_MESSAGE(state, {})
  expect(state.messages.count).toBe(1)
})

test('add a new personnality ', () => {
  const state = {
    personnalities: []
  }
  mutations.ADD_PERSONNALITY(state, 'newPersonnality')
  expect(state.personnalities.count).toBe(1)
})

test('remove a personnality ', () => {
  const state = {
    personnalities: ['personnality1', 'personnality2', 'personnality1']
  }
  mutations.REMOVE_PERSONNALITY(state, 'personnality1')
  expect(state.personnalities.count).toBe(1)
})
