import {
    addDoc,
    collection,
    orderBy,
    query,
    deleteDoc,
    doc,
    onSnapshot,
    serverTimestamp,
    updateDoc
} from "firebase/firestore";
import {
    db
} from "./firebase.js";

const refPlans = collection(db, "planes");

export function plansSave(data) {
    return addDoc(refPlans, {
        ...data,
        created_at:serverTimestamp(),
    });
}

export function planesActualizados(callback) {
    const q = query(refPlans,orderBy('created_at'));
    onSnapshot(q, snapshot => {
        //console.log(snapshot.docs)
        const actual = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                nombre: doc.data().nombre,
                descripción: doc.data().descripción,
                precio: doc.data().precio,
                caracteristicas: [doc.data().caracteristicas[0],
                    doc.data().caracteristicas[1],
                    doc.data().caracteristicas[2],
                ],
                created_at:doc.data().
                created_at.toDate(),

            }
        });
        console.log(actual)
        callback(actual)

    });
}


export  async function editPlans(id, {nombre, descripción, precio, caracteristicas}){
   return  updateDoc( doc(db, `planes/${id}`), {
        nombre,
        descripción,
        precio,
        caracteristicas
    })

    // localStorage
    // notifyAll();
    // return true;
}


//Eliminar un plan en especifico deleteDoc()
export function plansDelete(id) {
    return deleteDoc(doc(refPlans, id));
}


