import React from 'react';
import { Mail, MapPin, Calendar, Compass, TreePine, Map } from 'lucide-react';
import { userProfile } from '../data/mockData';

export function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-green-600 h-32"></div>
          <div className="px-6 py-4 relative">
            <div className="absolute -top-16 left-6">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-32 h-32 rounded-full border-4 border-white"
              />
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-800">{userProfile.name}</h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <span>{userProfile.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>{userProfile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>Joined {userProfile.joinedDate}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Compass className="h-5 w-5" />
                  <span>{userProfile.totalTrips} trips completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="p-2 bg-green-100 rounded-full">
                  <TreePine className="h-6 w-6 text-green-600" />
                </span>
                <div>
                  <p className="font-semibold">Eco Warrior</p>
                  <p className="text-sm text-gray-600">Completed 10+ sustainable trips</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="p-2 bg-blue-100 rounded-full">
                  <Map className="h-6 w-6 text-blue-600" />
                </span>
                <div>
                  <p className="font-semibold">Explorer</p>
                  <p className="text-sm text-gray-600">Visited 5+ states</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Preferences</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Favorite Activities</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Trekking</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Homestays</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Wildlife</span>
                </div>
              </div>
              <div>
                <p className="font-semibold">Preferred Regions</p>
                <div className="flex gap-2 mt-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Himalayas</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Western Ghats</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}