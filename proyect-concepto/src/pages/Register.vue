<script>
import { register } from '../services/auth.js';
import BaseButton from '../components/BaseButton.vue';

export default {
    name: 'Register',
    components:{BaseButton},
    data(){
        return{
            form:{
                email:'',
                password:'',
            }
        }
    },
    methods:{
        handleSubmit(){
            register({
                ...this.form,
            })
            .then( user =>{
             //Redireccion al perfil.
             this.$router.push({path: '/iniciar-sesion'})
            })
        }
    }
}
</script>
<template>
      <section class="content-login">
            <div >
                <img src="../../assets/svg/favicon.svg" alt="" class="img-login">
                <h1 class="hero-section-title mb-24">Crear una cuenta</h1>
           </div>
            
        </section>
        <div class="checkout-form form-login">
            <form action="#" @submit.prevent="handleSubmit">
                <div class="form-input">
                    <label for="user">Correo Electronico</label>
                    <input type="email" placeholder="ejemplo@gmail.com" id="user" v-model="form.email" required>
                </div>
                <div class="form-input">
                    <label for="pass">Contraseña</label>
                    <input type="password"  id="pass" placeholder="**********" v-model="form.password" required>
                </div>
                
                <BaseButton >Crear cuenta</BaseButton>
            </form>
            <div class="registrate-content">
               <p>¿Ya tienes una cuenta?</p>
               <span class="p-register"> <router-link :to="`/iniciar-sesion`" >Iniciar sesión</router-link></span>
           </div>
          
        </div>
</template>