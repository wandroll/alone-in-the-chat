/**
 * Unit test done with vue-test-utils & Jest
 * @see https://vue-test-utils.vuejs.org
 */

import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import App from '@/App'
import Chat from '@/components/Chat'

const localVue = createLocalVue()

localVue.use(Vuex)

const DATA_SET = {
  labels: {
    title: 'Alone in the Chat',
    explanation: 'Too shy to post on Reddit ? Too many personns inside wanting to have a say ? It is time to have a little chat with yourself.',
    addPersonnality: {
      title: 'Invite *some-yourself* to the chat ?',
      field: 'New character'
    }
  },
  newcharacter: ''
}

const ADD_PERSONNALITY_FIELD_SELECTOR = {ref: 'newCharacterInput'}

describe('App.vue', () => {
  let wrapper
  let store
  let getters
  let actions

  beforeEach(() => {
    getters = {
      messages: () => [],
      personnalities: () => ['Perso 1', 'Perso 2', 'Perso3']
    }
    actions = {
      sendMessage: jest.fn(),
      addPersonnality: jest.fn(),
      removePersonnality: jest.fn()
    }
    store = new Vuex.Store({
      getters,
      actions
    })
  })

  it('should render correct labels correctly', () => {
    const labels = DATA_SET.labels
    wrapper = mount(App, {
      store,
      localVue
    })
    const title = wrapper.find('.header-section h1')
    expect(title.text()).toEqual(labels.title)
    const description = wrapper.find('.header-section p')
    expect(description.text()).toEqual(labels.explanation)
    const addelementsTitle = wrapper.find('.addelements-section h3')
    expect(addelementsTitle.text()).toEqual(labels.addPersonnality.title)
    const addelementsFieldLabel = wrapper.find('.addelements-section label')
    expect(addelementsFieldLabel.text()).toEqual(labels.addPersonnality.field)
  })

  it('should call store action "addPersonnality" when Key enter is pressed on the field', () => {
    const wrapper = mount(App, { store, localVue, attachToDocument: true })
    wrapper.find(ADD_PERSONNALITY_FIELD_SELECTOR).trigger('keyup.enter')
    expect(actions.addPersonnality).toHaveBeenCalled()
  })

  it('should create as many Chat as personnalities in the store', () => {
    const wrapper = mount(App, { store, localVue })
    expect(wrapper.findAll(Chat).length).toEqual(getters.personnalities().length)
  })
})
