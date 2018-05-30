<template>
    <h1>asdf</h1>
</template>

<script>
  export default {
    name: 'nook-form',
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
