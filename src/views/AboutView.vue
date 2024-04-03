<template>
  <div class="container">
    <div class="row">
      <h2 class="display-4 text-dark"> About</h2>
    </div>
    <div class="row">
      <div class="col">
        <!-- <img class="mee w-25" src="https://i.ibb.co/WsQ54g2/LC2.jpg" alt="meee"> -->
        <img class="sunset w-50 rounded-3" src="https://i.ibb.co/Gn9ph4f/20230930-182900.jpg" alt="sunset">
      </div>
      <div class="col">
        <p class="aboutme fs-5 text-dark text-align-center justify-content-center mt-5">
          I am Ntokozo Sithebe, an aspiring full stack developer.<br>
          I am self motivated. Once I make up my mind about anything I aspire to be or anything l want I go for it dispite of external opinions.
           I enjoy gathering information and providing solutions.<br>
            <br> 
            <br> 

             l love doing new activities. In my spare time l delight in reading, doing business
             with clients and involving myself in outside activities including running at the beach,hiking and swimming in the ocean.
        </p>
      </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "AboutView",
  components:{}

  
}


</script>

<style scoped>

.container{
  font-family: Georgia, 'Times New Roman', Times, serif;
}

@media screen and (width: 360px){
  img [alt="sunset"]{
    width: 100%;
    aspect-ratio: 1/1;
    height: 100%;
  }
}

</style>

