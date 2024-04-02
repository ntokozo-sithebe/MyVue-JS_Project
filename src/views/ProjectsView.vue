<template>
    <div class="container" id="projects">
         <div class="row">
            <h2 class=" display-4 text-black">My Projects</h2>
        </div>
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
        <!-- <div class="row">
            <h2 class="display-4 text-black">My Projects</h2>
        </div> -->
        <div class="row">
            <div class="col-md-4 justify-content-center" v-for="item in projects" :class="item.name" :key="item">
                <div class="card d-flex d-md-flex justify-content-center gap-lg-5 row-gap-md-5" >
              <div class="card-body text-center">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">{{ item.description }}</p>
              </div> 
              <div class="card-body align-items-center">
                <div>
                        <a :href="item.gitHub" target="_blank" class="card-link"><button class="btn btn-primary" type="button">Github</button></a>
                     
                        <a :href="item.netlify" target="_blank" class="card-link"><button class="btn btn-secondary" type="button">Netlify</button></a>
                     
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
  /* .myProject{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */
  .container{
    font-family: Georgia, 'Times New Roman', Times, serif ;
  }
  

.wrapper{
    position: absolute;
    left: 0;
    /* top: ; */
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(90deg, black 0%, rgb(30, 30, 31)  35%, rgb(65, 68, 69) 100% );
}
.box div{
    position: relative;
    width: 50px;
    height: 50px;
    background-color: white;
    border: 5px rgba(18, 19, 19, 0.8);
}
.box div:nth-child(1){
    top: 17%;
    left: 42%;
    animation: animate 10s linear infinite;
}
.box div:nth-child(2){
    top: 80%;
    left: 50%;
    animation: animate 7s linear infinite;
}
.box div:nth-child(3){
    top: 17%;
    left: 60%;
    animation: animate 9s linear infinite;
}
.box div:nth-child(4){
    top: 20%;
    left: 60%;
    animation: animate 10s linear infinite;
}
.box div:nth-child(5){
    top: 57%;
    left: 10%;
    animation: animate 6s linear infinite;
}
.box div:nth-child(6){
    top: 10%;
    left: 70%;
    animation: animate 12s linear infinite;
}
.box div:nth-child(7){
    top: 65%;
    left: 80%;
    animation: animate 15s linear infinite;
}
.box div:nth-child(8){
    top: 33%;
    left: 25%;
    animation: animate 16s linear infinite;
}
.box div:nth-child(9){
    top: 50%;
    left: 26%;
    animation: animate 8s linear infinite;
}
.box div:nth-child(10){
    top: 15%;
    left: 85%;
    animation: animate 7s linear infinite;
}
.box div:nth-child(11){
    top: 7%;
    left: 70%;
    animation: animate 9s linear infinite;
}
.box div:nth-child(12){
    top: 20%;
    left: 90%;
    animation: animate 10s linear infinite;
}
.box div:nth-child(13){
    top: 50%;
    left: 0%;
    animation: animate 6s linear infinite;
}
.box div:nth-child(14){
    top: 10%;
    left: 100%;
    animation: animate 12s linear infinite;
}
.box div:nth-child(15){
    top: 5%;
    left: 90%;
    animation: animate 15s linear infinite;
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
  @media screen and (width < 360){
  img [alt="sunset"]{
    width: 100%;
    aspect-ratio: 1/1;
    height: 100%;
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


