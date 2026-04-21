# Lint and Build Optimization Plan

The goal is to ensure all three wedding templates (Hindu, Christian, Islamic) are free of code quality errors and build successfully for production deployment.

## User Review Required

> [!IMPORTANT]
> I will be removing unused imports and variables identified by ESLint. I will also be wrapping certain functions in `useCallback` or adding them to dependency arrays to satisfy React hook rules. No visual or functional changes will be made to the invitation experience itself.

## Proposed Changes

### 1. Template: Hindu
- **Lint Phase**:
    - [MODIFY] `App.jsx`, `AdminDashboard.jsx`, `RSVPForm.jsx`, `HeroCover.jsx`, `InsideDetails.jsx`, `MusicWidget.jsx`
    - Remove unused imports: `motion`, `useState`, `useEffect`, `useRef`, `useInView`.
    - Fix `useEffect` dependency warnings.
- **Build Phase**:
    - Run `npm run build`.
    - Fix any rollup/vite errors (e.g., missing types or circular dependencies).

### 2. Template: Christian
- **Lint Phase**:
    - Run `npm run lint` and apply similar fixes as Hindu.
- **Build Phase**:
    - Run `npm run build` and fix errors.

### 3. Template: Islamic
- **Lint Phase**:
    - Run `npm run lint` and apply similar fixes as Hindu.
- **Build Phase**:
    - Run `npm run build` and fix errors.

## Verification Plan

### Automated Tests
- `npm run lint` → Must exit with code 0 for all templates.
- `npm run build` → Must generate a `/dist` folder with code 0 for all templates.

### Manual Verification
- I will perform a final `git status` check to ensure only the intended code cleanup was performed.
