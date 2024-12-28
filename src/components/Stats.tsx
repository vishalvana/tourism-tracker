import React from 'react';
import { BarChart, TreePine, Car, IndianRupee, Map } from 'lucide-react';
import { stats } from '../data/mockData';

export function Stats() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Travel Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 p-6 rounded-lg shadow">
          <div className="flex items-center gap-3">
            <TreePine className="h-8 w-8 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Eco Score</h3>
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
            <IndianRupee className="h-8 w-8 text-purple-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Total Spent</h3>
              <p className="text-2xl font-bold text-purple-600">₹{stats.totalSpent}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Travel Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Activities</span>
              <span className="font-semibold">{stats.activitiesCount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Most Visited State</span>
              <span className="font-semibold">{stats.mostVisitedState}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Cost per Activity</span>
              <span className="font-semibold">₹{Math.round(stats.totalSpent / stats.activitiesCount)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Sustainability Impact</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Trees Saved</span>
              <span className="font-semibold">{Math.round(stats.totalCarbonFootprint * 0.5)} trees</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Water Saved</span>
              <span className="font-semibold">{Math.round(stats.totalCarbonFootprint * 100)} liters</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Eco-Rating</span>
              <span className="font-semibold text-green-600">Excellent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}