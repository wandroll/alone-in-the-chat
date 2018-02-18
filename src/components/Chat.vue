<template>
  <div class="md-layout-item">
    <div class="chat-container">
      <md-toolbar md-elevation="0" md-dense md-theme="dark" class="chat-title-container">
        <span class="md-title chat-title">{{ personnality }}</span>
        <md-button class="md-icon-button md-dense chat-button" @click="remove">
          <md-icon>clear</md-icon>
          <md-tooltip md-theme="default">{{ labels.remove }}</md-tooltip>
        </md-button>
      </md-toolbar>
      <div class="chat-content">
        <div class="messages-wrapper" ref="messagesWrapper">
          <div
            v-for="(message, idx) in messages"
            v-bind:class="getMessageClass(message)"
            class="message-line"
            :key="idx">
            {{ message.from }} : {{ message.content}}
          </div>
        </div>
        <md-field>
          <label>{{labels.addMessage}}</label>
          <md-textarea ref="newmessageField"
            v-model="newMessage"
            @keyup.enter="submit"
            md-clearable></md-textarea>
        </md-field>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Chat',
  props: {
    personnality: { type: String, required: true },
    messages: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      newMessage: 'Say something',
      labels: {
        addMessage: 'Write',
        submit: 'Send',
        reset: 'Reset',
        remove: 'Remove'
      }
    }
  },
  methods: {
    submit () {
      this.$emit('send-message', { from: this.personnality, content: this.newMessage })
      this.reset()
    },
    remove () {
      this.$emit('remove-personnality', this.personnality)
    },
    reset () {
      this.newMessage = ''
    },
    getMessageClass (message) {
      if (message.from === '') return 'bot-message'
      return message.from === this.personnality ? 'response-message' : 'sent-message'
    },
    scrollDownToLastMessage () {
      const messagesWrapper = this.$refs.messagesWrapper
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight
    }
  },
  watch: {
    messages () {
      this.scrollDownToLastMessage()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/style/global.scss';

.chat-container {
  border: 1px solid $dove-gray;
}

.chat-content {
  padding:16px;
}

.chat-title-container{
  background-color: $dove-gray;
}
.chat-title {
  background-color: $dove-gray;
  color: $white;
}
.chat-button{
  position: absolute;
  right: 1em;
  color: $white;
}
.messages-wrapper {
  max-height: 20em;
  padding-bottom: 1.5em;
  overflow-y: auto;
}
.message-line{
  word-wrap: break-word;
 }
.response-message{
  text-align: right;
}
.bot-message{
  font-style: italic;
  color: $dove-gray;
}
</style>
