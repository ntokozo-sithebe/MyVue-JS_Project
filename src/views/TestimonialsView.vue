<template>
    <div class="container">
        <div class="row">
            <h2 class="display-3">Testimonials</h2>
            <div class="row">
                <p class="reviews" v-for="reviews in testimonials"
                :key="reviews">
                <div class="card body">
                    <div class="col">
                        <div class="row">
                            {{ reviews.name + reviews.surname }}
                        </div>
                    </div>
                    .row
                </div>
             </p>

               
               
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

</style>