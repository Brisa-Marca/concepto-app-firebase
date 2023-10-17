<script>
//import {planesActualizados} from './services/plans.js';
import Pricing from './pages/Pricing.vue';

export default {
    name: 'App',
   
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
      
    </ul>
</nav>


<div>
    <button class="btn-ingresar">Ingresar</button>
</div>

</header> 
      <main id="main">    
       <router-view></router-view>
      </main>
 
</template>