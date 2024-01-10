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
      let res = await fetch(myDataUrl)
      // console.log(res);
      let {education} = await res.json()
      // console.log(education);
      context.commit('setEducation', education )
      // console.log(context);
    },
    async fetchWorkexperience(context){
      let res = await fetch(myDataUrl)
      let {workexperience} = await res.json()
      context.commit('setSkills', workexperience )
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
    }
  },
  modules: {
  }
})
