<template>
  <header>
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
    </ul>
    <ul>
      <template v-if="!authenticated">
        <li>
          <router-link :to="{ name: 'login' }" >
            Sign In
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'register' }">
            Create Account
          </router-link>
        </li>
      </template>
      <template v-if="authenticated">
        <li>
          <a @click.prevent="logout" >
            Logout
          </a>
        </li>
      </template>
    </ul>

  </header>
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
    }
  },
  methods: {
    ...mapActions({
      logoutActions: 'auth/logout',
    }),
    async logout() {
      await this.logoutActions();
      this.$router.replace({ name: 'home' });
    },
  }
}
</script>
