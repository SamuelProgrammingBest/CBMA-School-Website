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
import { TableCell, TableRow } from "./ui/table"
import { Loader2, Mail, Phone, User } from "lucide-react"

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
  const [deleteError, setDeleteError] = useState("")

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
      setDeleteError(
        error instanceof Error ? error.message : "Failed to delete"
      )
    } finally {
      setLoading(false)
    }
  }

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
      <TableCell className="font-medium text-foreground">
        {enquiry.parentName}
      </TableCell>
      <TableCell className="text-slate-500">{enquiry.email}</TableCell>
      <TableCell className="max-w-xs truncate text-slate-500">
        {enquiry.message}
      </TableCell>
      <TableCell className="text-slate-500">
        {new Date(enquiry.createdAt).toLocaleDateString()}
      </TableCell>
      <TableCell>
        <div className="flex justify-end gap-2">
          {/* View Dialog */}
          <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button size="sm">View</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md overflow-hidden p-0">
              <DialogTitle className="hidden">
                Enquiry Details
              </DialogTitle>
              {/* Header */}
              <div className="flex items-center gap-3 bg-primary px-4 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {enquiry.parentName}
                  </p>
                  <p className="text-xs text-white/70">
                    {enquiry.email} · {enquiry.phone}
                  </p>
                </div>
              </div>

              {/* Chat area */}
              {/* Message area */}
              <div className="px-4 py-6">
                <p className="mb-2 text-xs font-semibold tracking-wide text-slate-400 uppercase">
                  Message
                </p>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4">
                  <p className="text-sm leading-relaxed text-slate-700">
                    {enquiry.message}
                  </p>
                  <p className="mt-3 text-right text-[10px] text-slate-400">
                    {new Date(enquiry.createdAt).toLocaleDateString("en-GB", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    ·{" "}
                    {new Date(enquiry.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Delete Dialog */}
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
                <Button
                  variant="destructive"
                  onClick={deleteMessage}
                  disabled={loading}
                >
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
