<template>
  <div class="container" id="about">
    <div class="row">
      <h2 class="display-4 text-white text-bold">About Me</h2>
    </div>
    <div class="row">
      <!-- <div class="col d-flex">
        <img class="img-fluid w-25 img-thumbnail" src="https://drive.google.com/uc?id=1PnNX_sjtDHdOhsvqdtikQEVHAYk7XpYV" alt="sunset"> -->
        <h6 class="aboutme fs-2 text-white text-align-center">
          l am Ntokozo Sithebe, an aspiring full stack developer.<br>
           l enjoy gathering information and providing solutions to those who need<br>
            help in making better choices. <br> l love doing new things. In my spare time l delight in doing business <br>
             with clients and doing outside activities including running at the beach,hiking and swimming in the ocean. 
        </h6>
      </div>
    </div>

    <!-- </div> -->
  
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

*,
*,  ::before,
*, ::after{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

#about{
  height: 100vh;
  width: 100%;
  background-image: url(https://i.ibb.co/0hxYdVw/20230930-183542.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 70%;
  background-attachment: fixed;
  margin: 0px;
  
 

}
.aboutme{
  text-align: center;
  

}
</style>

