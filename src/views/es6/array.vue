<template>
  <div class="mainBox">
  
    
    <div class="text"><h1>原代码地址https://1loc.dev/array/</h1>
      <h3>将一个值转换成数组</h3>
      <pre
        v-highlightjs
      ><code class="javascript">const castArray=(value)=>(Array.isAarray(value)?value:[value])</code></pre>
      <h3>检查数组是否为空</h3>
      <pre
        v-highlightjs
      ><code class="javascript">const isEmpty=(arr)=>!Array.isArray(arr)|| arr.length===0</code></pre>
      <h3>克隆数组</h3>
      <pre v-highlightjs>
        <code class="javascript">const clone=(arr)=>arr.slice(0);
const clone=(arr)=>[...arr];
const clone=(arr)=>Array.from(arr);
const clone=(arr)=>arr.map((x)=>x);
const clone=(arr)=>JSON.parse(JSON.stringify(arr));
const clone=(arr)=>arr.concat([])</code>
    </pre>
     <h3>不按顺序比较两个数组</h3>
      <pre
        v-highlightjs
      ><code class="javascript">const isEqual=(a,b)=>JSON.stringify(a.sort())===JSON.stringify(b.sort())</code></pre>
      <h3>比较两个数组</h3>
      <pre
        v-highlightjs
      ><code class="javascript">const isEqual=(a,b)=>JSON.stringify(a)===JSON.stringify(b)
const isEqual=(a,b)=>a.length===b.length && a.every((v,i)=>v===b[i])</code></pre>
      <h3>将对象数组转换为单个对象</h3>
      <pre
        v-highlightjs
      ><code class="javascript">const toObject=(arr,b)=>arr.reduce((a,b)=>{...a,[b[key]:b]},{})
const toObject=(arr,key)=>Object.fromEntries(arr.map((it)=>[it[key],it]))</code></pre>
<h3>将字符串数组转换成数字</h3>
      <pre
        v-highlightjs
      ><code class="javascript">const toNumber=(arr)=>arr.map(Number)
const toNumber=(arr)=>arr.map((x)=>+x)</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "array",
  mounted(){
    this.init()
  },
  methods:{
    init(){
      let arr1=[{
        name:"aaa",
        value:"22"
      },
      {
        name:"bbb",
        value:"123"
      }]
      const toObject=(arr,key)=>Object.fromEntries(arr.map((it)=>[it[key],it]))
      console.log(toObject(arr1,"value"))
    }
  }
};
</script>

<style scoped lang="scss">
.mainBox {
  text-align: left;
}
.text {
  padding: 20px 50px;
}
.javascript {
}
</style>

