<template>
  <div>
    <v-select
      :items="provinces"
      v-model="selProvince"
      label="จังหวัด" item-text="PROVINCE_NAME" @change="provinceChange"
    ></v-select>

    <v-select v-if="amphures"
              :items="amphures"
              v-model="selAmphure"
              label="อำเภอ" item-text="AMPHUR_NAME" @change="amphureChange"
    ></v-select>

    <v-select v-if="districts"
              :items="districts"
              v-model="selDistrict"
              label="ตำบล" item-text="DISTRICT_NAME" @change="districtChange"
    ></v-select>
  </div>
</template>

<script>
  export default {
    name: "districtSelect",
    props: {
      valProvince: {
        type: Number,
        default: 0
      },
      valAmphur: {
        type: Number,
        default: 0
      },
      valDistrict: {
        type: Number,
        default: 0
      }
    },
    data() {
      let defaultProvince = {
        PROVINCE_ID: 0,
        PROVINCE_NAME: "กรุณาเลือก",
      };

      let defaultAmphur = {
        AMPHUR_ID: 0,
        AMPHUR_NAME: "กรุณาเลือก"
      };

      let defaultDistrict = {
        DISTRICT_ID: 0,
        DISTRICT_NAME: "กรุณาเลือก"
      };
      return {
        defaultProvince: defaultProvince,
        defaultAmphur: defaultAmphur,
        defaultDistrict: defaultDistrict,
        provinces: [
          defaultProvince
        ],
        amphures: [
          defaultAmphur
        ],
        districts: [
          defaultDistrict
        ],
        selProvince: defaultProvince,
        selAmphure: defaultAmphur,
        selDistrict: defaultDistrict,
      }
    },
    async created() {
      let provinces = await this.$store.dispatch('districtSelect/getProvinces');
      this.provinces = [this.defaultProvince].concat(provinces);
      this.sync();
      console.log(this.provinces);
    },
    methods: {
      sync: function () {
        this.provinces.forEach((p) => {
          if (p.PROVINCE_ID == this.valProvince) {
            this.selProvince = p;
            this.provinceChange(p);
          }
        });

        this.amphures.forEach((a) => {
          if (a.AMPHUR_ID == this.valAmphur) {
            this.selAmphure = a;
            this.amphureChange(a);
          }
        });

        this.districts.forEach((d) => {
          if (d.DISTRICT_ID == this.valDistrict) {
            this.selDistrict = d;
            this.districtChange(d);
          }
        });
      },
      provinceChange: function (ev) {
        console.log(ev)
        if (ev.amphurs) {
          this.amphures = [this.defaultAmphur].concat(ev.amphurs)
        } else {
          this.amphures = [this.defaultAmphur];
        }
        this.selAmphure = this.defaultAmphur;
        this.selDistrict = this.defaultDistrict;
        this.$emit('change', [ev, null, null])
      }

      , amphureChange: function (ev) {
        console.log(ev)
        if (ev.districts) {
          this.districts = [this.defaultDistrict].concat(ev.districts)
        } else {
          this.districts = [this.defaultDistrict];
        }
        this.selDistrict = this.defaultDistrict;
        this.$emit('change', [this.selProvince, ev, null])

      }
      , districtChange: function (ev) {
        this.$emit('change', [this.selProvince, this.selAmphure, ev])
      }

    }
  }
</script>

<style scoped>

</style>
