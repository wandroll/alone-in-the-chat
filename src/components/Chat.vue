<template>
  <div class="md-layout-item">
    <h2>{{ personnality }}</h2>
    <md-field>
      <label>Textarea</label>
      <md-textarea v-model="message"></md-textarea>
    </md-field>
    <md-button v-on:click="submit" class="md-primary">Envoyer</md-button>
    <md-button v-on:click="reset" class="md-primary">Effacer</md-button>
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
      message: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    submit () {
      console.log('submit message from', this.personnality)
      this.$emit('send-message', this.message)
    },
    reset () {
      this.$emit('increment')
      console.log('reset message from', this.personnality)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
