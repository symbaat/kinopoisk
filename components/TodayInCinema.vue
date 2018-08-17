<template>
 <div class="block-today">
    <nuxt-link to="/" class="header-link">
    <img src="../assets/2.png">
    <li v-for="todayfilm in todayfilms" :key="todayfilm.id" class="today-film">
    <nuxt-link :to="'/films/'+ todayfilm.id">
     <p class="today-title">{{todayfilm.title}}</p>
     <p class="vote-average">{{todayfilm.vote_average}}</p>
    </nuxt-link>
    </li>  
    </nuxt-link> 
 </div>
</template>

<script>
export default{
computed: {
  todayfilms(){
    return this.$store.state.movies;
  }
},
beforeMount(){
  this.$store.dispatch('loadNowPlayingFilms');
}
}
</script>

<style>
.block-today{
 width: 240px;
 height: 240px;
 float: right;
 position: relative;
 background-color: #f2f2f2;
 overflow: hidden;
 right: -230px;
 top: -300px;
}

.header-link{
 text-decoration: none;
 width: 240px;
 height: 28px;
 font-size: 12px;
 text-align: left;
 line-height: 14px;
}
.today-film{
 line-height: 23px;
}
.today-film:hover{
  background: rgb(220, 238, 248);
}
.today-title{
  text-decoration: underline;
  color: #007;
  padding: 10px 0 0 0;
  padding-left: 10px;
}
.vote-average{
  float: right;
  color: #f60;
  padding-right: 8px;
  margin-top: -15px;
  font-size: 11px;
}
ol{
  list-style-type: disc;
  color:#f60;
}
</style>