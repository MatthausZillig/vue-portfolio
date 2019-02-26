<template>
  <div class="home">
    <HeaderNav />
    <div class="container-fluid text-container mt-5">
      <div class="row justify-content-md-center">
        <h1 class="font-weight-bold display-2 text-center">
          Hello, i'm <span class="name-color">Matthaus Zillig</span>.
        </h1>
      </div>
      <div class="row justify-content-md-center">
        <h1 class="font-weight-bold display-2 text-center col-12">
          I'm a Front-end web developer.
        </h1>
        <v-btn
          class="col-2 mt-5 text-center"
          large
          outline
          color="#333847"
        >
          View my work
          <v-icon
            right
          >
            keyboard_arrow_right
          </v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line import/no-unresolved
import HeaderNav from '@/components/HeaderNav.vue';

export default {
  name: 'Home',
  components: { HeaderNav },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*Variáveis*/
$name-color: #E31B6D;
$m-t: 150px !important;
/*Id's && Classes*/
.name-color {
  color: $name-color;
}
.text-container {
  margin-top: $m-t;
}
</style>
