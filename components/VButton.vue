<template>
  <button
    :class="['button', `button--${type}`, `button--${size}`]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    type: {
      type: String,
      default: "secondary",
      validator: v => ["primary", "secondary", "no-style"].includes(v),
    },
    size: {
      type: String,
      default: "medium",
      validator: v => ["small", "medium", "large"].includes(v),
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style scoped>
.button {
  @apply font-sans font-bold border-0 rounded-3xl cursor-pointer inline-block leading-none;
}
.button--primary {
  @apply bg-green-500 text-white;
}
.button--secondary {
  background-color: transparent;
  @apply text-green-700 border border-green-700;
}
.button--small {
  @apply text-xs px-4 py-3;
}
.button--medium {
  @apply text-sm px-5 py-3.5;
}
.button--large {
  @apply text-base px-6 py-3.5;
}
</style>
