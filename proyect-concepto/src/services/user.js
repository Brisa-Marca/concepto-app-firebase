import { doc,getDoc, setDoc  } from "firebase/firestore";
import { db } from "./firebase";

export  async function getUserProfileById(id){
    const snapshot= await getDoc(doc(db, `/users/${id}`))
    return {
        id,
        email:snapshot.data().email,
    }
}

export  async function createUserProfile(id,data){
    const userRef = doc(db,`/users/${id}`);
    return await setDoc(userRef, data )

}