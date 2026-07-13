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

const statusStyles: Record<Admission["status"], string> = {
  pending: "bg-slate-100 text-slate-600",
  admitted: "bg-primary/10 text-primary",
  rejected: "bg-destructive/10 text-destructive",
}

// Reusable field component
const Field = ({ label, value, col2 }: { label: string; value?: string | boolean; col2?: boolean }) =>
  value !== undefined && value !== "" && value !== null ? (
    <div className={col2 ? "col-span-2" : ""}>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-0.5 text-sm text-slate-700">{String(value)}</p>
    </div>
  ) : null

// Reusable section component
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
    <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">{title}</p>
    {children}
  </div>
)

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

            {/* Top identity block */}
            <DialogHeader>
              <div className="flex items-center gap-4">
                <img
                  src={application.childPhoto}
                  alt="Child"
                  className="h-14 w-14 rounded-2xl object-cover ring-2 ring-primary/20"
                />
                <div>
                  <DialogTitle className="text-lg">
                    {application.firstName} {application.surname}
                  </DialogTitle>
                  <DialogDescription className="mt-0.5">
                    Applied {new Date(application.createdAt).toLocaleDateString("en-GB", {
                      day: "numeric", month: "short", year: "numeric",
                    })}
                  </DialogDescription>
                  <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${statusStyles[application.status]}`}>
                    {application.status}
                  </span>
                </div>
              </div>
            </DialogHeader>

            <div className="mt-2 space-y-3 text-sm">

              {/* Child info */}
              <Section title="Child Information">
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Date of Birth" value={new Date(application.dob).toLocaleDateString()} />
                  <Field label="Sex" value={application.sex} />
                  <Field label="Nationality" value={application.nationality} />
                  <Field label="State of Origin" value={application.stateOfOrigin} />
                  <Field label="Blood Group" value={application.bloodGroup} />
                  <Field label="Ailment" value={application.ailment} col2 />
                  <Field label="On Medication" value={application.onMedication} col2 />
                  <Field
                    label="Cries Often"
                    value={application.criesOften
                      ? `Yes${application.criesOftenReason ? ` — ${application.criesOftenReason}` : ""}`
                      : "No"}
                    col2
                  />
                </div>
              </Section>

              {/* Parent info */}
              <Section title="Parent / Guardian">
                <div className="flex items-start gap-4">
                  <img
                    src={application.parentPhoto}
                    alt="Parent"
                    className="h-12 w-12 shrink-0 rounded-xl object-cover ring-2 ring-slate-200"
                  />
                  <div className="grid flex-1 grid-cols-2 gap-3">
                    <Field label="Name" value={application.parentName} />
                    <Field label="Phone" value={application.phone} />
                    <Field label="Email" value={application.email} col2 />
                    <Field label="Occupation" value={application.occupation} col2 />
                    <Field label="Home Address" value={application.homeAddress} col2 />
                    <Field label="Office Address" value={application.officeAddress} col2 />
                  </div>
                </div>
              </Section>

              {/* Pickup & Emergency */}
              <Section title="Pickup & Emergency Contact">
                <div className="flex items-start gap-4">
                  <img
                    src={application.assigneePhoto}
                    alt="Assignee"
                    className="h-12 w-12 shrink-0 rounded-xl object-cover ring-2 ring-slate-200"
                  />
                  <div className="grid flex-1 grid-cols-2 gap-3">
                    <Field label="Authorized Pickup" value={application.assigneeName} col2 />
                    <Field label="Emergency Contact" value={`${application.emergencyName} (${application.emergencyRelationship})`} col2 />
                    <Field label="Emergency Phone" value={application.emergencyPhone} />
                    <Field label="Emergency Address" value={application.emergencyAddress} col2 />
                  </div>
                </div>
              </Section>

              {/* Decision */}
              <Section title="Decision">
                <div className="space-y-3">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Status
                    </label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value as Admission["status"])}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="pending">Pending</option>
                      <option value="admitted">Admitted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </div>

                  {status === "admitted" && (
                    <div>
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Admission Number
                      </label>
                      <input
                        type="text"
                        value={admissionNo}
                        onChange={(e) => setAdmissionNo(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  )}

                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Processed By
                    </label>
                    <input
                      type="text"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  {errorMsg && (
                    <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
                      {errorMsg}
                    </p>
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
              </Section>

            </div>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  )
}

export default AdmissionRow