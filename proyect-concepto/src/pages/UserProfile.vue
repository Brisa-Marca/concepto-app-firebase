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
     async mounted(){
       this.userProfile = await getUserProfileById(this.$route.params.id);
            
    }
 }
</script>
<template>
    <h1>Perfil del usuario: {{ userProfile.email }}</h1>
    <router-link :to="`/admin/mensajes/${userProfile.id}/chat`"><button type="submit" class="btn-users"> Ver mensajes</button></router-link>
   
</template>