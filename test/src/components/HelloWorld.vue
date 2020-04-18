<template>
  <div>
    <h1>Form Generator</h1>

  <form>
    <form-generator :schema="schema"
                    v-model="formData"
                    :formfilled="formFilled">
    </form-generator>
    <input type="submit">
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
          label: "Title",
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
          isMandatory: 1,
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
  }
};
</script>
