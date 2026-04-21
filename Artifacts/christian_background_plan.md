# Christian Background Aesthetic Update: "Divine Radiance"

The goal is to replace the traditional Hindu-style floating petals with elements that evoke a sacred, cathedral-like atmosphere while maintaining the premium mobile-first performance.

## Proposed Changes

### 1. New Background Components
I will create three new specialized background components within `App.jsx` (or as separate components) for the Christian template:

- **`SacredLightBeam`**: Slow-pulsing, vertical beams of light (linear gradients) that appear to filter down from the top corner, mimicking cathedral windows.
- **`SacredDustMotes`**: Tiny, glowing particles that drift diagonally across the screen, creating a sense of ethereal depth.
- **`OliveBranch` (Optional replacement for petals)**: If botanical elements are needed, I will replace the current petal with a soft, slender olive leaf silhouette, which is a powerful symbol of peace and divinity.

### 2. Styling & Motion
- **Color Palette**: Use soft whites (`#FFFFFF`), `var(--pearl)`, and low-opacity `var(--gold)`.
- **Animations**: Use Framer Motion for `y` and `opacity` drifts, ensuring they are extremely slow (10s - 15s durations) to avoid distraction.
- **Z-Index**: Keep all elements at `z-0` (behind the content card).

### 3. Files to Modify

#### [MODIFY] [App.jsx](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-christian/src/App.jsx)
- Remove `FloatingPetal` component and its usages.
- Implement `SacredLightBeam` and `SacredDustMotes`.
- Integrate them into the main layout.

## Verification Plan

### Manual Verification
- View the template on a mobile device (simulation).
- Ensure the beams don't conflict with text readability.
- Verify that the particles are subtle and don't overwhelm the "glass-card" effect.
