<template>
  <div>
    <router-view></router-view>
    <tabbar>
      <tabbarItem text="主页" path="/zhuye" text-active-color="blue">
        <template v-slot:img1>
          <img src="./assets/img/zhuye.svg" alt="" />
        </template>
        <template v-slot:img2>
          <img src="./assets/img/zhuye-copy.svg" alt="" />
        </template>
      </tabbarItem>
      <tabbarItem text="信息" path="/xinxi">
        <template v-slot:img1>
          <img src="./assets/img/xinxi.svg" alt="" />
        </template>
        <template v-slot:img2>
          <img src="./assets/img/xinxi-copy.svg" alt="" />
        </template>
      </tabbarItem>
      <tabbarItem text="商店" path="/shangdian">
        <template v-slot:img1>
          <img src="./assets/img/shangdian.svg" alt="" />
        </template>
        <template v-slot:img2>
          <img src="./assets/img/shangdian-copy.svg" alt="" />
        </template>
      </tabbarItem>
      <tabbarItem text="用户" path="/yonghu">
        <template v-slot:img1>
          <img src="./assets/img/yonghu.svg" alt="" />
        </template>
        <template v-slot:img2>
          <img src="./assets/img/yonghu-copy.svg" alt="" />
        </template>
      </tabbarItem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/tabbar.vue"
import tabbarItem from "@/components/tabbar/tabbarItem.vue";
  export default{
    name:"app",
    components:{
      tabbar,
      tabbarItem
    }
  }
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
