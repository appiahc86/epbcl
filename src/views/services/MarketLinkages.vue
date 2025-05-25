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
        <h2 class="display-1">Market Linkages</h2>
      </div>
    </div><!--  Page Banner-->

    <div class="container mb-5 mt-5">
      <div class="row">
        <div class="col-lg-8">
          <h4 class="text-success">Connecting Producers to Profitable and Sustainable Markets</h4>
          <p>
            At Eastern Prime, we understand that production is only one part of the
            agricultural value chain—true success lies in the ability to access reliable,
            profitable markets. Smallholder farmers and agribusinesses often face significant
            challenges in this area, including limited market information, lack of buyer access,
            and unfavorable pricing.
          </p>
          <p>
            Our market linkage services are designed to bridge
            these gaps by connecting producers with diverse, high-value markets, enabling them
            to sell their goods competitively and sustainably. By strengthening the relationship
            between producers and buyers, we help our clients secure better income, reduce
            post-harvest losses, and build long-term business partnerships.
          </p>

          <h5 class="services-sub-heading text-success">Our Market Linkage Services Include:</h5>

          <ul>
            <li>
              <b>Facilitating Access to Local, Regional, and International Markets:</b>
              We identify and establish connections between clients and potential buyers across
              a broad spectrum—from local traders and supermarkets to regional wholesalers and
              international export markets. We assist clients in meeting quality and
              certification standards required for entry into premium markets.
            </li>

            <li>
              <b>Product Positioning and Branding Support:</b>
              We help clients enhance the market appeal of their products through guidance
              on packaging, branding, labeling, and value addition. This increases
              their competitiveness and allows them to capture higher margins.
            </li>
            <li>
              <b>Organizing Networking Events and Trade Fairs:</b>
              Eastern Prime organizes and participates in sector-specific expos,
              B2B meetings, and agricultural trade fairs that give clients an opportunity
              to showcase their produce, build new relationships, and gain insights into
              market trends. These events also serve as platforms for client exposure to buyers,
              distributors, and policymakers.
            </li>
            <li>
              <b>Contract Farming and Aggregation Models:</b>
              We support structured market arrangements such as contract farming,
              which provide clients with guaranteed markets and predictable pricing.
              For small-scale producers, we promote aggregation models (e.g., cooperatives
              or farmer groups) to improve collective bargaining power and reduce transaction costs.
            </li>
            <li>
              <b>Market Intelligence and Pricing Information:</b>
              Our team provides up-to-date market data, price trends, and buyer requirements,
              helping clients make informed decisions about when and where to sell. We also
              guide clients on adapting their production to meet evolving market demands and seasonal trends.
            </li>
            <li>
              <b>Export Readiness Support:</b>
              For clients looking to enter international markets, we offer advisory
              services on export documentation, compliance with international standards
              (e.g., GlobalG.A.P., HACCP), logistics, and customs procedures.
            </li>
          </ul>
          <p>
            At Eastern Prime, we go beyond simply finding a market—we help build lasting, mutually
            beneficial relationships between producers and buyers. Our goal is to ensure that our
            clients are not just market participants, but competitive players with the knowledge,
            tools, and access to thrive in any market environment.
          </p>

        </div>

        <ServicesSideComponent :MarketLinkages="true"/>

      </div>
    </div>

  </div>
</template>

<style scoped>


</style>