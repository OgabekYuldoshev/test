import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employers:[],
    employer:[],
    sections:[],
    positions:[],
    male: 0,
    famale: 0,
    marketing:0,
    IT:0,
    bugalterya: 0,
    middleAge: 0
  },
  mutations: {
    async getEmployers(state){
        await axios.get("http://localhost:3000/employers").then((res)=>{
            state.employers = res.data;
            const ages = []
            res.data.forEach(element => {
              const date = element.birthday
              var year = Number(date.replaceAll('-', '').substr(0, 4));
              var month = Number(date.replaceAll('-', '').substr(4, 2)) - 1;
              var day = Number(date.replaceAll('-', '').substr(6, 2));
              var today = new Date();
              var age = today.getFullYear() - year;
              if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
                age--;
              }
              ages.push(age)
            });
            state.middleAge = ((ages.reduce((accumulator, currentValue) => accumulator + currentValue)) / ages.length).toFixed(0)
        })
    },
    async getOneEmployer(state, id){
      await axios.get(`http://localhost:3000/employers/${id}`).then((res)=>{
          state.employer = res.data
      })
    },
    async addEmployer(state, data){
      await axios.post("http://localhost:3000/employers", data).then((res)=>{
          console.log(res.data)
      })
    },
    async updateEmployer(state, data){
      await axios.put(`http://localhost:3000/employers/${data.id}`, data.body).then((res)=>{
        onsole.log(res.data)
      })
  },

    async deleteEmployer(state, id){
      await axios.delete(`http://localhost:3000/employers/${id}`).then((res)=>{
          console.log(res.data)
      })
    },

    async getSectionAndPosition(state){
      await axios.get("http://localhost:3000/sections").then((res)=>{
          state.sections = res.data
      })

      await axios.get("http://localhost:3000/positions").then((res)=>{
          state.positions = res.data
      })
  },

  async getFilter(state, route){
    await axios.get(`http://localhost:3000/employers${route}`).then((res)=>{
        state.employers = res.data
    })
  },

  async getInfo(state){
    await axios.get(`http://localhost:3000/employers?gender=male`).then((res)=>{
        state.male = res.data.length
    })
    await axios.get(`http://localhost:3000/employers?gender=famale`).then((res)=>{
        state.famale = res.data.length
    })
    await axios.get(`http://localhost:3000/employers?section=IT`).then((res)=>{
        state.IT = res.data.length
    })
    await axios.get(`http://localhost:3000/employers?section=Bugalterya`).then((res)=>{
        state.bugalterya = res.data.length
    })
    await axios.get(`http://localhost:3000/employers?section=Marketing`).then((res)=>{
        state.marketing = res.data.length
    })
  },

  }
})