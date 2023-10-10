import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '../views/MainPageView.vue'
import ModeAdminView from '../views/ModeAdminView.vue'
import ModeClientView from '../views/ModeClientView.vue'
import MonProfilView from '../views/MonProfileView.vue'
import SelectModeView from '../views/SelectModeView.vue'
import ConexionPageView from '../views/ConexionPageView.vue'
import EditVolView from "../components/FormEditVol.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SelectMode',
      component: SelectModeView
    },
    {
      path: '/ModeAdmin',
      name: 'ModeAdmin',
      component: ModeAdminView
    },
    {
      path: '/ModeClient',
      name: 'ModeClient',
      component: ModeClientView
    },
    {
      path: '/MonProfil',
      name: 'MonProfil',
      component: MonProfilView
    },
    {
      path: '/ConexionPageView',
      name: 'ConexionPageView',
      component: ConexionPageView
    },
    {
      path: '/Main',
      name: 'MainPageView',
      component: MainPageView
    },
    {
      path: '/EditVol',
      name: 'EditVolView',
      component: EditVolView
    },
  ]
})

export default router
