import React from 'react';
import { BarChart, TreesIcon, Car } from 'lucide-react';
import { ActivityCard } from './ActivityCard';
import { EcoActivity, Stats } from '../types';

const mockActivities: EcoActivity[] = [
  {
    id: '1',
    name: 'Hiking in National Park',
    location: 'Yosemite, CA',
    carbonFootprint: 2.5,
    sustainabilityScore: 9,
    description: 'A day of hiking using public transport to reach the park.',
    date: '2024-03-15',
    type: 'activity'
  },
  {
    id: '2',
    name: 'Eco-Lodge Stay',
    location: 'Costa Rica',
    carbonFootprint: 5,
    sustainabilityScore: 8,
    description: 'Three nights at a solar-powered eco-lodge in the rainforest.',
    date: '2024-03-10',
    type: 'accommodation'
  }
];

const stats: Stats = {
  totalCarbonFootprint: 7.5,
  averageSustainabilityScore: 8.5,
  activitiesCount: 2
};

export function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-50 p-6 rounded-lg shadow">
          <div className="flex items-center gap-3">
            <TreesIcon className="h-8 w-8 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Sustainability Score</h3>
              <p className="text-2xl font-bold text-green-600">{stats.averageSustainabilityScore}/10</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <div className="flex items-center gap-3">
            <Car className="h-8 w-8 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Carbon Footprint</h3>
              <p className="text-2xl font-bold text-blue-600">{stats.totalCarbonFootprint}kg CO2</p>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg shadow">
          <div className="flex items-center gap-3">
            <BarChart className="h-8 w-8 text-purple-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Activities Tracked</h3>
              <p className="text-2xl font-bold text-purple-600">{stats.activitiesCount}</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockActivities.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}