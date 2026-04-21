# Christian Template Name & Spacing Refinement Plan

The 'Gabriel & Evangeline' names in the Christian template are significantly longer than the names in the Hindu (Anand/Meera) and Islamic (Fahad/Ayesha) templates. This creates a visual "over-fill" or overflow issue when using the exact `text-5xl` setting.

## Proposed Changes

### 1. Adaptive Sizing for Long Names
To maintain the "look and feel" of the Hindu core while actually fitting the text:
- **Font Size**: Use `text-[2.6rem]` or `text-4xl` for the names (instead of `text-5xl`). This will visually match the Hindu template's "proportion" because the name occupies more horizontal space.
- **Font Weight**: Stick to `font-bold` to match the Hindu weight, but verify if `font-semibold` looks cleaner for Playfair Display.

### 2. Spacing Parity (The Hindu "Look")
I will mirror the Hindu core's vertical rhythm precisely:
- **Ampersand Opacity**: Remove `opacity-60` from the ampersand to match the Hindu core's solid color presence.
- **Gaps**: Use `mb-2` for all name-related gaps.
- **Card Padding**: Use `py-10` but add an `overflow-visible` to ensure descenders aren't cut off.

### 3. File Updates

#### [MODIFY] [HeroCover.jsx](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-christian/src/components/HeroCover.jsx)
- Adjust name font size to fit "Evangeline" comfortably.
- Align ampersand styling (remove opacity).
- Verify and match all `mb-` margins to the pixel.

## Verification Plan
- I will calculate the horizontal width of "Evangeline" at various sizes to ensure zero wrapping.
- side-by-side comparison with the Hindu template.
