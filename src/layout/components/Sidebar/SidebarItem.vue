<template>
 <div v-if="!item.hidden">
     <template v-if="hasOneShowingChild(item.children,item)&&(!onlyOneChild.children||onlyOneChild.onShowingChildren)&&!item.alwaysShow">
         <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
             <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
                 <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title"/>
             </el-menu-item>
         </app-link>
     </template>
     <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
         <template slot="title">
             <item v-if="item.meta" :icon="icon.meta&&item.meta.icon" :title="item.meta.title" />
         </template>
         <sidebar-item
          v-for="child in item.children" :key="child.path"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(child.path)"
          class="nest-menu" />
     </el-submenu>


 </div>
  
</template>

<script>
import Item from './Item.vue'
import path from 'path'
import {isExternal} from '@/utils/validate'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'
export default {
    name:'SidebarItem',
  components: { Item,AppLink },
  mixins:[FixiOSBug],
  props:{
      Item:{
          type:Object,
          required:true
      },
      isNest:{
          type:Boolean,
          default:false
      },
      basePath:{
          type:String,
          default:''
      }

  },
  data(){
      this.onlyOneChild=null
      return {}
  },
  methods:{
      hasOneShowingChild(children=[], parent){
          const showingChildren=children.filter(item=>{
              if(item.hidden){
                  return false
              }else{
                  this.onlyOneChild=item
                  return true
              }
          })
          if(showingChildren.length===1){
              return true
          }
          if(showingChildren.length===0){
              this.onlyOneChild={...parent,path:'',noShowingChild:true}
              return true
          }
          return false
      },
      resolvePath(routePath){
          if(isExternal(routePath)){
              return routePath
          }
          if(isExternal(this.basePath)){
              return this.basePath
          }
          return path.resolbe(this.basePath,routePath)
      }
  }

}
</script>

<style>

</style>