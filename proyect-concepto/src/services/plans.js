//Realizar los planes con onsnapshot para realizar despues la carpeta src
import {addDoc, collection, doc, onSnapshot  } from "firebase/firestore";
import { db } from "./firebase.js";

const refPlans = collection(db, "planes");

// //Manejo del form por parte del usuario administrador
// const contentFormPlans = document.getElementById("content-form-plans");
// const titulo = document.getElementById("Titulo");
// const descripción = document.getElementById("Descripción");
// const precio = document.getElementById("Precio");
// const caracteristicas = document.getElementById("caracteristicas");

// contentFormPlans.addEventListener("submit", function(e){
//   e.preventDefault();
//   const data ={
//       titulo: titulo.value,
//       descripción: descripción.value,
//       precio: precio.value,
//       caracteristicas: caracteristicas.value,
//   }
//   //A continuación vamos a grabar con addDoc().
//   addDoc(refPlans,data)
//   .then(()=>{
//     titulo.value = "",
//     descripción.value = "",
//     precio.value = "",
//     caracteristicas.value = ""
//   })
// })

export function planesActualizados(callback){
    onSnapshot(refPlans,snapshot => {

        //console.log(snapshot.docs)
        const actual = snapshot.docs.map(doc =>{
            return{
                nombre: doc.data().nombre,
                descripción :doc.data().descripción,
                precio :doc.data().precio,
                caracteristicas:[doc.data().caracteristicas[0],
                                 doc.data().caracteristicas[1], 
                                 doc.data().caracteristicas[2],
                                ],

            }
        });
        console.log(actual)
        callback(actual)
      
      });
}

