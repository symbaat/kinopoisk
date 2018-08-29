<template>
  <div id="content-block">
    <div class="content-header">
      <span class="block-title">Сегодня в кино</span>
    </div>
    <div class="slide-content">
     <div class="first-slider">   
      <Slider v-for="(movie) in movies" :key="movie.id"
             :id="movie.id" 
             :title="movie.title"
             :poster="movie.poster_path"        
      ></Slider>    
     </div>
    </div>
    <div class="slider-navigation">
      <div class="left-btn">
     <button class="prev-btn" @click="prev"><i class="fas fa-caret-left"></i></button>
       <span class="prev">назад</span>
     </div>
     <div class="right-btn">
     <button class="next-btn" @click="next"><i class="fas fa-caret-right"></i></button>
       <span class="next">вперед</span>
     </div>
    </div>
    <hr class="delimiter">
    <div class="content-header-second">
      <span class="block-title">Скоро на экранах</span>
    </div>
    <div class="slide-content">
    <div class="second-slider">
    <Slider v-for="(newmovie) in newmovies" :key="newmovie.id" 
             :title="newmovie.title"
             :poster="newmovie.poster_path"
             :id="newmovie.id"
     ></Slider>
   </div>
   </div>
    <div class="slider-navigation">
      <div class="left-btn">
     <button class="prev-btn" @click="prev2"><i class="fas fa-caret-left"></i></button>  
     </div>
     <div class="right-btn">
     <button class="next-btn" @click="next2"><i class="fas fa-caret-right"></i></button>
     </div>
    </div>
    <hr class="delimiter">  
    <div class="popular-bar">
     <div class="popular-films-title">
      <nuxt-link to="/" class="link-popular-films">Популярные фильмы</nuxt-link>
     </div>
     <div class="popular-films-content">
      <div class="popular-films-slider">
        <div class="popular-film"> 
        <li v-for="popfilm in popfilms" :key="popfilm.id" class="slider-item"> 
        <nuxt-link :to="'/films/'+popfilm.id" class="popfilm-link">
       <div class="popfilm-image">
       <img :src="'http://image.tmdb.org/t/p/w92/'+ popfilm.poster_path" alt="img" class="img-popfilm">
       </div>
       <div class="popfilm-title">
        <p class="popfilm-name">{{popfilm.title}}</p>
        <p class="original-title">{{popfilm.original_title}}</p>
       </div>
       </nuxt-link> 
        </li>
        <span class="slider-arrow-next" @click="arrowNext"></span>
        <span class="slider-arrow-prev" @click="arrowPrev" v-show="showPrev"></span>
     </div>   
      </div>
     </div>
      <div class="slider-navigation-mobile">
      <div class="left-btn">
     <button class="prev-btn" @click="arrowPrev" v-show="showPrev"><i class="fas fa-caret-left"></i></button>  
     </div>
     <div class="right-btn">
     <button class="next-btn" @click="arrowNext" v-show="showNext"><i class="fas fa-caret-right"></i></button>
     </div>
    </div>
    </div>
    <hr class="delimiter"> 
    <div class="popular-bar">
     <div class="popular-films-title">
      <nuxt-link to="/" class="link-popular-films">Популярные персоны</nuxt-link>
     </div>
     <div class="popular-films-content">
      <div class="popular-actors-slider">
        <div class="popular-film"> 
        <li v-for="popactor in popactors" :key="popactor.id" class="slider-item"> 
        <nuxt-link :to="'/actors/'+popactor.id" class="popfilm-link">
       <div class="popfilm-image">
       <img :src="'http://image.tmdb.org/t/p/w92/'+ popactor.profile_path" alt="img" class="img-popfilm">
       </div>
       <div class="popfilm-title">
        <p class="popfilm-name">{{popactor.name}}</p>
        <p class="original-title">{{popactor.original_title}}</p>
       </div>
       </nuxt-link> 
        </li>
        <span class="slider-arrow-next" @click="arrowNext2"></span>
        <span class="slider-arrow-prev" @click="arrowPrev2" v-show="showPrev2"></span>
     </div>   
      </div>
     </div>
      <div class="slider-navigation-mobile">
      <div class="left-btn">
     <button class="prev-btn" @click="arrowPrev2" v-show="showPrev2"><i class="fas fa-caret-left"></i></button>  
     </div>
     <div class="right-btn">
     <button class="next-btn" @click="arrowNext2" v-show="showNext2"><i class="fas fa-caret-right"></i></button>
     </div>
    </div>
    </div>
     <!-- <div class="main-page-footer">
       <nuxt-link to="/ratings/">
         Топ-250 лучших фильмов
       </nuxt-link>
    </div> -->
    <div class="top250">
    <top250></top250>
    </div>
    <div class="today-in-cinema">
    <today-in-cinema></today-in-cinema>
    </div>
  </div>
