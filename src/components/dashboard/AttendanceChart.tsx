interface AttendanceChartProps {
  data: Array<{ day: string; present: number; absent: number }>;
}

export function AttendanceChart({ data }: AttendanceChartProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">Weekly Attendance</p>
          <p className="text-sm text-slate-500">Present vs absent trend this week</p>
        </div>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
          5 days
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {data.map((point) => {
          const total = point.present + point.absent;
          const presentWidth = Math.round((point.present / total) * 100);
          return (
            <div key={point.day} className="space-y-2">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>{point.day}</span>
                <span>{point.present} present</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-blue-500" style={{ width: `${presentWidth}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
