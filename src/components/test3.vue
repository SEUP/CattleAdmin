<template>
  <v-container>
    <v-layout>
      <v-speed-dial
        v-model="fab"
        bottom
        right
        direction="top"
        open-on-hover
        transition="slide-y-reverse-transition"
        class="speed-dial"
      >
        <v-btn
          slot="activator"
          v-model="fab"
          color="blue darken-2"
          dark
          fab
          class="btn--floating"
        >
          <v-icon>mdi-account</v-icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="green"
          class="btn--floating"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="indigo"
          class="btn--floating"
        >
          8
        </v-btn><v-btn
          fab
          dark
          small
          color="indigo"
          class="btn--floating"
        >
          7
        </v-btn><v-btn
          fab
          dark
          small
          color="indigo"
          class="btn--floating"
        >
          6
        </v-btn><v-btn
          fab
          dark
          small
          color="indigo"
          class="btn--floating"
        >
          5
        </v-btn><v-btn
          fab
          dark
          small
          color="indigo"
          class="btn--floating"
        >
          4
        </v-btn><v-btn
          fab
          dark
          small
          color="indigo"
          class="btn--floating"
        >
          3
        </v-btn><v-btn
          fab
          dark
          small
          color="indigo"
          class="btn--floating"
        >
          2

        </v-btn>
        <v-btn
          fab
          dark
          small
          color="indigo"
          class="btn--floating"
        >
          1
        </v-btn>
        <v-btn
          fab
          dark
          color="green"
        >
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-layout>
  </v-container>

</template>
<script>
  export default {
    data: () => ({

    }),
  }
</script>
<style scoped>
.speed-dial {
    position: absolute;
  }

.btn--floating {
    position: relative;
  }

</style>
