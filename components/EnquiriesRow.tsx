"use client"
import { useAuth } from "@/context/AuthContext"
import { apiCall } from "@/lib/api"
import React, { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Button } from "./ui/button"
import { useFormik } from "formik"
import * as yup from "yup"
import { TableCell, TableRow } from "./ui/table"
import { Loader2 } from "lucide-react"

export type Enquiry = {
  _id: string
  parentName: string
  email: string
  phone: string
  message: string
  isRead: boolean
  replied: boolean
  createdAt: string
}

const EnquiriesRow = ({
  enquiry,
  onMarkedRead,
  onDeleted,
  onReplied,
}: {
  enquiry: Enquiry
  onMarkedRead: (id: string) => void
  onDeleted: (id: string) => void
  onReplied: (id: string) => void
}) => {
  const [open, setOpen] = useState(false)
  const { token } = useAuth()
  const [loading, setLoading] = useState(false)
  const [replyError, setReplyError] = useState("")
  const [deleteError, setDeleteError] = useState("")

  const reply = async (values: Record<string, any>) => {
    setReplyError("")
    setLoading(true)
    try {
      await apiCall({
        method: "POST",
        pathName: `/reply-enquiry/${enquiry._id}`,
        token: token || undefined,
        body: values,
      })
      onReplied(enquiry._id)
      formik.resetForm()
      setOpen(false)
    } catch (error) {
      setReplyError(error instanceof Error ? error.message : "Failed to send reply")
    } finally {
      setLoading(false)
    }
  }

  const deleteMessage = async () => {
    setDeleteError("")
    setLoading(true)
    try {
      await apiCall({
        method: "DELETE",
        pathName: `/delete-enquiry/${enquiry._id}`,
        token: token || undefined,
      })
      onDeleted(enquiry._id)
    } catch (error) {
      setDeleteError(error instanceof Error ? error.message : "Failed to delete")
    } finally {
      setLoading(false)
    }
  }

  const formik = useFormik({
    initialValues: {
      reply: "",
    },
    onSubmit: (values) => reply(values),
    validationSchema: yup.object({
      reply: yup.string().required("Reply message is required"),
    }),
  })

  const handleOpenChange = async (isOpen: boolean) => {
    setOpen(isOpen)
    if (isOpen && !enquiry.isRead) {
      try {
        await apiCall({
          method: "PATCH",
          pathName: `/isRead/${enquiry._id}`,
          token: token || undefined,
        })
        onMarkedRead(enquiry._id)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <TableRow>
      <TableCell>
        {!enquiry.isRead && (
          <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-slate-900">
            Unread
          </span>
        )}
      </TableCell>
      <TableCell>
        {enquiry.replied && (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
            Replied
          </span>
        )}
      </TableCell>
      <TableCell className="font-medium text-foreground">{enquiry.parentName}</TableCell>
      <TableCell className="text-slate-500">{enquiry.email}</TableCell>
      <TableCell className="max-w-xs truncate text-slate-500">{enquiry.message}</TableCell>
      <TableCell className="text-slate-500">
        {new Date(enquiry.createdAt).toLocaleDateString()}
      </TableCell>
      <TableCell>
        <div className="flex justify-end gap-2">
          <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button size="sm">View</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Message from {enquiry.parentName}</DialogTitle>
                <DialogDescription>{enquiry.email} · {enquiry.phone}</DialogDescription>
              </DialogHeader>

              <p className="rounded-lg bg-slate-50 p-3 text-sm text-slate-700">{enquiry.message}</p>

              <form onSubmit={formik.handleSubmit} className="space-y-3 pt-2">
                <div>
                  <label htmlFor="reply" className="mb-1 block text-sm font-medium text-slate-700">
                    Reply
                  </label>
                  <textarea
                    id="reply"
                    name="reply"
                    rows={4}
                    value={formik.values.reply}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full rounded-lg border px-3 py-2 text-sm transition outline-none focus:ring-2 focus:ring-primary/30 ${
                      formik.touched.reply && formik.errors.reply
                        ? "border-destructive"
                        : "border-slate-300 focus:border-primary"
                    }`}
                  />
                  {formik.touched.reply && formik.errors.reply && (
                    <p className="mt-1 text-xs text-destructive">{formik.errors.reply}</p>
                  )}
                </div>

                {replyError && (
                  <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
                    {replyError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    "Send Reply"
                  )}
                </button>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive" size="sm">
                Delete
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure you want to delete this?</DialogTitle>
                <DialogDescription>This is irreversible.</DialogDescription>
              </DialogHeader>

              {deleteError && (
                <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
                  {deleteError}
                </p>
              )}

              <DialogFooter>
                <Button variant="destructive" onClick={deleteMessage} disabled={loading}>
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Deleting
                    </span>
                  ) : (
                    "Delete"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </TableCell>
    </TableRow>
  )
}

export default EnquiriesRow