<template>
  <div>
    CURRENCY :
    <select v-model="selectedCurrency" @change="updateData">
      <option v-for="currency in currencies">{{currency}}</option>
    </select>

    <template v-if="output">
      {{output}}
    </template>
  </div>
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
        // console.log(event,this.selectedCurrency);

        let result = await axios.get("http://data.fixer.io/api/latest", {
          params: {
            access_key: "69e2a60ca026b20ae9bca7a62a57dddc",
            symbols: this.selectedCurrency,
          }})
          .then( (response) => {
            console.log(response);
            return response;
          })
          .catch((error) => {
            return null;
          })
        if(result){
          this.output = result;
        }

      }
    }
  }
</script>
