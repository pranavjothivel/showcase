# Data Migration: Move Hardcoded Content to Data Files

## Goal
Extract all hardcoded content arrays out of components and into structured data files
under `src/data/`, making the portfolio easy to update without touching component code.

## Format Decision
Use **JSON** — no extra dependencies, native TypeScript imports, and readable enough
for structured data. If descriptions get long and unwieldy, revisit YAML with `js-yaml`.

---

## Files to Create

### `src/data/experience.json`
Currently hardcoded in `ExperienceSection.tsx` as the `experiences` array.

Each entry has:
```json
{
  "role": "string",
  "company": "string",
  "period": "string",
  "description": "string"
}
```

---

### `src/data/projects.json`
Currently hardcoded in `ProjectsSection.tsx` as the `projects` array.

Each entry has:
```json
{
  "title": "string",
  "category": "string",
  "description": "string",
  "color": "string"
}
```

> `color` is a Tailwind class (e.g. `"bg-primary/10"`). Keep as-is.

---

### `src/data/personal-projects.json`
Currently hardcoded in `PersonalProjectsSection.tsx` as the `personalProjects` array.

Each entry has:
```json
{
  "title": "string",
  "description": "string",
  "tags": ["string"],
  "github": "string"
}
```

---

## Steps

1. **Create `src/data/` directory**

2. **Create each JSON file** with the current hardcoded data as the starting point
   (so nothing changes visually on first migration)

3. **Update each component** to import from the data file instead:
   ```ts
   import experiences from "@/data/experience.json";
   ```
   Remove the inline array definition.

4. **Add TypeScript types** for each data shape, either inline or in a shared
   `src/types/data.ts` file, and assert them on import:
   ```ts
   import type { Experience } from "@/types/data";
   import experienceData from "@/data/experience.json";
   const experiences = experienceData as Experience[];
   ```

5. **Verify** nothing breaks — the components shouldn't need any other changes
   since the data shape stays the same.

---

## Notes
- `tsconfig.json` already has `"resolveJsonModule": true` — confirm before step 3
  (add it if missing).
- `AboutSection.tsx` has inline bio text — leave it in the component for now,
  it's not array data.
- `LogoCarousel.tsx` (`technologies` array) could also be moved to
  `src/data/technologies.json` as a follow-up, but the CSS variable convention
  for theme-aware colors needs to stay in sync with `globals.css`, so defer this.
