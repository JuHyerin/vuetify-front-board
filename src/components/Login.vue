<template>
    <div>
        <div v-if="!this.$store.state.authenticated">
            <form @submit.prevent='login'>
                <v-col
                    cols="12"
                    sm="6"
                    md="3"
                >
                <v-text-field
                    v-model="user.email"
                    label="ID"
                    placeholder="아이디 입력"
                    filled
                    rounded
                    dense
                    required
                    :rules="[v => !!v || 'ID is required']"
                >
                </v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="3"
                >
                <v-text-field
                    v-model="user.password"
                    label="PW"
                    placeholder="비밀번호 입력"
                    filled
                    rounded
                    dense
                    required
                    :rules="[v => !!v || 'Password is required']"
                >
                </v-text-field>
                </v-col>
                <v-btn type="submit">login</v-btn>
                <v-btn @click="googleLogin">Google</v-btn>
                <v-btn @click="naverLogin">Naver</v-btn>
            </form>
        </div>
        <div v-else>
            <v-btn @click="logout">logout</v-btn>
        </div>
    </div>
</template>

<script>
import api from '@/api/user'
export default {
    name: 'SignIn',
    data(){
        return {
            user: {
                email:"",
                password:""
            }
        }
    },
    methods: {
        login () {
            api.login(this.user)
                .then(result => {
                    if(result.data.code == 1000){
                        this.$store.commit('setAuth',result.data.contents) //동기 
                         this.$router.push('/')
                    } else{
                        alert('failed to login')
                        this.$router.go(this.$router.currentRoute)
                    }
                    
                })    
        },
        googleLogin(){
            window.location.href='http://localhost:8080/oauth2/authorize/google';
        },
        naverLogin() {
            window.location.href='http://localhost:8080/oauth2/authorize/naver';
        },
        logout() {
            this.$store.dispatch('initAuth')
            alert('success logout')
            this.$router.push('/')  
        }
    }
}
</script>
<style scoped>
.center{
    position: relative;
    left: 50%;
}
</style>