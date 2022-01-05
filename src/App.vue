<template>
  <div id="app">
    <Navbar />
   <main>
    <router-view />
     </main>
    <Footer />
  </div>
</template>






<script>
//製作component元件導入
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";



export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

