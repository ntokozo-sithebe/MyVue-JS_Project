<template>
    <div class="container">
        <div class="row">
            <h2 class="display-4">Testimonials</h2>
        </div>
                <div class="row d-block d-md-flex justify-content-center gap-3 gap-lg-5 m-5 p-5 row-gap-md-5">
            <div class="col-6 justify-content-center col-md-9 m-7">
                <div class="card d-flex d-grid m-3" v-for="reviews in testimonials" :key="reviews">
              <div class="card-body justify-content-center">
                <img class="img-fluid w-25" src="reviews.profile" alt="theprofiles" loading="lazy">
                
                <h5 class="card-title">{{ reviews.name }} {{ reviews.surname }}</h5>
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

.testimonials{font-family: 'Alumni Sans Collegiate One', sans-serif, 'Merriweather', serif, 'Nova Square', sans-serif, 'Playfair Display', serif, 'Space Grotesk', sans-serif;
}

</style>