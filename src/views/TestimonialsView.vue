<template>
    <div class="container g-0">
        <div class="row">
            <h2 class="display-4">Testimonials</h2>
        </div>
		<div class="Card">
                <div class="row justify-content-center" id="front">
            <div class="col-md-6 m-3 p-3 rounded-6 " v-for="reviews in testimonials" :key="reviews">
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

.testimonials{
  font-family: 'Alumni Sans Collegiate One', sans-serif, 'Merriweather', serif, 'Nova Square', sans-serif, 'Playfair Display', serif, 'Space Grotesk', sans-serif;
}

.card{
  width: 30rem;
  height: 42rem;
  position: relative;
  transition: transform 150ms;
  transform-style: preserve-3d;
  perspective: 450px;
  margin: 2rem;
  animation: bounce 0.5s  ;

}
@keyframes bounce{
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
}


.card img[alt="theProfiles"]{
  width: 120px;
  height: 7rem;
}
.card :nth-child(even){
  background-color: peachpuff;
} 

</style>