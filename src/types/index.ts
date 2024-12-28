export interface EcoActivity {
  id: string;
  name: string;
  location: string;
  state: string;
  carbonFootprint: number;
  sustainabilityScore: number;
  description: string;
  date: string;
  type: 'transportation' | 'accommodation' | 'activity';
  cost: number;
}

export interface UserProfile {
  name: string;
  email: string;
  location: string;
  totalTrips: number;
  joinedDate: string;
  avatar?: string;
}

export interface Stats {
  totalCarbonFootprint: number;
  averageSustainabilityScore: number;
  activitiesCount: number;
  totalSpent: number;
  mostVisitedState: string;
}