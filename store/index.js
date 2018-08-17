import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export const state = () =>({
    movies: [],
    newmovies: [],
    popfilms: [],
    toprateds: [],
    popactors: []
})

export const actions ={
   loadNowPlayingFilms({commit}){
      axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=7cfcd3cc188cf9710a71028946b4d9d2&language=ru-RU&page=1")
      .then(result=>
        result.data.results)
      .then(movies => {
          commit('SET_MOVIES', movies)
      })
      .catch(error=>{
          console.log(error);
        })
   },
  
   loadUpComingFilms({commit}){
    axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=7cfcd3cc188cf9710a71028946b4d9d2&language=ru-RU&page=1")
    .then(result=>
      result.data.results)
    .then(newmovies => {
        commit('SET_NEWMOVIES', newmovies)
    })
    .catch(error=>{
        console.log(error);
      })
   },

   loadPopularFilms({commit}){
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=7cfcd3cc188cf9710a71028946b4d9d2&language=ru-RU&page=1")
    .then(result=>
      result.data.results)
    .then(popfilms => {
        commit('SET_POPFILMS', popfilms)
    })
    .catch(error=>{
        console.log(error);
      })   
   },
   loadTopRatedFilms({commit}){
    axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=7cfcd3cc188cf9710a71028946b4d9d2&language=ru-RU&page=1")
    .then(result=>
      result.data.results)
    .then(toprateds => {
        commit('SET_TOPRATED', toprateds)
    })
    .catch(error=>{
        console.log(error);
      })   
   },
   loadPopularActors({commit}){
    axios.get("https://api.themoviedb.org/3/person/popular?api_key=7cfcd3cc188cf9710a71028946b4d9d2&language=ru-RU&page=1")
    .then(result=>
      result.data.results)
    .then(popactors => {
        commit('SET_POPACTORS', popactors)
    })
    .catch(error=>{
        console.log(error);
      }) 
   }
}

export const mutations = {
    SET_MOVIES(state, movies){
        state.movies=movies
    },
    SET_NEWMOVIES(state, newmovies){
        state.newmovies=newmovies
    },
    SET_POPFILMS(state, popfilms){
        state.popfilms=popfilms
    },
    SET_TOPRATED(state, toprateds){
        state.toprateds=toprateds
    },
    SET_POPACTORS(state, popactors){
        state.popactors=popactors
    }
}

