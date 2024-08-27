import { createRouter, createWebHashHistory } from "vue-router";

const CategoriasComponent = () => import('../components/Categorias.vue');
const ClientesComponent = () => import('../components/Clientes.vue');
const ColoresComponent = () => import('../components/Colores.vue');
const TallasComponent = () => import('../components/Tallas.vue');
const routes = [
    { 
        path: '/categorias', 
        name: 'CategoriasVue', 
        component: CategoriasComponent 
    },
    { 
        path: '/clientes', 
        name: 'ClientesVue', 
        component: ClientesComponent, 
    },
    { 
        path: '/colores', 
        name: 'ColoresVue', 
        component: ColoresComponent, 
    },
    { 
        path: '/tallas', 
        name: 'TallasVue', 
        component: TallasComponent, 
    },
];
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
});
export default router;