'use client';

import { Search, Plus } from 'lucide-react';

export function TopBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4 ml-6">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            <Plus className="h-4 w-4" />
            New Item
          </button>
        </div>
      </div>
    </div>
  );
}
