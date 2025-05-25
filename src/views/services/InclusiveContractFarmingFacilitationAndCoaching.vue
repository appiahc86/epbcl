<script setup>
import {useRouter} from "vue-router";
import ServicesSideComponent from "@/components/ServicesSideComponent.vue";

const router = useRouter();

</script>

<template>
  <div class="main">

    <!--  Page Banner-->
    <div class="page-title dark-background" data-aos="fade" style="background-image: url(/img/page-title-bg.jpg);">
      <div class="container position-relative">
        <h2 class="display-1">Inclusive Contract Farming Facilitation & Coaching</h2>
      </div>
    </div><!--  Page Banner-->

    <div class="container mb-5 mt-5">
      <div class="row">
        <div class="col-lg-8">
          <h4 class="text-success">Empowering Equitable Partnerships in Agriculture</h4>
          <p>
            Inclusive Contract Farming (iCF) is a collaborative approach that fosters
            equitable relationships between smallholder farmers and agribusinesses.
            By establishing clear agreements, both parties benefit from shared responsibilities,
            risks, and rewards, leading to sustainable agricultural development.
          </p>

          <h5 class="services-sub-heading text-success">Our Approach</h5>
          <p>We specialize in facilitating and coaching inclusive contract farming
            arrangements that prioritize:</p>
          <ol>
            <li>
              <b>Transparency:</b> Ensuring all contract terms are clear and mutually agreed upon.
            </li>
            <li>
              <b>Equity:</b> Promoting fair negotiations that consider the needs and
              capacities of all stakeholders.
            </li>
            <li>
              <b>Sustainability:</b> Integrating practices that support long-term agricultural and economic viability.
            </li>
          </ol>
          <h5 class="services-sub-heading text-success">Services Offered</h5>
          <ul>
            <li>
              <b>Contract Design & Negotiation Support: </b>
              Assisting in crafting contracts that are fair, transparent, and tailored to the
              specific needs of both farmers and buyers.
            </li>
            <li>
              <b>Capacity Building Workshops: </b>
              Conducting training sessions for farmers and agribusinesses on contract
              management, quality standards, and market requirements
            </li>
            <li>
              <b>Market Linkage Facilitation: </b>
              Connecting producers with reliable buyers to establish stable supply chains.
            </li>
            <li>
              <b>Monitoring & Evaluation: </b>
              implementing systems to track contract performance, ensuring compliance,
              and addressing any issues promptly.
            </li>
          </ul>

          <h5 class="services-sub-heading text-success">Why Choose Our Services?</h5>
          <ul>
            <li>
              <b>Expertise: </b>
              With over four years of experience in agribusiness development, we bring a deep understanding
              of the agricultural value chain.
            </li>
            <li>
              <b>Proven Impact: </b>
              Our initiatives have successfully linked numerous smallholder farmers to markets,
              enhancing their incomes and livelihoods.
            </li>
            <li>
              <b>Tailored Solutions: </b>
              We customize our services to fit the unique contexts and challenges of each client.
            </li>
          </ul>

          <h5 class="services-sub-heading text-success">Success Stories</h5>
          <p>Our facilitation efforts have led to:</p>
          <ul>
            <li>The integration of over 2000 smallholder farmers into sustainable supply chains.</li>
            <li>Improved access to inputs, credit, and technical support for rural producers.</li>
            <li>Enhanced trust and collaboration between farmers and agribusinesses.</li>
          </ul>

          <h5 class="services-sub-heading text-success">Get Started</h5>
          <p>
            Ready to establish or improve your contract farming arrangements? Contact us
            to learn how our facilitation and coaching services can drive sustainable
            growth for your agricultural ventures.
          </p>
        </div>

        <ServicesSideComponent :InclusiveContractFarmingFacilitationAndCoaching="true"/>

      </div>
    </div>

  </div>
</template>

<style scoped>


</style>