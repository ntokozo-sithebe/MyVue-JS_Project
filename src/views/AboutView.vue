<template>
  <div class="container">
    <div class="row">
      <h2 class="display-4 text-dark"> About</h2>
      <div class="col">
        <p class="aboutme fs-5 text-dark text-align-center justify-content-center m-5">
          An aspiring full stack developer.
I love creating anything from its raw form and coming out with a final product that serves an actual purpose and can help another person. I now see that every job/ learnership that has been a part of my journey resembled how something can be taken from its raw form, processed into something better and useful and be used to transform another persons life whether skincare or petroleum. which is why l enjoy software development - you can make something out of nothing
<br>
<br>
In my spare time I run my own business, I read, enjoy running at the beach and l occasionally hike. l love activities that make me reflect and do self-introspection - always come out with the best solutions to my own trials and tribulation. And as it is like hiking the higher you go, the harder it gets the deeper you go - the resilience and belief you have within yourself is what will take you to the top and l believe this concept works with software development as well as in life.
        </p>
      </div>
      <div class="col">
        <img class="img-fluid w-50 mt-3" src="https://i.postimg.cc/8zhrFqSb/Screenshot-2023-10-29-162640.png" alt="MyImage" loading="lazy">
        <h3>Contact Details</h3>
        <p> Email : ntoky28@gmail.com <br>
            Whatsapp: 0765182960 <br>


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

.aboutme{
  animation: bounce 3s ease-in-out;
  justify-content: center;

}

@keyframes bounce{
    10%{
        height: 50rem;
        width: 50rem
    }
    30%{
        height: 50rem;
        width: 40rem;
    }

    50%{
        height: 30rem;
        width: 57rem;
        transform: translateX(250px);
    }
    
    75%{
        height: 50rem;
        width: 57rem;
    }
    100%{
      
        transform: translateX(0.5rem);
    }
}

/* @media screen and (width: 360px){
  img [alt="sunset"]{
    width: 100%;
    aspect-ratio: 1/1;
    height: 100%;
  }
} */

</style>

