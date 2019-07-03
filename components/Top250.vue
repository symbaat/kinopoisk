<template>
 <div class="block-top250">
    <nuxt-link to="/ratings/" class="header-link">
    <img src="../assets/1.png">
    
    <li v-for="toprated in toprateds" :key="toprated.id" class="toprated-film">
    <nuxt-link :to="'/films/'+ toprated.id">
        <p class="toprated-title">{{toprated.title}}</p>
        <p class="vote-average">{{toprated.vote_average}}</p>
    </nuxt-link>
    </li>
    
    </nuxt-link> 
 </div>
</template>

<script>
export default{
computed: {
  toprateds(){
    return this.$store.state.toprateds;
  }
},
beforeMount(){
  this.$store.dispatch('loadTopRatedFilms');
}
}
</script>

<style>
.block-top250{
 width: 240px;
 height: 240px;
 right: 10px;
 float: right;
 position: relative;
 top: -585px;
 background-color: #f2f2f2;
 overflow: hidden;
}
.block-top250 dt{
 height: 30px;
 text-align: center;
}
.header-link{
 text-decoration: none;
 width: 240px;
 height: 28px;
 font-size: 12px;
 text-align: left;
 line-height: 14px;
}
.toprated-film{
 line-height: 23px;
}
.toprated-film:hover{
  background: rgb(220, 238, 248);
}
.toprated-title{
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