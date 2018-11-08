<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer"
      enable-resize-watcher fixed app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" v-bind="item.href" @click="item.href">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue light-l" id="nav" app :clipped-left="clipped">

      <v-toolbar-side-icon color="purple lighten-2" style="color:white" @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon color="white">web</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon @click="print()" color="white">print</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon color="white">remove</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017 - 2018 World Bank Church</span>
    </v-footer>








    <!-- modal for disclaimer -->
    <div class="text-xs-center">
      <v-dialog persistent="true" v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            Disclaimer
          </v-card-title>
          <v-card-text>
            This site is designed to load very fast even in slow and unstable network conditions to save you
            data and time, this site (after the first time) has the ability to load offline even when your data isoff
            the purpose of this site is not for educational or fun purposes.
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="dialog = false">
              Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <!-- / modal for disclaimer -->



  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        dialog: true,
        clipped: false,
        drawer: true,
        fixed: true,
        items: [{
          icon: 'bubble_chart',
          title: 'Youth',
          href: 'beliefs'
        }, {
          icon: 'pregnant_woman',
          title: 'AWM',
          href: 'beliefs'
        }, {
          icon: 'perm_identity',
          title: 'AMO',
          href: 'beliefs'
        }, {
          icon: 'child_care',
          title: 'Infant Dpt',
          href: ''
        }, {
          icon: 'book',
          title: 'Beliefs',
          href: 'beliefs'
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'World Bank Church'
      }
    },
    methods: {
      print: function () {
        return window.print();
      }
    },
    name: 'App'
  }
</script>
<style scoped>
  #nav {
    color: aliceblue
  }
</style>
