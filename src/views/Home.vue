<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HeaderNav />
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line import/no-unresolved
import HeaderNav from '@/components/HeaderNav.vue';

export default {
  name: 'Home',
  components: {
    HeaderNav,
  },
};
</script>
