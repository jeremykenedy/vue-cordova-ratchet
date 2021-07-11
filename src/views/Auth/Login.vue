<template>
  <div>
    <form actions="" @submit.prevent="login" >

      <div>
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
          <div v-if="errors && errors.password">
            {{ errors.password[0] }}
          </div>
        </div>
      </div>
      <AppButton
        :loading="loading"
        :disabled="loading"
        :text="loading ? 'Login' : 'Login'"
        :icon="loading ? 'fas fa-circle-notch fa-spin' : 'fas fa-chevron-right'"
        type="submit"
      />
    </form>

    <p>
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
    }
  }
}
</script>

<style scoped>
</style>

<style lang="scss" scoped>
</style>
