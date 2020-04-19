<template>
  <div>
    <h1>Form Generator</h1>

  <form id="surveyform" @submit.prevent="handleSubmit">
    <form-generator :schema="survey_info.field"
                    v-model="formData"
                    :formfilled="is_editable==true?0:1"
                    :fieldArr="fieldArr"
                    >
    </form-generator>
    <!-- input v-if="formFilled==0" type="submit"-->
     <f7-input  type="submit" v-if="formFilled==0" ></f7-input>
    </form>

    <p>
      Hello {{formData[0]}} {{formData[1]}} {{formData[2]}}, I hear you are {{formData[3]}} years old.
      yor remarks are  {{formData[4]}} </p>
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
      fieldArr:[ // can put any other information if you want 
        {
          field :"SelectList", 
        },
        {
          field : "TextInput",
        },
        {
          field : "NumberInput"
        },
        {
          field : "RemarksInput"
        }],
      // schema: [
      //   {
      //     fieldType: "SelectList",
      //     name: "title",
      //     multi: false,
      //     label: "Select Title",
      //     options: ["Mr", "Ms", "Mx", "Dr", "Madam", "Lord"],
      //     isMandatory: 0,
      //     fieldValue: "Mx"
          
      //   },
      //   {
      //     fieldType: "TextInput",
      //     placeholder: " dummy first ",
      //     label: "First Name",
      //     name: "firstName",
      //     isMandatory: 0,
      //     fieldValue: "ajay",
      //   },
      //   {
      //     fieldType: "TextInput",
      //     placeholder: " Ankit ",
      //     label: "Last Name",
      //     name: "lastName",
      //     isMandatory: 0,
      //     fieldValue: "Mathur",
      //   },
      //   {
      //     fieldType: "NumberInput",
      //     placeholder: " umar batao ",
      //     name: "age",
      //     label: "Age",
      //     isMandatory: 0,
      //     fieldValue: 35,
      //   },
      //   {
      //     fieldType: "RemarksInput",
      //     placeholder: " remarks likho ",
      //     name: "remarks",
      //     label: "remarks/details",
      //     isMandatory: 0,
      //     fieldValue: " theses are my remarks ",
      //   }
      // ],
      is_editable: true,
      survey_info: {
        survey_id:"123",
        survey_name:"test",
        survey_type:1, 
        field_count:0,
        field :[
        {
          title :"Ques1",
          field_type: 1,
          //name: "title",
          //multi: false,
          //label: "Select Title",
          option_count : 6, 
          options: ["Mr", "Ms", "Mx", "Dr", "Madam", "Lord"],
          filled_value : "Mr",
          is_mandatory: 0,
          //fieldValue: "Mx"
          
        },
        {
          title :"Ques2",
          field_type: 2,
          //placeholder: " dummy first ",
          //label: "First Name",
          //name: "firstName",
         
         //fieldValue: "ajay",
          option_count : 0, 
          options: [],
          filled_value : "",
          is_mandatory: 0,
        },
        {
          title:"Ques3",
          field_type: 2,
          //placeholder: " Ankit ",
          //abel: "Last Name",
          //name: "lastName",
          //isMandatory: 0,
          //fieldValue: "Mathur",
          option_count : 0, 
          options: [],
          filled_value : "how r u",
          is_mandatory: 0,
        },
        {
          title:"Ques 4",
          field_type: 3,
          //placeholder: " umar batao ",
          //name: "age",
          //label: "Age",
          //isMandatory: 0,
          //fieldValue: 35,
           option_count : 0, 
           options: [],
           filled_value : "",
           is_mandatory: 0,
        },
        {
          title:"Ques5",
          field_type: 4,
          //placeholder: " remarks likho ",
          //name: "remarks",
          //label: "remarks/details",
          //isMandatory: 0,
          //fieldValue: " theses are my remarks ",
          option_count : 0, 
          options: [],
          filled_value : "",
          is_mandatory: 0,
        }
      ]}, 
      


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
