<template>
  <div><br/>
    <f7-label>{{title}}</f7-label>
     <f7-input type="select"             
            form="surveyform"
            :name ="title" 
            :disabled="formfilled == 1 ? true : false"
            :required="(formfilled == 0) && (is_mandatory == 1) ? true : false"
            :value="formfilled == 0 ? options[0] : filled_value" 
            @input="$emit('input', $event.target.value)" 
            placeholder="Please select">
      <option v-for="option in options"
              :key="option">
        {{option}}
      </option>

    </f7-input>
    <!-- <select :multiple="multi"
            :name="name"
            :value=" formfilled == 0 ? value : fieldValue "
             :disabled="formfilled == 1 ? true : false"
             :required="(formfilled == 0) && (isMandatory == 1) ? true : false"
            @input="$emit('input',
           $event.target.value)">
      <option v-for="(option )  in options"   
               :key="option" >
        {{option}}
      </option>
    </select> -->
  </div>
</template>
<script>
export default {
  name: 'SelectList',
  props: ['options','is_mandatory','formfilled','filled_value', 'title']
}
</script>