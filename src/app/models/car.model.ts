export interface Car {
  carId: number;
  name: string;
  brand: string;
  model: string;
  category?: string;
  pricePerDay: number;
  isAvailable: boolean;
  description?: string;
  imageUrl?: string;
  createdAt: string;
}

