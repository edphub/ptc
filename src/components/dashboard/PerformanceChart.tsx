interface PerformanceChartProps {
  data: Array<{ month: string; score: number }>;
}

export function PerformanceChart({ data }: PerformanceChartProps) {
  const maxScore = Math.max(...data.map((item) => item.score));

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div>
        <p className="text-sm font-semibold text-slate-100">Performance Trend</p>
        <p className="text-sm text-slate-500">Academic score progression over the semester</p>
      </div>
      <div className="mt-6 flex items-end gap-3 h-44">
        {data.map((point) => {
          const height = Math.round((point.score / maxScore) * 100);
          return (
            <div key={point.month} className="flex-1 text-center">
              <div className="mx-auto h-full w-10 rounded-3xl bg-slate-800">
                <div className="h-full w-full rounded-3xl bg-gradient-to-t from-emerald-500 to-teal-400" style={{ height: `${height}%` }} />
              </div>
              <p className="mt-3 text-xs text-slate-400">{point.month}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
