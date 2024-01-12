<template>
    <div>
    <div v-if="!isLoading">
        {{ fetchData }}
        <div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>
<div v-else>
   {{ fetchData }}
</div>

    </div>
</template>

<script>
    export default {
        name: 'SpinnerComp',
        components:{},
        data(){
            return{
                isLoading: true,
            }
        },
        // methods:{
        //     fetchData(){

        //        this.isLoading = true
        //     },
        //     Found(){
        //         this.isLoading = false 
                
        //     }

        //        this.isLoading
        //     }
            
    //}
       
       

        
    }
</script>

<style scoped>

</style>