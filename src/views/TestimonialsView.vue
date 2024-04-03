<template>
    <div class="container">
        <div class="row">
            <h2 class="display-4">Testimonials</h2>
        </div>
                <div class="row justify-content-center">
            <div class="col-md-4 p-3 rounded-6" v-for="reviews in testimonials" :key="reviews">
                <div class="card m-3">
              <div class="card-body justify-content-center">
                <h5 class="card-title m-2">{{ reviews.name }} {{ reviews.surname }}</h5>
                <h5 class="card-title m-2"> {{ reviews.title }}</h5>
                <img class="img-fluid rounded-5" :src="reviews.profile" alt="theProfiles" loading="lazy">
                
              </div> 
              <div class="card-body align-items-center">
                <p class="card-text">{{ reviews.quotes }}</p>
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

.testimonials{
  font-family: 'Alumni Sans Collegiate One', sans-serif, 'Merriweather', serif, 'Nova Square', sans-serif, 'Playfair Display', serif, 'Space Grotesk', sans-serif;
}
.card{
  width: 25rem;
  height: 50rem;
  margin: 0px;
  padding: 0px;
}
.card img[alt="theProfiles"]{
  width: 15rem;
  height: 15rem;
  padding: 0px;
  margin: 1rem;
}

.card-text{
  justify-content: center;
  margin: 2rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  justify-content: center;


}
/* .card :nth-child(even){
  background-color: peachpuff;
}  */

</style>