<template>
  <div class="md-layout-item">
    <div class="chat-container">
      <md-toolbar md-elevation="0">
        <h3 class="md-title">{{ personnality }}</h3>
      </md-toolbar>
      <div class="chat-content">
        <div class="messages-wrapper" ref="messagesWrapper">
          <div
            v-for="(message, idx) in messages"
            v-bind:class="getMessageClass(message)"
            :key="idx">
            {{ message.from }} : {{ message.content}}
          </div>
        </div>
        <md-field>
          <label>{{labels.addMessage}}</label>
          <md-textarea v-model="newMessage" @keyup.enter.native="submit"></md-textarea>
        </md-field>
        <md-button v-on:click="submit" class="md-primary submit-button">{{ labels.submit}}</md-button>
        <md-button v-on:click="reset" class="md-primary erase-button">{{ labels.send }}</md-button>
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
        reset: 'Reset'
      }
    }
  },
  methods: {
    submit () {
      this.$emit('send-message', { from: this.personnality, content: this.newMessage })
      this.reset()
    },
    reset () {
      this.newMessage = ''
    },
    getMessageClass (message) {
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
<style scoped>
.chat-container {
  border: 1px solid #616161;
}

.chat-content {
  padding:16px;
}

.messages-wrapper {
  max-height: 20em;
  padding-bottom: 1.5em;
  overflow-y: auto;
}

.response-message{
  text-align: right;
}
</style>
