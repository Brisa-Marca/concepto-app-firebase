<script>
import loginForm from '../components/loginForm.vue';
export default {
    name: 'Login',
    emits :['login'],
    components:{
        loginForm,
    },
    methods:{
        handleLogin(user){
           //console.log("[Login.vue handleLogin]El usuario es :" ,user);
           this.$emit('login',user);

        }

    }
}
</script>
<template>
      <section class="content-login">
            <div >
                <img src="../../assets/svg/favicon.svg" alt="" class="img-login">
                <h1 class="hero-section-title mb-24">Iniciar Sesión</h1>
           </div>
            
        </section>
       <loginForm @login="handleLogin"/>

</template>