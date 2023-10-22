<script>
import {planesActualizados} from '../services/plans.js';
import {subscribeToAuth } from '../services/auth.js'
export default{
    name: 'Pricing',
    data(){
        return{
            actual :[],
            user:{
                id: null,
                email:null,

            }

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
    <section class="pricing-content">
        <h2 class="h1 h1-bigger text-center mt-8 mb-56 title-pricing">Administrar opciones de contratación.</h2>
        <table >
            <tr>
                <td>ID</td>
                <td>Titulo</td>
                <td>Publicación</td>
                <td>Acciones</td>
            </tr>
                <tr v-for="plans in actual"></tr>
           

        </table>
       </section>
   </template>
  <template v-else>
    <section class="pricing-content">
   <p class="subtitle subtitle-center-lines text-center">Pricing</p>
   <h2 class="h1 h1-bigger text-center mt-8 mb-56 title-pricing">Comenza a potenciar tu carrera profesional con concepto</h2>
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