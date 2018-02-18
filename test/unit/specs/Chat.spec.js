/**
 * Unit test done with vue-test-utils & Jest
 * @see https://vue-test-utils.vuejs.org
 */

import { mount } from '@vue/test-utils'
import Chat from '@/components/Chat'

const SEND_MESSAGE_BUTTON_SELECTOR = '.submit-button'
const ERASE_MESSAGE_BUTTON_SELECTOR = '.erase-button'

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
    wrapper = mount(Chat)
  })

  it('should render correct labels correctly', () => {
  })

  it('should emit "sendMessage" when button "sendMessage" is clicked', () => {
    wrapper.find(SEND_MESSAGE_BUTTON_SELECTOR).trigger('click')
    expect(wrapper.emitted().sendMessage).toHaveBeenCalled()
  })

  it('should erase "newMessage" when button "sendMessage" is clicked', () => {
    wrapper.setData({
      newMessage: 'Say something',
      labels: {
        addMessage: 'Write',
        submit: 'Send',
        reset: 'Reset'
      });
    wrapper.find(ERASE_MESSAGE_BUTTON_SELECTOR).trigger('click')
   // expect(wrapper.emitted().sendMessage).toHaveBeenCalled()
  })

  it('should erase "newMessage" when button "reset" is clicked', () => {
    wrapper.find(ERASE_MESSAGE_BUTTON_SELECTOR).trigger('click')
   // expect(wrapper.emitted().sendMessage).toHaveBeenCalled()
  })
})
