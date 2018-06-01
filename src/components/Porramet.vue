<template>
  <v-container fluid>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn slot="activator" color="primary" dark>เพิ่มรายชื่อ</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">New Contact</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout column wrap>
                <v-text-field v-model="addFrom.name" label="Contact Name"  ></v-text-field>
                <v-text-field v-model="addFrom.number" label="Contact Number"></v-text-field>
            </v-layout>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="addContacts(addFrom.name,addFrom.number)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-layout row wrap>
      <v-flex xs12>
        <v-data-table :headers="header" :items="contacts">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.number}}</td>
            <td><v-btn flat @click="removeContacts(props.items)" icon><v-icon color="red" >delete</v-icon></v-btn></td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <v-btn dark fab fixed bottom right color="red"  @click="dialog = true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
  export default {
    name: "Porramet",
    data() {
      return {
        dialog:false,
        addFrom:{name:"",number:""},
        header: [
          {text: "Contact Name", value: "name"},
          {text: "Contact Number", value: "number"},
          {text: "Action"},
        ],
        contacts: [
          {name: "Halo", number: "12345678"},
          {name: "John", number: "14568984"},
          {name: "Robert", number: "1489914"},
        ]
      }
    }, methods: {
      addContacts: function (name, number) {
        let newContact = {name: name, number: number};
        this.contacts.push(newContact);
        this.dialog = false;
      },
      removeContacts : function (contact) {
        let index = this.contacts.indexOf(contact);
        this.contacts.splice(index,1)
      }
    }
  }
</script>

<style scoped>

</style>
