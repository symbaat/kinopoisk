<template>
 <div class="content-block">
     <h1>Film Detail Page</h1>
     <p>{{filmId}}</p>
     <p v-if="film">{{film.original_title}}</p>
 </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            film: null
        };
    },
    computed: {
        filmId() {
            return this.$route.params.id;
        },
        // film() {
        //     return this.$store.state.film.film;
        // }
    },
    beforeMount() {
        //this.$store.dispatch("films/loadNowPlayingFilms");
    axios({method: "GET", "url": `https://api.themoviedb.org/3/movie/${this.filmId}?api_key=7cfcd3cc188cf9710a71028946b4d9d2&language=ru-RU&page=1`})
    .then(result=>{
        console.log(result.data)
        this.film = result.data;
    })
    .catch(error=>{
      console.log(error);
    })
    }
};
</script>

<style>
.content-block{
  position: relative;
  width: 850px;
  margin: 0 auto;
  height: 1500px;
  padding: 0;
  background-color: #fff;
}
</style>