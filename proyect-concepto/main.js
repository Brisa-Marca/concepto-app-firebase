 // Import the functions you need from the SDKs you need



 /******* Leyendo de firestore *****/
 const contentPlans = document.getElementById("planes-content");


 
/* planesActualizados(actual =>{
  //actual queremos que sea un array de objetos
  contentPlans.innerHTML = actual.map(actual =>`<div class="plans">
 <h2 class="title-plans ">${actual.nombre}</h2>
 <p>${actual.descripción}</p>
 <span class="price-plans">$${actual.precio}<p class="p-mes">/mes</p></span>
 <div class="caracteristicas-content">
     <h3>Caracteristicas</h3>
     <ul class="items-caracteristicas">
         <li><img src="../assets/svg/tick-square.svg" alt="">
            <p>${actual.caracteristicas[0]}</p> 
         </li>
         <li><img src="../assets/svg/tick-square.svg" alt="">
            <p>${actual.caracteristicas[1]}</p> 
         </li>
         <li><img src="../assets/svg/tick-square.svg" alt="">
            <p> ${actual.caracteristicas[2]}</p>
         </li>
     </ul>
 </div>
 <div>
     <button  class="btn-elegir-plan">Elegir plan</button>
 </div>
</div>`).join('');

 })*/
 import { createApp } from "vue";
 import App from './src/App.vue';
 import router from "./src/router/router";


 const app = createApp(App);

 app.use(router)
 app.mount('#app');
 
 