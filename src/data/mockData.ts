import { EcoActivity, UserProfile, Stats } from '../types';

export const mockActivities: EcoActivity[] = [
  {
    id: '1',
    name: 'Valley of Flowers Trek',
    location: 'Uttarakhand',
    state: 'Uttarakhand',
    carbonFootprint: 1.5,
    sustainabilityScore: 9,
    description: 'A pristine trek through the UNESCO World Heritage site using local guides.',
    date: '2024-03-15',
    type: 'activity',
    cost: 3500
  },
  {
    id: '2',
    name: 'Organic Farm Stay',
    location: 'Coorg, Karnataka',
    state: 'Karnataka',
    carbonFootprint: 2,
    sustainabilityScore: 9,
    description: 'Traditional homestay experience in a coffee plantation using solar power.',
    date: '2024-03-10',
    type: 'accommodation',
    cost: 4500
  },
  {
    id: '3',
    name: 'Electric Vehicle Tour',
    location: 'Jaipur',
    state: 'Rajasthan',
    carbonFootprint: 0.5,
    sustainabilityScore: 10,
    description: 'City tour in electric vehicles visiting heritage sites.',
    date: '2024-03-05',
    type: 'transportation',
    cost: 2000
  }
];

export const userProfile: UserProfile = {
  name: 'Vishal Vana',
  email: 'vishalVana@email.com',
  location: 'Haryana',
  totalTrips: 12,
  joinedDate: '2024-01-15',
  avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
};

export const stats: Stats = {
  totalCarbonFootprint: 4,
  averageSustainabilityScore: 9.3,
  activitiesCount: 3,
  totalSpent: 10000,
  mostVisitedState: 'Uttarakhand'
};