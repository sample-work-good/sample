<template>
  <div><br/>
    <f7-label><span v-if="is_mandatory == 1" style="color:red">*</span> {{title}}</f7-label>
     <select class="my-drop-down"            
            form="surveyform"
            :name ="title" 
            :disabled="formfilled == 1 ? true : false"
            :required="(formfilled == 0) && (is_mandatory == 1) ? true : false"
            :value="formfilled == 0 ? options[0] : filled_value" 
            @input="$emit('input', $event.target.value)" 
           >
      <option v-for="option in options"
              :key="option">
        {{option}}
      </option>

    </select>
  </div>
</template>
<script>
export default {
  name: 'SelectList',
  props: ['options','is_mandatory','formfilled','filled_value', 'title']
}
</script>
<style scoped>
.my-drop-down {
  -webkit-appearance: menulist !important;
}
</style>