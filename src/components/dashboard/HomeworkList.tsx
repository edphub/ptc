'use client';

import type { HomeworkItem } from '@/lib/mock-data';
import { HomeworkStatus } from '@/lib/mock-data';

interface HomeworkListProps {
  items: HomeworkItem[];
  onSelect: (assignment: HomeworkItem) => void;
}

const statusStyles: Record<HomeworkStatus, string> = {
  [HomeworkStatus.PENDING]: 'bg-blue-500/10 text-blue-300',
  [HomeworkStatus.COMPLETED]: 'bg-emerald-500/10 text-emerald-300',
  [HomeworkStatus.OVERDUE]: 'bg-red-500/10 text-red-300',
};

export function HomeworkList({ items, onSelect }: HomeworkListProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">Homework & Assignments</p>
          <p className="text-sm text-slate-500">Open any assignment to view details in the drawer</p>
        </div>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
          {items.length} items
        </span>
      </div>
      <div className="space-y-4">
        {items.map((assignment) => {
          const statusClass = statusStyles[assignment.status];
          return (
            <button
              type="button"
              key={assignment.id}
              onClick={() => onSelect(assignment)}
              className="w-full rounded-3xl border border-slate-800 bg-slate-950 p-4 text-left transition hover:border-slate-700 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-slate-100">{assignment.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{assignment.class}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${statusClass}`}>
                  {assignment.status}
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                <span>Due {new Date(assignment.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                <span>{assignment.studentsSubmitted}/{assignment.totalStudents} submissions</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-blue-500"
                  style={{ width: `${Math.round((assignment.studentsSubmitted / assignment.totalStudents) * 100)}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
