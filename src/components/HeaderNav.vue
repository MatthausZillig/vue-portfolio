<template>
  <div class="container-fluid">
    <div class="row">
      <!--Header-->
      <v-toolbar
        id="navbar"
        dark
        color="#252934"
        dense
        app
      >
        <v-toolbar-side-icon
          id="iconBurguer"
          class="font-weight-bold"
          @click="drawer = !drawer"
        />
        <v-toolbar-title
          id="navbarTitle"
          class="text-uppercase font-weight-bold white--text"
        />
        <v-spacer />
        <v-toolbar-title
          dark
          class="text-uppercase white--text"
        />
        <v-spacer />
        <v-toolbar-title
          dark
          class="text-uppercase white--text"
        >
          <span
            id="nameUser"
            class="subheading font-weight-bold"
          />
        </v-toolbar-title>
      </v-toolbar>

      <!--Navbar lateral-->
      <v-navigation-drawer
        id="navbar"
        v-model="drawer"
        color="#BBDEFB"
        height="100%"
        persistent
        app
        mini-variant
      >
        <v-list
          id="menuList"
          class="pt-0"
        >
          <template v-for="(item, index) in items">
            <!--for in na lista "items"-->
            <v-list-tile
              id="itemlist"
              :key="item.title"
              router
              :to="item.route"
              @click="storesPageTitle(item.title)"
            >
              <!--icon item-->
              <v-list-tile-action>
                <v-icon
                  id="whiteIconList"
                  dark
                >
                  {{ item.icon }}
                </v-icon>
              </v-list-tile-action>
              <!--title item-->
              <v-list-tile-content>
                <v-list-tile-title
                  id="whiteTitle"
                  dark
                  class="text-xs-center font-weight-bold"
                >
                  {{ item.title }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider
              v-if="index + 1 <= items.length"
              id="divider"
              :key="index"
            />
          </template>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  data() {
    return {
      // v-navigation config
      drawer: false,
      rightDrawer: false,
      persistent: true,
      items: [
        {
          title: 'HOME',
          icon: 'home',
          route: '/',
        },
        {
          title: 'ABOUT',
          icon: 'account_box',

        },
        {
          title: 'PORTFOLIO',
          icon: 'dashboard',

        },
        {
          title: 'CONTACT',
          icon: 'email',

        },
      ],
    };
  },
  methods: {
    //
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*Variáveis*/
$aside-color: #41B883!important;
$aside-font-color: white !important;

/*Id's && Classes*/
.theme--light.v-navigation-drawer {
  background-color: $aside-color;
  color: $aside-font-color;
}
</style>
