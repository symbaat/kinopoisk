<template>
 <div id="content-block">
   <p class="search-header">Результаты поиска</p>
   <div v-for="film in films" :key="film.id" class="list-of-films">
       <nuxt-link :to="'/films/'+ film.id" class="search-film-link">
       <img :src="'http://image.tmdb.org/t/p/w185/'+ film.poster_path" alt="img" class="search-film-img">
       <div class="search-film-info">
         <p class="search-film-title">{{film.title}}</p>
         <p class="search-film-original">{{film.original_title}}</p>
       </div>
     </nuxt-link>
   </div>
 </div>
</template>

<script>
export default {
  data(){
    return {
     
    }
  },
  computed: {
     films(){
         return this.$store.state.search.searchFilm;
         console.log(this.$store.state.search.searchFilm);
     }
  },
      beforeMount(){
          this.$store.dispatch('search/loadSearchingFilms');
      }
  }
</script>

<style>
#content-block{
  position: relative;
  width: 850px;
  margin: 0 auto;
  height: 100%;
  padding: 0;
  background-color: #fff;
  box-shadow: -6px 10px 20px 0px rgba(0, 0, 0, 0.2);
  flex-flow: row wrap;
}
.search-header{
  color: #f60;
  font-size: 16px;
  font-family: "tahoma,verdana,arial";
  margin: 10px 0 20px 0;
  text-decoration: underline;
  padding-left: 20px;
  padding-top: 20px;
}
.list-of-films{
  padding-left: 20px;
  min-height: 100px;
  border-bottom: 1px #ccc dotted;
  position: relative;
  padding: 15px 0 5px 16px;
  display: flex;
}
.search-film-img{
  width: 52px;
  border: 3px #ccc solid;
}
.search-film-title{
  font-size: 12px;
  font-family: arial;
  font-weight: bold;
  color: #007;
  margin: 0;
  text-decoration: underline;
}
.search-film-info{
  padding-left: 60px;
  position: relative;
  margin-top: -75px;
}
.search-film-original{
  margin-bottom: 9px;
  color: #777;
}
.search-film-link{
  list-style-type: none;
  text-decoration: none;
}
</style>