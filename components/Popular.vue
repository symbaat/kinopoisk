<template>
 <div class="popular-film"> 
     <nuxt-link :to="'/films/'+ id">   
    <div class="popfilm-image">
    <img :src="'http://image.tmdb.org/t/p/w185/'+ poster" alt="img" class="img-popfilm">
    </div>
    <div class="popfilm-title">
    <p class="popfilm-name">{{title}}</p>
    </div> 
     </nuxt-link>
     </div>    
</template>

<script>
export default{
    props: ["title", "poster", "id"]
}
</script>

<style>

</style>