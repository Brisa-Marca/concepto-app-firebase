import { doc,getDoc, setDoc  } from "firebase/firestore";
import { db } from "./firebase";


export  async function getUserProfileById(id){
    const snapshot= await getDoc(doc(db, `/mensajes/${id}`))
    return {
        id,
        email:snapshot.data().email,
    }
}
//Creacion de perfil de usuarios para hablar en privado 
export  async function createUserProfile(id,data){
    const userRef = doc(db,`/mensajes/${id}`);
    return await setDoc(userRef, data )

}