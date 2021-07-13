<template>
  <button
    class="btn"
    :class="loading || disabled ? 'disabled ' + btnClass : btnClass "
    :disabled="loading || disabled"
    :btnStyle="btnStyle"
  >
    <span
      v-if="iconBefore"
      class="icon fa-fw "
      :class="iconBefore"
    />
    {{ text }}
    <span
      v-if="iconAfter"
      class="icon fa-fw "
      :class="iconAfter"
    />
  </button>
</template>

<script>

export default {
  name: 'AppButton',
  components: {},
  props: {
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },

    text: { type: String, required: true },
    iconBefore: { type: String, required: true },
    iconAfter: { type: String, required: true },

    btnClass: { type: String, default: null },
    btnStyle: { type: String, default: null },
  },
  data () {
    return {
      //
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  updated() {},
  methods: {},
}
</script>

<style scoped>
</style>

<style lang="scss" scoped>
</style>
