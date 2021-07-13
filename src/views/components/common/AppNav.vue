<template>
  <div>
    <nav
      v-if="showNav"
      class="bar bar-tab"
    >
      <a
        @click.prevent="navTo('home')"
        class="tab-item clickable"
        :class="{ 'active': currentRouteName == 'home' }"
      >
        <span class="icon icon-home"></span>
        <span class="tab-label">Home</span>
      </a>

      <a
        @click.prevent="navTo('profile')"
        class="tab-item clickable"
        :class="{ 'active': currentRouteName == 'profile' }"
      >
        <span class="icon icon-person"></span>
        <span class="tab-label">Profile</span>
      </a>
      <!--
      <a
        @click.prevent="navTo('login')"
        class="tab-item clickable"
        :class="{ 'active': currentRouteName == 'favorites' }"
      >
        <span class="icon icon-star-filled"></span>
        <span class="tab-label">Favorites</span>
      </a>
      <a
        @click.prevent="navTo('login')"
        class="tab-item clickable"
        :class="{ 'active': currentRouteName == 'search' }"
      >
        <span class="icon icon-search"></span>
        <span class="tab-label">Search</span>
      </a>
      -->
      <a
        @click.prevent="navTo('settings')"
        class="tab-item clickable"
        :class="{ 'active': currentRouteName == 'settings' }"
      >
        <span class="icon icon-gear"></span>
        <span class="tab-label">Settings</span>
      </a>

      <a
        @click.prevent="navTo('account')"
        class="tab-item clickable"
        :class="{ 'active': currentRouteName == 'account' }"
      >
        <span class="icon icon-gear"></span>
        <span class="tab-label">Account</span>
      </a>
    </nav>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Appnav',
  components: {},
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    }),
    currentRouteName() {
      return this.$route.name;
    },
    showNav() {
      if (this.currentRouteName != 'welcome'
        && this.currentRouteName != 'about'
        && this.currentRouteName != 'login'
        && this.currentRouteName != 'register'
        // && this.authenticated
      ) {
        return true;
      }
      return false;
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
    navTo(name) {
      this.$router.push({ name });
    },
  }
}
</script>
