'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LayoutGrid,
  MessageSquare,
  Calendar,
  Users,
  BookOpen,
  BarChart3,
  Bell,
  Building2,
  Settings,
  ChevronLeft,
  ChevronRight,
  Star,
  FileText,
  X,
} from 'lucide-react';
import {
  currentUser,
  favoriteCollections,
  recentCollections,
} from '@/lib/mock-data';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  section: 'main' | 'system';
}

const navItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <LayoutGrid className="h-4 w-4" />,
    href: '/dashboard',
    section: 'main',
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: <MessageSquare className="h-4 w-4" />,
    href: '/dashboard/messages',
    section: 'main',
  },
  {
    id: 'events',
    label: 'Events',
    icon: <Calendar className="h-4 w-4" />,
    href: '/dashboard/events',
    section: 'main',
  },
  {
    id: 'students',
    label: 'Students',
    icon: <Users className="h-4 w-4" />,
    href: '/dashboard/students',
    section: 'main',
  },
  {
    id: 'homework',
    label: 'Homework',
    icon: <BookOpen className="h-4 w-4" />,
    href: '/dashboard/homework',
    section: 'main',
  },
  {
    id: 'performance',
    label: 'Performance',
    icon: <BarChart3 className="h-4 w-4" />,
    href: '/dashboard/performance',
    section: 'main',
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <Bell className="h-4 w-4" />,
    href: '/dashboard/notifications',
    section: 'system',
  },
  {
    id: 'schools',
    label: 'Schools',
    icon: <Building2 className="h-4 w-4" />,
    href: '/dashboard/schools',
    section: 'system',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings className="h-4 w-4" />,
    href: '/dashboard/settings',
    section: 'system',
  },
];

interface SidebarProps {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export function Sidebar({ mobileOpen = false, onCloseMobile }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const mainItems = navItems.filter((item) => item.section === 'main');
  const systemItems = navItems.filter((item) => item.section === 'system');

  const SidebarContent = () => (
    <>
      {/* Header with Toggle */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-slate-800">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-blue-500 flex-shrink-0" />
            <div className="flex flex-col">
              <h1 className="font-bold text-white text-sm leading-tight">
                Parent Teacher
              </h1>
              <h1 className="font-bold text-white text-sm leading-tight">
                Communication
              </h1>
            </div>
          </div>
        )}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:inline p-1 hover:bg-slate-800 rounded transition-colors"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4 text-slate-400" />
            ) : (
              <ChevronLeft className="h-4 w-4 text-slate-400" />
            )}
          </button>
          {onCloseMobile && (
            <button
              onClick={onCloseMobile}
              className="md:hidden p-1 hover:bg-slate-800 rounded transition-colors"
              aria-label="Close sidebar"
            >
              <X className="h-4 w-4 text-slate-400" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation Content */}
      <div className="flex-1 overflow-y-auto py-6">
        {/* Main Navigation */}
        <div className="mb-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 mb-3">
            {isCollapsed ? '' : 'Main'}
          </p>
          <div className="space-y-1 px-3">
            {mainItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded transition-colors"
                title={isCollapsed ? item.label : undefined}
                onClick={onCloseMobile}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            ))}
          </div>
        </div>

        {/* Favorite Collections */}
        {!isCollapsed && (
          <div className="mb-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 mb-3 flex items-center gap-2">
              <Star className="h-3 w-3" />
              Favorites
            </p>
            <div className="space-y-1 px-3">
              {favoriteCollections.map((collection) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.id}`}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded transition-colors truncate"
                  title={collection.name}
                  onClick={onCloseMobile}
                >
                  <FileText className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{collection.name}</span>
                  <span className="text-xs text-slate-500 flex-shrink-0 ml-auto">
                    {collection.itemCount}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Recent Collections */}
        {!isCollapsed && (
          <div className="mb-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 mb-3">
              Recent
            </p>
            <div className="space-y-1 px-3">
              {recentCollections.map((collection) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.id}`}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded transition-colors truncate"
                  title={collection.name}
                  onClick={onCloseMobile}
                >
                  <FileText className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{collection.name}</span>
                  <span className="text-xs text-slate-500 flex-shrink-0 ml-auto">
                    {collection.itemCount}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* System Navigation */}
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-6 mb-3">
            {isCollapsed ? '' : 'System'}
          </p>
          <div className="space-y-1 px-3">
            {systemItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded transition-colors"
                title={isCollapsed ? item.label : undefined}
                onClick={onCloseMobile}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* User Avatar Area */}
      <div className="border-t border-slate-800 p-4">
        {isCollapsed ? (
          <div className="flex justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-semibold text-white">
              {currentUser.avatar}
            </div>
          </div>
        ) : (
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded transition-colors"
            onClick={onCloseMobile}
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-semibold text-white flex-shrink-0">
              {currentUser.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-100 truncate">
                {currentUser.name}
              </p>
              <p className="text-xs text-slate-400 truncate">
                {currentUser.email}
              </p>
            </div>
          </Link>
        )}
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col border-r border-slate-800 bg-slate-900 transition-all duration-300 ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={onCloseMobile}
          />
          {/* Drawer */}
          <aside className="md:hidden fixed left-0 top-0 h-screen w-64 z-50 bg-slate-900 border-r border-slate-800 flex flex-col overflow-y-auto">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  );
}
