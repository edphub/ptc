EduLink – Feature Development Tracker

## Current Feature

Dashboard UI Phase 3 – Drawer Interaction & Assignment Detail

Implement a global drawer system for contextual detail views and the first Assignment Detail drawer experience. This phase keeps the dashboard visible while showing assignment details in a right-side drawer.

## Status

in-progress

## Goals

**Functional Requirements:**
- Build a global right-side drawer component
- Add overlay and slide-in drawer animation
- Close drawer via close icon, outside click, and ESC key
- Add Assignment Detail drawer content for homework items
- Keep dashboard visible in the background while drawer is open
- Support desktop drawer width and mobile full-width drawer

**User-Facing Outcomes:**
- Fast context switching without leaving the dashboard
- Clear assignment detail view in a sliding drawer
- Smooth drawer open/close interactions
- Improved task flow for teachers and admins
- Consistent experience on desktop and mobile

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

- @context/features/dashboard-phase-3-spec.md (current phase)
- @context/screenshots/dashboard-ui-main.png
- @src/lib/mock-data.ts (data source)
- @context/features/dashboard-phase-2-spec.md (previous phase)

## History

- 2026-05-01: Dashboard Phase 2 implementation completed - collapsible sidebar, collections, user avatar
- 2026-05-01: Dashboard Phase 2 specification finalized - sidebar navigation, collections, user avatar
- 2026-05-01: App branding added - Parent Teacher Communication name and icon in sidebar
- 2026-05-01: Dashboard Phase 1 implementation completed - dark mode, top bar, layout structure
- 2026-05-01: Dashboard Phase 1 specification finalized and development started
- 2026-05-01: Mock data structure created for dashboard display
- 2026-05-01: Initial Next.js setup with Tailwind CSS
- Project setup and boilerplate cleanup
