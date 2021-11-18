<template>
  <div :class="{'has-logo':showLogo}">
      <logo v-if="showLogo" :collapse="isCollapse" />
      <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu mode="vertical" :default-active="activeMenu"
          :collapse="isCollapse"
          :background-color="variables.menuBg"
          :text-color="variables.menuText"
          :unique-opened="false"
          :active-text-color="variables.menuActiveText"
          :collapse-transition="false">
          <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
          </el-menu>
      </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem.vue'
export default {
  components: { SidebarItem },

}
</script>

<style>

</style>