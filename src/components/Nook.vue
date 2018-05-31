<template>
  <v-container fluid>
    <v-layout row wrap>
        <v-flex xs12>
            <H1>Chaos</H1>
        </v-flex>
        <v-flex xs12>
            <v-data-table
                :headers="headers"
                :items="contacts"
                hide-actions
                class="elevation-1"
            >
            <!-- <v-data-table
                :headers="headers"
                :items="contacts"
                class="elevation-1"
            > -->
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-middle">{{ props.item.age }}</td>
                    <td class="text-xs-left">{{ props.item.number }}</td>
                    <td><v-btn flat @click="removeContact(props.item)"><v-icon>mdi-delete</v-icon></v-btn></td>
                </template>
            </v-data-table>
        </v-flex>
       
    </v-layout>
    <v-dialog v-model="dialog_add" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">New Contact</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field label="Name" v-model="addForm.name" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field type="Number" label="Age" v-model="addForm.age" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm12>
                <v-text-field label="Phone Number" v-model="addForm.number" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog_add = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="addContact(addForm.name,addForm.age,addForm.number)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
   <v-btn
        dark
        fab
        fixed
        bottom
        right
        @click = "dialog_add = true"
    >
        <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
  
</template>

<script>
  export default {
    name: "Nook",
    data: () => ({
        dialog_add : false,
        addForm:{
            name : "",
            age : "",
            number : ""
        },
        contacts  : [
            {
                name : "Tarathon",
                age : "23",
                number : "0830630282",
                
            },
            {
                name : "Tanwinit",
                age : "23",
                number : "0999999999"
            },
            {
                name : "Nuttaporn",
                age : "21",
                number : "0888888888"
            },
        ],
        headers : [
            { text: 'Name', value: 'name' },
            { text: 'Age', value: 'age' },
            { text: 'Phone Number', value: 'number' },
            { text: 'Action' },
            
        ]
    }),
    methods :{
        addContact : function (name, age, number) {
            let newContact = {name : name, age : age, number : number} ;
            this.contacts.push(newContact) ;
            this.dialog_add = false ;
            this.addForm.name = "" ;
            this.addForm.age = "" ;
            this.addForm.number = "" ;
        },
        removeContact : function (contact) {
            let index = this.contacts.indexOf(contact);
            this.contacts.splice(index,1);
        }
    }
  }
</script>
