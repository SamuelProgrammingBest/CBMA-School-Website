"use client"
import EnquiriesRow, { Enquiry } from '@/components/EnquiriesRow'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useAuth } from '@/context/AuthContext'
import { apiCall } from '@/lib/api'
import { Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const EnquiriesPage = () => {
  const [data, setData] = useState<Enquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState("")
  const { token } = useAuth()

  const markRead = (id: string) =>
    setData((prev) => prev.map((e) => (e._id === id ? { ...e, isRead: true } : e)))

  const removeEnquiry = (id: string) =>
    setData((prev) => prev.filter((e) => e._id !== id))

  const replied = (id: string) =>
    setData((prev) => prev.map((e) => (e._id === id ? { ...e, replied: true } : e)))

  const getEnquiries = async () => {
    setErrorMsg("")
    try {
      const response = await apiCall({
        method: "GET",
        pathName: "/get-enquiries",
        token: token || undefined,
      })
      setData(response.data)
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getEnquiries()
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
        <p className="text-sm text-slate-500">No enquiries yet.</p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="fredoka mb-6 text-2xl font-bold text-foreground">Enquiries</h1>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50 hover:bg-slate-50">
              <TableHead className="text-slate-500"></TableHead>
              <TableHead className="text-slate-500"></TableHead>
              <TableHead className="text-slate-500">Parent</TableHead>
              <TableHead className="text-slate-500">Email</TableHead>
              <TableHead className="text-slate-500">Message</TableHead>
              <TableHead className="text-slate-500">Date</TableHead>
              <TableHead className="text-right text-slate-500">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((e) => (
              <EnquiriesRow
                key={e._id}
                enquiry={e}
                onMarkedRead={markRead}
                onDeleted={removeEnquiry}
                onReplied={replied}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default EnquiriesPage