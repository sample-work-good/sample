<template>
  <div><br/>
    <f7-label><span v-if="is_mandatory == 1" style="color:red">*</span> {{title}}</f7-label>
    <f7-input type="textarea" 
            :name ="title" 
            :disabled="formfilled == 1 ? true : false"
            :required="(formfilled == 0) && (is_mandatory == 1) ? true : false"
            :value="formfilled == 0 ? '' : filled_value" 
            @input="$emit('input', $event.target.value)"
            placeholder="Please Enter Remarks"
            @input:clear="$emit('input',$event.target.value)"
            :clear-button="formfilled == 0 ? true :false">      
    </f7-input>
  </div>
</template>
<script>
export default {
  name: 'RemarksInput',
  props: ['title','is_mandatory','formfilled', 'filled_value']
}
</script>