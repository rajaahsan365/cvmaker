export const formJson = [
  // {
  //   category: "Basic Information",
  //   label: "Full Name",
  //   name: "full_name",
  //   inputType: "datetime-local",
  //   id: "full_name",
  //   placeholder: "Full Name",
  //   wrapperClass: "col-md-6",
  // },
  // {
  //   category: "Basic Information",
  //   label: "Full Name",
  //   name: "full_name",
  //   inputType: "textarea",
  //   id: "full_name",
  //   placeholder: "Full Name",
  //   wrapperClass: "col-md-6",
  // },
  // {
  //   category: "Basic Information",
  //   label: "email",
  //   name: "email",
  //   inputType: "email",
  //   id: "email",
  //   placeholder: "Full Name",
  //   wrapperClass: "col-md-6",
  // },
  // {
  //   category: "Basic Information",
  //   label: "Interest",
  //   name: "interest",
  //   inputType: "checkbox",
  //   id: "interest",
  //   options: [
  //     { label: "Cricket", value: "cricket" },
  //     { label: "Football", value: "football" },
  //   ],
  //   wrapperClass: "col-md-6",
  // },
  // {
  //   category: "Basic Information",
  //   label: "Gender",
  //   name: "gender",
  //   inputType: "radio",
  //   id: "gender",
  //   options: [
  //     { label: "Male", value: "male" },
  //     { label: "Female", value: "female" },
  //   ],
  //   wrapperClass: "col-md-6",
  // },
  // {
  //   category: "Work Experience",
  //   inputType: "arrayField",
  //   name: "experiences",
  //   label: "Work Experience",
  //   childs: [
  //     {
  //       category: "Basic Information",
  //       label: "Date and Time",
  //       inputType: "datetime-local",
  //       name: "dateTime",
  //       id: "dateTime",
  //       placeholder: "Date",
  //       wrapperClass: "col-md-6",
  //     },
  //     {
  //       category: "Basic Information",
  //       label: "email",
  //       name: "email",
  //       inputType: "email",
  //       id: "email",
  //       placeholder: "Full Name",
  //       wrapperClass: "col-md-6",
  //     },
  //     {
  //       category: "Basic Information",
  //       label: "Interest",
  //       name: "interest",
  //       inputType: "checkbox",
  //       id: "interest",
  //       options: [
  //         { label: "Cricket", value: "cricket" },
  //         { label: "Football", value: "football" },
  //       ],
  //       wrapperClass: "col-md-6",
  //     },
  //     {
  //       category: "Basic Information",
  //       label: "Gender",
  //       name: "gender",
  //       inputType: "radio",
  //       id: "gender",
  //       options: [
  //         { label: "Male", value: "male" },
  //         { label: "Female", value: "female" },
  //       ],
  //       wrapperClass: "col-md-6",
  //     },
  //     {
  //       category: "Basic Information",
  //       label: "Description",
  //       name: "description",
  //       inputType: "textarea",
  //       id: "description",
  //       placeholder: "Description",
  //       wrapperClass: "col-md-12",
  //     },
  //   ],
  // },
  // {
  //   label: "Colors",
  //   name: "colors",
  //   inputType: "select",
  //   id: "colors",
  //   options: [
  //     {
  //       value: "red",
  //       label: "Red",
  //     },
  //     {
  //       value: "green",
  //       label: "Green",
  //     },
  //     {
  //       value: "blue",
  //       label: "Blue",
  //     },
  //   ],
  // },
  // {
  //   label: "Color Shades",
  //   name: "colorShades",
  //   inputType: "select",
  //   id: "colors",
  //   isMulti: true,
  //   dependentFieldName: "colors",
  //   conditionalOptions: {
  //     red: [
  //       {
  //         value: "red1",
  //         label: "Red 1",
  //       },
  //       {
  //         value: "red2",
  //         label: "Red 2",
  //       },
  //       {
  //         value: "red3",
  //         label: "Red 3",
  //       },
  //     ],
  //     green: [
  //       {
  //         value: "green1",
  //         label: "Green 1",
  //       },
  //       {
  //         value: "green2",
  //         label: "Green 2",
  //       },
  //       {
  //         value: "green3",
  //         label: "Green 3",
  //       },
  //     ],
  //     blue: [
  //       {
  //         value: "blue1",
  //         label: "Blue 1",
  //       },
  //       {
  //         value: "blue2",
  //         label: "Blue 2",
  //       },
  //       {
  //         value: "blue3",
  //         label: "Blue 3",
  //       },
  //     ],
  //   },
  // },

  // Api Call
  // {
  //   label: "Sport",
  //   name: "sport",
  //   inputType: "async-dropdown",
  //   url: "/public/API/sports.json",
  //   wrapperClass: "col-md-6",
  // },
  // {
  //   label: "Sport Teams",
  //   name: "sportTeams",
  //   inputType: "async-dropdown",
  //   url: "/public/API/sportTeams.json",
  //   dependentFieldName: "sport",
  //   wrapperClass: "col-md-6",
  // },

  // Attachments
  {
    label: "Password",
    name: "password",
    inputType: "password",
    wrapperClass: "col-md-6",
    validations:{
      type:'password',
      min:10,
      max:20
    }
  },
  {
    label: "Files Upload",
    name: "attachments",
    inputType: "files",
    wrapperClass: "col-md-6",
    validations:{
      type:'password',
      min:6,
      max:10
    }
  },
  {
    label: "Image Upload",
    name: "image",
    inputType: "image",
    wrapperClass: "col-md-6",
    validations:{
      type:'password',
      min:6,
      max:10
    }
  },
  // {
  //   inputType: "submit",
  //   btnText: "Save",
  //   wrapperClass: "col-12 text-center",
  //   className: "btn-primary mt-5",
  // },
];
