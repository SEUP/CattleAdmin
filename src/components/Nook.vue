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
                </template>
            </v-data-table>
        </v-flex>
       
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "Nook",
    data: () => ({
        contacts  : [
            {
                name : "Tarathon",
                age : "23",
                number : "0830630282"
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
        ]
    }),
    methods :{
        addContact : function (name, age, number) {
            let newContact = {name : name, age : age, number : number}
            this.contacts.push(newContact)
        },
    }
  }
</script>
