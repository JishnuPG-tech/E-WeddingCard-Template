# Final Christian Name Optimization Plan

The names "Gabriel" and "Evangeline" are exceeding the horizontal and vertical constraints of the glass card at the current font sizes. "Evangeline" (10 chars, heavy serif) especially causes line-wrapping or descender clipping.

## Proposed Changes

### 1. Vertical Relief (Stopping the "Over-Under")
- **Leading**: Change `leading-[0.9]` to `leading-normal`. Tight leading is cutting off the descender of the 'g' in Evangeline.
- **Margins**: Change name margins from `mb-1` to `mb-2` to clearly separate the names from the ampersand.
- **Card Padding**: Increase card vertical padding to `pt-8 pb-14` to allow more space for the denser Christian text blocks.

### 2. Horizontal Fit (Ensuring Zero Wrapping)
- **Fluid Sizing**: Use `text-[clamp(1.8rem,8vw,2.4rem)]` for names. This will scale the font down on narrow phones but keep it large enough on wider ones.
- **Tracking**: Set `tracking-normal`. Negative tracking was causing letters to touch and look "messy".

### 3. Structural Consistency
- Keep `rounded-[20px]` and all other Hindu-matched margins (`mb-5` for headers, etc.) to ensure side-by-side consistency.

### 4. File Updates
#### [MODIFY] [HeroCover.jsx](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-christian/src/components/HeroCover.jsx)
- Apply fluid typography and optimized leading.
- Adjust vertical margins for better breathing room.

## Verification
- Side-by-side comparison of the cards to ensure they are the same height and width.
