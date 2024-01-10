<template>
    <div class="container">
        <div class="row">
            <h2 class="display-4">Resume</h2>
        </div>
        <div class="row">
            <h3 class="educate text-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
</svg>  Education</h3>
            <div class="col" v-for="items in education" 
            :key="items">
                <h7> {{items.year}}</h7>
                <p>{{ items.description }} <br>
                {{ items.place }}</p>
            </div>
        </div>
        <div class="row">
            <h3 class="expo text-info"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
</svg>  Work Experience </h3>
            <div class="col" v-for="items in education" 
            :key="items">
            
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
            workexperience(){
                return this.$store.state.workexperience
            }
        },
        mounted(){
            return this.$store.dispatch('fetchEducation')
        },
        
        

            //return this.$store.dispatch('fetchWorkexperience')
        }

        


    
</script>

<style scoped>

</style>