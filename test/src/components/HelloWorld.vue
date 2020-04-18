<template>
  <div>
    <h1>Form Generator</h1>

    <form-generator :schema="schema"
                    v-model="formData">
    </form-generator>

    <p>
      Hello {{formData.title}} {{formData.firstName}} {{formData.lastName}}, I hear you are {{formData.age}} years old.
    </p>
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
      schema: [
        {
          fieldType: "SelectList",
          name: "title",
          multi: false,
          label: "Title",
          options: ["Mr", "Ms", "Mx", "Dr", "Madam", "Lord"],
          isMandatory: 0,
          
        },
        {
          fieldType: "TextInput",
          placeholder: " dummy first ",
          label: "First Name",
          name: "firstName",
          isMandatory: 0,
        },
        {
          fieldType: "TextInput",
          placeholder: " Ankit ",
          label: "Last Name",
          name: "lastName",
          isMandatory: 0,
        },
        {
          fieldType: "NumberInput",
          placeholder: " umar batao ",
          name: "age",
          label: "Age",
          isMandatory: 1,
          minValue: 0
        },
        {
          fieldType: "RemarksInput",
          placeholder: " remarks likho ",
          name: "remarks",
          label: "remarks/details",
          isMandatory: 0,
          minValue: 0
        }
      ]
    };
  }
};
</script>