</template>

<script>

import Slider from '~/components/Slider.vue'
import Top250 from "@/components/Top250"
import TodayInCinema from "@/components/TodayInCinema"
export default {
  components: {
    Slider,
    Top250,
    TodayInCinema
  },
  data(){
    return {
      offset: 0,
      offset2: 0,
      offset3: 0,
      offset4: 0,
      showPrev: false,
      showPrev2: false,
      showNext: true,
      showNext2: true
    }
  },
  computed:{
       movies() {
         return this.$store.state.movies;
       },
       newmovies(){
         return this.$store.state.newmovies;
       },
       popfilms(){
         return this.$store.state.popfilms;
       },
       popactors(){
         return this.$store.state.popactors;
       }
     },
  beforeMount(){
    this.$store.dispatch('loadNowPlayingFilms');
    this.$store.dispatch('loadUpComingFilms');
    this.$store.dispatch('loadPopularFilms');
    this.$store.dispatch('loadPopularActors');
    },

  
    methods:{  
      next(){
      let slide=document.querySelector(".first-slider");
      let rect= slide.getBoundingClientRect();
      let right=rect.right;
      console.log("right: "+right); 
      if(right>=1370){
      this.offset = (parseInt(this.offset) - 300) + 'px';
      slide.style['transform'] = 'translate3d(' + this.offset + ', 0, 0)';
      console.log("offset: "+this.offset)
      }
      },
      prev(){
      let slide=document.querySelector(".first-slider");
      let rect= slide.getBoundingClientRect();
      let left=rect.left; 
      let right=rect.right;  
      console.log("left: "+left);
      console.log("right:" +right)
      if(left<=200 && left<0){
      this.offset = (parseInt(this.offset) + 300) + 'px';
      slide.style['transform'] = 'translate3d(' + this.offset + ', 0, 0)';
      console.log("offset: "+ this.offset);
      }
      },

      next2(){
      let slide=document.querySelector(".second-slider");
      let rect= slide.getBoundingClientRect();
      let right=rect.right;
      console.log(right); 
      if(right>=1370 && right){
      this.offset = (parseInt(this.offset) - 300) + 'px';
       slide.style['transform'] = 'translate3d(' + this.offset + ', 0, 0)';
      }
      },
      prev2(){
      let slide=document.querySelector(".second-slider");
      let rect= slide.getBoundingClientRect();
      let left=rect.left;   
      console.log(left);
      if(left<0 && left<=200){
      this.offset = (parseInt(this.offset) + 300) + 'px';
       slide.style['transform'] = 'translate3d(' + this.offset + ', 0, 0)';
      }  
      },

      //popular
      arrowNext(){
      let slide=document.querySelector(".popular-films-slider");   
      let rect = slide.getBoundingClientRect();
      let right = rect.right;
      console.log(right);
      this.offset2 = (parseInt(this.offset2) - 1650) + 'px';
      slide.style['transform'] = 'translate3d(' + this.offset2 + ', 0, 0)';
      slide.style['transition'] = '.5s ease-in-out';  
      this.showNext=false;  
      this.showPrev=true;
      },
      arrowPrev(){
      let slide=document.querySelector(".popular-films-slider");
      let rect = slide.getBoundingClientRect();
      let left = rect.left;
      console.log(left);
      this.offset2 = (parseInt(this.offset2) + 1650) + 'px';
      slide.style['transform'] = 'translate3d(' + this.offset2 + ', 0, 0)';
      slide.style['transition'] = '.5s ease-in-out'; 
      this.showNext=true;  
      this.showPrev=false;
      },

      arrowNext2(){
      let slide=document.querySelector(".popular-actors-slider");   
      this.offset3 = (parseInt(this.offset3) - 1650) + 'px';
      slide.style['transform'] = 'translate3d(' + this.offset3 + ', 0, 0)';
      slide.style['transition'] = '.5s ease-in-out';
      this.showPrev2=true;
      this.showNext2=false;  
      
      },
      arrowPrev2(){
      let slide=document.querySelector(".popular-actors-slider");
      this.offset3 = (parseInt(this.offset3) + 1650) + 'px';
      slide.style['transform'] = 'translate3d(' + this.offset3 + ', 0, 0)';
      slide.style['transition'] = '.5s ease-in-out';
      this.showNext2=true;  
      this.showPrev2=false;
      }
    }     
}
</script>

