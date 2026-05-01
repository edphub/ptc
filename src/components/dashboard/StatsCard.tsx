interface StatsCardProps {
  label: string;
  value: string | number;
  unit?: string;
  change?: number;
  suffix?: string;
}

export function StatsCard({ label, value, unit, change, suffix }: StatsCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-sm shadow-slate-950/30">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{label}</p>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-slate-100">{value}</span>
        {suffix ? <span className="text-sm text-slate-400">{suffix}</span> : null}
      </div>
      {unit ? <p className="mt-2 text-sm text-slate-500">{unit}</p> : null}
      {typeof change === 'number' ? (
        <p className="mt-3 text-sm text-emerald-300">
          {change >= 0 ? '+' : ''}
          {change}% from last week
        </p>
      ) : null}
    </div>
  );
}
