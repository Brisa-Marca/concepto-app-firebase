//Realizar los planes con onsnapshop para realizar despues la carpeta src
import {collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase.js";

const refPlans = collection(db, "planes");

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