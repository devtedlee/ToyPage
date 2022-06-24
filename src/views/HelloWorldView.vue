<template>
  <div class="hello-body">
    <h3>Hello World</h3>
    <ul>
      <li><router-link :to="'/board'">게시판 이동</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorldView",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello-body {
  text-align: center;
}
</style>
