<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="display-1" mb-3>
      Got
      </v-flex>
      <v-flex xs12>
        <v-dialog v-model="dialog" persistent max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">New Contact</span>
            </v-card-title>
            <v-container grid-list-md>
            <v-text-field
              name="input-1"
              label="Contact Name"
              v-model="addForm.name"
            ></v-text-field>
            <v-text-field
              name="input-1"
              label="Phone Number"
              v-model="addForm.number"
            ></v-text-field>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click.native="addContact(addForm.name,addForm.number)">Save</v-btn>
            </v-card-actions>
            </v-container>
          </v-card>
        </v-dialog>
        <v-btn color="promacy"><v-icon>เพิ่มรายชื่อติดต่อ</v-icon></v-btn>

        <v-data-table
          :headers="headers"
          :items="contacts">
         <template slot="items" slot-scope="props">
           <td>{{props.item.name}}</td>
           <td>{{props.item.number}}</td>
           <td>
             <v-btn @click="removeContact(props.item)" flat color="red"><v-icon>mdi-delete</v-icon></v-btn>
           </td>
         </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <v-btn @click="dialog = true" dark fab fixed bottom right color="red">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>

  export default {
    name: "Got",
      data: () => ({
        dialog: false,
        addForm :{
          name : "",
          number : "",
        },
        headers:[
          {
            text :"Contact Name",
            value:'name',
          },{
            text:"Telephone Number",
            value:'number',
          },{
            text:"Action",
            sort:false,
          }
        ],
        contacts : [
          {
            name : "Halo",
            number : "123456789"
          },
          {
            name :"John",
            number : "1010101010"
          },
          {
            name : "Robert",
            number : "123654789"
          }
        ],
      }),
    methods : {
      addContact : function (name,number) {
        let newContact = { name : name,number:number}
        this.contacts.push(newContact);

        this.addForm = {
          name:"",
          number:"",
        };

        this.dialog = false;
      },
      removeContact : function(contact){
        let index = this.contacts.indexOf(contact);
        this.contacts.splice(index,1)
      }
    }
  }
</script>
