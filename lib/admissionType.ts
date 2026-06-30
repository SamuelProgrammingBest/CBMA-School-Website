export type Admission = {
  _id: string
  surname: string
  middleName?: string
  firstName: string
  dob: string
  sex: string
  nationality: string
  stateOfOrigin: string
  bloodGroup?: string
  ailment?: string
  onMedication?: string
  criesOften: boolean
  criesOftenReason?: string
  childPhoto: string

  parentName: string
  homeAddress: string
  phone: string
  occupation: string
  officeAddress?: string
  officePhone?: string
  email: string
  parentPhoto: string

  assigneeName: string
  assigneePhoto: string

  emergencyName: string
  emergencyRelationship: string
  emergencyOccupation?: string
  emergencyAddress: string
  emergencyPhone: string

  signedName: string
  status: "pending" | "admitted" | "rejected"
  admissionNo?: string
  designation?: string
  createdAt: string
}