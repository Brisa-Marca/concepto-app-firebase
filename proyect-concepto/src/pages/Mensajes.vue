<script>
import { userList } from '../services/user.js'
export default {
    name: 'Mensajes',
    data() {
        return {
            users: [],
            // usersWhoMessagedAdmin: [],
            // userProfile: {
            //     id: null,
            //     email: null,
            // }
        }
    },
    mounted() {
        userList(users => {
            this.users = users;
        });
    },

}
</script>
<template>
    <div class="content-login">
        <h1 class="hero-section-title mb-24">Administrar mensajes de clientes</h1>
    </div>
    <!-- Realizar un v-for en donde se pueda ver los mensajes de la colección -->
    <div class="content-users-admin">
        <div class="card-users" v-for="user in users" :key="user.id">
            <svg width="80" height="80" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg" class="img">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M56.5 1.875C26.3314 1.875 1.875 26.3314 1.875 56.5C1.875 72.4059 8.67327 86.7239 19.5227 96.707C21.8353 90.3619 26.5869 84.7862 33.0761 80.7781C39.8054 76.6218 48.0389 74.375 56.5 74.375C64.9611 74.375 73.1946 76.6218 79.9239 80.7782C86.4131 84.7862 91.1647 90.3619 93.4773 96.707C104.327 86.7239 111.125 72.4059 111.125 56.5C111.125 26.3314 86.6686 1.875 56.5 1.875ZM92.6738 97.4319C90.5025 91.1689 85.8551 85.6169 79.3984 81.629C72.8386 77.5772 64.7895 75.375 56.5 75.375C48.2105 75.375 40.1615 77.5772 33.6016 81.6289C27.1449 85.6169 22.4975 91.1689 20.3262 97.4319C29.9609 105.953 42.6264 111.125 56.5 111.125C70.3736 111.125 83.0391 105.953 92.6738 97.4319ZM0.875 56.5C0.875 25.7792 25.7792 0.875 56.5 0.875C87.2208 0.875 112.125 25.7792 112.125 56.5C112.125 87.2208 87.2208 112.125 56.5 112.125C25.7792 112.125 0.875 87.2208 0.875 56.5ZM56.5 26.375C46.6279 26.375 38.625 34.3779 38.625 44.25C38.625 54.1221 46.6279 62.125 56.5 62.125C66.3721 62.125 74.375 54.1221 74.375 44.25C74.375 34.3779 66.3721 26.375 56.5 26.375ZM37.625 44.25C37.625 33.8256 46.0756 25.375 56.5 25.375C66.9244 25.375 75.375 33.8256 75.375 44.25C75.375 54.6744 66.9244 63.125 56.5 63.125C46.0756 63.125 37.625 54.6744 37.625 44.25Z"
                    fill="#222222" />
            </svg>
              <h3>{{ user.email }}</h3>
            <button  type="submit" class="btn-users"> Ver mensajes</button>

        </div>
        <!-- <div class="card-users">
            <img src="../../assets/svg/users-icons.svg" alt="" width="80px" height="80px">
            <h3>brisa@gmail.com</h3>
            <button class="btn-users" > Ver mensajes</button>
          
        </div>
        <div class="card-users">
            <img src="../../assets/svg/users-icons.svg" alt="" width="80px" height="80px">
            <h3>ana@gmail.com</h3>
            <button class="btn-users">Ver mensajes</button>
        </div>
        <div class="card-users">
            <img src="../../assets/svg/users-icons.svg" alt="" width="80px" height="80px">
            <h3>juan@gmail.com</h3>
            <button class="btn-users">Ver mensajes</button>
        </div> -->

    </div>
</template>