<template>
  <div class="container">
      <div class="row">
          <h2 class="display-4">Testimonials</h2>
      </div>
  <div class="Card">
              <div class="row justify-content-center" id="front">
          <div class="col-md-3 m-5 p-3 rounded-6 " v-for="reviews in testimonials" :key="reviews">
              <div class="card m-3">
            <div class="card-body justify-content-center">
      <h5 class="card-title m-5">{{ reviews.name }} {{ reviews.surname }}</h5>
              <p class="card-title m-5"> {{ reviews.title }}</p>
              <img class="img-fluid rounded-5" id="profiles" :src="reviews.profile" alt="theProfiles" loading="lazy">
              
            </div> 
    <div class="back">
      <div class="card-body justify-content-center m-5">
      <p class="card-text">{{ reviews.quotes }}</p>
      </div>
    </div>
    </div>
          </div>
          </div>
       </div> 
    </div> 
</template>

<script>
  export default {
      name: 'TestimonialsView',
      computed:{
          testimonials(){
              return this.$store.state.testimonials
          }
      },
      mounted(){
          return this.$store.dispatch('fetchTestimonials')
      }
      
  }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+Collegiate+One&family=Merriweather:wght@700&family=Nova+Square&family=Playfair+Display:ital@0;1&family=Space+Grotesk:wght@500&display=swap');

*,
* ::before,
* ::after{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.container{
  overflow: hidden;
  scroll-behavior: none;
  margin: 0px;
  padding: 0px;
  /* animation: bounce 0.9s ; */
}



#profiles{
  width: 25rem;
  height: 50%;
  /* padding: 2rem; */
  border: 5px solid;
  border-radius: 50%;
}


.testimonials{
font-family: Georgia, 'Times New Roman', Times, serif ;
}

.card{
width: 20rem;
height: 40rem;
position: relative;
transition: transform 150ms;
transform-style: preserve-3d;
perspective: 450px;
margin: 2rem;
border: 5px solid;
box-shadow: 10px 10px grey;
/* animation: bounce 0.5s  ; */

}
/* @keyframes bounce{
  10%{
      height: 50px;
      width: 50px
  }

  30%{
      height: 50px;
      width: 40px;
  }

  50%{
      height: 30px;
      width: 57px;
      transform: translateY(250px);
  }
  75%{
      height: 50px;
      width: 57px;
  }
  100%{
    
      transform: translateY(0px);
  }
} */


.card img[alt="theProfiles"]{
width: 70%;
height: 50%;
}


/* .card :nth-child(even){
background-color: peachpuff;
}  */


body{
  /* height: 100vh; */
  overflow: hidden;
  /* background: linear-gradient(rgb(68, 68, 176), rgb(98, 98, 205), rgb(52, 125, 150)); */
  /* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
  color: white;
  display: flex ;
  justify-content: center;
  align-items: center;

}

/* .container{
  /* width: 350px ;
  height: 500px ; 
  perspective: 450px;

} */

/* .card{
   height: 100%;
  width: 100%; 
  position: relative;
  transition: transform 150ms; 
  transform-style: preserve-3d; 
} */

.card:hover{
  cursor: pointer;
  transform: rotateY(180deg);


}

#front, .back{
  height: 100%;
  width: 100%;
  border-radius: 5px;
  position: absolute;
  backface-visibility: hidden;

}

#front{
  height: 100%;
  width: 100%;
  /* background-image:url(https://i.postimg.cc/3NbX9pCC/vitamin-c-serum-stylized-2-opt-900x.webp/350x500) ; */
  position: absolute;
  backface-visibility: hidden;

}

.back{
  background-color: rgb(179, 218, 242);
  color: black;
  transform: rotateY(180deg) ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}



</style>