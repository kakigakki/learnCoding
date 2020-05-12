<template>
  <div @click="jump">
    <div v-if="isActived">
      <slot name="img2"></slot>
    </div>
    <div v-else>
      <slot name="img1"></slot>
    </div>
    <div :style="{ color: activeColor }">
      {{ text }}
    </div>
  </div>
</template>
<script>
export default {
    name: "tabbarItem",
    props:{
        text:String,
        path:String,
        textActiveColor:{
          type:String,
          default:"red"
        }
    },
    methods:{
        jump(){
            this.$router.push(this.$props.path)
        }
    },
    computed: {
        isActived(){
            return this.$route.path.indexOf(this.$props.path) !== -1
        },
        activeColor(){
          if(this.isActived){
            return this.$props.textActiveColor
          }else{
            return ""
          }
        }
    }
}
</script>

<style scoped>
img {
  width: 26px;
  height: 26px;
  vertical-align: middle;
  margin-top: 3px;
}
</style>
