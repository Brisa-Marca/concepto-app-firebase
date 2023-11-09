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
                <button type="submit"  class="main-cta login">Iniciar sesión</button>
                
            </form>
            
        </div>
</template>