 // Import the functions you need from the SDKs you need
// import { chatSaveMessage } from "./src/services/chat.js";
// import {collection} from "firebase/firestore";
// import { db } from "../proyect-concepto/src/services/firebase.js";

 /******* Leyendo de firestore *****/
 //const refChat = collection(db, "chat");
 const contentPlans = document.getElementById("planes-content");//este es el unico que estaba de firestore los demas se eliminaban
 //const chatForm = document.getElementById("chat-form");
//  const chatForm = document.getElementById("chat-form");
// const user = document.getElementById("user");
// const message = document.getElementById("message");


// chatForm.addEventListener("submit",function(e){
//     e.preventDefault();
 
//     const data = {
//      user:user.value,
//      message:message.value,
//     }
 
//     chatSaveMessage(data)
//  //    addDoc(refChat,data)
//  .then(()=>{
//      //user.value = "";
//            message.value = "";
//             })
//  })


 
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
 
 