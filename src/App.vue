<template>
  <div id="app">
    <NavBar/><MainImg/>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import MainImg from './components/MainImg.vue'
import axios from "axios"

export default {
  name: 'App',
  data () {
    return {
      product: [],
      latitude: 0,
      longitude: 0
    }
  },
  components: {
    NavBar,
    MainImg
  },
   methods: {
    getProduct: function () {
      const thisUrl = window.location.href;
      const urlArray = thisUrl.split('/');
      const id = urlArray[urlArray.length - 1];
     // console.log(id)
      
      var vm = this;
      if(navigator.geolocation){
        const success = function(position){
        vm.latitude = position.coords.latitude
        vm.longitude = position.coords.longitude;
        }
        navigator.geolocation.getCurrentPosition(success, function(msg){
          console.error( msg );
          });
      } 

      //Middleware URL
      const url = 'http://localhost:8081/api/product';
      const config = {
        headers: {
          'Authorization': 'Bearer 6fX5xuTIbnIJB2GL40vE6apvscEzUsOwf8fkRMgTxlQYQHAA0kxcNuZhxCy6YbGAS6fNTD9dLKQoYKoC',
        },
        params : {
          'latitude' : vm.latitude,
          'longitude' : vm.longitude,
          'language' : 'en',
          'identifier_name' : 'gtin',
          'identifier_value' : id,
        },
     
  
      };
 
        axios
          .get( url, config)
          .then(response => {
            vm.product = JSON.parse(JSON.stringify(response.data));
            //vm.product = JSON.parse(response.data.toString());
            console.log(vm.product)
            console.log('done');
          })
          
      }
    },
    mounted() {
      this.getProduct()
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
