<template>
  <div class="mainBox">https://www.30secondsofcode.org/

    <div>https://1loc.dev/array/cast-a-value-as-an-array/
  </div>
  <div class="text">
   <h3>将一个值转换成数组</h3>
    <pre v-highlightjs><code class="javascript">const castArray=(value)=>(Array.isAarray(value)?value:[value])</code></pre>
    <h3>检查数组是否为空</h3>
    <pre v-highlightjs><code class="javascript">const isEmpty=(arr)=>!Array.isArray(arr)|| arr.length===0</code></pre>
    <h3>克隆数组</h3>
    <pre v-highlightjs><code class="javascript">const isEmpty=(arr)=>!Array.isArray(arr)|| arr.length===0</code></pre>
  </div></div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.mainBox{text-align: left; }
.text{ padding: 20px 50px;}
.javascript{}
</style>

