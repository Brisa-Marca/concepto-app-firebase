<script>
//import {planesActualizados} from './services/plans.js';
import {subscribeToAuth , logout} from './services/auth.js';

export default {
    name: 'App',
    data(){
        return{
            user:{
                id: null,
                email:null,

            }
        }
        
    },
    methods:{
        handleLogout(){
       logout()
       .then(user =>{
             //Redireccion al perfil.
             this.$router.push({path: '/iniciar-sesion'})
            })
        }
    },
    mounted(){
        subscribeToAuth(newUserData =>{
            this.user = {
                ...newUserData,
            }
        });

    }
    
   
}

</script>

<template>
     <header class="navbar m-0-auto">

<div class="navbar-logo">
    <a href="index.html">
        <img src="../assets/svg/logo-palabra.svg" alt="Concepto logo">
    </a>
</div>

<button class="mobile-nav-toggle" id="nav-toggle" aria-expanded="false"></button>
<!--NAV-->
<nav>
  <!--<template>-->  
    <ul id="primary-navigation" data-visible="false">
        <li class="active">
            <router-link to="/" class="navigation-anchor">Home</router-link>
            
        </li>
        <li id="explorar" >
            <router-link to="/pricing" class="navigation-anchor">Pricing</router-link>
            
        </li>
       
        <li>
            <router-link to="/contacto" class="navigation-anchor">Contactanos</router-link>
           
        </li>
        <!-- <li>
            <router-link to="/contacto/:iduserAdmin" class="navigation-anchor">Contactanos</router-link>
           
        </li> -->
      
    </ul>
    
    <!--</template>
         <template>
        <ul id="primary-navigation" data-visible="false">
        <li class="active">
            <router-link to="/admin/dashboard" class="navigation-anchor">Dashboard</router-link>
            
        </li>
        <li id="explorar" >
            <router-link to="/admin/pricing" class="navigation-anchor">Pricing</router-link>
            
        </li>
       
        <li>
            <router-link to="/admin/mensajes" class="navigation-anchor">Mensajes</router-link>
           
        </li>
      
    </ul>
    </template> -->
        
    
</nav>


<div class="btn-login">
   <ul>
    <template v-if="user.id === null">
    <li>  <router-link to="/iniciar-sesion" class="btn-ingresar">Ingresar</router-link></li>
    
    </template>
    <template v-else>
        <!--REALIZAR LA PAGINA DE MI PERFIL Y RUTEARLO-->
        <li>  <router-link to="/perfil" class="btn-ingresar">Mi Perfil</router-link></li>
    <li>
        <form action="" @submit.prevent = "handleLogout">

            <button type="submit" class="p-user">Hola, <span class="primary-color-text ">{{user.email}}</span>(cerrar sesión)</button>
        </form>
    </li>
</template>
   </ul>
</div>


</header> 
      <main id="main">    
       <router-view ></router-view>
      </main>
 
</template>