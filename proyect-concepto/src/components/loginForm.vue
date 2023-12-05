<script>
import { login} from "../services/auth.js";
import BaseButton from "./BaseButton.vue";
 export default{
    name: 'loginForm',
    components:{BaseButton},
    data(){
        return{
            form:{
                email: '',
                password : '',
            }
        }
    },
    methods : {
        handleLogin(){
            console.log("Ejecutando el login con estos datos:", this.form);
            login({
                ...this.form,
            })
            .then( user =>{
             //Redireccion al perfil del usuario.
             this.$router.push({path: '/perfil'});
            })
        }

    }
 }
</script>

<template>
     <div class="checkout-form form-login">
            <form action="#" @submit.prevent="handleLogin">
                <div class="form-input">
                    <label for="user">Correo Electronico</label>
                    <input type="email" placeholder="ejemplo@gmail.com" id="user" v-model="form.email" required>
                </div>
                <div class="form-input">
                    <label for="pass">Contraseña</label>
                    <input type="password"  id="pass" placeholder="**********" v-model="form.password" required>
                </div>
                <BaseButton>Iniciar sesión</BaseButton>
            </form>
            
        </div>
</template>