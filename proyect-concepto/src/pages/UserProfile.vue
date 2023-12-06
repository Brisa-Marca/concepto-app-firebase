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
    <div class="content-profile">
        <div class="content-login">
        <h1 class="hero-section-title mb-24">Perfil del usuario: {{ userProfile.email }}</h1>
    </div>
    <div class="content-btn-mensaje">
        <router-link :to="`/admin/mensajes/${userProfile.id}/chat`"> <button type="submit" class="btn-users-mensaje"> Ver mensajes</button> </router-link>

    </div> 

    </div>
   
</template>