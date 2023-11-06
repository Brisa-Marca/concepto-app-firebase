 <script>
export default{
    name:'Mensajes',
    data(){
        return{
            userProfile: {
                id: null,
                email: null,
            }
        }
    }
   
}
</script>
<template>
    <div class="content-login" >
        <h1 class="hero-section-title mb-24">Administrar mensajes de clientes</h1>
    </div>
    <div class="content-users-admin">
        <div class="card-users">
            <img src="../../assets/svg/users-icons.svg" alt="" width="80px" height="80px">
            <h3>brisa@gmail.com</h3>
            <button class="btn-users" > Ver mensajes</button>
            <!-- <router-link :to="/admin/mensajes/id/chat"></router-link> -->
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
        </div>
      
    </div>
     
</template>