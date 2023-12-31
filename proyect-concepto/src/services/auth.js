import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { createUserProfile, editUserProfile} from "./user.js";

//Funcionalidad relativa a la autenticación en la app
let userData = {
    id:null,
    email:null,
    displayName:null,

}
let observers =[];

if(localStorage.getItem('userData')){
    userData = JSON.parse(localStorage.getItem('userData'))
}

onAuthStateChanged(auth,user =>{
    if(user){
    userData = {
        id:user.uid,
        email:user.email,
        displayName:user.displayName,
    }
    
    }else{
        userData = {
            id:null,
            email:null,
            displayName:null,
        }

    }
    //Actualizamos el local storage
    localStorage.setItem('userData',JSON.stringify(userData))
    notifyAll();
});

export  async function register({email,password}){

      try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        // Creamos el perfil de usuario
        createUserProfile(userCredentials.user.uid, {
            email
        })


      return{...userData};
      } catch (error) {
        return {
            code:error.code,
            message: error.message,
           }
        
      }
    

}

export function login ({email,password}){
    return signInWithEmailAndPassword(auth, email, password)
    //Trae las credenciales del usuario
    .then(() =>{
        // Como modificamos el contenido de userData, pedimos notificar a todos los observers.
        notifyAll();
        return userData;
    })
    .catch(error =>{
        const output = {
            message: error.message,
            code:error.code,
        }
        console.error("[auth.js login] Error al autenticar :",output);
        return output;
    });


}

export function logout(){
    
    return  signOut(auth);
    
}

//Editar los datos del perfil autentificado
export async function editUser({displayName}){
    //Primero actualizamos la autentificación
     await updateProfile(auth.currentUser,{
        displayName
     })
    //  Despues se actualiza el perfil del usuario autentificado.En este caso en realidad es el userProfile
     await editUserProfile (userData.id,{
        displayName
     })

    //actualizamos los datos del usuario
    userData = {
      ...userData,
      displayName,
    }
    // localStorage
    notifyAll();
    return true;
}


export function subscribeToAuth(callback){
    //Agregamos el nuevo observer/callback al stack del observers
    observers.push(callback);
    console.log("observer agregado", observers)
    //Vamos a pasarle inmediatamente los datos actuales del objeto.
    notify(callback);
    //Retornamos la funcion para cancelar la suscripción,que filtra el callback que acabamos de agregar del array.
    return () =>{ observers = observers.filter(obs => obs !== callback)}
}



function notify(callback){
    callback({
        ...userData,
    })

}

function notifyAll(){
    observers.forEach(callback =>notify(callback))
}