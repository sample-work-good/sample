<template>
  <div>
    <f7-list id="mylist" no-hairlines-md no-hairlines no-hairlines-between>
      <f7-list-item>
        <component v-for="(field, index) in schema"
                  :key="index"
                  :is="fieldArr[field.field_type-1].field"
                  @input="updateForm(index, $event)"
                  v-bind="field"
                  :formfilled="formfilled">
        </component>
        <!-- <component v-for="(field, index) in schema"
                  :key="index"
                  :is="fieldArr[field.field_type-1]"
                  :value="formData[field.name]"
                  @input="updateForm(field.name, $event)"
                  v-bind="field"
                  :formfilled="formfilled">
        </component> -->
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
</style>