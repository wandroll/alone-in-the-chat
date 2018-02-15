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
          <label>Ecrire</label>
          <md-textarea v-model="newMessage" @keyup.enter.native="submit"></md-textarea>
        </md-field>
        <md-button v-on:click="submit" class="md-primary">Envoyer</md-button>
        <md-button v-on:click="reset" class="md-primary">Effacer</md-button>
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
      newMessage: 'Tell me thing'
    }
  },
  methods: {
    submit () {
      console.log('submit message from', this.personnality)
      this.$emit('send-message', { from: this.personnality, content: this.newMessage })
      this.reset()
    },
    reset () {
      this.newMessage = ''
    },
    getMessageClass (message) {
      return message.from === this.personnality ? 'response-message' : 'sent-message'
    },
    setScrollDown () {
      const messagesWrapper = this.$refs.messagesWrapper
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight
    }
  },
  watch: {
    messages () {
      this.setScrollDown()
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
  overflow-y: scroll;
}

.response-message{
  text-align: right;
}
</style>
