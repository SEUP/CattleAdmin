<template>
  <v-container>
    <v-layout row wrap>

      <v-flex xs12>
        <h1 class="display-1" ><v-icon x-large color="primary">mdi-account-key</v-icon>&ensp;รายการสิทธิ์</h1>
        <v-divider class="mt-2"></v-divider>
      </v-flex>

      <v-flex xs12 >
        <v-layout row>
          <v-spacer></v-spacer>
          <v-flex md3>
            <v-text-field
              append-icon="mdi-magnify"
              label="ค้นหา"
              v-model="form.keyword"
              @keyup.13="search()"
            ></v-text-field>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-data-table
          :headers="headers"
          :items="roles"
          hide-actions
          class="elevation-1">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-center">
              <v-btn class="ma-0" icon disabled >
                <v-icon color="primary" >create</v-icon>
              </v-btn>
              <v-btn class="ma-0" icon disabled>
                <v-icon color="red" >delete</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
        <div class="text-xs-center">
          <v-pagination @input="changePage" :length="paginate.last_page"
                        v-model="paginate.current_page"></v-pagination>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {page: 1, keyword: ""},
        roles: [],
        paginate:{},
        headers: [
          {
            text: 'ID',
            align: 'left',
            value: 'name'
          },
          {text: 'Action', sortable: false, align: 'center', value: 'Action'},
        ],
      }
    },
    computed: {},
    created() {
      this.load()
    },
    methods: {
      changePage: async function (page) {
        this.form.page = page;
        let p = await this.$store.dispatch('admin/roles/getRoles', this.form);
        this.paginate = p;
        this.roles = p.data;
      },
      load: async function () {
        let page = await this.$store.dispatch('admin/roles/getRoles');
        this.paginate = page;
        this.roles = page.data;
      },
      search: async function () {

        this.form.page = 1;
        let page = await this.$store.dispatch('admin/roles/getRoles', this.form);
        this.paginate = page;
        this.roles = page.data;
      }
    }

  }
</script>
