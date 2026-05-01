import { BookOpen } from 'lucide-react';
import { DrawerContent } from '@/components/drawer/DrawerContent';
import { DrawerHeader } from '@/components/drawer/DrawerHeader';
import type { HomeworkItem } from '@/lib/mock-data';

interface AssignmentDrawerProps {
  assignment: HomeworkItem;
}

export function AssignmentDrawer({ assignment }: AssignmentDrawerProps) {
  const dueDate = new Date(assignment.dueDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const submissionPercentage = Math.round(
    (assignment.studentsSubmitted / assignment.totalStudents) * 100,
  );

  return (
    <div className="space-y-6">
      <DrawerHeader
        icon={<BookOpen className="h-5 w-5" />}
        title={assignment.title}
        subtitle={assignment.class}
      />

      <DrawerContent>
        <div className="grid gap-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Due Date</p>
            <p className="mt-3 text-lg font-semibold text-slate-100">{dueDate}</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Submissions</p>
                <p className="mt-3 text-lg font-semibold text-slate-100">
                  {assignment.studentsSubmitted} / {assignment.totalStudents}
                </p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                {submissionPercentage}%
              </span>
            </div>

            <div className="mt-4 rounded-full bg-slate-800 p-1">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                style={{ width: `${submissionPercentage}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">Submission Progress</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Status</p>
            <p className="mt-3 text-base font-semibold text-slate-100">{assignment.status}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-sm font-medium text-slate-100">Assignment overview</p>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            This drawer shows the selected assignment details and actions without leaving the dashboard. Use the reminder or view details actions to continue the workflow.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500">
            Send Reminder
          </button>
          <button className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-600 hover:text-white">
            View Details
          </button>
        </div>
      </DrawerContent>
    </div>
  );
}
