/**
 * Unit test done with vue-test-utils & Jest
 * @see https://vue-test-utils.vuejs.org
 */

import { mount } from '@vue/test-utils'
import Chat from '@/components/Chat'

const NEW_MESSAGE_SELECTOR = { ref: 'newmessageField' }

/**
 * Functionnality
 * - Display correctly messages of chat
 * - Filter messages by sender
 * - Emit event with correct payload when clicked on submit button
 * - Reset typed message when clicked on
 *
 */
describe('Chat.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Chat, {
      propsData: {
        personnality: 'testPersonnality'
      },
      attachToDocument: true
    })
  })

  it('should render correct labels correctly', () => {
  })

  it('should emit "sendMessage" when button "sendMessage" is clicked', () => {
    wrapper.find(NEW_MESSAGE_SELECTOR).trigger('keyup.enter')
    expect(wrapper.emitted('send-message')).toBeTruthy()
  })

  it('should erase "newMessage" when message is sent', () => {
    wrapper.setData({
      newMessage: 'Say something',
      labels: {
        addMessage: 'Write',
        submit: 'Send',
        reset: 'Reset'
      }
    })
    wrapper.find(NEW_MESSAGE_SELECTOR).trigger('keyup.enter')
    expect(wrapper.find(NEW_MESSAGE_SELECTOR).text()).toEqual('')
  })
})
