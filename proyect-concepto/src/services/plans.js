//Realizar los planes con onsnapshot para realizar despues la carpeta src
import {addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "./firebase.js";

const refPlans = collection(db, "planes");

export function plansSave(data){
    return addDoc(refPlans,{
        ...data,
    });
}

export function planesActualizados(callback){
    onSnapshot(refPlans,snapshot => {
     //console.log(snapshot.docs)
        const actual = snapshot.docs.map(doc =>{
            return{
                id:doc.id,
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


//Eliminar un plan en especifico deleteDoc()
export function plansDelete(id){
    return deleteDoc(doc(refPlans, id));
}


//Editar un plan en especificoupdateDoc()
export function plansUpdate(id,data){
   // return updateDoc((refPlans,id));
}


