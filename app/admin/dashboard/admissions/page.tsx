"use client"
import AdmissionRow from "@/components/AdmissionRow"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useAuth } from "@/context/AuthContext"
import { apiCall } from "@/lib/api"
import { Loader2 } from "lucide-react"
import React, { useEffect, useState } from "react"

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

const AdmissionsPage = () => {
  const [data, setData] = useState<Admission[]>([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState("")
  const { token } = useAuth()

  const getApplications = async () => {
    setErrorMsg("")
    try {
      const response = await apiCall({
        method: "GET",
        pathName: "/get-applications",
        token: token || undefined,
      })
      setData(response.data)
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const updateApplication = (updated: Admission) =>
    setData((prev) => prev.map((a) => (a._id === updated._id ? updated : a)))

  useEffect(() => {
    getApplications()
  }, [token])

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-slate-400">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    )
  }

  if (errorMsg) {
    return (
      <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
        {errorMsg} — refresh to try again.
      </p>
    )
  }

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 py-20 text-center">
        <p className="text-sm text-slate-500">No applications yet.</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="fredoka mb-6 text-2xl font-bold text-foreground">Admissions</h1>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50 hover:bg-slate-50">
              <TableHead className="text-slate-500">Child</TableHead>
              <TableHead className="text-slate-500">Parent</TableHead>
              <TableHead className="text-slate-500">Email</TableHead>
              <TableHead className="text-slate-500">Date Applied</TableHead>
              <TableHead className="text-slate-500">Status</TableHead>
              <TableHead className="text-right text-slate-500">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((application) => (
              <AdmissionRow key={application._id} application={application} onUpdated={updateApplication} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default AdmissionsPage