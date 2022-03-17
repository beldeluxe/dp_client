import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/jquery/dist/jquery.min.js'


Vue.config.productionTip = false

new Vue({

    data () {
      return{
        product:[]
      }
    },
    methods:{
      getURLParameter() {
        return
      },
   
    },

  render: h => h(App),
}).$mount('#app')
