// import { doc,getDoc, setDoc, updateDoc  } from "firebase/firestore";
import {
    collection,
    onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";

const refUsers = collection(db, "users");


export function userList(callback) {
    onSnapshot(refUsers, snapshot => {
        //console.log(snapshot.docs)
        const users = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                email: doc.data().email,
            }
        });
        console.log(users)
        callback(users)

    });
}

// export  async function getUserProfileById(id){
//     const snapshot= await getDoc(doc(db, `/users/${id}`))
//     return {
//         id,
//         email:snapshot.data().email,
//     }
// }
// //Creacion de perfil de usuarios para hablar en privado 
// // export  async function createUserProfile(id,data){
// //     const userRef = doc(db,`/users/${id}`);
// //     return await setDoc(userRef, data )

// // }
// //Creacion de la lista de usuarios para que el admin pueda hablar en privado con ellos
// export async function createListUsers(id,data){
//     const usersRef = doc(db,`/users/${id}`);
//     return await setDoc(usersRef,data);
// }


// //Editar perfil de usuario
// export async function editUserProfile(id,data){
//     return updateDoc(
//         doc(db,`/users/${id}`),
//         data,
//          )

// }