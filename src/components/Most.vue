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
                v-model="addFrom.name"
              ></v-text-field>
              <v-text-field
                label="Phone Number"
                v-model="addFrom.number"
              ></v-text-field>
            </v-layout>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="addContact(addFrom.name,addFrom.number)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <v-layout row wrap>
      <v-flex pb-3 xs12 class="display-1">
        What's up bro!!
      </v-flex>


      <v-flex xs12 >
        <v-data-table
          :headers="headers"
          :items="contacts">
          <template slot="items" slot-scope="props">
            <td> {{props.item.name}} </td>
            <td> {{props.item.number}}</td>
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
    <v-btn @click=" dialog = true "
      fab fixed bottom right dark color="pink">
      <v-icon> mdi-plus </v-icon>
    </v-btn>

  </v-container>
</template>

<script>
  export default {
    name: "Most",
    data: () => ({
      dialog: false ,
      addFrom : {
        name : "",
        number : "",
      },
      headers : [
        {
          text : "Contact Name",
          value : "name",
        },{
          text : "Telephone Number",
          value : "number",
        },
        {
          text : "Action",
          sort : false ,
        },
      ],
      contacts: [
        {
          name: "Halo",
          number: "09999999"
        },
        {
          name: "John",
          number: "08888888"
        },
        {
          name: "Olive",
          number: "07777777"
        }
      ]
    }),
    methods: {
      addContact: function (name,number) {
        let newContact = {name: name, number: number}
        this.contacts.push(newContact);
        this.addFrom = {
            name: "",
            number: "",
        };
        this.dialog = false;
      },
      removeContact : function(contact) {
        let index = this.contacts.indexOf(contact);
        this.contacts.splice(index,1)
      }
    }
  }
</script>

<style scoped>

</style>
