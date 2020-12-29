<template>
  <div>
    <v-text-field
      label="제목"
      hide-details="auto"
      v-model="form.title"
    ></v-text-field>  
    <v-textarea
      counter
      label="내용"
      v-model="form.contents"
    ></v-textarea>
    <v-btn @click="createPost">등록</v-btn>
  </div>
</template>
<script>
import api from '@/api/post'
export default {
    name: 'PostForm',
    data: function(){
        return {
            form: {
                title: null,
                contents: null
            }
        }
    },
    methods: {
        createPost (){
            if(!this.$store.state.authenticated){
                alert('please signin')
                this.$router.push('/log-in')
            } else {
                api.createPost(this.form, this.$store.state.token)
                    .then(result => {
                            console.log("create Post")
                            console.log(result.data.contents)
                            this.$router.push('/posts')
                    })
            }
         }
    }
    
}
</script>