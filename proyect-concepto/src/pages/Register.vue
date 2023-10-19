<script>
import { register } from '../services/auth.js';

export default {
    name: 'Register',
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
             this.$router.push({path: '/perfil'})
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
                    <label for="user">Nombre de usuario</label>
                    <input type="text" placeholder="Nombre de usuario" id="user" v-model="form.email" required>
                </div>
                <div class="form-input">
                    <label for="pass">Contraseña</label>
                    <input type="password"  id="pass" placeholder="**********" v-model="form.password" required>
                </div>
                <button type="submit"  class="main-cta login">Crear cuenta</button>
                
            </form>
          
        </div>
</template>