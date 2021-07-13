<template>
  <div
    class="content welcome-content"
  >
    <div class="welcome-container">
      <p class="welcome-text">
        Welcome
      </p>
      <p class="text-center">
        <button
          class="btn btn-block btn-info btn-pill"
          @click.prevent="navTo('about')"
        >
          About <span class="icon icon-info"></span>
        </button>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Blank',
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
