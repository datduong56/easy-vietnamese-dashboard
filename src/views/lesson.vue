<template>
  <Layout>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small class="mr-2" @click="deleteItem(item)">
            mdi-delete
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-information </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template></v-data-table
      >
    </v-card>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Layout from "@/layouts/layout.vue";

export default Vue.extend({
  name: "Lesson",
  components: { Layout },
  data: () => ({
    headers: [
      {
        text: "Chủ đề",
        align: "start",
        value: "name",
      },
      { text: "Actions", value: "actions" },
    ],
    desserts: [
      {
        name: "Frozen Yogurt - 1",
      },
      {
        name: "Frozen Yogurt",
      },
      {
        name: "Frozen Yogurt",
      },
      {
        name: "Frozen Yogurt",
      },
      {
        name: "Frozen Yogurt",
      },
      {
        name: "Frozen Yogurt",
      },
      {
        name: "Frozen Yogurt",
      },
      {
        name: "Frozen Yogurt",
      },
      {
        name: "Frozen Yogurt",
      },
      {
        name: "Frozen Yogurt",
      },
    ],
  }),
});
</script>

<style></style>
