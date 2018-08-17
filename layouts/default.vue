<template>
  <div>
    <Header/>
    <Footer/>
    <nuxt/>
  </div>
</template>

<script>
 import Header from "@/components/Header"
 import Footer from "@/components/Footer"
 export default{
   components:{
     Header,
     Footer
   }
}
</script>
<style>
html {
  font-family: "Graphik LC Web, Arial,sans-serif";
  font-size: 14px;
  background: #e6e6e6;
  margin: 0;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
