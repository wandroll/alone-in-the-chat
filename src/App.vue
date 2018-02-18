<template>
  <div id="app" class="application-wrapper">
    <section class="page-container-section header-section">
      <h1>{{ labels.title }}</h1>
      <p>{{ labels.explanation }}</p>
    </section>
    <section class="page-container-section displaychats-section">
    <section class="page-container-section addelements-section">
      <h3>{{labels.addPersonnality.title}}</h3>

      <md-field md-clearable>
          <label>{{ labels.addPersonnality.field }}</label>
          <md-input ref="newCharacterInput" v-model="newcharacter" maxlength="30" md-clearable @keyup.enter="addPersonnality(newcharacter)"></md-input>
      </md-field>
    </section>
    <div class="md-layout md-gutter">
      <Chat
        v-for="personnality in personnalities"
        :key="personnality"
        :personnality="personnality"
        :messages="messages"
        v-on:remove-personnality="removePersonnality"
        v-on:send-message="sendMessage"/>
    </div>
    </section>
  </div>
</template>

<script>
import Chat from './components/Chat'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    Chat
  },
  data: () => ({
    labels: {
      title: 'Alone in the Chat',
      explanation: 'Too shy to post on Reddit ? Too many personns inside wanting to have a say ? It is time to have a little chat with yourself.',
      addPersonnality: {
        title: 'Invite *some-yourself* to the chat ?',
        field: 'New character'
      }
    },
    newcharacter: ''
  }),
  computed: {
    ...mapGetters([
      'messages',
      'personnalities'
    ])
  },
  methods: {
    ...mapActions(['sendMessage', 'addPersonnality', 'removePersonnality'])
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
