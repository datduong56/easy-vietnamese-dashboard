<template>
  <Layout>
    <v-card class="mx-auto">
      <v-list>
        <v-list-group
          :value="false"
          prepend-icon="mdi-book"
          v-for="n in 5"
          :key="n"
        >
          <template v-slot:activator>
            <v-list-item-title>Độ khó {{ n }}</v-list-item-title>
          </template>

          <v-list-item v-for="m in 5" :key="m">
            <v-list-item-content>
              <v-btn
                text
                elevation="0"
                link
                plain
                class="lesson"
                to="lessons/1/detail"
              >
                <v-list-item-title> Bài {{ m }} </v-list-item-title>
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Layout from "@/layouts/layout.vue";

export default Vue.extend({
  name: "Lesson",
  components: { Layout },
  data: () => ({}),
});
</script>

<style>
.lesson {
  text-align: left !important;
}
</style>
