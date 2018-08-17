import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export const state = () =>({
    actors: {}
})

export const actions ={
   loadActorDetails({commit}, id){
    axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=7cfcd3cc188cf9710a71028946b4d9d2&language=ru-RU&page=1`)
      .then(result=>
        result.data)
      .then(actors => {
          commit('SET_ACTOR', actors)
      })
      .catch(error=>{
          console.log(error);
        })
   },
  
}

export const mutations = {
    SET_ACTOR(state, actors){
        state.actors=actors
    },
   
}

