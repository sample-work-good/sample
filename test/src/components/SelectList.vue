<template>
  <div>
    <label>{{label}}</label>
    <select :multiple="multi"
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
    </select>
  </div>
</template>
<script>
export default {
  name: 'SelectList',
  props: ['multi', 'options', 'name', 'label','isMandatory','formfilled','fieldValue', 'value']
}
</script>