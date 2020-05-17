<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld />
        <button @click="add">+</button>
        <button @click="count(5, 2)">+5</button>
        <button @click="minus">-</button>
        <button @click="count(-5, 2)">-5</button>
        <hr />
        <button @click="countLater(number)">点击后一秒钟后加</button
        ><input type="text" v-model.number="number" />
        <p>当前数值:{{ $store.state.counter }}</p>
        <hr />
        <p>当前数值的平方:{{ $store.getters.powCount }}</p>
        <p>当前数值的平方的十分之一:{{ $store.getters.powCountByTen }}</p>
        <hr />
        <hr />
        <button @click="doubleCounter">模块数值乘2</button>
        <p>当前数值来自模块: {{ $store.state.moduleA.counter2 }}</p>
        <p>当前双倍数值来自模块: {{ $store.getters.doubleCounter }}</p>
        <hr />
        <hr />
        <p>测试网络请求封装模块</p>
        <button @click="requ">请求网络数据</button>
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import myAxios from "./network/axiosTool";
export default {
    name: "App",
    components: {
        HelloWorld,
    },
    data() {
        return {
            number: 10,
        };
    },
    methods: {
        add() {
            this.$store.commit("add");
        },
        minus() {
            this.$store.commit("minus");
        },
        count(count, times) {
            this.$store.commit({
                type: "count",
                count,
                times,
            });
        },
        countLater(number) {
            this.$store
                .dispatch("countLater", number)
                .then(() => alert("数值显示成功"));
        },
        doubleCounter() {
            this.$store.commit("doubleCounter");
        },
        requ() {
            myAxios({
                url: "http://httpbin.org/anything",
                method: "get",
            }).then((res) => console.log(res));
        },
    },
};
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
