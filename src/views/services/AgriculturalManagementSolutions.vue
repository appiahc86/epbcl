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
        <h2 class="display-1">Agricultural Management Solutions</h2>
      </div>
    </div><!--  Page Banner-->

    <div class="container mb-5 mt-5">
      <div class="row">
        <div class="col-lg-8">
          <h4 class="text-success">Empowering Farmers Through Modern, Sustainable Practices</h4>
          <p>
            Eastern Prime delivers end-to-end agricultural management solutions
            designed to help farmers and agribusinesses maximize productivity, improve
            sustainability, and thrive in a dynamic agricultural landscape.
            We combine industry expertise, innovative techniques, and field-proven
            practices to support our clients in achieving measurable results.
          </p>
          <p>
            Whether you’re a smallholder farmer or managing a large commercial
            farm, we provide tailored support to modernize operations, increase
            efficiency, and enhance profitability.
          </p>

          <h5 class="services-sub-heading text-success">Our Agricultural Management Services Include:</h5>

          <ul>
            <li>
              <b>Training Programs on Crop and Livestock Best Practices:</b>
              We offer hands-on and theory-based training programs covering the
              latest in sustainable crop production, pest and disease control,
              livestock nutrition, breeding, health management, and climate-smart agriculture.
              Our training empowers farmers with knowledge and skills to implement effective
              day-to-day practices that boost productivity and ensure long-term farm viability.
            </li>

            <li>
              <b>Advisory Services for Optimizing Resource Use and Increasing Yields:</b>
              Our experts conduct on-site assessments and provide customized
              recommendations to help clients make informed decisions about soil health,
              irrigation, fertilizer use, and pest management. We work with clients to
              adopt precision agriculture techniques and integrated farm planning
              strategies that reduce waste, conserve resources, and significantly improve yields.
            </li>
            <li>
              <b>Sustainability and Climate Resilience Planning:</b>
              We help farmers integrate environmentally responsible practices
              into their operations, such as conservation agriculture, agroforestry,
              and regenerative farming. Our services also include developing strategies
              to build resilience against climate change impacts, including drought,
              flooding, and shifting growing conditions.
            </li>
            <li>
              <b>Digital Agriculture Integration:</b>
              We guide clients in adopting digital tools and data-driven
              technologies—such as farm management software, remote sensing, and mobile-based
              advisory platforms—to enhance decision-making and streamline operations.
            </li>
            <li>
              <b>Market-Oriented Farm Management:</b>
              In addition to agronomic support, we assist clients in aligning
              their production systems with market demand. This includes crop
              selection, post-harvest handling, quality control, and connecting
              farmers with off-takers and agribusiness value chains.
            </li>
          </ul>
          <p>
            At Eastern Prime, we believe that effective farm management
            is the foundation of a strong agricultural economy. Our holistic
            approach ensures that farmers not only produce more but do so in a way
            that is economically viable, environmentally sound, and socially responsible.
          </p>

        </div>

        <ServicesSideComponent :AgriculturalManagementSolutions="true"/>

      </div>
    </div>

  </div>
</template>

<style scoped>


</style>