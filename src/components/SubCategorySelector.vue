<template>
  <div class="subselect">
    <p class="subtitle" @click="areVisible = !areVisible">{{ subselected }}</p>
    <div class="suboptions" v-if="areVisible">
      <p
        v-for="suboption in suboptions"
        :key="suboption.id"
        @click="selectSubOption(suboption)"
      >
        {{ suboption.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "sub-selector",
  props: {
    suboptions: {
      type: Array,
      default() {
        return [];
      },
    },
    subselected: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      areVisible: false,
    };
  },
  methods: {
    selectSubOption(suboption) {
      this.$emit("subselect", suboption);
      this.areVisible = false;
    },
    hideSelect() {
      this.areVisible = false;
    },
  },
};
</script>

<style lang="scss">
.subselect {
  width: 217px;
  cursor: pointer;
  text-align: left;
}
.subtitle {
  border: solid 1px #dbb0ff;
  background: #fff;
  color: #000;
  padding: 8px;
}
.suboptions {
  border: solid 1px #dbb0ff;
  background: #dbb0ff;
  color: #fff;
  position: absolute;
  top: 60px;
  left: 647px;
  width: 200px;
  padding: 8px;
  z-index: 99;
}
.suboptions p:hover {
  background: #fff;
  color: #dbb0ff;
}
</style>
