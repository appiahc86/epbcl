<script setup>
import {onMounted, ref} from "vue";
import {onBeforeRouteLeave} from "vue-router";
import { galleryData } from "@/data/galleryData.js";
import { useMyStore } from "@/stores/home.js";

const srcImage = ref(null);
const store = useMyStore();

onMounted(() => {

  let images = document.querySelectorAll(".my-image");

  for (let image of images) {
    image.addEventListener("click", (e) => {
      e.preventDefault();
      srcImage.value = image.src;
    })
  }

})


onBeforeRouteLeave((to, from, next) => {
  store.galleryLazy = false;
  document.querySelector("#modal-close").click();
  next();
});
</script>

<template>
<div class="">
  <h1 class="text-center my-3">Image Gallery</h1>


  <div class="container mt-4">
    <div class="row">

      <template v-for="(img, key) in galleryData" :key="key">
        <div class="col-md-4 mb-2">
        <img  v-if="store.galleryLazy"
              alt=""
              class="img-fluid rounded shadow gallery-img my-image"
              data-bs-toggle="modal" data-bs-target="#modal1"
              v-lazy="{ src: '/img/gallery/' + img.name,
              loading: img.dummy,
               error: '', delay: 500 }"
        >
        <img  v-else
              :src="'/img/gallery/' + img.name"
              alt=""
              class="img-fluid rounded shadow gallery-img my-image"
              data-bs-toggle="modal" data-bs-target="#modal1"
        >
        </div>
      </template>


  <!-- Modal for Image1 -->
  <div class="modal fade" id="modal1" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="modal-close"></button>
        </div>
        <div class="modal-body text-center">
          <img :src="srcImage" class="img-fluid" alt="" >
        </div>
      </div>
    </div>
  </div>


</div>
  </div>
</div>
</template>

<style scoped>
.my-image {
  cursor: pointer;
}

.my-image:hover {
  transform: scale(1.02);

}

</style>