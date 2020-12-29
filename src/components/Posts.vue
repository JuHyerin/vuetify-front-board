<template>
<div>
  <v-data-table
    :headers="headers"
    :items="posts"
    :items-per-page="4"
    class="elevation-1"
    @click:row="handleClick"
  ></v-data-table>
  <br/>
  <v-btn
    small
    @click = "createPage"
  >create</v-btn>
</div>
</template>  
<script>
import api from '@/api/post'
export default {
    data () {
      return {
        headers: [
          {
            text: 'title',
            align: 'start',
            sortable: false,
            value: 'title'
          },
          { text: 'writer', 
            sortable: false,
            value: 'writer' 
          },
          { text: 'created at', 
            value: 'createdAt' 
          }
        ],
        posts: []
      }
    },
    methods: {
        getPosts(){
            api.getPostList()
                .then((result) => {
                    this.posts = result.data.contents;
                })       
        },
        handleClick(post){
            console.log(post.postId)
            this.$router.push({name: 'PostDetail', params: {postid: post.postId}})
        },
        createPage(){
          if(this.$store.state.authenticated){
               this.$router.push('/post-create')
          }else {
            alert('로그인 후 작성 가능합니다.')
            this.$router.push('/log-in')
          }
       
        }
    },
    mounted () {
        this.getPosts()
    }
}
</script>