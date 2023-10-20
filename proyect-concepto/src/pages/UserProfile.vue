<script>
import { getUserProfileById } from '../services/user';

export default{
    name:'UserProfile',
    data(){
        return{
            userProfile:{
                id:null,
                email:null,

            }
        }
    },
   async  mounted(){

   this.userProfile = await getUserProfileById(this.$route.params.id);
    }

}
</script>


<template>
    <h1>Perfil de {{userProfile.email}}</h1>
    <router-link :to="`/usuario/${userProfile.id}/chat`">Iniciar conversacion Privada</router-link> 
</template>