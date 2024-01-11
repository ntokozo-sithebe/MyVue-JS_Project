<template>
    <div class="" id="projects">
        <div class="wrapper">
            <div class="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="row">
            <h2 class="display-4 text-black">My Projects</h2>
        </div>
        <div class="row">
            <div class="justify-content-center ">
                <div class="card d-flex d-md-flex justify-content-center gap-lg-5 row-gap-md-5" v-for="item in projects" :class="item.name" :key="item">
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
    width: 20rem;
    height: 30vh;
    margin: 2rem;
  }
  .container{
    font-family:'Poppins', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
    border: solid black;
  }
  

.wrapper{
    position: relative;
    left: 0;
    /* top: ; */
    width: 100%;
    aspect-ratio: 1/1;
    height: 120rem;
    overflow: hidden;
    background: linear-gradient(90deg, rgb(67, 113, 249)0%, rgb(99, 132, 167)  35%, rgb(180, 209, 222) 100% );
}
.box div{
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: white;
    border: 5px rgba(18, 19, 19, 0.8);
}
.box div:nth-child(1){
    top: 12%;
    left: 42%;
    animation: animate 10s linear infinite;
}
.box div:nth-child(2){
    top: 70%;
    left: 50%;
    animation: animate 7s linear infinite;
}
.box div:nth-child(3){
    top: 17%;
    left: 60%;
    animation: animate 9s linear infinite;
}
.box div:nth-child(4){
    top: 40%;
    left: 60%;
    animation: animate 10s linear infinite;
}
.box div:nth-child(5){
    top: 67%;
    left: 10%;
    animation: animate 6s linear infinite;
}
.box div:nth-child(6){
    top: 80%;
    left: 70%;
    animation: animate 12s linear infinite;
}
.box div:nth-child(7){
    top: 60%;
    left: 80%;
    animation: animate 15s linear infinite;
}
.box div:nth-child(8){
    top: 32%;
    left: 25%;
    animation: animate 16s linear infinite;
}
.box div:nth-child(9){
    top: 90%;
    left: 26%;
    animation: animate 8s linear infinite;
}
.box div:nth-child(10){
    top: 20%;
    left: 85%;
    animation: animate 7s linear infinite;
}
  @keyframes animate{
    0%{
        transform: scale(0) translateY(0) rotate(0);
        opacity: 1;

    }100%{
        transform: scale(1.5) translateY(-90px) rotate(360deg);
        opacity: 0;

    }
  }

/* .Calculator{
    background-color:peachpuff ;
   position: relative;
}
.Fine{
    background-color:peachpuff ;
}
.E-Commerce{
    background-color:peachpuff ;
} */




</style>


