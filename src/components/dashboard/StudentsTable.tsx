interface StudentRow {
  id: string;
  name: string;
  className: string;
  attendancePercent: number;
  grade: string;
  status: string;
}

interface StudentsTableProps {
  students: StudentRow[];
}

export function StudentsTable({ students }: StudentsTableProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 overflow-x-auto">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">Students Overview</p>
          <p className="text-sm text-slate-500">Performance and attendance at a glance</p>
        </div>
      </div>
      <table className="min-w-full table-auto border-separate border-spacing-y-3">
        <thead>
          <tr className="text-left text-xs uppercase tracking-[0.24em] text-slate-500">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Class</th>
            <th className="px-4 py-3">Attendance</th>
            <th className="px-4 py-3">Grade</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="rounded-3xl border border-slate-800 bg-slate-950">
              <td className="px-4 py-4 text-sm text-slate-100">{student.name}</td>
              <td className="px-4 py-4 text-sm text-slate-400">{student.className}</td>
              <td className="px-4 py-4 text-sm text-slate-400">{student.attendancePercent}%</td>
              <td className="px-4 py-4 text-sm font-semibold text-slate-100">{student.grade}</td>
              <td className="px-4 py-4 text-sm text-emerald-300">{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
