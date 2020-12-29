<template>
 <v-card
    class="mx-auto"
    max-width="344"
    elevation="7"
  >
    <v-card-text>
      <p class="display-1 text--primary">{{post.title}}</p>
      <p>writer: {{post.writer}}</p>
      <p>created at: {{post.createdAt}}</p>
      <div class="text--primary">{{post.contents}}</div>
    </v-card-text>
    <v-card-actions v-if="checkWriter()">
      <v-btn
        text
        color="teal accent-4"
        @click="updatePostPage"
      >
      Update
      </v-btn>
      <v-btn
        text
        color="teal accent-4"
        @click="deletePost"
      >
      Delete
      </v-btn>
    </v-card-actions>

   <!-- <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="display-1 text--primary">
            Update
          </p>
          <form @submit.prevent='updatePost'>
            <label>제목</label>
            <input type="text" v-model="form.title"> <br/>
        
            <label>내용</label>
            <input type="text" v-model="form.contents">
            <p>
                <input type="submit" value="수정">
            </p>
        </form>
        </v-card-text>
      
      </v-card>
    </v-expand-transition>  -->
  </v-card>
</template>

<script>
import api from '@/api/post'

export default {
    name: 'PostDetail',
    data: function(){
        return {
            reveal: false,
            postid: this.$route.params.postid,
            post: { //detail card
                postId: null,
                title: null,
                writer: null,
                createdAt: null,
                contents: null
            },
            /* form: { //update form card
                postId : this.$store.state.existPost.postId,
                title: this.$store.state.existPost.title,
                contents: this.$store.state.existPost.contents
            } */
        }
    },
    computed: {
        user: function(){
            return this.$store.state.currentUser;
        }
    },
    methods: {
        getPost: function(){
          api.getPostDetail(this.postid)
                .then((result) => {
                    console.log("getPost")
                    console.log(result);
                    this.post = result.data.contents;
                })
        },
 
        checkWriter: function() {
          const user = this.user.username
          const writer = this.post.writer
          console.log("user:" + user + ", writer:" + writer)
          return (user == writer)
          /* if(user!=null && user == writer){
              return true
          } else {
              return false
          } */
        },
 
        updatePostPage: function(){ 
          //this.reveal = true
          console.log("update post")
          this.$store.commit('setExistPost', this.post)
          this.$router.push('/post-update')
        },
        /* updatePost (){
          this.reveal = false
          api.updatePost(this.form, this.$store.state.token)
              .then(result => {
                  console.log("Success update Post")
                  console.log(result)
                  this.$router.push({name: 'PostDetail', params: {postid: this.form.postId}})
                })
        }, */
        deletePost () {   
          api.deletePost(this.postid, this.$store.state.token)
              .then( (result) => {
                  console.log("delete post")
                  console.log(result)
                  this.$router.push("/posts")
                  alert("삭제완료")
                })
        }  
    },

    mounted(){
        this.getPost();
    }
}
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>