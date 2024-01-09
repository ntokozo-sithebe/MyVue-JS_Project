import { createStore } from 'vuex'
const myDataUrl = 'https://ntokozo-sithebe.github.io/vueJSPortfolioDATA/data/'
export default createStore({
  state: {
    jobTitle : null,
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null,

  },
  getters: {
  },
  mutations: {
    setJobTitle(state, value){
      state.jobTitle = value
    },
    setAbout(state, value){
      state.about = value
    },
    setEducation(state, value){
      state.education = value
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
    async fetchJobTitle(context){
      let res = await fetch(myDataUrl)
      let {jobTitle} = await res.json()
      context.commit('setJobTitle', jobTitle)
    },
    async fetchAbout(context){
      let res = await fetch(myDataUrl)
      // console.log(res);
      let {about} = await res.json()
      context.commit('setAbout', about )
    },
    async fetchEducation(context){
      let res = await fetch(myDataUrl)
      // console.log(res);
      let {education} = await res.json()
      context.commit('setEducation', education )
    },
    async fetchSkills(context){
      let res = await fetch(myDataUrl)
      let {skills} = await res.json()
      context.commit('setSkills', skills )
    },
    async fetchTestimonials(context){
      let res = await fetch(myDataUrl)
      let {testimonials} = await res.json()
      context.commit('setTestimonials', testimonials )
    },
    async fetchProjects(context){
      let res = await fetch(myDataUrl)
      let {projects} = await res.json()
      context.commit('setProjects', projects )
    },
  },
  modules: {
  }
})
