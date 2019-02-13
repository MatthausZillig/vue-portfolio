<template>
  <div class="container-fluid">
    <div class="row">
      <!--Header-->
      <v-toolbar dark color= "#252934" clipped-left dense id="navbar" app>
        <v-toolbar-side-icon id="iconBurguer" class="font-weight-bold" @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title id="navbarTitle" class="text-uppercase font-weight-bold white--text"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title dark class="text-uppercase white--text">
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title dark class="text-uppercase white--text">
          <span id="nameUser" class="subheading font-weight-bold"></span>
        </v-toolbar-title>
      </v-toolbar>

      <!--Navbar lateral-->
      <v-navigation-drawer id="navbar" color="#BBDEFB" v-model="drawer" app clipped persistent height="70%">
        <v-list id="menuList" class="pt-0">
          <template v-for="(item, index) in items">
            <!--for in na lista "items"-->
            <v-list-tile  id="itemlist" :key="item.title" router :to="item.route" @click="storesPageTitle(item.title)">
              <!--icon item-->
              <v-list-tile-action>
                <v-icon id="whiteIconList" dark>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <!--title item-->
              <v-list-tile-content>
                <v-list-tile-title id="whiteTitle" dark class="text-xs-center font-weight-bold">{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider id="divider" v-if="index + 1 <= items.length" :key="index"></v-divider>
          </template>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerNav',
  data () {
    return {
      drawer: false,
      items: [
        {
          title: 'HOME',
          icon: 'home',
          route: '/Home'
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

        }
      ],
    }
  },
  methods: {
    //
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$aside-color: #E31B6D !important;
$aside-font-color: white !important;

.theme--light.v-navigation-drawer {
  background-color: $aside-color;
  color: $aside-font-color;
}
</style>
