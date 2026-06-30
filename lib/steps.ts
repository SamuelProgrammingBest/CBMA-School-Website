import * as yup from "yup"

export type FieldType = "text" | "date" | "select" | "textarea" | "checkbox" | "file"

export type FieldConfig = {
  name: string
  label: string
  type: FieldType
  options?: string[]                      // only used by "select"
  showIf?: (values: any) => boolean       // only used by conditional fields
}

export const steps: { title: string; fields: FieldConfig[] }[] = [
  {
    title: "Child Information",
    fields: [
      { name: "surname", label: "Surname", type: "text" },
      { name: "middleName", label: "Middle Name", type: "text" },
      { name: "firstName", label: "First Name", type: "text" },
      { name: "dob", label: "Date of Birth", type: "date" },
      { name: "sex", label: "Sex", type: "select", options: ["Male", "Female"] },
      { name: "nationality", label: "Nationality", type: "text" },
      { name: "stateOfOrigin", label: "State of Origin", type: "text" },
      { name: "bloodGroup", label: "Blood Group", type: "text" },
      { name: "ailment", label: "Any Particular Ailment", type: "textarea" },
      { name: "onMedication", label: "Is the Child on Medication?", type: "text" },
      { name: "criesOften", label: "Does the Child Cry Often?", type: "checkbox" },
      {
        name: "criesOftenReason",
        label: "If Yes, Reason",
        type: "text",
        showIf: (values) => values.criesOften === true,
      },
      { name: "childPhoto", label: "Child's Passport Photo", type: "file" },
    ],
  },
  {
    title: "Parent / Guardian Information",
    fields: [
      { name: "parentName", label: "Parent's Name / Guardian", type: "text" },
      { name: "homeAddress", label: "Home Address", type: "text" },
      { name: "phone", label: "Phone Number", type: "text" },
      { name: "occupation", label: "Occupation", type: "text" },
      { name: "officeAddress", label: "Office Address", type: "text" },
      { name: "officePhone", label: "Office Phone", type: "text" },
      { name: "email", label: "Email Address", type: "text" },
      { name: "parentPhoto", label: "Parent's Photo", type: "file" },
    ],
  },
  {
    title: "Pickup Authorization & Emergency Contact",
    fields: [
      { name: "assigneeName", label: "Authorized to Pick Up Child (Name)", type: "text" },
      { name: "assigneePhoto", label: "Assignee's Photo", type: "file" },
      { name: "emergencyName", label: "Emergency Contact Name", type: "text" },
      { name: "emergencyRelationship", label: "Relationship", type: "text" },
      { name: "emergencyOccupation", label: "Occupation", type: "text" },
      { name: "emergencyAddress", label: "Address", type: "text" },
      { name: "emergencyPhone", label: "Phone Number", type: "text" },
    ],
  },
  {
    title: "Review & Certify",
    fields: [
      { name: "signedName", label: "Type Your Full Name to Sign", type: "text" },
      { name: "certifiedAccurate", label: "I certify the information above is accurate", type: "checkbox" },
    ],
  },
]

export const validationSchema = yup.object({
  surname: yup.string().required("Surname is required"),
  firstName: yup.string().required("First name is required"),
  dob: yup.string().required("Date of birth is required"),
  sex: yup.string().required("Sex is required"),
  nationality: yup.string().required("Nationality is required"),
  stateOfOrigin: yup.string().required("State of origin is required"),
  criesOften: yup.boolean(),
  criesOftenReason: yup.string().when("criesOften", {
    is: true,
    then: (schema) => schema.required("Please give a reason"),
  }),
  childPhoto: yup.mixed().required("Child's photo is required").test("fileType", "Unsupported file format", (value) => {
    const file = value as File
    return file && ["image/jpeg", "image/png", "image/webp"].includes(file.type)
  }),

  parentName: yup.string().required("Parent's name is required"),
  homeAddress: yup.string().required("Home address is required"),
  phone: yup.string().required("Phone number is required"),
  occupation: yup.string().required("Occupation is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  parentPhoto: yup.mixed().required("Parent's photo is required").test("fileType", "Unsupported file format", (value) => {
    const file = value as File
    return file && ["image/jpeg", "image/png", "image/webp"].includes(file.type)
  }),

  assigneeName: yup.string().required("Assignee's name is required"),
  assigneePhoto: yup.mixed().required("Assignee's photo is required").test("fileType", "Unsupported file format", (value) => {
    const file = value as File
    return file && ["image/jpeg", "image/png", "image/webp"].includes(file.type)
  }),
  emergencyName: yup.string().required("Emergency contact name is required"),
  emergencyRelationship: yup.string().required("Relationship is required"),
  emergencyAddress: yup.string().required("Address is required"),
  emergencyPhone: yup.string().required("Phone number is required"),

  signedName: yup.string().required("Please type your name to sign"),
  certifiedAccurate: yup.boolean().oneOf([true], "You must certify the information is accurate"),
})