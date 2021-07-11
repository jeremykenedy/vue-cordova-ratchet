<template>
  <div>
    <form actions="" @submit.prevent="register">

      <div>

        <div>
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

        <div>
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

        <div>
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

        <div>
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

      </div>
      <AppButton
        :loading="loading"
        :disabled="loading"
        :text="loading ? 'Create Account' : 'Create Account'"
        :icon="loading ? 'fas fa-circle-notch fa-spin' : 'fas fa-chevron-right'"
        type="submit"
      />
    </form>
    <p>
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
  }
}
</script>

<style scoped>
</style>

<style lang="scss" scoped>
</style>
