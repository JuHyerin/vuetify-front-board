<template>
  <v-app class="hello">
    <label>hi</label>
    <label v-if="user!=null">{{user.name}} ({{user.username}}) </label>
  </v-app>
</template>

<script>

export default {
  name: 'HelloWorld',
  computed: {
    user: function(){
      return this.$store.state.currentUser;
    }
  }
}
</script>