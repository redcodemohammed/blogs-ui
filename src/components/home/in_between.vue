<template>
  <v-card rounded>
    <v-toolbar>
      <v-toolbar-title>بين ثنايا</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-treeview
        open-on-click
        hoverable
        rounded
        activatable
        :items="items"
        :open="[1, 4]"
      ></v-treeview>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: "2021 :",
        children: [
          { id: 2, name: "يونيو", children: [{ id: 3, name: "تداعي حر" }] },
          {
            id: 4,
            name: "ابريل",
            children: [
              { id: 5, name: "هل يمكنك أن تكون أجمل؟" },
              { id: 6, name: "بس انت ممكن تحضنني" },
              { id: 7, name: "مسك الليل" },
            ],
          },
          { id: 8, name: "مارس" },
        ],
      },
    ],
  }),
};
</script>
