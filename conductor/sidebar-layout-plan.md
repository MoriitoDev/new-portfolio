# Sidebar Layout Refactor Plan

## Objective
Refactor the main portfolio landing page to feature a sticky sidebar on the left containing the "Hero" section (Avatar, Name, Title, Info, Socials), and a scrolling main content area on the right for the remaining sections (Experience, Projects, etc.), matching the provided reference design.

## Key Files & Context
- `src/components/common/Container.tsx`: Currently restricts width to `max-w-3xl`. Needs modification to allow overrides.
- `src/components/landing/Hero.tsx`: The current Hero section. Needs styling adjustments to act as a vertical sidebar.
- `src/app/page.tsx`: The main page layout. Needs structural changes to implement the two-column grid/flex layout.

## Implementation Steps

### 1. Refactor `Container.tsx`
- Update the component to use the `cn` utility from `@/lib/utils` to merge class names properly. This ensures that when a custom `className` (like `max-w-full` or `max-w-7xl`) is passed, it correctly overrides the default `max-w-3xl` and `mx-auto` classes if needed.

### 2. Refactor `Hero.tsx`
- **Wrapper**: Change the outer `<Container>` to a standard semantic HTML element like `<section>` or `<div>` to avoid conflicts with the new layout structure.
- **Typography & Layout**:
  - Increase the size and weight of the `name` to match the bold style of the reference.
  - Structure the layout as a vertical stack (Avatar -> Name & Title -> Description -> Resume Button -> Get in touch Button -> Social Links).
  - Adjust margins and spacing to create a clean sidebar appearance.
  - Implement a specific button layout, matching the "Resume" and "Get in touch" buttons' styling and placement.

### 3. Refactor `page.tsx`
- Replace the root `<Container>` with a standard `div` that has a wider max-width (e.g., `max-w-7xl`).
- Implement a flexbox layout (`flex-col lg:flex-row`).
- **Sidebar (Left Column)**: Wrap the `<Hero />` component in an `<aside>` element. Add classes to make it sticky on large screens (`lg:sticky lg:top-24 h-fit`). Set an appropriate width (e.g., `lg:w-1/3` or `lg:w-[350px]`).
- **Main Content (Right Column)**: Wrap the remaining components (`Experience`, `Work`, `About`, etc.) in a `<main>` element. Set it to fill the remaining space (`flex-1`) and add vertical spacing (`space-y-24`).

## Verification & Testing
- **Desktop View**: Verify that the Hero section stays sticky on the left side of the screen while scrolling through the main content on the right.
- **Mobile View**: Ensure the layout falls back gracefully to a single column, with the Hero section at the top followed by the rest of the content.
- **Visual Accuracy**: Check that the typography, button layout, and spacing in the Hero section closely mirror the provided reference image.