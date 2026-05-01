export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-50">Dashboard</h1>
        <p className="text-slate-400 mt-2">Welcome to the PTC Dashboard</p>
      </div>

      {/* Main Content Placeholder */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-100 mb-2">Main</h2>
          <p className="text-slate-400">Dashboard content will be implemented in Phase 2</p>
        </div>
      </div>
    </div>
  );
}
