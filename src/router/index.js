import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import ServicesView from "@/views/ServicesView.vue";
import GalleryView from "@/views/GalleryView.vue";

import AccessToFinance from "@/views/services/AccessToFinance.vue";
import AgriculturalManagementSolutions from "@/views/services/AgriculturalManagementSolutions.vue";
import BusinessDevelopmentAndTraining from "@/views/services/BusinessDevelopmentAndTraining.vue";
import ClimateFriendlyInitiatives from "@/views/services/ClimateFriendlyInitiatives.vue";
import EmpoweringWomenAndYouth from "@/views/services/EmpoweringWomenAndYouth.vue";
import MarketLinkages from "@/views/services/MarketLinkages.vue";
import InclusiveContractFarmingFacilitationAndCoaching
  from "@/views/services/InclusiveContractFarmingFacilitationAndCoaching.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },

    {
      path: '/services/access-to-finance',
      name: 'access-to-finance',
      component: AccessToFinance,
    },
    {
      path: '/services/agricultural-management-solutions',
      name: 'agricultural-management-solutions',
      component: AgriculturalManagementSolutions,
    },
    {
      path: '/services/business-development-and-training',
      name: 'business-development-and-training',
      component: BusinessDevelopmentAndTraining,
    },
    {
      path: '/services/climate-friendly-initiatives',
      name: 'climate-friendly-initiatives',
      component: ClimateFriendlyInitiatives,
    },
    {
      path: '/services/empowering-women-and-youth',
      name: 'empowering-women-and-youth',
      component: EmpoweringWomenAndYouth,
    },
    {
      path: '/services/market-linkages',
      name: 'market-linkages',
      component: MarketLinkages,
    },
    {
      path: '/services/inclusive-contract-farming-facilitation-and-coaching',
      name: 'inclusive-contract-farming-facilitation-and-coaching',
      component: InclusiveContractFarmingFacilitationAndCoaching,
    },



  ],

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 }
    }
  }


})




export default router
