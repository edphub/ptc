# Dashboard UI Phase 3 Spec (Final – With Drawer Interaction)

## Overview

This phase completes the dashboard by implementing:

Main dashboard content (already defined)
Interactive right-side drawer system
Context-based detail views (starting with Assignment Detail)

This ensures:

Users never leave the dashboard → faster workflows → better UX

## 🧠 Core Interaction Pattern

Behavior:
Clicking any actionable item opens a right-side drawer
Drawer shows contextual details
Dashboard remains visible in the background

## 📂 Drawer System (New Requirement)

1. Drawer Component (Global)
   Requirements:
   Slide-in panel from right
   Overlay background (optional blur/dim)
   Close actions:
   ❌ Close icon (top right)
   Click outside
   ESC key
   UI Structure:
   Drawer
   │
   ├── Header
   │ ├── Title
   │ └── Close Button
   │
   ├── Content
   │ ├── Dynamic (based on item type)
   │
   ├── Footer (optional)
   │ ├── Action buttons
2. 🎯 Trigger Points (Important)
   Clicking these opens drawer:
   Section Action
   Homework list Open Assignment Detail
   Messages Open Message Thread (future)
   Students Open Student Profile (future)
   Classes Open Class Overview (future)

## 📚 Assignment Detail Drawer (Phase 3 Scope)

This is the first implemented drawer view.

📌 Layout (Based on Image)
Header:
Subject icon
Title: Subject name (e.g., Science)
Subtitle: Class (e.g., Class 7-B)
📊 Info Cards:

1. Due Date
   Example: May 2, 2026
2. Submissions
   Example: 31 / 31
   📈 Submission Progress
   Label: “Submission Progress”
   Progress bar (100% example)
   Percentage label
   🎯 Actions:
   Primary Button:
   “Send Reminder”
   Secondary Button:
   “View Details”
   UI Rules:
   Clean vertical spacing
   Highlight completion visually (green progress)
   Buttons fixed at bottom (optional enhancement)

## 🧱 Component Structure

components/
drawer/
AppDrawer.tsx
DrawerHeader.tsx
DrawerContent.tsx

dashboard/
AssignmentDrawer.tsx

## 🧠 State Management

Use simple state (for now):
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

## 🔄 Data Flow (Temporary)

Use mock data:
@src/lib/mock-data.ts
Pass selected assignment into drawer

## 🎨 UX Behavior Rules

Drawer width:
Desktop: ~400–480px
Mobile: full width
Animation:
Smooth slide-in (300ms)
Background:
Slight dim or blur

## 🔐 Role Awareness (Important for Future)

Even if not implemented now, design should support:

Teacher view:
Send reminders
View submissions
Parent view:
View assignment only
Admin view:
Analytics (future)

## References

- @context/screenshots/dashboard-ui-main.png
- @context/project-overview.md
- @src/lib/mock-data.js
- @context/features/dashboard-phase-1-spec.md
- @context/features/dashboard-phase-2-spec.md
