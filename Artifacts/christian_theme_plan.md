# Christian Traditional Theme Implementation Plan

Transform the wedding invitation into an elegant, faith-centered Christian aesthetic that feels sacred and serene.

## User Review Required

> [!IMPORTANT]
> - **Symbolism**: We will use a delicate cross and soft floral (lily/rose) motifs.
> - **Bible Verse**: I'll include a placeholder verse (Matthew 19:6). Let me know if you have a specific favorite verse.
> - **Palette**: Shifting to a "Dusty Blue & Antique Gold" or "Champagne & Sage" palette for a fresh, holy feel.

## Proposed Changes

### Global Style & Assets
- **[NEW] Branch**: `feature/christian-traditional-theme`
- **[MODIFY] `index.css`**: 
  - Update palette variables to Soft Whites, Warm Greys, and Antique Gold.
  - Background texture: Subtle linen weave.
  - New animation: `float-petal` for drifting floral elements.
- **[MODIFY] `App.jsx`**:
  - Replace `FloatingGeometric` (8-pointed stars) with `FloatingPetal` or `FloatingCross` (minimalist).

### Content & Data
- **[MODIFY] `src/config/weddingData.js`**:
  - Update couple names to Christian names (placeholder: "Gabriel & Evangeline").
  - Change strings to reflect Christian tradition (e.g., "In the presence of God...", "Church Venue").

### Components

#### [MODIFY] `HeroCover.jsx`(file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/wedding-app/src/components/HeroCover.jsx)
- Replace Arabic Bismillah with a beautifully typeset Bible verse.
- Replace the Lantern accent with a minimalist Cross or delicate Lilies.

#### [MODIFY] `Envelope.jsx`(file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/wedding-app/src/components/Envelope.jsx)
- Update the Wax Seal SVG: Replace the 8-pointed star with a Cross or a floral monogram.

#### [MODIFY] `InsideDetails.jsx`(file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/wedding-app/src/components/InsideDetails.jsx)
- Update the mural/divider style from geometric star motifs to soft scrolling floral vines.

#### [MODIFY] `RSVPForm.jsx`(file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/wedding-app/src/components/RSVPForm.jsx)
- Align footer and button colors with the new Christian palette.

## Verification Plan

### Automated/Developer Verification
- **Visual Check**: Open in browser to confirm the "Linen" texture and new color palette.
- **Content Check**: Verify the Bible verse renders with proper typography.
- **Animation Check**: Ensure floating petals/elements are smooth.

### Manual Verification
- Test the RSVP submission logic on the new branch.
