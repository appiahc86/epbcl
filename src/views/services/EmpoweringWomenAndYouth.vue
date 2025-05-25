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
        <h2 class="display-1">Empowering Women and Youth</h2>
      </div>
    </div><!--  Page Banner-->

    <div class="container mb-5 mt-5">
      <div class="row">
        <div class="col-lg-8">
          <h4 class="text-success">Inclusive Growth Through Opportunity and Capacity Building.</h4>
          <p>
            At Eastern Prime, we are deeply committed to inclusive development.
            We recognize that women and youth are vital drivers of innovation, resilience,
            and progress—particularly within smallholder farming communities and
            emerging enterprises. Yet, they often face significant barriers to
            accessing the resources, knowledge, and opportunities needed to succeed.
          </p>
          <p>
            Our targeted empowerment programs are designed to address these challenges
            head-on, equipping women and young people with the tools to build sustainable
            livelihoods, contribute to food security, and stimulate local economies.
          </p>

          <h5 class="services-sub-heading text-success">Our Key Empowerment Initiatives Include:</h5>

          <ul>
            <li>
              <b>Access to Training and Skills Development:</b>
              We deliver tailored training programs that build practical and entrepreneurial
              skills in agriculture, agribusiness, and other high-potential sectors. These include
              modules on modern farming techniques, business management, value addition, digital
              literacy, and financial planning—delivered through workshops, field demonstrations,
              and peer learning.
            </li>

            <li>
              <b>Access to Inputs, Resources, and Finance:</b>
              We support women and youth in overcoming structural barriers to land ownership,
              quality inputs, and capital. Through strategic partnerships,
              we facilitate access to farming inputs, equipment, credit facilities, and
              startup grants that enable participants to launch or scale their ventures.
            </li>
            <li>
              <b>Market Linkages and Value Chain Integration:</b>
              Our programs connect participants to viable markets through contract farming schemes,
              cooperative development, and direct buyer linkages. We also support
              youth-led and women-led agribusinesses to enter higher-value segments
              of the supply chain, including processing, packaging, and export.
            </li>
            <li>
              <b>Leadership and Advocacy Support:</b>
              Eastern Prime fosters leadership by promoting the active participation
              of women and youth in decision-making platforms—both at the community
              level and within producer organizations. We also work with local stakeholders
              to challenge gender norms and advocate for more inclusive agricultural policies.
            </li>
            <li>
              <b>Mentorship and Networking Opportunities:</b>
              We match emerging entrepreneurs with experienced mentors and create
              peer-to-peer learning platforms that strengthen confidence, promote
              innovation, and build long-term business resilience.
            </li>
          </ul>
          <p>
            By empowering women and youth, we are not just creating opportunities—we
            are laying the groundwork for more inclusive, resilient, and prosperous
            communities. At Eastern Prime, we believe that investing in the potential
            of these often-overlooked groups is essential to achieving broad-based
            economic growth and social transformation.
          </p>

        </div>

        <ServicesSideComponent :EmpoweringWomenAndYouth="true"/>

      </div>
    </div>

  </div>
</template>

<style scoped>


</style>