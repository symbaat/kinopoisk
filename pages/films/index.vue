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
                   <h1 class="main-title">Списки фильмов</h1>  
                 </td>
               </tr>
               <tr>
                 <td class="second-row">
                   Списки фильмов помогают найти интересное кино, которое вы ещё не видели.
                 </td>
               </tr>
             </tbody>
          </table>   
          <table>    
           <tbody>
             <tr>  
               <td class="fourth-row">
                 <table class="fourth">
                   <tbody>
                     <tr class="film-row">
                       <td v-for="type in types" :key="type.id" class="title"> 
                         <nuxt-link to="/ratings/" class="title-link">
                          {{type.name}}
                         </nuxt-link>                   
                         </td>
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
      types: [{name: 'Топ-250'},             
      ]
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
  background: -webkit-gradient(linear, left bottom, left top, color-stop(0, #f2f2f2), color-stop(1, #fefefe));
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


</style>