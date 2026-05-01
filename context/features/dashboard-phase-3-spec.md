Dashboard UI Phase 3 Spec (Final – EduLink)

## Overview

This is Phase 3 of 3 for the dashboard UI.

In this phase, we implement:

✅ Main dashboard content area
✅ Interactive right-side drawer system

Based on:

Provided dashboard UI screenshots
EduLink product architecture (attendance, academics, communication)
Mock data (@src/lib/mock-data.ts)

⚠️ UI only — no backend integration yet

## Requirements for Phase 3

## 1. 📊 Top Statistics Cards (4 Cards)

(unchanged – already correct)

Total Students
Attendance Today
Pending Homework
Unread Messages

## 2. 📈 Analytics Section

Weekly Attendance
Performance Trend

(placeholder charts)

## 3. 🏫 Classes Section

Grid of class cards
Teacher + student count
Hover interaction

## 4. 📚 Homework & Assignments Section (UPDATED)

Display:

List of assignments with:

Subject name
Class + due date
Status:
Open (blue)
Done (green)
Overdue (red)
Submission ratio (e.g., 28/34)
Progress bar
🔥 NEW BEHAVIOR (IMPORTANT)

👉 Clicking any homework item:

MUST open the right-side drawer with Assignment Details

## 5. 💬 Recent Messages Panel

Avatar
Name
Message preview
Timestamp
Future Behavior (not in this phase):
Click → open Message Drawer

## 6. 🎓 Students Overview Table

Name
Class
Attendance %
Grade
Status
Future Behavior:
Click → Student Detail Drawer

## 7. 📢 Events & Announcements

Event list
Tags (Event / Meeting / Academic / Holiday)

## 🧠 NEW SECTION — Drawer System (CRITICAL)

## 8. 📂 Global Right Drawer

Purpose:

Provide contextual detail view without page navigation

Behavior:
Opens from right side
Overlays dashboard
Keeps background visible
Closes via:
❌ icon
outside click
ESC key
UI Structure:
Drawer
│
├── Header (title + close)
├── Content (dynamic)
├── Footer (actions)

## 9. 📚 Assignment Detail Drawer (Phase 3 Scope)

Trigger:

Click on any item in Homework & Assignments

Layout:
Header:
Subject icon
Subject name (e.g., Science)
Class (e.g., Class 7-B)
Info Cards:
Due Date
Submissions (e.g., 31/31)
Progress Section:
Label: “Submission Progress”
Progress bar
Percentage (e.g., 100%)
Actions:
Primary: Send Reminder
Secondary: View Details
UI Behavior:
Smooth slide-in animation (~300ms)
Width:
Desktop: 400–480px
Mobile: full width

## 🧱 Component Structure (Updated)

components/
dashboard/
StatsCard.tsx
AttendanceChart.tsx
PerformanceChart.tsx
ClassCard.tsx
HomeworkList.tsx
MessagesList.tsx
StudentsTable.tsx
EventsList.tsx

drawer/
AppDrawer.tsx
AssignmentDrawer.tsx

## 🧠 State Management

const [isDrawerOpen, setIsDrawerOpen] = useState(false)
const [selectedItem, setSelectedItem] = useState(null)
Open Drawer:
onClick={() => {
setSelectedItem(item)
setIsDrawerOpen(true)
}}
Close Drawer:
setIsDrawerOpen(false)
setSelectedItem(null)

## 📐 Final Layout Structure

Dashboard Layout
│
├── Sidebar (Phase 2)
├── Top Bar
│
├── Main Content
│ ├── Stats Cards
│ ├── Charts
│ ├── Classes
│ ├── Homework + Messages
│ ├── Students + Events
│
├── Right Drawer (Overlay)

## 📱 Responsiveness

Desktop:
Multi-column layout + right drawer
Tablet:
Reduced columns
Mobile:
Stacked layout
Drawer becomes full screen

## References

- @context/screenshots/dashboard-ui-main.png
- @context/project-overview.md
- @src/lib/mock-data.js
- @context/features/dashboard-phase-1-spec.md
- @context/features/dashboard-phase-2-spec.md
