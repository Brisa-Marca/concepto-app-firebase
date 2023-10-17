import Home from '../pages/Home.vue';
import Pricing from '../pages/Pricing.vue';
import Contacto from '../pages/Contacto.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

//definimos la lista de rutas
 
const routes = [
    {path: '/', component:Home,},
    {path: '/pricing', component:Pricing,},
    {path: '/contacto', component:Contacto,}
];

//Creamos el router
const router = createRouter({
    routes,
    history:createWebHashHistory(),

})
 
export default router;