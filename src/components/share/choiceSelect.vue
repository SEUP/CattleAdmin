<template>
  <div>
    <v-select
      :items="items"
      v-model="selectedValue"
      :label="label" item-text="choice" @change="updateValue"
    ></v-select>
  </div>
</template>

<script>
  let defaultChoice = {
    id : 0,
    choice : "กรุณาเลือก"
  };

  export default {
    name: "choiceSelect",
    props: {
      type: {
        type: String,
      },
      label: {
        type: String,
        default: "ตัวเลือก"
      },
      value: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        selectedValue: defaultChoice,
        items: [],
      }
    },
    async created() {
      let choice = await this.$store.dispatch("choices/getChoicesByType", this.type);
      this.items = [defaultChoice].concat(choice)
      // await console.log(this.items)
     await this.sync()
    },
    methods: {
      sync: function () {
        this.items.forEach((i) => {
          if (i.id == this.value.id) {
            this.selectedValue = i
            this.updateValue(i);
          }
        })
      },
      updateValue: function (ev) {
        // console.log(ev)
        this.$emit('change', ev)
      }
    }
  }
</script>

<style scoped>

</style>
