<template>
  <div class="content">
    <div class="card">
      <form
        @submit.prevent="login"
        style="padding: 1em;"
      >
        <div class="content-padded">
          <label
            for="email"
            class="d-none"
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
            placeholder="E-mail Address"
          >
          <div v-if="errors && errors.email">
            {{ errors.email[0] }}
          </div>
        </div>

        <div class="content-padded">
          <label
            for="password"
            class="d-none"
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
            placeholder="Password"
          >
          <div v-if="errors && errors.password">
            {{ errors.password[0] }}
          </div>
        </div>

        <div class="content-padded">
          <AppButton
            :loading="loading"
            :disabled="loading"
            :text="loading ? 'Login' : 'Login'"
            :icon-after="loading ? 'fas fa-circle-notch fa-spin' : 'fas fa-chevron-right'"
            class="btn-block btn-primary"
            type="submit"
            @click.prevent="navTo('home')"
          />
        </div>

      </form>
    </div>
    <p class="content-padded text-center">
      Not joined yet? <router-link :to="{ name: 'register' }">Create an account</router-link>
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  components: {},
  props: {},
  data () {
    return {
      form: {
        email: '',
        password: '',
      },
      errors: null,
      loading: false,
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
      popToast: 'toast/popToast',
    }),
    async login() {
      this.loading = true;
      this.errors = null;
      try {
        await this.loginActions(this.form);
        this.$router.replace({ name: 'home' });
      } catch(e) {
        this.loading = false;
        if (e.response.status === 422) {
          this.errors = e.response.data.errors;
        }
        if (e.response.status === 401) {
          this.popToast({
            message: `Invalid Email or Password`,
            timer: 522000,
            icon: 'error',
          });
        }
      }
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
