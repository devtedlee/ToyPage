<template>
  <div>
    <button @click="clickFunction()">{{ text }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-facing-decorator";

@Component
export default class ModuleButton extends Vue {
  @Prop({ type: Function, default: () => console.log("not set") })
  clickFunction!: Function;
  @Prop({ default: "" }) text!: string;
}
</script>

<style scoped></style>
