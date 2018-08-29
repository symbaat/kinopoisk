<template>
 <div class="content-block">
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
     <!-- mobile version -->
   <div class="data-block-mobile">
     <div class="block-top">
      <img :src="'http://image.tmdb.org/t/p/w185/'+ localFilms.poster_path" alt="img" class="film-img"> 
       <i class="fas fa-bookmark"></i>  
       <i class="fas fa-check"></i>
      <div class="header-movie">
       <h1 class="title">{{localFilms.title}}</h1>
       <p class="original-title">{{localFilms.original_title}}</p>
       <p class="release-date">{{localFilms.release_date}}</p>
       </div>
       <span class="movie-header-folder">
           <button class="touch-button">
             <span class="touch-button-content">
                 <span class="folder-btn">
                     <i class="fas fa-folder"></i>
                     <i class="fas fa-plus"></i>
                     </span>
                 Мои фильмы
             </span>
           </button>
       </span>
     </div>
      <div class="movie-ticket-btn">     
         <button class="schedule-ticket-btn">
             <span class="button-content">Расписание и билеты</span>
             </button>
     </div> 
   </div>

    <div class="description">
        <p class="overview">{{localFilms.overview}}</p>
     </div>

     <div class="data-block">
     <div class="header">
     <h1 class="title">{{localFilms.title}}</h1>
     <p class="original-title">{{localFilms.original_title}}</p>
     </div>
     <div class="photo-block">
      <img :src="'http://image.tmdb.org/t/p/w185/'+ localFilms.poster_path" alt="img" class="film-img"> 
      <a href="#" class="addFolder"></a>
      <span class="left-bg"></span>
      <div class="bottom-bg"></div>
      <div class="movie-buttons">
        <div class="movie-schedule">
       <a href="#" class="schedule-ticket">Расписание и билеты</a>
       </div>
       <button class="trailer">Трейлер</button>
     </div>
     </div>
     <div class="data-metrika">
      <table>
          <tbody class="info">
              <tr>
                  <td class="type">Название</td>
                  <td class="value">{{localFilms.title}}</td>
              </tr>
              <tr>
                  <td  class="type">Оригинальное название</td>
                  <td class="value">{{localFilms.original_title}}</td>
              </tr>
              <tr>
                  <td  class="type">Средний голос</td>
                  <td class="value">{{localFilms.vote_average}}</td>
              </tr>
              <tr>
                  <td  class="type">Популярность</td>
                  <td class="value">{{localFilms.popularity}}</td>
              </tr>
                <tr>
                  <td  class="type">Оригинальный язык</td>
                  <td class="value">{{localFilms.original_language}}</td>
              </tr>
              <tr>
                  <td class="type">Бюджет</td>
                  <td class="value">{{localFilms.budget}}</td>
              </tr>
               <tr>
                  <td class="type">Краткое описание</td>
                  <td class="value">{{localFilms.overview}}</td>
              </tr>
          </tbody>
      </table> 
     </div>
     </div>
     <div>          
         <div v-for="comment in film.comments" :key="comment.id" class="review-area">
             <p class="sub-title">{{comment.caption}}</p>
             <p>{{comment.text}}</p>            
         </div>
     </div>
     <form class="comment">
        <img src="https://st.kp.yandex.net/images/users/user-no.gif" class="avatar">
        <div class="choose">
            <p class="text">Для того чтобы добавить рецензию на фильм {{localFilms.title}}, необходимо</p>
            <input type="button" value="Ж" class="bold">
            <input type="button" value="К" class="italic">
        </div>
        <div class="comment-area">
        <p class="comment-title">Заголовок:</p>
        <input type="text" class="caption" v-model="comment.caption">
        <p class="comment-title">Текст:</p>
        <textarea class="user-text" v-model="comment.text"></textarea>
        <input type="button" class="submit-btn" value="отправить" @click="submit"> 
        </div>
     </form>    
 </div>
</template>

<script>

