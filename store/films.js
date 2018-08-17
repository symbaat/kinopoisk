import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export const state = () =>({
    film: {}  
})


export const actions ={
   loadFilmDetails({commit}, id){
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7cfcd3cc188cf9710a71028946b4d9d2&language=ru-RU&page=1`)
      .then(result=>
        result.data)
      .then(film => {
          commit('SET_FILM', film)           
      }) 
      
      .catch(error=>{
          console.log(error);
        })
   },

  
}

export const mutations = {
    SET_FILM(state, film){
        state.film=film
    },
  
}

export const getters ={
    
   
}

