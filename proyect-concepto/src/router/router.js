import Home from '../pages/Home.vue';
import Pricing from '../pages/Pricing.vue';
import Contacto from '../pages/Contacto.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Profile from '../pages/Profile.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { subscribeToAuth } from '../services/auth';

//definimos la lista de rutas
 
const routes = [
    {path: '/', component:Home,},
    {path: '/pricing', component:Pricing,},
    {path: '/contacto', component:Contacto,},
    {path: '/iniciar-sesion', component:Login,},
    {path: '/registrar', component:Register,},
    {path: '/perfil', component:Profile,}
];

//Creamos el router
const router = createRouter({
    routes,
    history:createWebHashHistory(),

})
//Proteccio de las rutas
let user ={
    id:null,
    email:null,
}
subscribeToAuth(newUser =>{
    user = {...newUser};
})

router.beforeEach((to,from)=>{
    if(user.id === null && (to.path === '/contacto'|| to.path === '/perfil')){
        return{ path: '/iniciar-sesion'}
    }

})
 
export default router;