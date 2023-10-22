import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";
//import { createUserProfile } from "./user";

//Funcionalidad relativa a la autenticación en la app.
//Primero vamos a guardar en una variable interna los datos de la autenticacion
let userData = {
    id:null,
    email:null,

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
    }
    
    }else{
        userData = {
            id:null,
            email:null,
        }
        //localStorage.removeItem('userData')

    }
    //Actualizamos el local storage
    localStorage.setItem('userData',JSON.stringify(userData))
    notifyAll();
});

export  async function register({email,password}){

      try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

        

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
        //console.log("[auth.js login] Autenticacion exitosa:", userData)
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