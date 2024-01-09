<template>
    <div class="container">
        <div class="row">
            <h2 class="display-3"> Projects</h2>
        </div>
        <div class="row">
            <div class="card" v-for="item in projects" :key="item">
  <img src="item.image" class="card-img-top" alt="myproject">
  <div class="card-body">
    <h5 class="card-title">{{ item.name }}</h5>
    <p class="card-text">{{ item.desciption }}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">{{ item.Github }}</a>
    <a href="#" class="card-link">{{ item.netlify }}</a>
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
            },
            mounted(){
                return this.$store.dispatch('fetchProjects')
            }

        }
        
    }
</script>

<style scoped>
.card{
    width: 18rem;
}

</style>