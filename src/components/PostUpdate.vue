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
                postId : this.$store.state.existPost.postId,
                title: this.$store.state.existPost.title,
                contents: this.$store.state.existPost.contents
            }
        }
    },
    methods: {
        createPost (){
            if(!this.$store.state.authenticated){
                alert('please signin')
                this.$router.push('/log-in')
            } else {
                api.updatePost(this.form, this.$store.state.token)
                    .then(result => {
                            console.log("update Post")
                            console.log(result.data.contents)
                            this.$store.dispatch('initExistPost')
                            this.$router.push({name: 'PostDetail', params: {postid: this.form.postId}})
                    })
            }
         }
    }
    
}
</script>