<template>
    <div>
        <p>
            我叫{{$route.query.user}}测试动态路由,传递参数二
        </p>
         <hr/>
        <p> {{$route.query}}</p>
            <hr>
            <router-link to="/hobbies/home2">home2</router-link>
            <hr>
            <router-link to="/hobbies/home3">home3</router-link>
         <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"Hobbies",
    activated(){
        this.$router.push({
            path:this.path
        })
    },
    beforeRouteLeave(to,from,next){
        this.path = this.$route.path
        next()
    }
    
}
</script>

<style>

</style>