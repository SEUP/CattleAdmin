<template>
  <v-container fluid>
    <v-layout row wrap>

      <v-flex pb-3 xs-12>
        <h1>รายการสิทธิ</h1>
      </v-flex>
      <v-flex xs3>
        <v-text-field
          prepend-icon="mdi-magnify"
          name="input-1-3"
          label="ค้นหา"
          single-line
          v-model="text"
          @keyup.13="search()"
        ></v-text-field>

      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
      <v-data-table
        :headers="headers"
        :items="DataRoles"
        hide-actions
        class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-center"><v-icon @click="
modify()">mdi-pencil</v-icon><v-icon @click="dele()">mdi-delete</v-icon></td>

        </template>
      </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        text:null,
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
    computed: {
      DataRoles() {
        return this.$store.state.roles.rolesData
      }
    },
    created(){
      this.load()
    },
    methods: {
      load:async function(){
        await this.$store.dispatch('roles/loadRoles')
      },
      search:async function(){
        await this.$store.dispatch('roles/searchRoles',this.text)
      }
    }
  }
</script>
