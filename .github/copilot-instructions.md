# Copilot Instructions for AI Agents

## Project Overview
- **Framework:** Next.js (App Router, TypeScript)
- **UI:** Shadcn/UI (Radix UI + Tailwind CSS)
- **Forms:** React Hook Form + Zod
- **Tracking:** Microsoft Clarity (custom module in `src/components/clarity/`)
- **Notifications:** Sonner
- **Charts:** Recharts

## Key Architectural Patterns
- **Page Structure:**
  - Main routes: `/` (lp), `/form` (form), `/obrigado` (thanks)
  - Route mapping and variant logic in `src/components/clarity/route-config.ts`
- **Form Workflow:**
  - Schema, validation, and messages in `src/components/form/form-schema.ts`
  - Steps/components: `form-step-1.tsx`, `form-step-2.tsx`, `form-step-3.tsx`
  - Webhook and funnel config: `src/config/template-config.ts`
- **Tracking & Analytics:**
  - Clarity components (`ClarityRouteTags`, `ClickTracker`, `UtmCollector`, `FormObserver`) must be mounted in the root layout
  - UTMs persisted in `sessionStorage` via `UtmCollector`
  - All events/tags use helpers from `observability.ts` (never send PII; hash emails)
  - Variant can be overridden via `window.__clarityRouteConfig` in `<head>`
- **UI Conventions:**
  - Always use/reuse Shadcn/UI components from `src/components/ui/`
  - Custom UI must follow Radix + Tailwind patterns
  - All styling via Tailwind utility classes
  - Icons: Lucide React
- **Component Patterns:**
  - Use strong types for options/messages (see `form-schema.ts`)
  - Centralize messages and avoid duplication
  - Use `data-cta`, `dataVariant`, and ARIA attributes for analytics and accessibility

## Developer Workflows
- **Environment Variables:**
  - Set `NEXT_PUBLIC_CLARITY_ID` in `.env.local` to enable Clarity
- **Checklist for New Funnels:**
  1. Duplicate repo or copy folder
  2. Update `template-config.ts` and `branding.ts`
  3. Edit `form-schema.ts` and form steps
  4. Adjust form/page logic for step count
  5. Set env vars and deploy
- **Testing/Debugging:**
  - Use Next.js dev server (`pnpm dev`)
  - For Clarity, verify script load and component mount; override config via global if needed

## Integration Points
- **External:**
  - Clarity (tracking), webhook (form submission)
- **Internal:**
  - All cross-component communication via props/context/hooks
  - Utility functions in `src/lib/utils.ts`

## Examples
- To add a form field: update `formSchema`, `defaultFormValues`, and render in a step
- To add a tracking event: use helpers in `observability.ts` and ensure component is mounted in layout
- To customize variant: set `window.__clarityRouteConfig` or update config file

## References
- `README.md`, `AI_RULES.md`, `src/components/clarity/README.md`, `src/config/template-config.ts`, `src/components/form/form-schema.ts`, `src/components/ui/`

---
For unclear or missing conventions, consult the above files or ask for clarification before making structural changes.
