<template>
  <div><br/>
    <f7-label>{{title}}</f7-label>
    <f7-input type="textarea" 
            :name ="title" 
            :disabled="formfilled == 1 ? true : false"
            :required="(formfilled == 0) && (is_mandatory == 1) ? true : false"
            :value="formfilled == 0 ? '' : filled_value" 
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
  props: ['title','is_mandatory','formfilled', 'filled_value']
}
</script>