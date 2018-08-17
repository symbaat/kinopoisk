<template>
 <div id="top">
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">
   <div class="header-top">
    <nuxt-link to="/">
      <img src="../assets/logo.png" class="logo">
     </nuxt-link>
    <form class="search-form">
        <div class="inner-form">
         <input type="text" class="search-input" placeholder="Фильмы, персоны, кинотеатры">
         <a href="#" class="search-icon"><i class="fas fa-sliders-h"></i></a>
         <a href="#" class="search-icon"><i class="fas fa-search"></i></a>
        </div>
    </form>
    <div class="right-header">
        <button class="userBtn">Войти</button>   
     </div>
  </div>
  <div class="header-bottom">     
      <nav class="header-nav">
          <ul class="nav-links">
              <li class="link-item"><nuxt-link to="/films" class="link">Фильмы</nuxt-link></li>
              <li class="link-item"><nuxt-link to="/ratings" class="link">Рейтинги</nuxt-link></li>
          </ul>
      </nav>
   </div>
  </div>
</template>

<script>

</script>

<style>
#top{
   width: 850px;
   height: 120px;
   margin: 30px auto 30px auto;
   position: relative;
   z-index: 20;   
   background-color: rgba(68,68,68,0.95);
}
.header-top{
   padding-left: 32px;
   padding-right: 32px; 
   height: 68px;
   display: flex;
   align-items: center;
}

.inner-form{
   width: 100%;
   height: 100%;
   background-color: #fff;
   position: relative;
   border-radius: 3px;
   padding-left: 16px;
   padding-right: 5px;
   align-items: center;
   display: flex;
}

.search-form{
    width: 360px;
    height: 36px;
    margin-left: 30px;
}
.search-input{
    font-size: 14px;
    line-height: 17px;
    width: 277px;
    border: 0;
    margin: 0;
    height: 100%;
    box-sizing: border-box;
    color: rgba(255,255,255,0.7);
    font-family: "Graphik LC Web, Arial,sans-serif";
    font: 400 13.3333px Arial;
    transition: opacity 0.1s ease;
}

.search-icon{
    margin:0;
    height: 100%;
    display: inline-block;
    background-color: transparent;
    padding-right: 5px;
    padding-left: 5px;
    color: rgba(168, 163, 163, 0.7);
}
.search-icon>i{
    background-size: 24px 24px;
    height: 100%;
    width: 24px;
    background-position: center;
    font-size: 18px;
    margin: 0 auto;
    padding-top: 7px;   
    transition: opacity 0.1s ease;
}

.right-header{
    justify-content: flex-end;
    display: flex;
    flex-basis: 100%;
    height: 36px;
}

.userBtn{
    border: 0;
    background: none;
    color: rgba(255,255,255,0.7);
    font-size: 14x;
    line-height: 17px;
    letter-spacing: normal;
    cursor: pointer;
    font-family: "Graphik LC Web, Arial,sans-serif";
    font-weight: bold;
}
.userBtn:hover{
    color: white;
}

/***Header bottom***/

.header-bottom{
    position: relative;
    box-sizing: border-box;
    margin: auto;
    z-index: 2;
    padding: 0;
    height: 52px;
    padding-left: 32px;
    padding-right: 32px;
    border-top: 1px  solid rgba(110, 108, 108, 0.7);
}
.header-nav{
    height: 100%;
}
ul{
    list-style: none;
}
.nav-links{
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 100%;
    text-align: center;
    justify-content: center;
}
li{
    list-style-type: none;
    text-decoration: none;
}
.link-item{
    height: 100%;
    transition: all 0.1s ease;
    padding-top: 17px;
}
.link{   
    text-decoration: none;
    color: rgba(255,255,255,0.7);
    font-size: 14px;
    height: 100%;
    padding: 0px 12px 18px;   
    font-weight: bold; 
}
.link:hover{
    color: white;
}

</style>