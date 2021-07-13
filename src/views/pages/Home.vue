<template>
  <div class="content">
    <ul class="table-view">
      <li class="table-view-cell media">
        <a class="navigate-right" href="inbox.html" data-transition="slide-in">
          <span class="media-object icon icon-pages pull-left"></span>
          <div class="media-body">
            All inboxes
          </div>
        </a>
      </li>
      <li class="table-view-cell media">
        <a class="navigate-right" href="inbox.html" data-transition="slide-in">
          <span class="media-object icon icon-person pull-left"></span>
          <div class="media-body">
            Personal email
          </div>
        </a>
      </li>
      <li class="table-view-cell media">
        <a class="navigate-right" href="inbox.html" data-transition="slide-in">
          <span class="media-object icon icon-star-filled pull-left"></span>
          <div class="media-body">
            Starred
          </div>
        </a>
      </li>
      <li class="table-view-cell media">
        <a class="navigate-right" href="inbox.html" data-transition="slide-in">
          <span class="media-object icon icon-trash pull-left"></span>
          <div class="media-body">
            Trash
          </div>
        </a>
      </li>
    </ul>

    <h5 class="content-padded">Other accounts</h5>
    <ul class="table-view">
      <li class="table-view-cell media">
        <a class="navigate-right" href="inbox.html" data-transition="slide-in">
          <span class="media-object icon icon-more pull-left"></span>
          <div class="media-body">
            Misc
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  props: {},
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
