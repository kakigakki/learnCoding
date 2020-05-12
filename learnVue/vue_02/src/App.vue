<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
       <router-link to="/today">Today</router-link>|
       <router-link :to="'/profile/'+user">Profile</router-link>|
         <router-link :to="{path:'/hobbies',query:{user:user,age:age}}">Hobbies</router-link>|
        <button @click="toHobbies">Hobbies</button>
    </div>
          <keep-alive> <router-view/></keep-alive>
         
  </div>
</template>

<script>
export default{
  name:"App",
  data(){
    return {
      user:"kaki",
      age:24
    }
  },
  methods:{
    toHobbies(){
      this.$router.push({
        path:"/hobbies",
        query:{
          user:this.user,
          age:this.age
        }
      })
    }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.router-link-active{
  color:#42b983
}
</style>
