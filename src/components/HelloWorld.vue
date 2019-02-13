<template>
  <div class="container-fluid">
    <div class="row">
      <!--Header-->
      <v-toolbar clipped-left id="navbar" prominent app>
        <v-toolbar-side-icon id="iconBurguer" class="font-weight-bold" dark @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title id="navbarTitle" dark class="text-uppercase font-weight-bold white--text"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title dark class="text-uppercase white--text">
          <img id="logoMatthaus" src="#">
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title dark class="text-uppercase white--text">
          <span id="nameUser" class="subheading font-weight-bold">BEM VINDO, CAIO</span>
        </v-toolbar-title>
      </v-toolbar>

      <!--Navbar lateral-->
      <v-navigation-drawer id="navbar" v-model="drawer" app clipped persistent height="95%">
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
                <v-list-tile-title id="whiteTitle" class="font-weight-bold">{{ item.title }}</v-list-tile-title>
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
  name: 'headerNavbar',
  data () {
    return {
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
