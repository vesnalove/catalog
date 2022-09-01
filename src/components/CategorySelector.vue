<template>
  <div class="select">
    <p class="title" @click="areVisible = !areVisible">{{ selected }}</p>
    <div class="options" v-if="areVisible">
      <p
        v-for="option in options"
        :key="option.id"
        @click="selectOption(option)"
      >
        {{ option.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "selector",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
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
    selectOption(option) {
      this.$emit("select", option);
      this.areVisible = false;
    },
    hideSelect() {
      this.areVisible = false;
    },
  },
};
</script>

<style lang="scss">
.select {
  width: 217px;
  cursor: pointer;
  text-align: left;
  margin-right: 15px;
}
.title {
  border: solid 1px #dbb0ff;
  background: #fff;
  color: #000;
  padding: 8px;
}

.options {
  border: solid 1px #dbb0ff;
  background: #dbb0ff;
  color: #fff;
  position: absolute;
  top: 60px;
  left: 415px;
  width: 200px;
  padding: 8px;
  z-index: 99;
}
.options p:hover {
  background: #fff;
  color: #dbb0ff;
}
</style>
