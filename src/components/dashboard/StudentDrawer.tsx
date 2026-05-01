import { GraduationCap } from 'lucide-react';

interface StudentDrawerProps {
  student: {
    id: string;
    name: string;
    attendancePercent: number;
    grade: string;
    status: string;
  };
  className: string;
}

export function StudentDrawer({ student, className }: StudentDrawerProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 rounded-3xl bg-slate-950 p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-800 text-slate-100">
          <GraduationCap size={24} />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Student profile</p>
          <p className="text-xl font-semibold text-slate-100">{student.name}</p>
          <p className="text-sm text-slate-400">{className}</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Attendance</p>
          <p className="mt-2 text-sm text-slate-100">{student.attendancePercent}%</p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Grade</p>
          <p className="mt-2 text-sm text-slate-100">{student.grade}</p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Status</p>
          <p className="mt-2 text-sm text-slate-100">{student.status}</p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
        <p className="text-sm font-semibold text-slate-100">Student details</p>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          This student is currently marked active and is performing according to the grade indicated.
        </p>
      </div>
    </div>
  );
}