<style>
#content-block{
  position: relative;
  width: 850px;
  margin: 0 auto;
  height: 1500px;
  padding: 0;
  background-color: #fff;
  box-shadow: -6px 10px 20px 0px rgba(0, 0, 0, 0.2);
  flex-flow: row wrap;
}
.content-header{
  height: 56px;
  text-align: center;
  padding-top: 10px;
  padding-left: 50px;
  color: rgb(145, 141, 141);
}
.content-header-second{
  margin-top: 100px;
  height: 56px;
  text-align: center;
  padding-top: 10px;
  padding-left: 50px;
  color: rgb(145, 141, 141);
}
.block-title{
  font-size: 29px;
  font-family: OpenSans, sans-serif;
}
 .slide-content {
   overflow: hidden;
   width: 850px;  
 }
.first-slider{
  width: 4700px;
  height: 300px;
  display: flex;
  position: relative;
}
.second-slider{
  width: 4720px;
  height: 300px;
  display: flex;
  position: relative;
}
.slider-content{
  transition-duration: 400ms;
}
.movie-title{
  bottom: 0;
  left: 0;
  width: 100%;
  position: absolute;
  padding-left: 10px;
  padding-bottom: 10px;  
}
.movie-name{
  font-size: 18px;
  font-family: OpenSans, sans-serif;
  color: #fff;
}
.now-playing{
  height: 300px;
  border: 1px solid #CCCCCC;
  position: relative;
  margin-right: 13px;
  background-image: linear-gradient(270deg, rgba(30,65,94,0.00) 50%, #1E415E 100%);
}

.img-now{
 height: 300px;
 width: 220px;
 border: 0;
 opacity: 1;
}
.img-now:hover{
  opacity: .5;
  transition: .4s ease-in-out;
  background: #1E415E;
}
.slider-navigation{
  margin: 10px 0;
  text-align: center;
  width: 850px;
}
.left-btn{
  float: left;
  position: relative;
  display: inline-block;
  margin-left: 10px;
}
.right-btn{
  float: right;
  position: relative;
  display: inline-block;
  margin-right: 10px;
}

.prev-btn{
  width: 35px;
  height: 35px;
  padding: 0;
  float: left;
  margin-right: 9px;
  border: 1px solid #CCCCCC;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
}
.next-btn{
  width: 35px;
  height: 35px;
  padding: 0;
  float: right;
  margin-left: 9px;
  border: 1px solid #CCCCCC;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
}
.prev{
  font-family: OpenSans, sans-serif;
  font-size: 13px;
  text-align: center;
  margin-top: 5px;
}
.next{
  font-family: OpenSans, sans-serif;
  font-size: 13px;
  text-align: center;
}
/*   Popular films and actors*/
.popular-films-title{
  margin-top: 60px;
  border-left: 2px solid #f60;
  padding: 0 0 0 20px;
  height: 28px;
  line-height: 28px;
  font-size: 12px;
  font-weight: bold;
  font-family: Arial;
  background-image: linear-gradient(-180deg, #f3f3f3 0%, #dedede 100%);
  width: 555px;
}
.link-popular-films{
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 102, 0, 0.3);
  color: #f60;
}
.popular-films-content{
  overflow: hidden;
  width: 535px;
  margin-top: 20px;
  margin-left: 20px;
}
.popular-actors-content{
  overflow: hidden;
  width: 535px;
  margin-top: 20px;
  margin-left: 20px;
}

.popular-bar{
  width: 555px;
}
.popular-film{
  display: flex;
}
.popular-actor{
  display: flex;
}
.popfilm-image{
  width: 50px;
  height: 143px; 
  margin-right: 60px;
}
.popfilm-name{
  font-size: 12px;
  line-height: 16px;
  color: #007;
  margin: 7px 0 0 0;
  font-family: Arial;
}
.popfilm-title{
  width: 92px;
}
.popfilm-link{
  text-decoration: none;
}
.original-title{
  font-size: 12px;
  line-height: 16px;
  color: #777;
  font-family: Arial;
}
.slider-arrow-next{
  position: absolute;
  cursor: pointer;
  height: 143px;
  width: 45px;
  background-color: rgba(0, 0, 0, 0.7);
  transition: background .2s ease;
  left: 500px;
}

.slider-arrow-next:after{
  background-image: url(https://st1.kp.yandex.net/img/images-arrow-left.png);
  background-repeat: no-repeat;
  background-size: cover;
  content: '';
  display: block;
  opacity: .8;
  width: 9px;
  height: 16px;
  margin: 64px 0 0 18px;
  transition: opacity .2s ease;
}

.slider-arrow-prev{
  position: absolute;
  cursor: pointer;
  height: 143px;
  width: 45px;
  background-color: rgba(0, 0, 0, 0.7);
  transition: background .2s ease;
  right: -1155px;
}
.slider-arrow-prev:after{
  background-image: url(https://st1.kp.yandex.net/img/images-arrow-right.png);
  background-repeat: no-repeat;
  background-size: cover;
  content: '';
  display: block;
  opacity: .8;
  width: 9px;
  height: 16px;
  margin: 64px 0 0 18px;
  transition: opacity .2s ease;
}

.delimiter{
  display: none;
}
.slider-navigation-mobile{
  display: none;
}

@media (max-width: 768px) {
   #content-block{  
     width: 100%;
   }
   .slide-content{
     width: 100%;
   }
   .top250{
    display: none;
   }
   .today-in-cinema{
     display: none;
   }
   .content-header{
     height: 40px;
     text-align: left;
     padding-top: 10px;
     color: #000;
   }
   .block-title{
     font-size: 16px;
   }
   .first-slider{
    height: 150px;
    width: 2000px;
    display: flex;
    position: relative;
    width: 3300px;
}

  .second-slider{
     height: 150px;
    display: flex;
    position: relative;
    width: 3300px;
 }
   .now-playing{
    height: 150px;
  
 }
    .img-now{
      height: 150px;
      width: 110px;
    }
  
  .movie-name{
   font-size: 14px;
   font-family: OpenSans, sans-serif;
   color: #fff;
}
  .slider-navigation{
    width: 100%;
  }
  .content-header-second{
    height: 40px;
    text-align: left;
    color: #000;
    margin-top: 20px;
  }
  .popular-bar{
    width: 100%;
  }
  .popular-films-title{
    width: 100%;
  }
  .popular-films-content{
    width: 100%;
    margin: 0;
  }
  .popular-films-slider{
    width: 100%;
  }
 
  .slider-arrow-next{
   display: none;
}
 .slider-arrow-prev{
   display: none;
 }
 .delimiter{
   display: block;
   background-color: #f5f5f5;
   height: 8px;
   border: none;
   padding: 0;
   margin-top: 60px;
 }
 .slider-navigation-mobile{
   display: inline;
 }
 
}

</style>
