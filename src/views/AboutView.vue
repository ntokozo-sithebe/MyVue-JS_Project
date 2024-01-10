<template>
  <div class="container">
    <div class="row">
      <h2 class="display-4">About</h2>
    </div>
    <!-- <div class="row">
      <p class="myabout text-dark text-align-center" v-for="item in about"
      :key="item">
      {{ item.title}}
       <img class="img-fluid" src= "item.image" alt="myImage">
      </p>
    </div> -->
  </div>
</template>

<script>

export default {
  name: "AboutView",
  // computed: {
  //   about(){
  //     return this.$store.state.about;
  //   }
  // },
  // mounted(){
  //   this.$store.dispatch('fetchAbout')

  // }
  
}


</script>

