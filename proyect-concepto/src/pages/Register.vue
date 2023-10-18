<script>
export default {
    name: 'Register',
}
</script>
<template>
      <section class="content-login">
            <div >
                <img src="../../assets/svg/favicon.svg" alt="" class="img-login">
                <h1 class="hero-section-title mb-24">Crear una cuenta</h1>
           </div>
            
        </section>
        <div class="checkout-form form-login">
            <form action="#">
                <div class="form-input">
                    <label for="user">Nombre de usuario</label>
                    <input type="text" placeholder="Nombre de usuario" id="user" required>
                </div>
                <div class="form-input">
                    <label for="pass">Contraseña</label>
                    <input type="password"  id="pass" placeholder="**********" required>
                </div>
                <button type="submit"  class="main-cta login">Crear cuenta</button>
                
            </form>
            <div class="registrate-content">
                <p>¿Ya tienes una cuenta?</p> <span class="p-register">Iniciar sesión</span>
            </div>
        </div>
</template>