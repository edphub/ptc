import { TopBar } from '@/components/dashboard/top-bar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col bg-slate-950">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Placeholder */}
        <aside className="w-64 border-r border-slate-800 bg-slate-900 p-6">
          <h2 className="text-lg font-semibold text-slate-100">Sidebar</h2>
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
