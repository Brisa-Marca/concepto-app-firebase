<script>
import { subscribeToAuth, editUser,logout} from '../services/auth';

export default{
    name: 'Profile',
    data(){
      return{
        user:{
      id:null,
      email:null,
      displayName:null,
    },
     authUnsubcribe:() => {},
     editing: false,
     editData:{
      displayName:"",
     },
     processingEdit:false,
    }
    },
    methods:{
      handleShowEdit(){
        this.editing = true;
        this.editData = {
          displayName: this.user.displayName,
        }

      },
      handleHideEdit(){
        this.editing = false;

      },
      async handleEdit(){
         this.processingEdit = true,
         await editUser({
          ...this.editData,
         });
         this.processingEdit = false;
      },
      handleLogout(){
       logout()
       .then(user =>{
             //Redireccion al iniciar-sesion.
             this.$router.push({path: '/iniciar-sesion'})
            })
      }
    },
    mounted(){
        this.authUnsubcribe = subscribeToAuth(newUser => {
          this.user = newUser
        })
    }, unmounted(){
      this.authUnsubcribe()
    }

}
</script>
<template>
    <section class="content-login">
          <template v-if="!editing">
            <div >
              <h1 class="hero-section-title mb-24">Mi Perfil</h1>
              <!--Ponerle estilos al nombre de usuario-->
              <img src="../../assets/png/icon-user.png" alt="icono de perfil de un usuario"  class="img-login">
                <p> {{ user.displayName || "No especificado" }} </p>
              <div>
                <div><button @click="handleShowEdit" class="btn-ingresar btn-perfil">Modificar mis datos</button></div>
                <template v-if="user.id == 'Q9DQIiTc2scDo10DKvmsUrsZY6a2'">
                  <router-link to="/admin/mensajes"><div><button class="btn-ingresar btn-perfil">Ver mis mensajes</button></div></router-link>
                </template>
                <template v-else>
                  <router-link to="/contacto"><div><button class="btn-ingresar btn-perfil">Ver mis mensajes</button></div></router-link>
                </template>
                <!-- <router-link to="/admin/mensajes"><div><button class="btn-ingresar btn-perfil">Ver mis mensajes</button></div></router-link> -->
                <div><button class="btn-cerrar btn-perfil" @click="handleLogout">Cerrar Sesión</button></div>

              </div>
              
         </div>
          </template>
          <template v-else>
            <form action="#" @submit.prevent="handleEdit">
              <div class="form-input">
                   <label for="displayName">Nombre de usuario</label>
                   <input type="text" name="" id="displayName" @disabled="processingEdit" v-model="editData.displayName">
              </div>
              <button @loading="processingEdit" class="btn-ingresar">Actualizar</button>
            </form>

            <button  @click="handleHideEdit" class="btn-eliminar">Cancelar</button>

          </template>
          
      </section>


</template>