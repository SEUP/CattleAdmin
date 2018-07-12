<template>
  <v-container>
    <h1 class="display-1 pa-0 mb-3"><v-icon x-large color="primary">mdi-magnify</v-icon>ผู้ใช้เกษตรกรผู้เลี้ยงโคเนื้อ</h1>
    <v-flex xs12 md6>
      <v-text-field label="ค้นหา : ชื่อ นามสกุล รหัสประจำตัวประชาชน" v-model="form.keyword"></v-text-field>
    </v-flex>
    <v-divider class="mb-3"></v-divider>
    <v-data-table
      :headers="headers"
      :items="desserts"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.first_name +" "+ props.item.last_name}}</td>
        <td class="text-xs-right">{{  props.item.mobile_no }}</td>
        <td class="text-xs-right">{{ getProvinceAmphurDistrictString(props.item)  }}</td>
        <td class="text-xs-right">{{ props.item.updated_at }}</td>
        <td class="text-xs-left">{{ props.item.action }}</td>
      </template>
    </v-data-table>
    <div class="text-xs-center">
      <v-pagination
        v-model="page"
        :length="6"
      ></v-pagination>
    </div>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        form: {
          keyword: "",
        },
        headers: [

          {text: "ชื่อ-นามสกุล", align: "left", value: "full_name", sortable: false},
          {text: "เบอร์โทร", align: "left", value: "mobile_no", sortable: false},
          {text: "จังหวัด อำเภอ ตำบล", align: "left", value: "address_name", sortable: false},
          {text: "ข้อมูลเมื่อ", align: "left", value: "updated_at", sortable: false},
          {text: "การจัดการ", align: "center", value: "action", sortable: false},
        ],
      }
    }
  }
</script>
