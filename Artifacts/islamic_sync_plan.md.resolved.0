# Islamic Theme Sync Plan (Core Structure Parity)

Based on your feedback, we need to enforce that **all templates share the exact same structural foundation as the original `template-hindu` core**, simply acting as different "skins" (fonts, texts, animations, effects, colors).

I have already done this exact structural synchronization for `template-christian`. Now, I will do the same for `template-islamic` to ensure a unified core structure across the entire workspace.

## Proposed Changes

### Configuration
#### [MODIFY] [weddingData.js](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-islamic/src/config/weddingData.js)
- Ensure the data structure perfectly matches the base while retaining Fahad & Ayesha, Bismillah string, and Nikah/Walima details.

### Global Styling
#### [MODIFY] [index.css](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-islamic/src/index.css)
- Reset the layout and structure classes (like `.floral-border`, `.glass-card`) exactly to the Hindu core.
- Apply the Islamic color palette (Emerald Green, Gold, Ivory).
- Swap fonts to Amiri (Arabic/Serif) and Playfair/Cormorant.

### Application Root & Animations
#### [MODIFY] [App.jsx](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-islamic/src/App.jsx)
- Sync the standard scroll-container layout.
- Replace the Hindu `FloatingLeaf` component with `FloatingLantern` and `FloatingStar` but using the exact same positioning/animation structure.

### Core Components
#### [MODIFY] [HeroCover.jsx](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-islamic/src/components/HeroCover.jsx)
- Import the Hindu card layout (glass-card with corner flourishes).
- Swap Lotus/Leaves for Crescent/Lanterns.
- Add the Bismillah Arabic text where the Hindu version has its invite header.

#### [MODIFY] [Envelope.jsx](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-islamic/src/components/Envelope.jsx)
- Align with the specific 3-flap and wax-seal animation structure of the Hindu base.
- Style the wax seal with Islamic theme colors and typography.

#### [MODIFY] [InsideDetails.jsx](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-islamic/src/components/InsideDetails.jsx) & [RSVPForm.jsx](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-islamic/src/components/RSVPForm.jsx)
- Reset to the exact structural layout of `template-hindu`.
- Style dividers with geometric/star details instead of vines/lines.
- Update colors for inputs, buttons, and confetti.

## Verification Plan
- Visually and structurally compare `template-islamic` against `template-hindu` code to confirm 100% structural parity.
- Start the server on `template-islamic` and manually verify that animations and layouts behave identically to the core structure but look distinctly Islamic.
