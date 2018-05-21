<template>
  <v-app>
    <v-container>
<v-layout column> 
  <v-flex>
    <v-select
          :items="currencies"
          v-model="selectedCurrency"
          label="กรุณาเลือกสกุลเงิน"
          single-line
           @change="updateData"
        ></v-select>
  </v-flex>
  <v-flex v-if="output">
     <v-list two-line subheader>
          <v-list-tile v-for="(value,key) in output.rates">
            <v-list-tile-content>
              <v-list-tile-title>{{key}}</v-list-tile-title>
              <v-list-tile-sub-title>{{value}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
  </v-flex>
</v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        currencies: [
          'USD', 'JPY', 'THB'
        ],
        selectedCurrency: "",
        msg: 'Welcome to Your Vue.js App',
        output : null,
      }
    },
    methods: {
      updateData: async function (event) {
         console.log(event);

        let result = await axios.get("http://data.fixer.io/api/latest", {
          params: {
            access_key: "69e2a60ca026b20ae9bca7a62a57dddc",
            symbols: event,
          }})
          .then( (response) => {
            console.log(response);
            return response;
          })
          .catch((error) => {
            return null;
          })
        if(result){
          this.output = result.data;
        }

      }
    }
  }
</script>
