<template>
  <header
    v-if="currentRouteName != 'welcome'"
    class="bar bar-nav"
  >
    <template v-if="!authenticated">
      <router-link
      v-if="currentRouteName != 'register'"
        :to="{ name: 'register' }"
        class="icon pull-left"
      >
        <i class="fas fa-user-plus fa-sm fa-fw"></i>
      </router-link>
      <router-link
        v-if="currentRouteName != 'login'"
        :to="{ name: 'login' }"
        class="icon pull-right"
      >
        <i class="fas fa-sign-in-alt fa-sm fa-fw"></i>
      </router-link>
    </template>
    <template v-if="authenticated">
      <a
        class="icon pull-right clickable"
        @click.prevent="logout"
      >
        <i class="fas fa-sign-out-alt fa-sm fa-fw" />
      </a>
    </template>
    <h1
      class="title clickable text-center text-link"
      @click.prevent="navTo('welcome')"
    >
      {{ title }}
    </h1>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  props: {
    title: { type: String, default: 'Vue Cordova Ratchet' },
  },
  data () {
    return {
      //
    }
  },
  components: {},
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapActions({
      logoutActions: 'auth/logout',
    }),
    async logout() {
      await this.logoutActions();
      this.$router.replace({ name: 'welcome' });
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    navTo(name) {
      this.$router.push({ name });
    },
  }
}
</script>
