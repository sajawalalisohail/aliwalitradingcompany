export interface QuoteFormData {
  fullName: string
  companyName?: string
  email: string
  phone: string
  country: string
  cityState: string
  beltType: string
  plyCount: string
  widthValue?: string
  widthUnit?: string
  estimatedQuantity: string
  quantityUnit?: string
  conditionNotes?: string
  acknowledgment: boolean
  photos: File[]
}

export interface GalleryImage {
  id: string
  category: 'loads' | 'rolling' | 'containers' | 'warehouse'
  url: string
  alt: string
  title: string
}

export interface FAQItem {
  question: string
  answer: string
}
