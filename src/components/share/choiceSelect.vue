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
      this.items = [defaultChoice].concat(await this.$store.dispatch("choices/getChoicesByType", this.type));
    },
    methods: {
      sync: function () {
        this.items.forEach((i) => {
          if (i.id == this.value.id) {
            updateValue(i);
          }
        })
      },
      updateValue: function (ev) {
        this.$emit('change', ev)
      }
    }
  }
</script>

<style scoped>

</style>
