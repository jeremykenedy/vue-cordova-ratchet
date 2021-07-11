<template>
  <div>
    <AppNav />
    <router-view />
  </div>
</template>

<script>
import AppNav from '@/components/Common/AppNav';
import AppToast from '@/components/Common/AppToast';

export default {
  components: {
    AppNav,
    AppToast,
  }
}
</script>

<style src="./assets/styles/app.css" />
