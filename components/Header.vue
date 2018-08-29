<template>
 <div id="top">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
     <a href="#" id="scrollToTop">
    <div class="scrollToTopSection">
        <div class="scrollToTopButton">
            <button class="toTop"><i class="fas fa-arrow-up"></i></button>
            <div id="scrollToTopText">Наверх</div>
        </div>
    </div>
</a>
 <div class="additional-header" v-show="header">
     <nuxt-link to="/">
      <img src="../assets/logo-2.png" class="logo-2">
     </nuxt-link>
    <form class="search-form-additional">
        <div class="inner-form">
         <input type="text" class="search-input" placeholder="Фильмы, персоны, кинотеатры">
         <a href="#" class="search-icon"><i class="fas fa-sliders-h"></i></a>
         <a href="#" class="search-icon" ><i class="fas fa-search"></i></a>
        </div>
    </form>
 </div>
   <!-- mobile version -->
   <div class="toggle-menu" v-show="headerShow">
       <div class="header-left">
       <i class="fas fa-bars" @click="toggleShow" v-show="showMenu"></i>
       <i class="fas fa-times" v-show="closeMenu" @click="close"></i>
       <nuxt-link to="/">
      <img src="../assets/logo.png" class="logo">
      </nuxt-link>
     </div>
     <div class="header-right">
        <div class="right-side">
      <a class="search-icon" @click="showSearch"><i class="fas fa-search"> </i></a>
      <div class="user-header">
      <button class="userBtn">Войти</button>
      </div>
      </div>
     </div>
      <div class="navigation-menu" v-show="navShow">
     <nav class="header-nav-block" >
          <ul class="nav-links-block">
              <li class="link-item"><nuxt-link to="/films" class="link">Афиша</nuxt-link></li>
              <li class="link-item"><nuxt-link to="/films" class="link">Фильмы</nuxt-link></li>
              <li class="link-item"><nuxt-link to="/" class="link">Рейтинги</nuxt-link></li>
              <li class="link-item"><nuxt-link to="/" class="link">Журнал</nuxt-link></li>
              <li class="link-item"><nuxt-link to="/" class="link">Онлайн</nuxt-link></li>
          </ul>
      </nav>
      </div>
   </div>
  <div class="overlay" v-show="searchBar">
   <div class="header-search">
     <form class="search-form-mobile">
        <div class="left-header">
          <nuxt-link to="/search">
             <button @click="search" class="search-icon-btn">
              <i class="fas fa-search"></i>
             </button>
             </nuxt-link> 
    </div>
        <input type="text" class="search-input-mobile" v-model="searchInput" v-on:keyup.enter="search">
     </form>
     <div class="right-header">
     <i class="fas fa-times" @click="close"></i>
    </div>
   </div>
   </div>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">
   <div class="header-top">
    <nuxt-link to="/">
      <img src="../assets/logo.png" class="logo">
     </nuxt-link>
    <form class="search-form">
        <div class="inner-form">
         <input type="text" class="search-input" placeholder="Фильмы, персоны, кинотеатры" v-model="searchInput" v-on:keyup.13="search">
         <a href="#" class="search-icon"><i class="fas fa-sliders-h"></i></a>
             <nuxt-link to="/search">
             <button @click="search" class="search-icon-btn">
              <i class="fas fa-search"></i>
             </button>
             </nuxt-link>                
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
     searchInput: '',
     navShow: false,
     closeMenu: false,
     showMenu: true,
     header: false,
     searchBar: false,
     headerShow: true
    }
  },
  computed: {
   
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
       
       search(){
          console.log('search');
          this.$store.dispatch('search/loadSearchingFilms', this.searchInput)
          console.log(this.searchInput)
          this.searchBar=!this.searchBar;
          this.headerShow=true;
       },

       toggleShow(){
          this.navShow=!this.navShow;
          this.closeMenu=true;
          this.showMenu=false;
       },
       close(){
          this.navShow=false;
          this.showMenu=true;
          this.closeMenu=false;
          this.headerShow=true;
          this.searchBar=false;
       },
       showSearch(){
          this.searchBar=!this.searchBar;
          this.headerShow=false;
       },

     handleScroll(){
        console.log('scrolling');
        this.scrollFunction();
     },
     scrollFunction(){
     let header=document.getElementById('top');
     let scrollBar=document.getElementById('scrollToTop');
     let sticky= header.offsetTop;
     console.log(sticky);
    //  let nav= document.querySelector('.additional-header');
    //  //nav
    // //  if(window.pageYOffset>=sticky){
    // //   header.classList.add('sticky');
    // //    nav.style.display="block";
    // //  }
    // //  else{
    // //  header.classList.remove('sticky');
    //  nav.style.display="none";  
    // //}
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
   flex-flow: row wrap;
   display: block;
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
    color: #333;
    font-family: "Graphik LC Web, Arial,sans-serif";
    font: 400 13.3333px Arial;
    transition: opacity 0.1s ease;
    outline: 0;
}
.search-input::placeholder{
    color: rgba(168, 163, 163, 0.7);
}

.search-icon{
    margin:0;
    height: 100%;
    display: inline-block;
    background-color: transparent;
    padding-right: 5px;
    padding-left: 5px;
    color: rgba(168, 163, 163, 0.7);
    border: none;
    cursor: pointer;

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
.fa-search{
    background-size: 24px 24px;
    height: 100%;
    width: 24px;
    background-position: center;
    font-size: 18px;
    margin: 0 auto;
      
    transition: opacity 0.1s ease;
}
.search-icon-btn{
    margin:0;
    height: 100%;
    display: inline-block;
    background-color: transparent;
    padding-right: 5px;
    padding-left: 5px;
    color: rgba(168, 163, 163, 0.7);
    border: none;
    cursor: pointer;
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
    display: block;
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

.header-search{
    height: 52px;
    width: 100%;
    margin: 0;
    background-color: #444;
    display: none;
}

/* MOBILE */
.toggle-menu{
    display: none;
    height: 52px;
}
.fa-bars{
    color: rgba(255,255,255,0.7);
    height: 52px;
    width: 52px;
    background-position: 16px 19px;
    background-size: 20px 14px;
    padding: 15px;
}
.fa-times{
    color: rgba(255,255,255,0.7);
    height: 52px;
    width: 52px;
    background-position: 16px 19px;
    background-size: 20px 14px;
    padding: 15px;
}
.header-left{
    padding-left: 4px;
    height: 100%;
    display: flex;
    float: left;
}
.header-right{
    padding-right: 4px;
    float: right;
    height: 100%;
}
.right-side{
    margin-top: 7px;
    display: flex;
}
.user-header{
    height: 100%;
    margin-right: 3px;
    padding-left: 11px;
    padding-right: 11px;
    position: relative;
}
.navigation-menu{
    background-color: #4d4d4d;
    top: 0;
    left: 0;
    z-index: 8;
    position: fixed;
    margin: 52px auto auto;
    height: 300px;
    width: 375px;
    transition: 0.2s ease-in;
}

.search-input-mobile{
    background-color: #444;
    border: none;
    color: #fff;
    height: 52px;
    line-height: 18px;
    padding: 17px 2px;
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    outline: 0;
}



@media(max-width:768px){
    #top{
        height: 52px;
        width: 100%;
        margin: 0;
        background-color: #444;
    }
    .toggle-menu{
      display: block;
    }
    .logo{
        height: 20px;
        margin-top: 13px;
    }
    .additional-header{
        display: none;
    }
    #scrollToTop{
        display: none;
    }
    .scrollToTopSection{
        display: none;
    }
    .header-top{
        display: none;
    }
    .header-bottom{
        display: none;
    }
    .userBtn{
        color: #fff;
        opacity: 0.5;
        font-family: "Arial", sans-serif;
        font-size: 15px;
        font-weight: 500;
        height: 100%;
        margin-top: 7px;
    
    }
    .overlay{
        top: 0;
        bottom: 0;
        left:0;
        position: fixed;
        background-color: rgba(0,0,0,0.85);
        width: 100%;
        transition: .2s ease-in-out;
    }
    .fa-search{
        width: 24px;
        height: 100%;
    }
    .link{
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        padding-top: 9px;
        padding-bottom: 11px;
    }
    .header-search{
        display: flex;
    }
    .right-header{
        float: right;
        padding-right: 4px;
    }
    .left-header{
        float: left;
        padding: 7px;
        padding-top: 15px;
        padding-left: 15px;

    }
    .search-form-mobile{
        display: flex;
    }
    
}

@media screen and (max-width: 849px){
    #top{
        width: 100%;
    }
    .search-form{
        width: 100%;
    }
}


</style>