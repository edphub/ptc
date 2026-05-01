'use client';

import { useState } from 'react';
import { AppDrawer } from '@/components/drawer/AppDrawer';
import { AssignmentDrawer } from '@/components/dashboard/AssignmentDrawer';
import { homeworkItems, HomeworkItem } from '@/lib/mock-data';

export default function DashboardPage() {
  const [selectedAssignment, setSelectedAssignment] = useState<HomeworkItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openAssignment = (assignment: HomeworkItem) => {
    setSelectedAssignment(assignment);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedAssignment(null);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-50">Dashboard</h1>
        <p className="text-slate-400 mt-2">Open any assignment to view contextual details in the right-side drawer.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {homeworkItems.map((assignment) => (
          <button
            type="button"
            key={assignment.id}
            onClick={() => openAssignment(assignment)}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-left transition hover:border-slate-700 hover:bg-slate-950"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-base font-semibold text-slate-100">{assignment.title}</p>
                <p className="mt-2 text-sm text-slate-400">{assignment.class}</p>
              </div>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                {assignment.status}
              </span>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
              <span>Due {new Date(assignment.dueDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}</span>
              <span>
                {assignment.studentsSubmitted}/{assignment.totalStudents}
              </span>
            </div>
          </button>
        ))}
      </div>

      <AppDrawer open={isDrawerOpen} onClose={closeDrawer} title={selectedAssignment ? 'Assignment Detail' : 'Details'}>
        {selectedAssignment ? <AssignmentDrawer assignment={selectedAssignment} /> : null}
      </AppDrawer>
    </div>
  );
}
