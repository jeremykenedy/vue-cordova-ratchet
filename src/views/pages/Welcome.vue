<template>
  <div class="content welcome-content">
    <div class="welcome-container">
      <p class="welcome-text">
        Welcome
      </p>
      <p class="text-center">
        <AppButton
          class="btn-block btn-pill"
          text="About"
          icon-after="icon icon-info"
          @click="navTo('about')"
        />
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Welcome',
  components: {},
  props: {},
  data () {
    return {
      //
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  updated() {},
  methods: {
    navTo(name) {
      this.$router.push({ name });
    },
  },
}
</script>

<style>
</style>

<style lang="scss" scoped>
</style>
