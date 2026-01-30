export interface TourPackage {
  tourId: number;           // Matches TourId in C#
  title: string;            // Tour title
  location: string;         // Location of the tour
  durationDays: number;     // Duration in days
  fixedPrice: number;       // Full price for the tour
  description?: string;     // Optional description
  isActive: boolean;        // Active / Inactive
  imageUrl?: string;        // Optional image URL
  createdAt: string;        // ISO string from backend
}
