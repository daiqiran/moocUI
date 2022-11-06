<template>
  <div id="app">

    <img alt="Vue logo" src="./assets/logo.png" />
    <Demo></Demo>
    <m-card
      imgSrc="java.jpg"
      summary="从前到后，带你独立开发一个完整的线上电商网站"
    />
    <br>
    <m-card
      imgSrc="c.jpg"
      summary="C语言原理+实践，重塑编程思想 打造坚实的开发基础"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级&nbsp;·&nbsp;1714人报名</div>
          <div class="price">¥299.00</div>
        </div>
      </template>
    </m-card>
    <br>
    <m-card imgSrc="spring.png" :width="370" :imgHeight="90" >
      Spring Boot2的实战监控体系,让大家体会企业项目面向DevOps开发的监控情景。
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤 · 6门课</div>
          <div class="price">10965收藏</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
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
.footer {
  float: left;
  text-align: left;
  padding: 0 8px;
  font-size: 12px;
}
.footer:after,.clearfix:before{
  content: "";
  display: block;
  clear: both;
}

.level {
  color: #9199A1;
  margin-bottom: 8px;
}
.price {
  color: #f01414;
}

.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
