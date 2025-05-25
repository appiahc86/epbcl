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
        <h2 class="display-1">Climate-Friendly Initiatives</h2>
      </div>
    </div><!--  Page Banner-->

    <div class="container mb-5 mt-5">
      <div class="row">
        <div class="col-lg-8">
          <h4 class="text-success">Driving Sustainable Agriculture Through Innovation and Environmental Stewardship</h4>
          <p>
            At Eastern Prime, we believe that sustainable agriculture is essential
            not only for food security but also for protecting our planet. Climate
            change continues to pose a significant threat to agricultural productivity,
            natural ecosystems, and rural livelihoods—especially in vulnerable communities.
            That’s why we are actively leading and supporting climate-friendly initiatives
            that reduce the environmental footprint of farming while promoting long-term economic resilience.
          </p>
          <p>
            Our work focuses on integrating sustainability into every layer of the agricultural
            value chain. We support farmers, agribusinesses, and communities in adopting
            low-emission technologies and climate-smart practices that help safeguard
            natural resources, reduce greenhouse gas emissions, and adapt to the
            realities of a changing climate.
          </p>

          <h5 class="services-sub-heading text-success">Our Key Initiatives Include:</h5>

          <ul>
            <li>
              <b>Africa Climate Change Fund Application for Gender-Transformative Methane Reduction:</b>
              Eastern Prime is spearheading efforts to secure funding from the Africa Climate
              Change Fund (ACCF) to implement a groundbreaking, gender-inclusive methane
              reduction project. The initiative focuses on palm oil production—a sector
              with significant methane emissions from traditional processing methods.
              Our approach supports women and other marginalized groups in transitioning
              to cleaner technologies, ensuring that climate action is both equitable and inclusive.
            </li>

            <li>
              <b>Promotion of Eco-Friendly Machinery and Practices:</b>
              We introduce and support the adoption of low-emission technologies such as
              biodigesters, improved processing systems, and conservation agriculture
              equipment. These innovations significantly reduce methane and carbon emissions
              while improving operational efficiency. In livestock production, for instance,
              we advise on feed strategies and manure management systems that minimize methane release.
            </li>
            <li>
              <b>Climate-Smart Agriculture (CSA) Training and Implementation:</b>
              We train farmers in sustainable land management, crop rotation, agroforestry,
              and water conservation techniques. These practices not only reduce environmental
              degradation but also enhance soil health, water efficiency, and climate
              resilience—leading to higher, more sustainable yields over time.
            </li>
            <li>
              <b>Carbon Footprint Assessments and Environmental Audits:</b>
              Our team conducts environmental impact assessments and carbon audits
              for farms and agribusinesses. These assessments help clients understand their
              current environmental footprint and identify practical steps to reduce emissions
              and improve sustainability performance.
            </li>
            <li>
              <b>Green Innovation Partnerships:</b>
              We collaborate with research institutions, technology providers,
              and environmental organizations to scale up innovative, climate-friendly
              solutions. Our partnerships aim to bring cutting-edge tools—such as
              remote sensing for climate monitoring or mobile platforms for green farming
              tips—directly into the hands of smallholder farmers.
            </li>
            <li>
              <b>Policy Advocacy and Awareness Campaigns:</b>
              Eastern Prime is also engaged in policy dialogue and grassroots awareness
              initiatives to promote climate-resilient agriculture. We advocate for
              supportive policies, incentives, and investments that enable farmers to adopt
              sustainable practices while safeguarding their livelihoods.
            </li>
          </ul>
          <p>
            By aligning our work with global climate goals and sustainable development principles,
            we are building a future where agriculture can be both productive and regenerative.
            At Eastern Prime, we are proud to help lead the transition to a greener,
            more climate-conscious agricultural sector.
          </p>

        </div>

        <ServicesSideComponent  :ClimateFriendlyInitiatives="true"/>

      </div>
    </div>

  </div>
</template>

<style scoped>


</style>