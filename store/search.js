import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export const state = () =>({
    searchFilm: {}
})

export const actions ={
   loadSearchingFilms({commit}, searchFilm){
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7cfcd3cc188cf9710a71028946b4d9d2&language=ru-RU&query=`+ searchFilm+`&page=1&include_adult=false`)
      .then(result=>
        result.data.results)
      .then(searchFilm=>
        commit('SEARCH_FILM', searchFilm)
    )
      .catch(error=>{
          console.log(error);
        })
   },
}

export const mutations = {
    SEARCH_FILM(state, searchFilm){
        state.searchFilm=searchFilm
    }
}