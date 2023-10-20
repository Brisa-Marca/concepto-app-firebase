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
    <div class="userprofile-content">
        <h1>Perfil de {{userProfile.email}}</h1>
        <div class="btn-userProfile">
            <router-link  :to="`/usuario/${userProfile.id}/chat`">Iniciar conversacion Privada</router-link>
        </div>
    

    </div>
    
</template>