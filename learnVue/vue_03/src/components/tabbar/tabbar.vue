<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: "tabbar"
};
</script>

<style>
.tabbar {
  position: fixed;
  display: flex;
  justify-content: space-around;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: #ebc489;
  box-shadow: 0 -1px 0px 0px rgba(0, 0, 0, 0.2);
}
</style>
