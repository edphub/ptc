'use client';

import { useMemo, useState } from 'react';
import { AppDrawer } from '@/components/drawer/AppDrawer';
import { AssignmentDrawer } from '@/components/dashboard/AssignmentDrawer';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { AttendanceChart } from '@/components/dashboard/AttendanceChart';
import { PerformanceChart } from '@/components/dashboard/PerformanceChart';
import { ClassCard } from '@/components/dashboard/ClassCard';
import { HomeworkList } from '@/components/dashboard/HomeworkList';
import { MessagesList } from '@/components/dashboard/MessagesList';
import { StudentsTable } from '@/components/dashboard/StudentsTable';
import { EventsList } from '@/components/dashboard/EventsList';
import {
  dashboardStats,
  weeklyAttendance,
  performanceTrend,
  classes,
  homeworkItems,
  messages,
  students,
  events,
  HomeworkItem,
} from '@/lib/mock-data';

export default function DashboardPage() {
  const [selectedAssignment, setSelectedAssignment] = useState<HomeworkItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const studentRows = useMemo(
    () =>
      students.map((student) => ({
        ...student,
        className: classes.find((item) => item.id === student.classId)?.name ?? 'Unknown',
      })),
    [],
  );

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
        <p className="text-slate-400 mt-2">Monitor school operations, assignments, and events from one place.</p>
      </div>

      <div className="grid gap-4 xl:grid-cols-4">
        <StatsCard
          label={dashboardStats.totalStudents.label}
          value={dashboardStats.totalStudents.value}
          unit={dashboardStats.totalStudents.unit}
          change={dashboardStats.totalStudents.change}
        />
        <StatsCard
          label={dashboardStats.attendanceToday.label}
          value={dashboardStats.attendanceToday.value}
          unit={dashboardStats.attendanceToday.unit}
          suffix="%"
          change={dashboardStats.attendanceToday.change}
        />
        <StatsCard
          label={dashboardStats.pendingHomework.label}
          value={dashboardStats.pendingHomework.value}
          unit={`${dashboardStats.pendingHomework.overdue} overdue`}
        />
        <StatsCard
          label={dashboardStats.unreadMessages.label}
          value={dashboardStats.unreadMessages.value}
          unit={`${dashboardStats.unreadMessages.from} from teachers`}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <AttendanceChart data={weeklyAttendance} />
        <PerformanceChart data={performanceTrend} />
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-100">Classes</p>
            <p className="text-sm text-slate-500">Overview of active class groups and teachers</p>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {classes.map((classItem) => (
            <ClassCard
              key={classItem.id}
              name={classItem.name}
              teacher={classItem.teacher}
              studentCount={classItem.studentCount}
              color={classItem.color}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <HomeworkList items={homeworkItems} onSelect={openAssignment} />
        <MessagesList messages={messages} />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <StudentsTable students={studentRows} />
        <EventsList events={events} />
      </div>

      <AppDrawer open={isDrawerOpen} onClose={closeDrawer} title={selectedAssignment ? 'Assignment Detail' : 'Details'}>
        {selectedAssignment ? <AssignmentDrawer assignment={selectedAssignment} /> : null}
      </AppDrawer>
    </div>
  );
}
