<template>
  <div id="app">
      <Header />
      <router-view/>
      <Home v-show="$route.path == '/home' "/>
      
      <Footer /> 
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/views/home'
export default {
  components:{
   Header,
    Footer,
    Home
  },
  data(){
    return {}
  },
  mounted(){
    console.log('当前路由路径是',this.$route.path)
  }
}
</script>
<style>

</style>
