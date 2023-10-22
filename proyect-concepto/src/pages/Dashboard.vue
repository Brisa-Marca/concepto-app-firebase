//este seria el panel de admin
<script>
export default{
    name:'Dashboard',
}
</script>

<template>
    <section>
        <div class="content-login" >
                <img src="../../assets/svg/favicon.svg" alt="" class="img-login">
                <h1 class="hero-section-title mb-24">Panel de Administración de concepto</h1>
         </div>
         <div class="admin-btn">
            <router-link to="/admin/pricing">  <div class="btn-admin-pricing"><p class="p-pricing">Administrar Pricing </p></div></router-link>
            <router-link to="/admin/mensajes">  <div class="btn-admin-mensaje"><p class="p-mensaje">Administrar Mensajes</p></div></router-link>
         </div>

    </section>
   
</template>