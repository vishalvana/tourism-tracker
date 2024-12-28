import React from 'react';
import { Leaf, UserCircle } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'add', label: 'Add Activity' },
    { id: 'stats', label: 'Stats' },
    { id: 'profile', label: 'Profile' }
  ];

  return (
    <header className="bg-green-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-8 w-8" />
          <h1 className="text-2xl font-bold">EcoYatra</h1>
        </div>
        <nav className="space-x-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`hover:text-green-200 transition-colors ${
                currentPage === item.id ? 'text-green-200' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}