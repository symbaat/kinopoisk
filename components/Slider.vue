<template>
 <nuxt-link :to="'/films/'+id">
    <div class="now-playing">  
       <div class="movie-title">
        <p class="movie-name">{{title}}</p>
       </div>
       <div class="gradient">
       <img :src="'http://image.tmdb.org/t/p/w185/'+ poster" alt="img" class="img-now">
    </div>
     </div>
     </nuxt-link>    
</template>

<script>
export default{
    props: ["title", "poster", "id"]
}
</script>

<style>

</style>