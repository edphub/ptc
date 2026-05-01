EduLink – Feature Development Tracker

## Current Feature

Dashboard UI Phase 2 – Sidebar Navigation & Collections

Implement a collapsible sidebar with navigation items, favorite collections, most recent collections, and user avatar area. This phase adds interactive navigation and collection browsing capabilities to the dashboard foundation established in phase 1.

## Status

in-progress

## Goals

**Functional Requirements:**
- Implement collapsible sidebar with drawer toggle
- Add items/types with links to `/items/TYPE` (e.g., `/items/snippets`)
- Display favorite collections
- Display most recent collections
- Add user avatar area at the bottom of sidebar
- Show drawer icon to open/close sidebar
- Ensure drawer always visible on mobile view
- Responsive sidebar behavior for desktop and mobile

**User-Facing Outcomes:**
- Intuitive navigation between different item types
- Quick access to favorite and recent collections
- User profile visibility with avatar
- Seamless mobile experience with persistent drawer
- Organized content discovery through sidebar

## Notes

**UI/UX Constraints:**
- Mobile-first design approach with drawer-first navigation
- Minimal bandwidth consumption for low-resource environments
- Dark mode optimized for OLED screens and reduced eye strain
- Dashboard uses mock data from `src/lib/mock-data.ts` for display
- Sidebar should be collapsible on desktop, always visible as drawer on mobile

**Technical Decisions:**
- Using ShadCN UI for consistent, accessible component library
- Tailwind CSS for styling (already configured)
- Implement collapsible sidebar with smooth animations
- Reference phase 2 screenshot for visual design: `context/screenshots/dashboard-ui-main.png`

## References

- @context/screenshots/dashboard-ui-main.png (phase 2 visual design)
- @src/lib/mock-data.ts (data source)
- @context/features/dashboard-phase-1-spec.md (previous phase)
- @context/features/dashboard-phase-3-spec.md (next phase)

## History

- 2026-05-01: Dashboard Phase 2 specification finalized - sidebar navigation, collections, user avatar
- 2026-05-01: App branding added - Parent Teacher Communication name and icon in sidebar
- 2026-05-01: Dashboard Phase 1 implementation completed - dark mode, top bar, layout structure
- 2026-05-01: Dashboard Phase 1 specification finalized and development started
- 2026-05-01: Mock data structure created for dashboard display
- 2026-05-01: Initial Next.js setup with Tailwind CSS
- Project setup and boilerplate cleanup
