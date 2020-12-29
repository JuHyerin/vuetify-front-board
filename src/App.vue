<template>
  <v-app class="margin-padding">
    <v-tabs centered>
      <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>
        {{ tab.name }}
      </v-tab>
      <v-tab-item v-for="tab in tabs" :key="tab.id" :value="tab.route">
        <router-view></router-view>
      </v-tab-item>
    </v-tabs>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      tabs: [
        { id: 1, name: 'Welcome', route: '/' },
        { id: 2, name: 'Board', route: '/posts' },
        { id: 3, name: 'Login', route: '/log-in' }
      ]
    }
  },
  
   methods: {
    isAuthenticated(){
      console.log('checking')
      console.log(this.tabs)
      if(this.$store.state.authenticated){
        this.tabs[2].name = 'Logout'
        this.tabs[2].route = '/log-out' 
      } else{
        this.tabs[2].name = 'Login'
        this.tabs[2].route = '/log-in' 
      }
    }
  }, 
  mounted(){
    this.isAuthenticated()
  } 
}
</script>
<style scoped>
.margin-padding{
  margin: 0 200px 0 200px; 
}
</style>