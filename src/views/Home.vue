<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-expansion-panels flat>
        <v-expansion-panel v-for="(item, i) in 5" :key="i">
          <v-expansion-panel-header>
            Item {{ i + 1 }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>

    <v-app-bar app dense color="warning" flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Trang quản trị</v-app-bar-title>
      <v-spacer />
      <div class="username-area">
        <v-avatar size="30" class="mr-3">
          <v-img src="https://i.pravatar.cc/300" />
        </v-avatar>
        <v-menu offset-y rounded="lg">
          <template v-slot:activator="{ on, attrs }">
            <v-btn flat text small v-bind="attrs" v-on="on"> Username </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>Thông tin cá nhân</v-list-item-title>
            </v-list-item>
            <v-divider />
            <v-list-item>
              <v-list-item-title>Đăng xuất</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-sheet height="500"></v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data: () => ({
    drawer: true,
    group: null,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
});
</script>
