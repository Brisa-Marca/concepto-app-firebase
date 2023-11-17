<script>
//import {planesActualizados} from './services/plans.js';
import { subscribeToAuth, logout } from './services/auth.js';

export default {
    name: 'App',
    data() {
        return {
            user: {
                id: null,
                email: null,

            }
        }

    },
    methods: {
        handleLogout() {
            logout()
                .then(user => {
                    //Redireccion al iniciar-sesion.
                    this.$router.push({ path: '/iniciar-sesion' })
                })
        },
        showMenu() {
            const nav = document.getElementById('primary-navigation');
            const navToggle = document.getElementById('nav-toggle');

            navToggle.addEventListener('click', () => {

                const visibility = nav.getAttribute('data-visible');

                if (visibility === 'false') {
                    nav.setAttribute('data-visible', true);
                    navToggle.setAttribute('aria-expanded', true);
                } else {
                    nav.setAttribute('data-visible', false);
                    navToggle.setAttribute('aria-expanded', false);
                }
            })
        }
    },
    mounted() {
        subscribeToAuth(newUserData => {
            this.user = {
                ...newUserData,
            }
        });

    }


}

</script>

<template>
    <header class="navbar m-0-auto">

        <div class="navbar-logo">
            <a href="index.html">
                <img src="../assets/svg/logo-palabra.svg" alt="Concepto logo">
            </a>
        </div>

        <button class="mobile-nav-toggle" id="nav-toggle" aria-expanded="false"  @click="showMenu"></button>
        <!--NAV-->
        <nav>

            <template v-if="user.id === 'Q9DQIiTc2scDo10DKvmsUrsZY6a2'">
                <ul id="primary-navigation" data-visible="false">
                    <li class="active">
                        <router-link to="/admin/dashboard" class="navigation-anchor">Dashboard</router-link>

                    </li>
                    <li id="explorar">
                        <router-link to="/admin/pricing" class="navigation-anchor">Pricing</router-link>
                    </li>

                    <li>
                        <router-link to="/admin/mensajes" class="navigation-anchor">Mensajes</router-link>
                    </li>
                </ul>
            </template>
            <template v-else>
                <ul id="primary-navigation" data-visible="false">
                    <li class="active">
                        <router-link to="/" class="navigation-anchor">Home</router-link>

                    </li>
                    <li id="explorar">
                        <router-link to="/pricing" class="navigation-anchor">Pricing</router-link>

                    </li>

                    <li>
                        <router-link to="/contacto" class="navigation-anchor">Contactanos</router-link>

                    </li>

                </ul>
            </template>




        </nav>


        <div class="btn-login">
            <ul>
                <template v-if="user.id === null">
                    <li> <router-link to="/iniciar-sesion" class="btn-ingresar">Ingresar</router-link></li>

                </template>
                <template v-else>
                    <li> <router-link to="/perfil" class="btn-ingresar">Mi Perfil</router-link></li>
                    <li>
                        <form action="" @submit.prevent="handleLogout">
                            <button type="submit" class="p-user">Hola, <span
                                    class="primary-color-text ">{{ user.email }}</span>(cerrar sesión)</button>
                        </form>
                    </li>
                </template>
            </ul>
        </div>


    </header>
    <main id="main">
        <router-view></router-view>
    </main>
</template>