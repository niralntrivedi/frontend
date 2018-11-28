<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#" to="/">CI/CD Expriments</b-navbar-brand>
    </b-navbar>
    {{msg}}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const axios = require('axios');

export default {
  name: 'app',
  data(){
    return {
        msg: ''
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData(){
        // axios.get('http://localhost:3000/api/Messages/greet?msg=Hello', {
        axios.get('http://backend.us-west-1.elasticbeanstalk.com/api/Messages/greet?msg=Hello', {
            params: {
                msg: ' How are you doing? '
            }
        })
        .then(function (response) {
            console.log(response);
            this.msg = response.data.greeting;
        }.bind(this))
    }
  },
  components: {
    HelloWorld
  }
}
</script>