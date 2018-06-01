<template>
  <v-container fluid>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">New Contact</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap column>
              <v-text-field
                label="Contact Name"
                v-model="addForm.name"
              ></v-text-field>
              <v-text-field
                label="Phone Number"
                v-model="addForm.number"
              ></v-text-field>

            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="addContact(addForm.name,addForm.number)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-layout row wrap>
      <v-flex pb-3 xs12 class="display-1">
        Chaow
      </v-flex>

      <v-flex xs12>
        <v-btn color="primary" class="mb-3">เพิ่มรายชื่อติดต่อ</v-btn>
        <v-data-table
          :headers="headers"
          :items="contacts">

          <template slot="items" slot-scope="props">
            <td>{{props.item.name}}</td>
            <td>{{props.item.number}}</td>
            <td>
              <v-btn @click="removeContact(props.item)"
                     flat color="red">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <v-btn @click="dialog = true"
           color="red" dark fab fixed bottom right>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
  export default {
    name: "Chaow",
    data: () => ({
      dialog: false,
      addForm: {
        name: "",
        number: "",
      },
      headers: [
        {
          text: "Contact Name",
          value: 'name',
        }, {
          text: "Telephone Number",
          value: 'number',
        },
        {
          text: "Action",
          sort: false,
        }
      ],
      contacts: [
        {
          name: "Halo",
          number: "12345678"
        }, {
          name: "John",
          number: "53435820"
        }, {
          name: "Robert",
          number: "30582048"
        },
      ],
    }),
    methods: {
      addContact: function (name, number) {
        let newContact = {name: name, number: number};
        this.contacts.push(newContact);

        //view manipulation
        this.addForm = {
          name: "",
          number: "",
        };
        this.dialog = false;
      },

      removeContact: function (contact) {

        if (confirm("Do you want to remove this contact?")) {
          let index = this.contacts.indexOf(contact);
          this.contacts.splice(index, 1)
        }

      }
    }
  }
</script>
