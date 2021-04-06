<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(item, i) in items2"
            :key="i"
            link
            :to="item.route"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense class="navbar" flat>
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
            <v-list-item exact link to="/sign-in">
              <v-list-item-title>Đăng xuất</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <slot name="chart"></slot>
        <slot></slot>
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
    selectedItem: 1,
    items2: [
      { text: "Trang chủ", route: "/" },
      { text: "Bài học", route: "/lessons" },
      { text: "Người dùng", route: "/users" },
    ],
  }),
});
</script>

<style scoped>
.navbar {
  background: linear-gradient(to right, #fceabb, #f8b500);
}
</style>
