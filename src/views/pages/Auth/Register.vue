<template>
  <div class="content">
    <div class="card">
      <form
        @submit.prevent="register"
        style="padding: 1em;"
      >

        <div class="content-padded">
          <label
            for="name"
            :class="{ '': errors && errors.name }"
          >
            Name
          </label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            :class="{ '': errors && errors.name }"
            :disabled="loading"
          >
          <div v-if="errors && errors.name">
            {{ errors.name[0] }}
          </div>
        </div>

        <div class="content-padded">
          <label
            for="email"
            :class="{ '': errors && errors.email }"
          >
            E-mail Address
          </label>
          <input
            v-model="form.email"
            type="text"
            id="email"
            :class="{ '': errors && errors.email }"
            :disabled="loading"
          >
          <div v-if="errors && errors.email">
            {{ errors.email[0] }}
          </div>
        </div>

        <div class="content-padded">
          <label
            for="password"
            :class="{ '': errors && errors.password }"
          >
            Password
          </label>
          <input
            v-model="form.password"
            type="password"
            id="password"
            :class="{ '': errors && errors.password }"
            :disabled="loading"
          >
          <div v-if="errors && errors.password" >
            {{ errors.password[0] }}
          </div>
        </div>

        <div class="content-padded">
          <label
            for="password_confirmation"
            :class="{ '': errors && errors.password_confirmation }"
          >
            Password Confirmation
          </label>
          <input
            v-model="form.password_confirmation"
            type="password"
            id="password_confirmation"
            :class="{ '': errors && errors.password_confirmation }"
            :disabled="loading"
          >
          <div v-if="errors && errors.password_confirmation" >
            {{ errors.password_confirmation[0] }}
          </div>
        </div>

        <div class="content-padded">
          <AppButton
            :loading="loading"
            :disabled="loading"
            :text="loading ? 'Create Account' : 'Create Account'"
            :icon-after="loading ? 'fas fa-circle-notch fa-spin' : 'fas fa-chevron-right'"
            class="btn-block"
            type="submit"
            @click.prevent="navTo('home')"
          />
        </div>

      </form>
    </div>

    <p class="content-padded text-center">
      Already have an account? <router-link :to="{ name: 'login' }" >Login</router-link>
    </p>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'Register',
  components: {},
  props: {},
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      loading: false,
      errors: null,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  updated() {},
  methods: {
    ...mapActions({
      loginActions: 'auth/login',
    }),
    async register() {
      this.loading = true;
      this.errors = null;
      try {
        await axios.post('/api/register', this.form);
        await this.login();
      } catch(e) {
        this.loading = false;
        if (e.response.status === 422) {
          this.errors = e.response.data.errors;
          this.loading = false;
        }
      }
    },
    async login() {
      this.errors = null;
      await this.loginActions(this.form);
      this.loading = false;
      this.$router.replace({ name: 'home' });
    },
    navTo(name) {
      this.$router.push({ name });
    },
  }
}
</script>

<style scoped>
</style>

<style lang="scss" scoped>
</style>
