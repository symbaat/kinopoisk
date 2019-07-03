<template>
<div class="content-block">
   <div class="info-page">
       <p>{{$route.params.id}}</p>
    <div class="info-header">
      <div v-for="movie in movies" :key="movie.id">
       <p>{{movie.title}}</p>
       </div>
    </div>
   </div>
</div>
</template>

<script>
import axios from 'axios'
export default{
  
 data(){
    return {
      movies: []
    }
  },
  mounted(){
    axios({method: "GET", "url": 'https://api.themoviedb.org/3/movie/now_playing?api_key=7cfcd3cc188cf9710a71028946b4d9d2&language=ru-RU&page=1'})
    .then(result=>{
      console.log(result.data.results);
      this.movies=result.data.results; 
      return this.movies.filter(el => el.id ===this.$route.params.id)
      console.log('movies array' + this.movies);
    })
    .catch(error=>{
      console.log('error');
    })
    }
}
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