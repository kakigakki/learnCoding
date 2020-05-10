<template>
    <div>
            个人介绍,我叫 {{$route.params.user}},测试动态路由,传递参数1
            <hr>
            {{$route.params.user}}
            <hr>

    </div>
</template>

<script>
export default {
    name:"Profile"
}
</script>

<style>

</style>