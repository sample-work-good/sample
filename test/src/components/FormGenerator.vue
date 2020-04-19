<template>
  <div>
    <f7-list id="mylist"  >
      <f7-list-item v-for="(field, index) in schema" :key="index" class="item-input-outline">
        <component                   
                  :value="formData[index]"
                  :is="fieldArr[field.field_type-1].field"
                  @input="updateForm(index, $event)"
                  v-bind="field"
                  :formfilled="formfilled">
        </component>     
        <hr class="myhr" v-show="field.field_type != 1">
      </f7-list-item>
    </f7-list>
  </div>
</template>

<script>
import NumberInput from "./NumberInput";
import SelectList from "./SelectList";
import TextInput from "./TextInput";
import RemarksInput from "./RemarksInput";

export default {
  name: "FormGenerator",
  components: { NumberInput, SelectList, TextInput, RemarksInput },
  props: ["schema","formfilled", "value", "fieldArr"],
  data() {
    return {
      formData: this.value || {}
    };
  },
  methods: {
    updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit("input", this.formData);
    }
  }
};
</script>
<style>
#mylist > ul {
   list-style-type: none; /* Remove bullets */
}
.myhr { 
  display: block;
  margin-top: 0em;
  margin-bottom: 0em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
} 
</style>