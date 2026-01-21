"use client"

import { useEffect, useState, useCallback } from "react"
import { supabase, type Lead, type LeadPhoto } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { COMPANY_NAME } from "@/lib/constants"

export default function AdminDashboard() {
  const [leads, setLeads] = useState<(Lead & { photos: LeadPhoto[] })[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  const checkAuth = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      router.push("/admin/login")
      return
    }

    const allowedEmails = [
      "admin@aliwalitradingco.com",
      // Add more admin emails as needed
    ]

    if (!allowedEmails.includes(user.email || "")) {
      await supabase.auth.signOut()
      router.push("/admin/login")
      return
    }

    setUser(user)
    loadLeads()
  }, [router])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  const loadLeads = async () => {
    try {
      const { data: leadsData } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false })

      if (leadsData) {
        const leadsWithPhotos = await Promise.all(
          leadsData.map(async (lead) => {
            const { data: photos } = await supabase
              .from("lead_photos")
              .select("*")
              .eq("lead_id", lead.id)
            return { ...lead, photos: photos || [] }
          })
        )
        setLeads(leadsWithPhotos)
      }
    } catch (error) {
      console.error("Error loading leads:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-slate-600">Loading dashboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <div className="border-b border-slate-200 sticky top-0 bg-white z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-900">
              {COMPANY_NAME}
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600 hidden sm:inline">{user?.email}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-slate-900 text-white text-sm rounded-lg hover:bg-slate-800"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Lead Submissions</h1>
          <p className="text-slate-600">
            {leads.length === 0 ? "No submissions yet" : `${leads.length} total submissions`}
          </p>
        </div>

        {leads.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
            <p className="text-slate-600">No lead submissions yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{lead.full_name}</h3>
                    <p className="text-slate-600">{lead.company_name || "No company"}</p>
                    <p className="text-sm text-slate-500">{formatDate(lead.created_at!)}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4 p-4 bg-slate-50 rounded-lg">
                  <div>
                    <p className="text-xs font-medium text-slate-600 mb-1">Email</p>
                    <a href={`mailto:${lead.email}`} className="text-blue-900 hover:underline">
                      {lead.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-600 mb-1">Phone</p>
                    <a href={`tel:${lead.phone}`} className="text-blue-900 hover:underline">
                      {lead.phone}
                    </a>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-medium text-slate-600 mb-1">Location</p>
                    <p className="text-slate-900">{lead.city_state}, {lead.country}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-600 mb-1">Belt Type</p>
                    <p className="text-slate-900">{lead.belt_type}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-600 mb-1">Ply Count</p>
                    <p className="text-slate-900">{lead.ply_count}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-600 mb-1">Quantity</p>
                    <p className="text-slate-900">{lead.estimated_quantity} {lead.quantity_unit}</p>
                  </div>
                </div>

                {lead.condition_notes && (
                  <div className="mb-4">
                    <p className="text-xs font-medium text-slate-600 mb-1">Condition Notes</p>
                    <p className="text-slate-900">{lead.condition_notes}</p>
                  </div>
                )}

                {lead.photos && lead.photos.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-slate-600 mb-2">Photos</p>
                    <div className="flex gap-2 flex-wrap">
                      {lead.photos.map((photo) => (
                        <a key={photo.id} href={photo.url} target="_blank" rel="noopener noreferrer">
                          <img
                            src={photo.url}
                            alt={photo.filename}
                            className="w-24 h-24 object-cover rounded-lg border border-slate-200 hover:opacity-80"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
