# Coding Standards

EduLink – School Communication SaaS Platform

## TypeScript

Strict mode enabled ("strict": true)
Avoid any at all costs — use:
unknown (when type is uncertain)
proper interfaces/types for all structures
Define explicit types for:
API requests/responses
Database models (Prisma inferred types preferred)
Component props
Prefer type inference only when it improves readability
Use union types for status fields:
type AttendanceStatus = "present" | "absent" | "leave"

## React (React Native + Web-ready patterns)

Functional components only (no class components)
Use hooks exclusively for:
state management
lifecycle logic
Keep components:
single-responsibility
UI-focused only
Extract business logic into:
custom hooks (useAttendance, useMessages, etc.)
Avoid prop drilling:
use context or state stores (Zustand preferred if needed)

## Next.js / Full-Stack Architecture Principles

Server-first approach by default
Only use 'use client' when required for:
interactivity (forms, chat, dashboards)
browser APIs
real-time UI updates
Data Fetching Rules
Server Components:
Fetch data directly using Prisma
Client Components:
Use Server Actions only (no direct API calls unless required)
Avoid unnecessary REST calls inside frontend unless mobile integration requires it
Server Actions

Use Server Actions for:

attendance submission
homework creation
messaging operations (basic)
CRUD operations

Use API routes ONLY for:

Webhooks (Stripe, FCM, external integrations)
Real-time systems (WebSockets / chat gateway)
File uploads (images, documents)
Mobile app consumption (future React Native standalone API layer)
External third-party integrations
Long-running background jobs

## Tailwind CSS v4 (CRITICAL RULES)

We are using Tailwind CSS v4 (CSS-first architecture)

🚫 DO NOT:
Do NOT create tailwind.config.js
Do NOT use JavaScript-based theme configuration
Do NOT extend config via JS
✅ DO:
Use @theme inside globals.css
Use CSS variables for design tokens
Example Setup
@import "tailwindcss";

@theme {
--color-primary: oklch(60% 0.2 240);
--color-success: oklch(65% 0.18 145);
--color-warning: oklch(80% 0.15 85);
--color-danger: oklch(55% 0.25 25);

--radius-md: 12px;
--radius-lg: 18px;
}
Styling Rules
Tailwind only (no inline styles)
Use design tokens (colors, spacing) from @theme
Prefer component-based styling consistency
Dark mode is default
Light mode optional toggle

## File Organization

Maintain strict modular structure:

src/
├── app/ # Routes (Next.js)
├── components/
│ ├── ui/ # Reusable UI components
│ ├── dashboard/ # Feature-specific UI
│ ├── chat/
│ ├── attendance/
│
├── actions/ # Server Actions
│ ├── attendance.ts
│ ├── homework.ts
│ ├── messages.ts
│
├── lib/ # Utilities & helpers
├── hooks/ # Custom hooks
├── types/ # TypeScript types
├── services/ # External integrations
├── prisma/ # Schema & DB client

## Naming Conventions

Components: PascalCase → AttendanceCard.tsx
Hooks: camelCase with use prefix → useAttendance.ts
Functions: camelCase
Constants: SCREAMING_SNAKE_CASE
Types/Interfaces: PascalCase (no I prefix)

## Database (Prisma Rules)

Prisma is the single source of truth
Always use:
prisma migrate dev (development)
prisma migrate deploy (production)
🚫 NEVER:
use prisma db push in shared environments
modify production DB manually
skip migrations
Migration Safety Rules
Run prisma migrate status before commits
Every schema change must include migration file
Keep schema backward compatible when possible

## Data Fetching Strategy

Server Components → Prisma direct queries
Client Components → Server Actions only
No direct DB access from client-side
Validation
All inputs must use Zod schemas
Validate:
attendance submissions
authentication inputs
messaging payloads
file uploads

## Error Handling

Use try/catch in all Server Actions
Standard response structure:
{
success: boolean,
data?: any,
error?: string
}
UI Error Handling
Use toast notifications for:
success states
warnings
errors
Never expose raw backend errors to UI

## Code Quality Standards

No unused imports or variables
No commented-out production code
Functions should ideally be:
< 50 lines
single responsibility
Prefer readability over micro-optimization
Refactoring Rule

If logic becomes complex:

extract into service layer or custom hook immediately

## Real-Time Systems (Critical for EduLink)

Chat uses WebSockets OR Firebase
Avoid polling-based architectures
Ensure message ordering consistency
Always store:
readStatus
timestamp
senderId

## Performance Rules

Lazy load heavy components (charts, analytics)
Optimize images using Next/Image or equivalent
Avoid unnecessary re-renders in chat & dashboards
Use caching where possible (Redis optional)

## Security Principles

Role-based access enforced on backend only
Never trust frontend role checks
Validate all API requests
Protect multi-tenant data isolation strictly
Ensure school-level data separation (critical SaaS rule)

## AI-Assisted Development (Optional but Recommended)

This project is AI-ready:

Use AI for:

generating boilerplate components
optimizing Server Actions
summarizing student performance
auto-tagging messages (future feature)
