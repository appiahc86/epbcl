<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

defineProps({
  AccessToFinance: {
    type: Boolean,
    default: false,
  },
  AgriculturalManagementSolutions: {
    type: Boolean,
    default: false,
  },
  BusinessDevelopmentAndTraining: {
    type: Boolean,
    default: false,
  },
  ClimateFriendlyInitiatives: {
    type: Boolean,
    default: false,
  },
  EmpoweringWomenAndYouth: {
    type: Boolean,
    default: false,
  },
  MarketLinkages: {
    type: Boolean,
    default: false,
  },
  InclusiveContractFarmingFacilitationAndCoaching: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div class="col-lg-4">
    <h2 class="animate__animated animate__fadeInUp">OUR SERVICES</h2>
    <div class="card border-0 border-start border-5 border-success mb-3 services-card"
         :class="{active: AccessToFinance}"
         @click="router.push({name: 'access-to-finance'})">
      <div class="card-body">
        Access to Finance
      </div>
    </div>
    <div class="card border-0 border-start border-5 border-success mb-3 services-card"
         :class="{active: AgriculturalManagementSolutions}"
         @click="router.push({name: 'agricultural-management-solutions'})">
      <div class="card-body">
        Agricultural Management Solutions
      </div>
    </div>
    <div class="card border-0 border-start border-5 border-success mb-3 services-card"
         :class="{active: EmpoweringWomenAndYouth}"
         @click="router.push({name: 'empowering-women-and-youth'})">
      <div class="card-body">
        Empowering Women and Youth
      </div>
    </div>

    <div class="card border-0 border-start border-5 border-success mb-3 services-card"
         :class="{active: MarketLinkages}"
         @click="router.push({name: 'market-linkages'})">
      <div class="card-body">
        Market Linkages
      </div>
    </div>
    <div class="card border-0 border-start border-5 border-success mb-3 services-card"
         :class="{active: BusinessDevelopmentAndTraining}"
         @click="router.push({name: 'business-development-and-training'})">
      <div class="card-body">
        Business Development and Training
      </div>
    </div>
    <div class="card border-0 border-start border-5 border-success mb-3 services-card"
         :class="{active: ClimateFriendlyInitiatives}"
         @click="router.push({name: 'climate-friendly-initiatives'})">
      <div class="card-body">
        Climate-Friendly Initiatives
      </div>
    </div>
    <div class="card border-0 border-start border-5 border-success mb-3 services-card"
         :class="{active: InclusiveContractFarmingFacilitationAndCoaching}"
         @click="router.push({name: 'inclusive-contract-farming-facilitation-and-coaching'})">
      <div class="card-body">
        Inclusive Contract Farming Facilitation & Coaching
      </div>
    </div>



  </div>
</template>

<style scoped>
.banner {
  color: var(--default-color);
  background-color: var(--background-color);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10rem 0;
  text-align: center;
  position: relative;
}

.banner:before {
  content: "";
  background-color: color-mix(in srgb, var(--background-color), transparent 100%);
  position: absolute;
  inset: 0;
}

.services-card {
  background: #eae5e5;
  cursor: pointer;
}
.services-card.active {
  background: #ADECCF;
}
.services-card:hover {
  background: #ADECCF;
}
</style>