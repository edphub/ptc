interface ClassCardProps {
  name: string;
  teacher: string;
  studentCount: number;
  color: string;
}

const colorMap: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-300',
  green: 'bg-emerald-500/10 text-emerald-300',
  purple: 'bg-violet-500/10 text-violet-300',
  orange: 'bg-orange-500/10 text-orange-300',
  teal: 'bg-teal-500/10 text-teal-300',
  pink: 'bg-fuchsia-500/10 text-fuchsia-300',
};

export function ClassCard({ name, teacher, studentCount, color }: ClassCardProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-700 hover:bg-slate-950">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-base font-semibold text-slate-100">{name}</p>
          <p className="mt-2 text-sm text-slate-400">{teacher}</p>
        </div>
        <div className={`rounded-2xl px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${colorMap[color] ?? 'bg-slate-800 text-slate-300'}`}>
          {studentCount} students
        </div>
      </div>
    </div>
  );
}