export default {
    data() {
        return {
            comment: {},
            comments: [],        
        };
    },
    computed: {
        filmId() {
            return this.$store.state.films.film.id;
        },
        film() {
            return this.$store.state.films.film;
            console.log(this.$store.state.films.films)
        },
       
        localFilms(){
         return this.$store.state.films.film;
        }
  
    },
   
    beforeMount() {
      this.$store.dispatch('films/loadFilmDetails',this.$route.params.id);
      console.log("beforeMount");
    },
    methods: {
        submit(){
            console.log('submit');
            this.comments.push(this.comment);
            let x = this.localFilms;
            x.comments = this.comments;
            console.log(x);
            this.$store.commit('films/SET_FILM',  x);
            this.comment = {};
        }
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
  background-color: #fff;
}
.data-block{
   background-color: #f2f2f2;
   height: 550px; 
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
.addFolder{
    position: absolute;
    width: 30px;
    background: url(/assets/3.png);
    height: 27px;
    left: 0px;
    opacity: .8;
}
.left-bg{
    position: absolute;
    width: 7px;
    height: 270px;
    background: url(https://st.kp.yandex.net/images/movies/shadow_poster.png);
    top: 85px;
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
.film-img{
    width: 205px;
    margin-left: -9px;
    height: 270px;
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

/* Comment */
.comment{
    background: #f2f2f2;
    border: 1px solid #fff;
    padding: 15px;
    display: block;
    width: 555px;
    margin-left: 30px;
    height: 450px;
    margin-top: 30px;
}

.bold{
    width: 23px;
    height: 23px;
    border: 1px #fff outset;
    overflow: hidden;
    cursor: pointer;
    margin: 0 !important;
    padding: 0;
    font-weight: bold;
    font-family: tahoma,verdana;
    font-size: 11px;
}
.italic{
    width: 23px;
    height: 23px;
    border: 1px #fff outset;
    overflow: hidden;
    cursor: pointer;
    margin: 0 !important;
    padding: 0;
    font-style: italic;
    font-family: tahoma,verdana;
    font-size: 11px;
}
.avatar{
    border: 5px #ccc solid;
}
.text{
    margin-bottom: 32px;
    font-family: tahoma, verdana, arial;
    font-size: 11px;
}
.choose{
    padding-left: 70px;   
    width: 450px;
    margin-top: -85px;
}

.comment-area{
    margin-top: 20px;   
}
.comment-title{
    font-family: tahoma, verdana, arial;
    font-size: 11px;
}
.caption{
    width: 515px;
    background: #fff;
    color: #333;
    padding: 4px 3px;
    border: 1px #999 solid;   
}
.user-text{
    width: 515px;
    height: 200px;
    margin-bottom: 10px;
    list-style: none;
    text-decoration: none;
    resize: none;
    background: #fff;
    color: #333;
    padding: 4px 3px;
    border: 1px #999 solid; 
}
.submit-btn{
    width: 200px;
    float: left;
    font-weight: bold;
    cursor: pointer;
    margin: 0 10px 0 56px;
    font-size: 11px;
    font-family: tahoma, verdana;
    background: #ece9d8;
    border: 1px #fff outset;
    height: 26px;
    color: #333;
}

.review-area{
    background: #daf1db;
    border: 1px solid #fff;
    padding: 15px;
    width: 555px;
    margin-left: 30px;
    height: 200px;
}
.sub-title{
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
}
.data-block-mobile{
    display: none;
}
.description{
    display: none;
}

.fa-bookmark{
    display: block;
    height: 36px;
    position: absolute;
    width: 32px;
    background-size: 32px 36px;
    color: rgba(168, 163, 163, 0.7);
    font-size: 32px;
    padding-left: 10px;
    padding-top: 7px;
}
.fa-check{
    display: block;
    position: absolute;
    margin: 12px 0 0 15px;
    color: #fff;
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
        height: 230px;
        display: block;
        border-bottom: 1px solid #ccc;
    }
    .block-top{
        display: flex;
        width: 375px;
        height: 165px;
        border-bottom: 1px solid #ccc;
        padding: 10px;
        width: 100%;   
    }
    .header-movie{
        padding: 0 0 45px 14px; 
    }
    .review-area{
        display: none;
    }
    .comment{
        display: none;
    }
    .film-img{
        width: 100px;
        height: 150px;
        padding: 7px 5px;
        padding-left: 5px;
        margin-left: 5px;
    }
    .title{
        font-weight: bold;
        color: #000;
        font-size: 16px;
        font-family: tahoma, verdana, arial;
}
    .original-title{
        font-size: 14px;
        color: #000;
}
    .movie-ticket-btn{
        padding: 0 16px;
        margin-top: 10px;
     }
    .schedule-ticket-btn{
        background-color: #fe7609;
        border: none;
        color: #fff;
        font-size: 15px;
        width: 100%;
        height: 46px;
        padding: 0 20px;
        border-radius: 3px;
        cursor: pointer;
    }
    .description{
       display: block;
       padding-left: 10px;
       padding-top: 10px;
       padding-right: 10px;
       padding-bottom: 10px;
       border-bottom: 1px solid #ccc;

}
 .overview{
      font-family: "arial", sans-serif;
      font-size: 12px;
 }
 .movie-header-folder{
     position: absolute;
     top: 100px;
     left: 130px;
 }
 .touch-button{
     font-size: 13px;
    height: 35px;
    line-height: 33px;
    padding: 0 12px;
    cursor: pointer;
    position: relative;
    background: transparent;
    border: 1px solid #ccc;
    border-radius: 3px;
    white-space: nowrap;
 }
 .touch-button::before {
    background-color: rgba(52,52,52,0.1);
    border-radius: 2px;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
 }
 .touch-button-content{
     vertical-align: middle;
 }
 .fa-folder{
    display: inline-block;
    font-size: 23px;
    font-weight: bold;
    height: 17px;
    line-height: 19px;
    margin: 3px 10px 0 0;
    vertical-align: top;
    width: 21px;
    background-size: 21px 17px;
    color: #ccc;

 }
 .fa-plus{
     position: absolute;
     font-size: 10px;
     left: 20px;
     top: 10px;
 }

}
</style>