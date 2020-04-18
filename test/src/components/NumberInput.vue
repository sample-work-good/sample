<template>
  <div><br/>
    <f7-label>{{label}}</f7-label>
    <f7-input type="number" 
          :name="name" 
          :value="formfilled == 0 ? value : fieldValue" 
          :disabled="formfilled == 1 ? true : false"
          :required="(formfilled == 0) && (isMandatory == 1) ? true : false"
          @input="$emit('input',$event.target.value)" 
          :placeholder="placeholder" clear-button>
    </f7-input>
    <!-- <input type="number" 
           :name="name"
           :value=" formfilled == 0 ? value : fieldValue "
           :disabled="formfilled == 1 ? true : false"
           :required="(formfilled == 0) && (isMandatory == 1) ? true : false"
           @input="$emit('input',
           $event.target.value)"
           :placeholder="placeholder"> -->
  </div>
</template>
<script>
export default {
  name: 'NumberInput',
  props: ['placeholder', 'label', 'name','isMandatory','formfilled','fieldValue', 'value']
}
</script>