<template>
  <div>
    <AppHeader />
    <AppNav />
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/views/components/common/AppHeader';
import AppNav from '@/views/components/common/AppNav';
// import AppToast from '@/components/common/AppToast';

export default {
  components: {
    AppHeader,
    AppNav,
    // AppToast,
  }
}
</script>

<style src="./assets/styles/app.css" />
