<script>
import {plansSave ,planesActualizados , plansDelete} from '../services/plans.js';
import {subscribeToAuth } from '../services/auth.js'
export default{
    name: 'Pricing',
    data(){
        return{
            actual :[],
            newPlans:{
                nombre: '',
                descripción:'',
                precio: '',
                caracteristicas:[],

            },
            user:{
                id: null,
                email:null,   
            }

        }
    },
    methods:{
        sendPlans(){
           plansSave({
            nombre: this.newPlans.nombre,
            descripción:this.newPlans.descripción,
            precio:this.newPlans.precio,
            caracteristicas:this.newPlans.caracteristicas,

           })
           .then(()=>{
            this.newPlans.nombre = "",
            this.newPlans.descripción = "",
            this.newPlans.precio = "",
            this.newPlans.caracteristicas = []

           })
        },
        deletePlan(){
            //console.log(plansDelete)
            // plansDelete({
               
            //  })
            console.log("eliminado")

        }
    },
    mounted() {
        planesActualizados(actual =>{
            this.actual = actual;
        });
        subscribeToAuth(newUserData =>{
            this.user = {
                ...newUserData,
            }
        });

    }
}
</script>
<template>
   
  
  <template  v-if="user.id === 'Q9DQIiTc2scDo10DKvmsUrsZY6a2'">
    <!--Contenido de pricing :las tablas de parte de admin-->
    <section class="pricing-content" >
        <h1 class="h1 h1-bigger text-center mt-8 mb-56 title-pricing">Administrar opciones de contratación.</h1>
    </section>
        <div class="content-form-plans">
            <div class="content-table-admin">
          <table class="table table-hover">
               <thead >
                  <tr class="table-header">
                      <th >Nombre</th>
                      <th >Descripción</th>
                      <th >Precio</th>
                      <th >Acciones</th>
                  </tr>
              </thead>
               <tbody v-for="plans in actual" :key="plans.id">
                       <tr>
                           <td>
                               <p>{{plans.nombre}} </p>
                           </td>
                           <td>
                               <p>{{plans.descripción}}</p>
                           </td>
                           <td>
                               <p>${{plans.precio}}</p>
                           </td>


                           <td class="btn-content">
                               <button class="btn-ingresar" >Editar</button>
                               <button class="btn-eliminar" @click="deletePlan(plans.id)" >Eliminar</button>
                           </td>
                       </tr>
               </tbody>
       </table>
      
      
        </div>
         <!--Seccion de form para agregar un nuevo plan-->
       <div class="checkout-form form-login" >
        <h1>Crear un nuevo plan</h1>
        <form action="#" id="content-form-plans"  @submit.prevent="sendPlans">
            <div class="form-input">
                <label for="Titulo">Titulo</label>
                <input type="text" id="Titulo" required v-model="newPlans.nombre">
            </div>
            <div class="form-input">
                <label for="Descripción">Descripción</label>
                <input type="text" id="Descripción" required v-model="newPlans.descripción">
            </div>
            <div class="form-input">
                <label for="Precio">Precio</label>
                <input type="number" id="Precio" required v-model="newPlans.precio">
            </div>
            <div class="form-input">
                <label for="caracteristicas">Caracteristicas</label>
                <input type="text" id="caracteristicas" required v-model="newPlans.caracteristicas[0]">
                <input type="text" id="caracteristicas" v-model="newPlans.caracteristicas[1]">
                <input type="text" id="caracteristicas" v-model="newPlans.caracteristicas[2]">
            </div>
            <button class="main-cta login" type="submit">Cargar</button>
        </form>

       </div>
        </div>
       
      
   </template>
  <template v-else>
    <section class="pricing-content">
   <p class="subtitle subtitle-center-lines text-center">Pricing</p>
   <h1 class="h1 h1-bigger text-center mt-8 mb-56 title-pricing">Comenza a potenciar tu carrera profesional con concepto</h1>
   <p class="paragraph mb-8 p-pricing">
       Con nuestros planes premium, accedés a nuestro catálogo entero de +435 tutoriales. ¡Elegí el que más se adapta a tus necesidades!
   </p>
  </section>
    <section class="planes-content" id="planes-content">
            <div class="plans" v-for="plans in actual">
                   <h2 class="title-plans ">{{plans.nombre}}</h2>
                         <p>{{plans.descripción}}</p>
                    <span class="price-plans">${{plans.precio}}<p class="p-mes">/mes</p></span>
                    <div class="caracteristicas-content">
                        <h3>Caracteristicas</h3>
                        <ul class="items-caracteristicas">
                            <li><img src="../../assets/svg/tick-square.svg" alt="">
                                <p>{{plans.caracteristicas[0]}}</p> 
                            </li>
                            <li><img src="../../assets/svg/tick-square.svg" alt="">
                                <p>{{plans.caracteristicas[1]}}</p> 
                            </li>
                            <li><img src="../../assets/svg/tick-square.svg" alt="">
                                <p> {{plans.caracteristicas[2]}}</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button  class="btn-elegir-plan">Elegir plan</button>
                    </div>
                    </div>
       </section>
  </template>
   
       

</template>