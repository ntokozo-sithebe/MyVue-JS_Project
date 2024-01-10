<template>
    <div class="container">
        <div class="row">
            <h2 class="display-4"> Projects</h2>
        </div>
        <div class="row">
            <div class="col d-grid d-block m-6">
                <div class="card d-flex" v-for="item in projects" :class="item.name" :key="item">
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">{{ item.description }}</p>
              </div> 
              <div class="card-body align-items-center">
                <div>
                        <a :href="item.gitHub" target="_blank" class="card-link"><button type="button">Github</button></a>
                     
                        <a :href="item.netlify" target="_blank" class="card-link"><button type="button">Netlify</button></a>
                     
                </div>
              </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProjectsView',
        computed:{
            projects(){
                return this.$store.state.projects
            }
        },
        mounted(){
            return this.$store.dispatch('fetchProjects')

        }
        
    }
</script>

<!-- <style src="@/assets/css/style.css"> -->
<style scoped>
.card{
    width: 18rem;
    margin: 2rem;
    
  }
  

.Calculator{
    background-color:peachpuff ;
   position: relative;
}
.Fine{
    background-color:peachpuff ;
}
.E-Commerce{
    background-color:peachpuff ;
}




</style>


