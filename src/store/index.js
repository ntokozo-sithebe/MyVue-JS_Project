import { createStore } from 'vuex'
const myDataUrl = 'https://ntokozo-sithebe.github.io/vue_js_port_data/data'
export default createStore({
  state: {
    education: null,
    workexperience: null,
    skills: null,
    testimonials: null,
    projects: null,

  },
  getters: {
  },
  mutations: {
    setEducation(state, value){
      state.education = value
    },
    setWorkexperience(state, value){
      state.workexperience = value
    },
    setSkills(state, value){
      state.skills = value
    },
    setTestimonials(state, value){
      state.testimonials = value
    },
    setProjects(state, value){
      state.projects = value
    },
  },
  actions: {
    async fetchEducation(context){
      try{

        let res = await fetch(myDataUrl)
        let {education} = await res.json()
        context.commit('setEducation', education )
      
      } catch(error){
        console.error('Error fetching the data:', error.message)
      }
    },
    async fetchWorkexperience(context){
      try{
        let res = await fetch(myDataUrl)
        let {workexperience} = await res.json()
        context.commit('setSkills', workexperience )
        
      }catch(error){
        console.error("error fetching the data:", error.message)
      }
    },
    async fetchSkills(context){
      try{

        let res = await fetch(myDataUrl)
        let {skills} = await res.json()
        context.commit('setSkills', skills )
      }catch(error){
        console.erroe("error fetching the data", error.message)
      }
    },
    async fetchTestimonials(context){
      try{
        let res = await fetch(myDataUrl)
        let {testimonials} = await res.json()
        context.commit('setTestimonials', testimonials )
      }catch(error){
        console.error("error fetching the data:", error.message)
      }
    },
    async fetchProjects(context){
      try{

        let res = await fetch(myDataUrl)
        let {projects} = await res.json()
        context.commit('setProjects', projects )
      }catch(error){
        console.error("error fetching the data", error.message)
      }
    }
  },
  modules: {
  }
})
