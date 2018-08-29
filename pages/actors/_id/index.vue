<template>
 <div class="content-block">
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
     <!-- mobile version -->
     <div class="data-block-mobile">
     <div class="block-top">
      <img :src="'http://image.tmdb.org/t/p/w185/'+ actor.profile_path" alt="img" class="actor-img"> 
      <div class="header-actor">
       <h1 class="title">{{actor.name}}</h1>
       <p class="original-title">{{actor.birthday}}</p>
       <p class="release-date">{{actor.place_of_birth}}</p>
     </div>
     </div>
   </div>
     <div class="top-block">
     <div class="header">
     <h1 class="title">{{actor.name}}</h1>
     </div>
     <div class="photo-block">
      <img :src="'http://image.tmdb.org/t/p/w185/'+ actor.profile_path" alt="img" class="actor-img"> 
      <a href="#" class="addFolder"></a>
      <span class="left-bg-actor"></span>
      <div class="bottom-bg"></div>
     </div>
     </div>
     <div class="data-metrika">
      <table>
          <tbody class="info">
              <tr>
                  <td class="type">Имя</td>
                  <td class="value">{{actor.name}}</td>
              </tr>
              <tr>
                  <td  class="type">Дата рождения</td>
                  <td class="value">{{actor.birthday}}</td>
              </tr>
              <tr>
                  <td  class="type">Место рождения</td>
                  <td class="value">{{actor.place_of_birth}}</td>
              </tr>
              <tr>
                  <td  class="type">Популярность</td>
                  <td class="value">{{actor.popularity}}</td>
              </tr>
                <tr>
                  <td  class="type">Известность по отделам</td>
                  <td class="value">{{actor.known_for_department}}</td>
              </tr>
          </tbody>
      </table>
     </div>
 </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    computed: {
        filmId() {
            return this.$store.state.actors.actors.id;
        },
        actor() {
            return this.$store.state.actors.actors;
            console.log(this.$store.state.actors.actors)
        }
    },
    beforeMount() {
      this.$store.dispatch('actors/loadActorDetails',this.$route.params.id);
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
  background-color: #f2f2f2;
}
.header{
    width: 620px;
    position: relative;
    padding: 20px 20px 20px 15px;
}
.title{
    font-weight: normal;
    color: #000;
    font-size: 25px;
    font-family: tahoma, verdana, arial;
}
.original-title{
    font-size: 13px;
    color: #666;
}
.photo-block{
    width: 210px;
    padding: 0 0 30px 0;
    float: left;
    font-size: 11px;
}

.left-bg-actor{
    position: absolute;
    width: 7px;
    height: 300px;
    background: url(https://st.kp.yandex.net/images/movies/shadow_poster.png) repeat-y scroll 0 0 transparent;
    top: 70px;
    left: 0;
    margin-left: -10px;
}
.bottom-bg{
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  
    border-top: 5px solid #333;
    transform: rotate(225deg);
    margin-left: -8px;
    margin-top: -3px;
}

.actor-img{
    width: 205px;
    margin-left: -9px;
}
.movie-buttons{
    display: block;
    height: 150px;
    margin-left: 15px;
}
.movie-schedule{
    height: 40px;
    width: 178px;
    background-color: #f60;
    text-align: center;
    border-radius: 3px;
    margin-top: 10px;
}
.schedule-ticket{
    text-decoration: none;
    line-height: 40px;
    cursor: pointer;
    border: none;
    color: #fff;
    font-weight: bold;
    font-size: 13px;
    font-family: Arial, sans-serif;
}
.trailer{
    text-decoration: none;
    line-height: 40px;
    cursor: pointer;
    border: none;
    color: #fff;
    font-weight: bold;
    font-size: 13px;
    font-family: Arial, sans-serif;
    background-color: rgba(68, 68, 68, 0.9);
    width: 178px;
    height: 40px;
    text-align: center;
    border-radius: 3px;
    margin-top: 10px;
}

.data-metrika{
    width: 700px;
}
.info{
    width: 465px;
}
.type{
    color:#f60;
    min-height: 14px;
    padding-left: 23px;
    width: 119px;
    padding: 6px 0 6px 20px;
    font-size: 11px;
    font-family: tahoma, verdana, arial;
    background: url(https://st.kp.yandex.net/images/sqr-grey.gif) 0 11px no-repeat;
}
.info tr{
    background: url(https://st.kp.yandex.net/images/movies/dotbgtable.png) left bottom repeat-x;
}
.value{
    color: #005;
    text-decoration: underline;
    font-size: 11px;
    font-family: tahoma, verdana, arial;
}
.data-block-mobile{
    display: none;
}
@media(max-width: 768px){
    .content-block{
        width: 100%;    
    }
    .data-block{
        display: none;  
    }
    .data-block-mobile{
        width: 100%;
        height: 215px;
        display: flex;
    }
    .block-top{
        display: flex;
        width: 375px;
        height: 165px;
        border-bottom: 1px solid #ccc;
        padding: 10px;
        width: 100%; 
    }
    .header-actor{
        padding: 0 0 45px 14px; 
    }
    .review-area{
        display: none;
    }
    .comment{
        display: none;
    }
    .actor-img{
        width: 100px;
        height: 150px;
        padding: 7px 5px;
        padding-left: 5px;
        margin-left: 5px;
    }

    .title{
    font-weight: bold;
    color: #000;
    font-size: 13px;
    font-family: tahoma, verdana, arial;
}
    .original-title{
    font-size: 13px;
    color: #000;
}

 .data-metrika{
     display: none;
 }
 .top-block{
     display: none;
 }
}

</style>