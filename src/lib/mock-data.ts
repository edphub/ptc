// Mock data for dashboard UI - single source of truth until database is implemented

export enum UserRole {
  SUPER_ADMIN = "super_admin",
  ADMIN = "admin",
  TEACHER = "teacher",
  PARENT = "parent",
}

export enum HomeworkStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  OVERDUE = "overdue",
}

export enum AttendanceStatus {
  PRESENT = "present",
  ABSENT = "absent",
  LEAVE = "leave",
}

// Current logged-in user
export const currentUser = {
  id: "user-001",
  name: "Super Admin",
  email: "admin@educonnect.app",
  role: UserRole.SUPER_ADMIN,
  avatar: "SA",
};

// School information
export const school = {
  id: "school-001",
  name: "Greenwood Academy",
  address: "123 Education Street, Learning City",
};

// Classes
export const classes = [
  {
    id: "class-001",
    name: "Class 6-A",
    teacher: "Mr. Ahmed Khan",
    studentCount: 34,
    color: "blue",
  },
  {
    id: "class-002",
    name: "Class 7-B",
    teacher: "Ms. Sana Ali",
    studentCount: 31,
    color: "green",
  },
  {
    id: "class-003",
    name: "Class 8-C",
    teacher: "Mr. Tariq Mahmood",
    studentCount: 29,
    color: "purple",
  },
  {
    id: "class-004",
    name: "Class 5-A",
    teacher: "Ms. Nadia Farooq",
    studentCount: 28,
    color: "orange",
  },
  {
    id: "class-005",
    name: "Class 9-A",
    teacher: "Mr. Bilal Raza",
    studentCount: 32,
    color: "teal",
  },
  {
    id: "class-006",
    name: "Class 10-B",
    teacher: "Ms. Fatima Zahra",
    studentCount: 30,
    color: "pink",
  },
];

// Dashboard stats
export const dashboardStats = {
  totalStudents: {
    value: 1072,
    change: 12,
    label: "Total Students",
    unit: "this week",
  },
  attendanceToday: {
    value: 94.2,
    change: 1.3,
    label: "Attendance Today",
    unit: "vs yesterday",
    suffix: "%",
  },
  pendingHomework: {
    value: 43,
    overdue: 3,
    label: "Pending Homework",
    unit: "overdue",
  },
  unreadMessages: {
    value: 17,
    from: 5,
    label: "Unread Messages",
    unit: "from teachers",
  },
};

// Weekly attendance data
export const weeklyAttendance = [
  { day: "Mon", present: 280, absent: 45 },
  { day: "Tue", present: 290, absent: 40 },
  { day: "Wed", present: 285, absent: 42 },
  { day: "Thu", present: 295, absent: 35 },
  { day: "Fri", present: 275, absent: 50 },
];

// Performance trend data
export const performanceTrend = [
  { month: "Jan", score: 72 },
  { month: "Feb", score: 75 },
  { month: "Mar", score: 73 },
  { month: "Apr", score: 78 },
  { month: "May", score: 81 },
];

// Sample homework items
export const homeworkItems = [
  {
    id: "hw-001",
    title: "Mathematics Assignment - Chapter 5",
    class: "Class 6-A",
    dueDate: "2026-05-05",
    status: HomeworkStatus.PENDING,
    studentsSubmitted: 18,
    totalStudents: 34,
  },
  {
    id: "hw-002",
    title: "English Essay - Climate Change",
    class: "Class 7-B",
    dueDate: "2026-05-02",
    status: HomeworkStatus.OVERDUE,
    studentsSubmitted: 25,
    totalStudents: 31,
  },
  {
    id: "hw-003",
    title: "Science Project - Water Cycle",
    class: "Class 8-C",
    dueDate: "2026-05-08",
    status: HomeworkStatus.PENDING,
    studentsSubmitted: 12,
    totalStudents: 29,
  },
  {
    id: "hw-004",
    title: "History Timeline - Medieval Period",
    class: "Class 5-A",
    dueDate: "2026-05-06",
    status: HomeworkStatus.PENDING,
    studentsSubmitted: 26,
    totalStudents: 28,
  },
];

// Sample messages
export const messages = [
  {
    id: "msg-001",
    from: "Mr. Ahmed Khan",
    class: "Class 6-A",
    preview: "Can you please check the attendance submission for today?",
    timestamp: "2026-05-01T10:30:00Z",
    read: false,
  },
  {
    id: "msg-002",
    from: "Ms. Sana Ali",
    class: "Class 7-B",
    preview: "The assignments have been graded and uploaded to the system.",
    timestamp: "2026-05-01T09:15:00Z",
    read: false,
  },
  {
    id: "msg-003",
    from: "Mr. Tariq Mahmood",
    class: "Class 8-C",
    preview: "Please note the exam schedule has been changed to next week.",
    timestamp: "2026-04-30T16:45:00Z",
    read: true,
  },
  {
    id: "msg-004",
    from: "Ms. Nadia Farooq",
    class: "Class 5-A",
    preview: "Thank you for the update on student performance metrics.",
    timestamp: "2026-04-30T14:20:00Z",
    read: true,
  },
  {
    id: "msg-005",
    from: "Mr. Bilal Raza",
    class: "Class 9-A",
    preview: "New project guidelines have been shared with the class.",
    timestamp: "2026-04-30T11:00:00Z",
    read: true,
  },
];

// Sample students
export const students = [
  { id: "student-001", name: "Ahmed Hassan", classId: "class-001" },
  { id: "student-002", name: "Fatima Khan", classId: "class-001" },
  { id: "student-003", name: "Omar Ali", classId: "class-002" },
  { id: "student-004", name: "Zainab Ibrahim", classId: "class-002" },
  { id: "student-005", name: "Hassan Malik", classId: "class-003" },
];

// Sample teachers
export const teachers = [
  {
    id: "teacher-001",
    name: "Mr. Ahmed Khan",
    email: "ahmed.khan@educonnect.app",
    classes: ["class-001"],
  },
  {
    id: "teacher-002",
    name: "Ms. Sana Ali",
    email: "sana.ali@educonnect.app",
    classes: ["class-002"],
  },
  {
    id: "teacher-003",
    name: "Mr. Tariq Mahmood",
    email: "tariq.mahmood@educonnect.app",
    classes: ["class-003"],
  },
];
