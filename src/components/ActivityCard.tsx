import React from 'react';
import { Calendar, MapPin, Activity } from 'lucide-react';
import { EcoActivity } from '../types';

interface ActivityCardProps {
  activity: EcoActivity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{activity.name}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${
          activity.sustainabilityScore >= 8 ? 'bg-green-100 text-green-800' :
          activity.sustainabilityScore >= 5 ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          Score: {activity.sustainabilityScore}/10
        </span>
      </div>
      
      <div className="space-y-2 text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{activity.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{activity.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4" />
          <span>Carbon Footprint: {activity.carbonFootprint}kg CO2</span>
        </div>
      </div>
      
      <p className="mt-4 text-gray-700">{activity.description}</p>
    </div>
  );
}