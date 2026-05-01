import { TopBar } from '@/components/dashboard/top-bar';
import { MessageSquare } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col bg-slate-950">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-slate-800 bg-slate-900 flex flex-col">
          {/* App Branding */}
          <div className="flex items-center gap-3 px-6 py-6 border-b border-slate-800">
            <MessageSquare className="h-6 w-6 text-blue-500" />
            <div className="flex flex-col">
              <h1 className="font-bold text-white text-sm leading-tight">
                Parent Teacher
              </h1>
              <h1 className="font-bold text-white text-sm leading-tight">
                Communication
              </h1>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 p-6">
            <p className="text-slate-400 text-sm">Navigation coming in Phase 2</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
