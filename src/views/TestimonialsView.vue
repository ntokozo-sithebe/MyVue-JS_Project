<template>
    <div class="container">
        <div class="row">
            <h2 class="display-4">Testimonials</h2>
        </div>
            <div class="row">
                <p class="myreviews" v-for="reviews in testimonials"
                :key="reviews">
                 {{ reviews.quotes}}
                 </p>
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
.myreviews{
  border: 2rem black;
}

</style>