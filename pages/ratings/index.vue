<template>
  <div class="content-block">
     <div class="select-box">
     </div>
     <tbody>
      <tr>
        <td>
          <table>
             <tbody>
               <tr>
                 <td class="first-row">
                   <h1 class="main-title">250 лучших фильмов</h1>
                   <span class="link-nav">+
                     <a href="#">еще немного</a>
                   </span>
                 </td>
               </tr>
               <tr>
                 <td class="second-row">
                   Рейтинг составлен по результатам голосования посетителей сайта. Любой желающий может принять в нем участие, проголосовав за свой любимый фильм
                 </td>
               </tr>
             </tbody>
          </table>
          <table class="third"> 
             <tbody>
               <tr>
                 <td class="third-row"> 
                    <img src="https://st.kp.yandex.net/images/arrow-small-left.gif">
                    <a href="#">предыдущий день</a>
                 </td>
               </tr>
             </tbody>
          </table>
          <table>
            <div class="table-title">
             фильм
            </div>
           <tbody>
             <tr>  
               <td class="fourth-row">
                 <table class="fourth">
                   <tbody>
                     <tr v-for="toprated in toprateds" :key="toprated.id" class="film-row">
                       <td class="title"> 
                         <nuxt-link :to="'/films/'+ toprated.id" class="title-link">
                         {{toprated.title}}
                         </nuxt-link>                   
                         </td>
                       <td class="vote">{{toprated.vote_average}}</td>
                       <td class="popularity">({{toprated.popularity}})</td>
                       <button class="fav-btn" @click="addFavorites()">Add to fav</button>
                     </tr>
                   </tbody>
                 </table>
               </td>
             </tr>
           </tbody>
          </table>
        </td>
      </tr>
     </tbody>
    <top-250></top-250>
    <today-in-cinema></today-in-cinema>
  </div>

</template>

<script>
import Top250 from "@/components/Top250"
import TodayInCinema from "@/components/TodayInCinema"

export default{
  components: {
   Top250,
   TodayInCinema
  },
  data(){
    return{
    }
  },
  computed:{
    toprateds(){
      return this.$store.state.toprateds;
    }
  },
  beforeMount(){
    this.$store.dispatch('loadTopRatedFilms');
  },
  methods: {
    addFavorites(){
      
    }
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
.table{
  width: 100%;
  display: table;
}
td{
  font-family: tahoma, verdana, arial;
  color: #000;
}

.first-row{
  padding-left: 20px;
  height: 50px;
  display: flex;
}
.main-title{
  color: #f60;
  font-size: 25px;
  font-weight: normal;
  padding: 0;
  margin: 5px 0;
}
.link-nav{
  color: #999999;
  font-size: 25px;
  font-weight: normal;
  padding-left: 10px;
}
.link-nav a{
  color: #999999;
  text-decoration: underline;
  font-size: 25px;
  font-weight: normal;
}
.second-row{
  padding-left: 20px;
  font-size: 11px;
  color: #000;
  height: 40px;
  width: 555px;
}
.third{
  padding-left: 20px;
  width: 555px;
}
.third-row{
  padding-left: 5px;
  border: 1px solid #999999;  
}
.third-row a{
  color: #999999;
  text-decoration: underline;
  font-size: 11px;
  font-weight: normal;
  padding-left: 5px;
}

.fourth-row{
  padding-left: 20px;  
}
.fourth{
  height: 25px;
  width: 535px;
}
.table-title{
  font-size: 11px;
  color: #fff;
  background-color: #005;
  padding-left: 30px;
  padding: 5px;
  width: 530px;
  margin-left: 20px;
}

.film-row{
  height: 27px;
  padding: 6px 30px 6px 0;
  vertical-align: middle;
  border-bottom: 1px #ffffff solid;
}
.title-link{
  color: #005;
  font-size: 11px;
  text-decoration: underline;
}
.vote{
  color:#f60;
  font-size: 11px;
  text-decoration: underline;
}
.popularity{
  color: #777;
  font-size: 11px;
}
.fav-btn{
  border: none;
  background: none;
  color: #f60;  
  font-size: 12px;
  cursor: pointer;
}

</style>