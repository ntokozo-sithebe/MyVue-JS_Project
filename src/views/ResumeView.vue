<template>
    <div class="container">
        <div class="row">
            <h3 class="educate display-3"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
</svg> Education</h3>
<div class="card-1">
            <div class="col border-4 border-dark" v-for="items in education" 
            :key="items">
                <h6 class="display-5"> {{items.year}}</h6>
                <p>{{ items.description }} <br>
                {{ items.place }}</p>
            </div>
        </div>
        
            <h3 class="expo display-4 m-5"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
</svg>  Work Experience </h3>
            <div class="Card col bg-body-tertiary" v-for="works in work" 
            :key="works">
            <h6 class="Card-Header time display-5"> {{ works.time }} </h6>
            <img class="Card-Body img-fluid w-25 mb-4" :src="works.image" alt="work">
            <p class="Card-footer text-dark">{{ works.description }} <br> {{ works.name }}</p>
            </div>
        </div>

        <div class="row">
            <h2 class="skills display-4 mt-5"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>  Skills</h2>
            <div class="col-md-2 m-5 justify-content-center text-center" height="24" v-for="items in skills" :key="items">
                <img class="skillsimg d-flex p-3 border-black justify-content-center" :src="items.image" alt="imgSkills">
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'ResumeView',
        computed:{
            education(){
                return this.$store.state.education
            },
            work(){
                return this.$store.state.work
            },
            skills(){
                return this.$store.state.skills
            }
        },
        mounted(){
            this.$store.dispatch('fetchEducation');
            this.$store.dispatch('fetchWork');
            this.$store.dispatch('fetchSkills')
        },
       
        
        

            
        }

        


    
</script>

<style scoped>
.container{
   height: 100vh;
}
/* {
    width: 25px;
} */


img[alt="imgSkills"] {
    width: 250px;
}


</style>