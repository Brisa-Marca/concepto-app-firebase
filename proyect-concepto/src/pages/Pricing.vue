<script>
import { plansSave, planesActualizados, plansDelete, editPlans } from '../services/plans.js';
import { subscribeToAuth } from '../services/auth.js'
export default {
    name: 'Pricing',
    data() {
        return {
            actual: [],
            plans: {
                id: null,
                nombre: null,
                descripción: null,
                precio: null,
                caracteristicas: [],

            },
            newPlans: {
                nombre: '',
                descripción: '',
                precio: '',
                caracteristicas: [],

            },
            user: {
                id: null,
                email: null,
            }
            ,
            editingPlans: false,
            editingId: '',
            editData: {
                nombre: '',
                descripción: '',
                precio: '',
                caracteristicas: [],
            },
            processingEdit: false,
        }
    },
    methods: {
        sendPlans() {
            plansSave({
                nombre: this.newPlans.nombre,
                descripción: this.newPlans.descripción,
                precio: this.newPlans.precio,
                caracteristicas: this.newPlans.caracteristicas,

            })
                .then(() => {
                    this.newPlans.nombre = "",
                        this.newPlans.descripción = "",
                        this.newPlans.precio = "",
                        this.newPlans.caracteristicas = []

                })
        },
        deletePlan(id) {
            plansDelete(id)
                .then(
                    console.log("plan eliminado")
                )


        },
        handleShowEdit(plan) {
            this.editingId = plan.id;
            this.editData = {
                ...this.editData,
                nombre: plan.nombre,
                descripción: plan.descripción,
                precio: plan.precio,
                caracteristicas: plan.caracteristicas,
            }
            // Guardamos en los datos para editar el id, y limpiamos los otro datos con
            // los iniciales del plan.
            this.editingPlans = true;

        },
        handleHideEdit() {
            this.editingId = null;
            this.editingPlans = false;

        },
        async handleEdit() {
            this.processingEdit = true;
            await editPlans(this.editingId, {
                ...this.editData,
            });

            // this.processingEdit = false;

        }

    },
    mounted() {
        planesActualizados(actual => {
            this.actual = actual;
        });
        this.authsubscribe = subscribeToAuth(newUserData => {
            this.user = {
                ...newUserData,
            }
        });

    },
    unmounted() {
        this.authsubscribe();
    }
}
</script>

<template>
    <template v-if="user.id == 'Q9DQIiTc2scDo10DKvmsUrsZY6a2'">
        <!--Contenido de pricing :las tablas de parte de admin a partir de aca tendria que empezar el template del formularo para editar-->
        <template v-if="!editingPlans">
            <section class="pricing-content">
                <h1 class="h1 h1-bigger text-center mt-8 mb-56 title-pricing">Administrar opciones de contratación.</h1>
            </section>
            <div class="content-form-plans">
                <div class="content-table-admin">
                    <table class="table table-hover">
                        <thead>
                            <tr class="table-header">
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody v-for="plans in actual" :key="plans.id">
                            <tr>
                                <td>
                                    <p>{{ plans.nombre }} </p>
                                </td>
                                <td>
                                    <p>{{ plans.descripción }}</p>
                                </td>
                                <td>
                                    <p>${{ plans.precio }}</p>
                                </td>


                                <td class="btn-content">
                                    <button class="btn-ingresar" @click="() => handleShowEdit(plans)">Editar</button>
                                    <button class="btn-eliminar" @click="$event => deletePlan(plans.id)">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!--Seccion de form para agregar un nuevo plan-->
                <div class="checkout-form form-login">
                    <h1>Crear un nuevo plan</h1>
                    <form action="#" id="content-form-plans" @submit.prevent="sendPlans">
                        <div class="form-input">
                            <label for="nombre">Titulo</label>
                            <input type="text" id="nombre" required v-model="newPlans.nombre">
                        </div>
                        <div class="form-input">
                            <label for="Descripción">Descripción</label>
                            <input type="text" id="Descripción" required v-model="newPlans.descripción">
                        </div>
                        <div class="form-input">
                            <label for="Precio">Precio</label>
                            <input type="number" id="Precio" required v-model="newPlans.precio">
                        </div>
                        <div class="form-input">
                            <label for="caracteristicas">Caracteristicas</label>
                            <input type="text" id="caracteristicas" required v-model="newPlans.caracteristicas[0]">
                            <input type="text" id="caracteristicas" v-model="newPlans.caracteristicas[1]">
                            <input type="text" id="caracteristicas" v-model="newPlans.caracteristicas[2]">
                        </div>
                        <button class="main-cta login" type="submit">Cargar</button>
                    </form>

                </div>
            </div>
        </template>
        <!--Formulario que se muestra cuando editas un plan en particular-->
        <template v-else>
            <h1 class="h1 h1-bigger text-center mt-8 mb-56 title-pricing">Editar Plan</h1>
            <form action="#" id="content-form-plans" @submit.prevent="handleEdit" :key="plans.id">
                <div class="form-input">
                    <label for="nombre">Nombre del Plan</label>
                    <input type="text" id="nombre" :disabled="processingEdit" v-model="editData.nombre">
                </div>
                <div class="form-input">
                    <label for="Descripción">Descripción</label>
                    <input type="text" id="Descripción" :disabled="processingEdit" v-model="editData.descripción">
                </div>
                <div class="form-input">
                    <label for="Precio">Precio</label>
                    <input type="number" id="Precio" :disabled="processingEdit" v-model="editData.precio">
                </div>
                <div class="form-input">
                    <label for="caracteristicas">Caracteristicas</label>
                    <input type="text" id="caracteristicas" :disabled="processingEdit"
                        v-model="editData.caracteristicas[0]">
                    <input type="text" id="caracteristicas" :disabled="processingEdit"
                        v-model="editData.caracteristicas[1]">
                    <input type="text" id="caracteristicas" :disabled="processingEdit"
                        v-model="editData.caracteristicas[2]">
                </div>
                <button class="main-cta login" @loading="processingEdit">Actualizar datos</button>
            </form>
            <div>
                <button class="btn-eliminar" @click="handleHideEdit">Cancelar edición</button>
            </div>

        </template>

    </template>
    <template v-else>
        <section class="pricing-content">
            <p class="subtitle subtitle-center-lines text-center">Pricing</p>
            <h1 class="h1 h1-bigger text-center mt-8 mb-56 title-pricing">Comenza a potenciar tu carrera profesional con
                concepto</h1>
            <p class="paragraph mb-8 p-pricing">
                Con nuestros planes premium, accedés a nuestro catálogo entero de +435 tutoriales. ¡Elegí el que más se
                adapta a tus necesidades!
            </p>
        </section>
        <section class="planes-content" id="planes-content">
            <div class="plans" v-for="plans in actual">
                <h2 class="title-plans ">{{ plans.nombre }}</h2>
                <p>{{ plans.descripción }}</p>
                <span class="price-plans">${{ plans.precio }}<p class="p-mes">/mes</p></span>
                <div class="caracteristicas-content">
                    <h3>Caracteristicas</h3>
                    <ul class="items-caracteristicas">
                        <li><img src="../../assets/svg/tick-square.svg" alt="">
                            <p>{{ plans.caracteristicas[0] }}</p>
                        </li>
                        <li><img src="../../assets/svg/tick-square.svg" alt="">
                            <p>{{ plans.caracteristicas[1] }}</p>
                        </li>
                        <li><img src="../../assets/svg/tick-square.svg" alt="">
                            <p> {{ plans.caracteristicas[2] }}</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <button class="btn-elegir-plan">Elegir plan</button>
                </div>
            </div>
        </section>
</template>
</template>