/**
 * @rule: only pure method
*/
const getters = {
  messages: state => state.messages,
  personnalities: state => state.personnalities
}

export default getters
