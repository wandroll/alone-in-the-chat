<template>
  <div id="app" class="application-wrapper">
    <section class="page-container-section">
      <h1>{{title}}</h1>
      <p>{{ explanation}}</p>
    </section>
    <section class="page-container-section">
    <div class="md-layout md-gutter">
      <Chat
        v-for="personnality in personnalities"
        :key="personnality"
        :personnality="personnality"
        v-on:remove-personnality="handleRemovePersonnality(personnality)"
        v-on:send-message="handleSendMessage(personnality, $event)"/>
    </div>
    </section>
    <section class="page-container-section">
    <h2>{{addPersonnalityTitle}}</h2>

      <md-field md-clearable>
          <label>New character</label>
          <md-input v-model="newcharacter"></md-input>
      </md-field>
      <md-button v-on:click="handleAddPersonnality" class="md-primary">Ajouter</md-button>
    </section>
  </div>
</template>

<script>
import Chat from './components/Chat'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    Chat
  },
  data: () => ({
    title: 'Alone in the Chat',
    explanation: `Too shy to post on Reddit ? Too many personns inside wanting to have a say ?
      It is time to have a little chat with yourself.
    `,
    addPersonnalityTitle: 'Need to *some yourself* else ?',
    characterLabel: ''
  }),
  computed: {
    ...mapGetters([
      'messages',
      'personnalities'
    ])
  },
  methods: {
    handleSendMessage (personnality, e) {
      console.log(e)
    },
    handleAddPersonnality () {
      this.$store.dispatch('addPersonnality', this.characterLabel)
    },
    handleRemovePersonnality (personnality) {
      this.$store.dispatch('removePersonnality', personnality)
    }
  }

}
</script>

<style>
.application-wrapper {
  -webkit-box-flex: 1;
  flex: 1;
      max-width: 1100px;
    margin: 0 auto;
}
</style>
