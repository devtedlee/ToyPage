<template>
  <div>
    <div style="text-align: center">
      <h3>게시판</h3>
      <router-link :to="'/'">홈으로</router-link>
      <h2>{{ rootStateData }}</h2>
      <ModuleButton :text="'Set Root Data'" :clickFunction="setRoot" />
      <h2>{{ moduleAData }}</h2>
      <ModuleButton :text="'Set ModuleA Data'" :clickFunction="setModuleA" />
      <h2>{{ moduleBData }}</h2>
      <ModuleButton :text="'Set ModuleB Data'" :clickFunction="setModuleB" />
    </div>

    <BoardList style="margin-top: 50px" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import ModuleButton from "@/components/ModuleButton.vue";
import BoardList from "@/components/BoardList.vue";

export default defineComponent({
  name: "BoardView",
  components: {
    ModuleButton,
    BoardList,
  },
  setup() {
    const { state, dispatch } = useStore();
    const rootStateData = computed(() => state.data);
    const moduleAData = computed(() => state.moduleA.data);
    const moduleBData = computed(() => state.moduleB.data);

    const setRoot = () => dispatch("setRootData", "testRoot"); //RootState
    const setModuleA = () => dispatch("moduleA/setRootData", "testModuleA"); //ModuleState
    const setModuleB = () => dispatch("moduleB/setRootData", "testModuleB"); //ModuleState

    return {
      rootStateData,
      moduleAData,
      moduleBData,
      setRoot,
      setModuleA,
      setModuleB,
    };
  },
});
</script>

<style scoped></style>
