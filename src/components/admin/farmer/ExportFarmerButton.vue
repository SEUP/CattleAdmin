<template>
  <v-tooltip top>
    <v-btn class="ma-0" icon @click="exportFarmer(farmerId)" slot="activator">
      <v-icon color="warning">mdi-file-pdf</v-icon>
    </v-btn>
    <span>ส่งออก PDF</span>
  </v-tooltip>
</template>

<script>
  export default {
    name: "ExportFarmerButton",
    props: {
      farmerId: [String,Number]
    },
    methods : {
      exportFarmer: function(id){
        axios({
          url: `/api/v1/admin/summary/${id}/farmer-pdf-exporter`,
          method: 'GET',
          responseType: 'blob', // important
        }).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `export_farmer_${id}.pdf`);
          document.body.appendChild(link);
          link.click();
        });
      },
    }
  }
</script>

<style scoped>

</style>
