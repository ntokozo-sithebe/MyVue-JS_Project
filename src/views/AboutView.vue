<template>
  <div class="container">
    <div class="row">
      <h2 class="display-4 text-dark"> About</h2>
    </div>
    <div class="row">
      <!-- <div class="col">
      <img class="mee w-25" src="https://i.ibb.co/WsQ54g2/LC2.jpg" alt="meee"> 
        <img class="sunset w-50 rounded-3" src="https://i.ibb.co/Gn9ph4f/20230930-182900.jpg" alt="sunset">
      </div> -->
      <div class="col">
        <p class="about-me fs-5 text-dark text-align-center justify-content-center mt-5">
          An aspiring full stack developer.<br>
       I love creating anything from its raw form and coming out with a final product that serves an actual purpose and can help another person. I now see that every job/ learnership that has been a part of my journey resembled how something can be taken from its raw form, processed into something better and useful and be used to transform another persons life whether skincare or petroleum.
      which is why l enjoy software development - you can make something out of nothing <br>
      <br>       In my spare time I run my own business, I read, enjoy running at the beach and l occassionaly hike. l love activities that make me reflect and do self-introspection - always come out with the best solutions to my own trials and tribulation.
      And as it is like hiking the higher you go, the harder it gets the deeper you go -
      the resilience and belief you have within yourself is what will take you to the top and l believe this concept works with software development as well as in life. 
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

