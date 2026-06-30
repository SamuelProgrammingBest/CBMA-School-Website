"use client"
import { useAuth } from "@/context/AuthContext"
import { apiCall } from "@/lib/api"
import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { TableCell, TableRow } from "./ui/table"
import { Loader2 } from "lucide-react"
import { Admission } from "@/lib/admissionType"
// import { Admission } from "./AdmissionsPage"

const statusStyles: Record<Admission["status"], string> = {
  pending: "bg-slate-100 text-slate-600",
  admitted: "bg-primary/10 text-primary",
  rejected: "bg-destructive/10 text-destructive",
}

const AdmissionRow = ({
  application,
  onUpdated,
}: {
  application: Admission
  onUpdated: (updated: Admission) => void
}) => {
  const { token } = useAuth()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const [status, setStatus] = useState(application.status)
  const [admissionNo, setAdmissionNo] = useState(application.admissionNo || "")
  const [designation, setDesignation] = useState(application.designation || "")

  const saveDecision = async () => {
    setErrorMsg("")
    setLoading(true)
    try {
      const response = await apiCall({
        method: "PATCH",
        pathName: `/update-application-status/${application._id}`,
        token: token || undefined,
        body: { status, admissionNo, designation },
      })
      onUpdated(response.data)
      setOpen(false)
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "Failed to update")
    } finally {
      setLoading(false)
    }
  }

  return (
    <TableRow>
      <TableCell className="font-medium text-foreground">
        {application.firstName} {application.surname}
      </TableCell>
      <TableCell className="text-slate-500">{application.parentName}</TableCell>
      <TableCell className="text-slate-500">{application.email}</TableCell>
      <TableCell className="text-slate-500">
        {new Date(application.createdAt).toLocaleDateString()}
      </TableCell>
      <TableCell>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusStyles[application.status]}`}>
          {application.status}
        </span>
      </TableCell>
      <TableCell>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm">View</Button>
          </DialogTrigger>
          <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{application.firstName} {application.surname}</DialogTitle>
              <DialogDescription>
                Applied {new Date(application.createdAt).toLocaleDateString()}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-5 text-sm">
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Child Information</h3>
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <p>DOB: {new Date(application.dob).toLocaleDateString()}</p>
                  <p>Sex: {application.sex}</p>
                  <p>Nationality: {application.nationality}</p>
                  <p>State of Origin: {application.stateOfOrigin}</p>
                  {application.bloodGroup && <p>Blood Group: {application.bloodGroup}</p>}
                  {application.ailment && <p className="col-span-2">Ailment: {application.ailment}</p>}
                  {application.onMedication && <p className="col-span-2">Medication: {application.onMedication}</p>}
                  <p className="col-span-2">
                    Cries Often: {application.criesOften ? "Yes" : "No"}
                    {application.criesOftenReason && ` — ${application.criesOftenReason}`}
                  </p>
                </div>
                <img src={application.childPhoto} alt="Child" className="mt-2 h-24 w-24 rounded-lg object-cover" />
              </div>

              <div className="border-t border-slate-100 pt-4">
                <h3 className="mb-2 font-semibold text-foreground">Parent / Guardian</h3>
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <p>Phone: {application.phone}</p>
                  <p>Email: {application.email}</p>
                  <p>Occupation: {application.occupation}</p>
                  <p className="col-span-2">Address: {application.homeAddress}</p>
                  {application.officeAddress && <p className="col-span-2">Office: {application.officeAddress}</p>}
                </div>
                <img src={application.parentPhoto} alt="Parent" className="mt-2 h-24 w-24 rounded-lg object-cover" />
              </div>

              <div className="border-t border-slate-100 pt-4">
                <h3 className="mb-2 font-semibold text-foreground">Pickup & Emergency Contact</h3>
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <p>Authorized: {application.assigneeName}</p>
                  <p>Emergency: {application.emergencyName} ({application.emergencyRelationship})</p>
                  <p className="col-span-2">Emergency Address: {application.emergencyAddress}</p>
                  <p>Emergency Phone: {application.emergencyPhone}</p>
                </div>
                <img src={application.assigneePhoto} alt="Assignee" className="mt-2 h-24 w-24 rounded-lg object-cover" />
              </div>

              <div className="border-t border-slate-100 pt-4">
                <h3 className="mb-3 font-semibold text-foreground">Decision</h3>
                <div className="space-y-3">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Status</label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value as Admission["status"])}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="pending">Pending</option>
                      <option value="admitted">Admitted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>

                  {status === "admitted" && (
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">Admission Number</label>
                      <input
                        type="text"
                        value={admissionNo}
                        onChange={(e) => setAdmissionNo(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  )}

                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">Processed By</label>
                    <input
                      type="text"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  {errorMsg && (
                    <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{errorMsg}</p>
                  )}

                  <button
                    onClick={saveDecision}
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Saving
                      </>
                    ) : (
                      "Save Decision"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  )
}

export default AdmissionRow