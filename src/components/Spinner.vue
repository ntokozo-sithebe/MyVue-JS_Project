<template>
    <div>
    <div v-if="!isLoading">
        {{ fetchData }}
        <div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>
<div v-else>
   {{ Found }}
</div>

    </div>
</template>

<script>
    export default {
        name: 'SpinnerComp',
        components:{},
        data(){
            return{
                isLoading: true

            }
        },
        methods:{
            fetchData(){
               this.isLoading = true
            },
            Found(){
                this.isLoading = false 
                
            }
    }
       
       

        
    }
</script>

<style scoped>

</style>