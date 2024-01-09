<template>
    <div class="container">
        <div class="row">
            <h2 class="display-3"> Projects</h2>
        </div>
        <div class="row">
    <div class="card d-flex" v-for="item in projects" :key="item">
  <div class="card-img-top">
    <img class="img-fluid w-25" :src= "item.image"  alt="animage">
  </div>
  <div class="card-body">
    <h5 class="card-title">{{ item.name }}</h5>
    <p class="card-text">{{ item.description }}</p>
  </div> 
  <div class="card-body">
    <div>
            <a :href="item.gitHub" target="_blank" class="card-link"><button type="button">Github</button></a>
         
             <a :href="item.netlify" target="_blank" class="card-link"><button type="button">Netlify</button></a>
         
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

<style src="@/assets/css/style.css">


</style>