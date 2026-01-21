"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Upload, X, CheckCircle2, Loader2 } from "lucide-react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BELT_TYPES, PLY_COUNTS, QUANTITY_UNITS, WIDTH_UNITS } from "@/lib/constants"
import { formatBytes } from "@/lib/utils"
import type { QuoteFormData } from "@/types"

export function QuoteForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [formData, setFormData] = useState<Partial<QuoteFormData>>({
    beltType: "Plied Rubber (Fabric-Reinforced)",
    widthUnit: "Inches",
    quantityUnit: "Tons",
    acknowledgment: false,
  })

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
    },
    maxSize: 10 * 1024 * 1024,
    onDrop: (acceptedFiles) => {
      setFiles((prev) => [...prev, ...acceptedFiles])
    },
  })

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (files.length === 0) {
      alert("Please upload at least one photo of your belt.")
      return
    }
    if (!formData.acknowledgment) {
      alert("Please confirm the belt type acknowledgment.")
      return
    }

    setIsSubmitting(true)

    try {
      const submitData = new FormData()

      // Convert camelCase keys to snake_case for API
      const keyMapping: Record<string, string> = {
        fullName: "full_name",
        companyName: "company_name",
        cityState: "city_state",
        beltType: "belt_type",
        plyCount: "ply_count",
        widthValue: "width_value",
        widthUnit: "width_unit",
        estimatedQuantity: "estimated_quantity",
        quantityUnit: "quantity_unit",
        conditionNotes: "condition_notes",
      }

      Object.entries(formData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          const apiKey = keyMapping[key] || key
          submitData.append(apiKey, String(value))
        }
      })

      files.forEach((file) => {
        submitData.append("photos", file)
      })

      const response = await fetch("/api/submit-quote", {
        method: "POST",
        body: submitData,
      })

      const responseData = await response.json()

      if (!response.ok) {
        console.error("API Error Response:", responseData)
        throw new Error(responseData.error || "Failed to submit quote")
      }

      setIsSuccess(true)

      setTimeout(() => {
        router.push("/")
      }, 3000)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error"
      console.error("Error submitting quote:", errorMessage)
      alert(`There was an error submitting your quote: ${errorMessage}. Please try again or contact us directly.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Quote Submitted Successfully!</h2>
        <p className="text-lg text-slate-600 mb-4">
          Thank you for your submission. We&apos;ve received your information and photos.
        </p>
        <p className="text-slate-600">
          Our team will review your belt specifications and respond within 24-48 hours.
          For urgent inquiries, please contact us via WhatsApp.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-900">Contact Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              required
              value={formData.fullName || ""}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              value={formData.companyName || ""}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email || ""}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone / WhatsApp *</Label>
            <Input
              id="phone"
              type="tel"
              required
              placeholder="+1 234 567 8900"
              value={formData.phone || ""}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country *</Label>
            <Input
              id="country"
              required
              value={formData.country || ""}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cityState">City / State *</Label>
            <Input
              id="cityState"
              required
              value={formData.cityState || ""}
              onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Belt Specifications */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-slate-900">Belt Specifications</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="beltType">Belt Type *</Label>
            <Select
              value={formData.beltType}
              onValueChange={(value) => setFormData({ ...formData, beltType: value })}
            >
              <SelectTrigger id="beltType">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={BELT_TYPES.plied}>{BELT_TYPES.plied}</SelectItem>
                <SelectItem value={BELT_TYPES.unknown}>{BELT_TYPES.unknown}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="plyCount">Ply Count *</Label>
            <Select
              value={formData.plyCount}
              onValueChange={(value) => setFormData({ ...formData, plyCount: value })}
            >
              <SelectTrigger id="plyCount">
                <SelectValue placeholder="Select ply count" />
              </SelectTrigger>
              <SelectContent>
                {PLY_COUNTS.map((count) => (
                  <SelectItem key={count} value={count}>
                    {count}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Belt Width</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Value"
                value={formData.widthValue || ""}
                onChange={(e) => setFormData({ ...formData, widthValue: e.target.value })}
                className="flex-1"
              />
              <Select
                value={formData.widthUnit}
                onValueChange={(value) => setFormData({ ...formData, widthUnit: value })}
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {WIDTH_UNITS.map((unit) => (
                    <SelectItem key={unit} value={unit}>
                      {unit}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Estimated Quantity</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Value or 'Not sure'"
                value={formData.estimatedQuantity || ""}
                onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                className="flex-1"
              />
              <Select
                value={formData.quantityUnit}
                onValueChange={(value) => setFormData({ ...formData, quantityUnit: value })}
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {QUANTITY_UNITS.map((unit) => (
                    <SelectItem key={unit} value={unit}>
                      {unit}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="conditionNotes">Condition Notes</Label>
          <Textarea
            id="conditionNotes"
            placeholder="Describe the belt condition, any damage, how it was used, etc."
            rows={4}
            value={formData.conditionNotes || ""}
            onChange={(e) => setFormData({ ...formData, conditionNotes: e.target.value })}
          />
        </div>
      </div>

      {/* Photo Upload */}
      <div className="space-y-4">
        <div>
          <Label>Photos * (Required - Multiple photos recommended)</Label>
          <p className="text-sm text-slate-500 mt-1">
            Clear photos help us provide accurate evaluations. Include overall views, close-ups of condition, and ply layers if visible.
          </p>
        </div>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive
              ? "border-primary bg-primary/5"
              : "border-slate-300 hover:border-primary"
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="h-12 w-12 mx-auto text-slate-400 mb-4" />
          {isDragActive ? (
            <p className="text-slate-600">Drop photos here...</p>
          ) : (
            <>
              <p className="text-slate-600 mb-2">
                Drag & drop photos here, or click to browse
              </p>
              <p className="text-sm text-slate-500">
                Supports: JPG, PNG, WebP (Max 10MB per file)
              </p>
            </>
          )}
        </div>

        {files.length > 0 && (
          <div className="space-y-2">
            <Label>Uploaded Photos ({files.length})</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {files.map((file, idx) => (
                <div key={idx} className="relative group">
                  <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={`Upload ${idx + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(idx)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-slate-500 mt-1 truncate">
                    {file.name} ({formatBytes(file.size)})
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Acknowledgment */}
      <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
        <Checkbox
          id="acknowledgment"
          checked={formData.acknowledgment}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, acknowledgment: checked as boolean })
          }
        />
        <div className="space-y-1">
          <Label htmlFor="acknowledgment" className="font-medium cursor-pointer">
            I confirm this is NOT steel-reinforced / steel cord (or I&apos;m not sure and need verification)
          </Label>
          <p className="text-sm text-slate-600">
            We only purchase plied rubber belts. If you&apos;re unsure, we&apos;ll help identify your belt type.
          </p>
        </div>
      </div>

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
            Submitting Quote...
          </>
        ) : (
          "Submit Quote Request"
        )}
      </Button>

      <p className="text-sm text-slate-500 text-center">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="text-primary hover:underline">
          Terms of Service
        </a>
      </p>
    </form>
  )
}
