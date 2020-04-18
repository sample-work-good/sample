<template>
  <div><br/>
    <f7-label>{{label}}</f7-label>
     <f7-input type="select" 
            :multiple="multi" 
            form="surveyform"
            :name ="name" 
            :disabled="formfilled == 1 ? true : false"
            :required="(formfilled == 0) && (isMandatory == 1) ? true : false"
            :value="formfilled == 0 ? options[0] : fieldValue" 
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
  props: ['multi', 'options', 'name', 'label','isMandatory','formfilled','fieldValue', 'value']
}
</script>