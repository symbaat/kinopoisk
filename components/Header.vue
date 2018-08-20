<template>
 <div id="top">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
     <a href="#" id="scrollToTop">
    <div class="scrollToTopSection">
        <div class="scrollToTopButton">
            <button class="toTop"><i class="fas fa-arrow-up"></i></button>
            <div id="scrollToTopText">Наверх</div>
        </div>
    </div>
</a>
 <div class="additional-header">
     <nuxt-link to="/">
      <img src="../assets/logo-2.png" class="logo-2">
     </nuxt-link>
    <form class="search-form-additional">
        <div class="inner-form">
         <input type="text" class="search-input" placeholder="Фильмы, персоны, кинотеатры">
         <a href="#" class="search-icon"><i class="fas fa-sliders-h"></i></a>
         <a href="#" class="search-icon"><i class="fas fa-search"></i></a>
        </div>
    </form>
 </div>
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
export default {
  data(){
    return {
     
    }
  },
  beforeMount(){
    document.addEventListener('scroll', this.handleScroll);
     let header=document.getElementById('top');
     let scrollBar=document.getElementById('scrollToTop');
     let sticky= header.offsetTop;
     scrollBar.style.display="none";

     let nav= document.querySelector('.additional-header');
     nav.style.display="none";
  },
  methods: {
     handleScroll(){
        console.log('scrolling');
        this.scrollFunction();
     },
     scrollFunction(){
     let header=document.getElementById('top');
     let scrollBar=document.getElementById('scrollToTop');
     let sticky= header.offsetTop;
     console.log(sticky);
     let nav= document.querySelector('.additional-header');
     //nav
     if(window.pageYOffset>=sticky){
      header.classList.add('sticky');
       nav.style.display="block";
     }
     else{
     header.classList.remove('sticky');
     nav.style.display="none";  
    }
    //scroll to top
     if(window.pageYOffset>=sticky){
     header.classList.add('sticky');
     scrollBar.style.display="block";
     }
     else{
     header.classList.remove('sticky');
     scrollBar.style.display="none";  
     }
     }
  }
}
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

/*Scroll to top*/
#scrollToTopText{
    font-size: 15px; 
    color: #fff;
    background-color: rgba(255, 102, 0, 0.6);
    width: 50px;
    font-family: tahoma,verdana,arial;
    font-size: 12px;
    width: 63px;
    height: 27px;
    text-align: center;
    line-height: 25px;
    text-shadow: #000 1px 1px 1px;
    float: right;
    margin-top: 10px;
}
.toTop{
    background-color: #f60;
    border: none;
    left: 0;
    width: 27px;
    height: 27px;
    margin-right: -8px;
    margin-top: 10px;
}
 .fa-arrow-up{
    border-top: 2px #fff solid;
    color:#fff;
} 
.scrollToTopSection{
    width: 100px;
    height: 100%;
    position: fixed; 
    left: 0;   
    display: flex;  
    top:0;    
    
}
.scrollToTopButton{
    width: 100px;
    height: 100%;    
    position: fixed;    
    text-align: center;
    transition: 0.3s;
}

.scrollToTopSection:hover > .scrollToTopButton{
    background: url(https://st1.kp.yandex.net/images/noBrandMenuBg.png);
    color: black;
}

.additional-header{
    position: fixed;
    background-color: #e3e3e3;
    height: 40px;
    width: 850px;
    display: flex;
    align-items: center;
    top: -2px;
}
.search-form-additional{
    width: 360px;
    height: 27px;
    margin-left: 200px;
    margin-top: -38px;

}
.logo-2{
    padding: 10px;
    margin-left: 10px;
}

</style>