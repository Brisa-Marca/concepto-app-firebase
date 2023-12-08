import {
    doc,
    collection,
    onSnapshot,
    setDoc,
    getDoc,
    updateDoc
} from "firebase/firestore";
import {
    db
} from "./firebase";

const refUsers = collection(db, "users");

export async function getUserProfileById(id) {
     const snapshotUser = await getDoc(doc(db,`/users/${id}`));
     return{
        id,
        email:snapshotUser.data().email,
     }

};

// Crea el perfil de un usuario
export async function createUserProfile(id,data) {
    // crea un documento especifico de un id de usuario
    const userRef = doc(db,`/users/${id}`);
    return  setDoc(userRef, data);
};


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

// //Editar perfil de usuario
export async function editUserProfile(id,data){
    return updateDoc(
        doc(db,`/users/${id}`),
        data,
         )

}