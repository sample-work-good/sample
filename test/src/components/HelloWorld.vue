<template>
  <div>
    <h1>Form Generator</h1>

  <form id="surveyform" @submit.prevent="handleSubmit">
    <form-generator :schema="survey_info.field"
                    v-model="formData"
                    :formfilled="survey_info.is_editable==true?0:1"
                    :fieldArr="fieldArr"
                    >
    </form-generator>
    <!-- input v-if="formFilled==0" type="submit"-->
     <f7-input  type="submit" v-if="survey_info.is_editable==true" ></f7-input>
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
      formData: [],
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
      
      
      survey_info: {
        is_editable: true,
        survey_id:"123",
        survey_name:"test",
        survey_type:1, 
        field_count:0,
        field :[
        {
          title :"Ques1",
          field_type: 1,
          option_count : 6, 
          options: ["Mr", "Ms", "Mx", "Dr", "Madam", "Lord"],
          filled_value : "",
          is_mandatory: 0,
          
        },
        {
          title :"Ques2",
          field_type: 2,
          option_count : 0, 
          options: [],
          filled_value : "",
          is_mandatory: 0,
        },
        {
          title:"Ques3",
          field_type: 2,
          option_count : 0,
          options: [],
          filled_value : "",
          is_mandatory: 0,
        },
        {
          title:"Ques 4",
          field_type: 3,
           option_count : 0, 
           options: [],
           filled_value : "",
           is_mandatory: 0,
        },
        {
          title:"Ques5",
          field_type: 4,
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
      event.stopPropagation();
      console.log("  handle form submit send a post message ", this.formData);
    }
  },
    created() {
    console.log(" schema length =>", this.survey_info.field.length);
    for (let x =0; x < this.survey_info.field.length; x++) {
      if (this.survey_info.field[x].field_type == 1) {
        // Drop down default option[0] is set   
        this.formData[x] = this.survey_info.field[x].options[0];
        continue;        
      }
      this.formData[x] = this.survey_info.field[x].filled_value;
    }
    console.log(" hello world created");
  }
};
</script>
