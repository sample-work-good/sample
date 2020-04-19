<template>
  <div><br/>
    <f7-label>{{title}}</f7-label>
    <f7-input type="number" 
          :name="title" 
          :value="formfilled == 0 ? '' : filled_value" 
          :disabled="formfilled == 1 ? true : false"
          :required="(formfilled == 0) && (is_mandatory == 1) ? true : false"
          @input="$emit('input',$event.target.value)"
          @input:clear="$emit('input',$event.target.value)" 
          placeholder="Please enter data(number)" 
          :clear-button="formfilled == 0 ? true :false">
    </f7-input>
  </div>
</template>
<script>
export default {
  name: 'NumberInput',
  props: ['title','is_mandatory','formfilled','filled_value']
}
</script>