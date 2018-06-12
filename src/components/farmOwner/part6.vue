
<template>
  <v-card>
    <v-container>
      <v-form>
        <v-flex xs12>
          <p class="title">6.1 ท่านจำหน่ายโคเนื้อให้กับใคร</p>
          <v-divider class="my-3"></v-divider>
          <v-flex xs10 offset-xs1>
            <v-checkbox v-model="selected" label="พ่อค้าคนกลาง" color="success" value="พ่อค้าคนกลาง"></v-checkbox>
            <v-checkbox v-model="selected" label="สหกรณ์"  color="success" value="สหกรณ์"></v-checkbox>
            <v-checkbox v-model="selected" label="ชำแหละจำหน่ายเอง" color="success" value="ชำแหละจำหน่ายเอง"></v-checkbox>
            <v-checkbox v-model="selected" label="อื่นๆ :" color="success" value="อื่นๆ :"></v-checkbox>
          </v-flex>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.2 อายุของโคเนื้อที่ท่านจำหน่าย(ปี)</p>
          <v-divider class="my-3"></v-divider>
          <choice-select :value="form.female_breeder_support" type="female_breeder_support" @change="form.female_breeder_support" ></choice-select>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.3 น้ำหนักของโคเนื้อที่ท่านจำหน่าย(กิโลกรัม)</p>
          <v-divider class="my-3"></v-divider>
          <choice-select type="female_breeder_support" ></choice-select>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.4 ลักษณะการจำหน่าย</p>
          <v-checkbox v-model="selected" label="ประมาณด้วยสายตา" color="success" value="ประมาณด้วยสายตา"></v-checkbox>
          <v-checkbox v-model="selected" label="ขายตามราคาน้ำหนักมีชีวิต"  color="success" value="ขายตามราคาน้ำหนักมีชีวิต"></v-checkbox>
          <v-checkbox v-model="selected" label="ขายตามราคาน้ำหนักซากและเกรดซาก" color="success" value="ขายตามราคาน้ำหนักซากและเกรดซาก"></v-checkbox>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.5 ถ้าท่านรวมกลุ่มวิสาหกิจชุมชนและสหกรณ์โคเนื้อเมื่อใด</p>
          <v-checkbox v-model="selected" label="กลุ่มวิสาหกิจชุมชน:" color="success" value="กลุ่มวิสาหกิจชุมชน:"></v-checkbox>

        </v-flex>
        <v-flex xs12>
          <p class="title">6.6 ถ้ายังไม่เข้ารวมกลุ่มท่านมีความประสงค์ในการรวมกลุ่มวิสาหกิจชุมชนและสหกรณ์โคเนื้อหรือไม่</p>
          <v-divider class="my-3"></v-divider>
          <choice-select type="female_breeder_support" ></choice-select>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.7 ท่านต้องการให้สหกรณ์ช่วยเหลือในด้านใด</p>
          <v-checkbox v-model="selected" label="ความรู้ด้านการจัดการ" color="success" value="ความรู้ด้านการจัดการ"></v-checkbox>
          <v-checkbox v-model="selected" label="การรักษาโรค"  color="success" value="การรักษาโรค"></v-checkbox>
          <v-checkbox v-model="selected" label="อาหาร" color="success" value="อาหาร"></v-checkbox>
          <v-checkbox v-model="selected" label="พันธุ์" color="success" value="พันธุ์"></v-checkbox>
          <v-checkbox v-model="selected" label="การผสมเทียม"  color="success" value="การผสมเทียม"></v-checkbox>
          <v-checkbox v-model="selected" label="การเหนี่ยวนำการเป็นสัด" color="success" value="การเหนี่ยวนำการเป็นสัด"></v-checkbox>
          <v-checkbox v-model="selected" label="ไม่ต้องการ" color="success" value="ไม่ต้องการ"></v-checkbox>
          <v-checkbox v-model="selected" label="อื่นๆ :" color="success" value="อื่นๆ :"></v-checkbox>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.8 ท่านต้องการซื้ออาหารข้นในนามสหกรณ์หรือไม่</p>
          <v-divider class="my-3"></v-divider>
          <choice-select type="female_breeder_support" ></choice-select>
        </v-flex>
        <v-flex xs12>
          <p class="title">6.9 ท่านขายโคเนื้อได้ราคาเท่าไหร่และใช้เวลาในการเลี้ยงนานเท่าใด</p>
          todo
        </v-flex>
        <v-flex xs12>
          <p class="title">6.10 ท่านพอใจกับราคาที่ขายได้หรือไม่</p>
          <v-divider class="my-3"></v-divider>
          <choice-select type="female_breeder_support" ></choice-select>
        </v-flex>
      </v-form>
    </v-container>
  </v-card>
</template>


<script>
  import choiceSelect from "@/components/share/choiceSelect";
  import ChoiceSelect from "../share/choiceSelect";
  export default {
    components: {choiceSelect},
    name: "part6",

    data (){
      return{
        selected:[],
        form:[]
      }

    }
  }
</script>

<style scoped>

</style>
