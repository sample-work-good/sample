<template>
  <div>
    <h1>Form Generator</h1>

  <form id="surveyform" @submit.prevent="handleSubmit">
    <form-generator :schema="schema"
                    v-model="formData"
                    :formfilled="formFilled">
    </form-generator>
    <!-- input v-if="formFilled==0" type="submit"-->
     <f7-input  type="submit" v-if="formFilled==0" ></f7-input>
    </form>

    <p>
      Hello {{formData.title}} {{formData.firstName}} {{formData.lastName}}, I hear you are {{formData.age}} years old.
      yor remarks are  {{formData.remarks}} </p>
  </div>
</template>

<script>
import FormGenerator from "./FormGenerator";

export default {
  name: "GeneratorDemo",
  components: { FormGenerator },
  data() {
    return {
      formData: {
        //firstName: "Evan"
      },
      formFilled: 0,
      schema: [
        {
          fieldType: "SelectList",
          name: "title",
          multi: false,
          label: "Select Title",
          options: ["Mr", "Ms", "Mx", "Dr", "Madam", "Lord"],
          isMandatory: 0,
          fieldValue: "Mx"
          
        },
        {
          fieldType: "TextInput",
          placeholder: " dummy first ",
          label: "First Name",
          name: "firstName",
          isMandatory: 0,
          fieldValue: "ajay",
        },
        {
          fieldType: "TextInput",
          placeholder: " Ankit ",
          label: "Last Name",
          name: "lastName",
          isMandatory: 0,
          fieldValue: "Mathur",
        },
        {
          fieldType: "NumberInput",
          placeholder: " umar batao ",
          name: "age",
          label: "Age",
          isMandatory: 0,
          fieldValue: 35,
        },
        {
          fieldType: "RemarksInput",
          placeholder: " remarks likho ",
          name: "remarks",
          label: "remarks/details",
          isMandatory: 0,
          fieldValue: " theses are my remarks ",
        }
      ]
    };
  },
  methods: {
    handleSubmit(event) {
      // Send data to the server or update your stores and such.
      // this.formFilled = 1;
      event.preventDefault();
      event.stopPropagation();
      console.log("  handle form submit send a post message ", this.formData);
    }
  },
};
</script>
