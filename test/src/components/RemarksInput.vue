<template>
  <div><br/>
    <f7-label>{{label}}</f7-label>
    <f7-input type="textarea" 
            :name ="name" 
            :disabled="formfilled == 1 ? true : false"
            :required="(formfilled == 0) && (isMandatory == 1) ? true : false"
            :value="formfilled == 0 ? value : fieldValue" 
            @input="$emit('input', $event.target.value)" 
            placeholder="Please Enter Remarks">      
    </f7-input>
    <!-- <textarea 
           :name="name"
           :value=" formfilled == 0 ? value : fieldValue "
           :disabled="formfilled == 1 ? true : false"
           :required="(formfilled == 0) && (isMandatory == 1) ? true : false"
           @input="$emit('input',$event.target.value)"
           :placeholder="placeholder"></textarea> -->

  </div>
</template>
<script>
export default {
  name: 'RemarksInput',
  props: ['placeholder', 'label', 'name','isMandatory','formfilled', 'fieldValue', 'value']
}
</script>