<template>
  <div class="container">
    <div class="row">
      <h2 class="display-4">About</h2>
    </div>
    <div class="row">
      <div class="col d-flex">
        <img class="img-fluid w-25 img-thumbnail" src="https://drive.google.com/uc?id=1PnNX_sjtDHdOhsvqdtikQEVHAYk7XpYV" alt="sunset">
        <h6 class="aboutme fs-3 m-5 text-align-center">
          l am Ntokozo Sithebe, an aspiring full stack developer. l enjoy gathering information and providing solutions
          to those who need help in making better choices. Life on its own is knowledge and l want to get the best out of it.
          In my spare time l delight in outside activities including running at the beach,hiking and swimming in the ocean.
        </h6>
      </div>
    </div>

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
<style scoped>
/* .container{
  background-image: url(https://drive.google.com/uc?id=1PnNX_sjtDHdOhsvqdtikQEVHAYk7XpYV) no-repeat;
} */
.aboutme{
  border: 2rem white;
  text-align: center;
  margin: 5px;

}
</style>

