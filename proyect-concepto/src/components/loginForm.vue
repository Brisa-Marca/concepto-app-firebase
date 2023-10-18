<script>
import { login} from "../services/auth.js";
 export default{
    name: 'loginForm',
    components:{},
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
               //email: this.form.email,
               //password:this.form.password,
            })
            .then(user =>{
             
            })
        }

    }
 }
</script>

<template>
     <div class="checkout-form form-login">
            <form action="#" @submit.prevent="handleLogin">
                <div class="form-input">
                    <label for="user">Nombre de usuario</label>
                    <input type="text" placeholder="Nombre de usuario" id="user" v-model="form.email" required>
                </div>
                <div class="form-input">
                    <label for="pass">Contraseña</label>
                    <input type="password"  id="pass" placeholder="**********" v-model="form.password" required>
                </div>
                <button type="submit"  class="main-cta login">Iniciar sesión</button>
                
            </form>
            <div class="registrate-content">
                <p>¿Aun no tienes cuenta?</p> <span class="p-register">Registrate</span>
            </div>
        </div>
</template>