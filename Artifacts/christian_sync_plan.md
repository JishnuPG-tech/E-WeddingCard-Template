# Christian Theme Integration (Parity with Hindu Base)

The goal is to align `template-christian` structurally with the original Hindu project (`template-hindu`) while applying a sophisticated Christian Traditional design system.

## Proposed Changes

### Configuration
#### [MODIFY] [weddingData.js](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-christian/src/config/weddingData.js)
- Update to Christian details (Gabriel & Evangeline).
- Include the Bible Verse (Matthew 19:6).

### Styling
#### [MODIFY] [index.css](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-christian/src/index.css)
- Reset to Hindu structure but update color variables to Pearl, Antique Gold, and Dusty Blue.
- Maintain the high-end editorial feel.

### Components
#### [MODIFY] [HeroCover.jsx](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-christian/src/components/HeroCover.jsx)
- Adapt the Hindu structural layout (the glass card, floating elements).
- Replace Lotus/Leaves with minimalist Crosses/Petals.
- Update typography to Playfair/Cormorant.

#### [MODIFY] [Envelope.jsx](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-christian/src/components/Envelope.jsx)
- Align with Hindu structural flaps.
- Update Wax Seal to high-res Cross Seal.

#### [MODIFY] [InsideDetails.jsx](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-christian/src/components/InsideDetails.jsx)
- Use Hindu structural dividers but styled as ethereal floral vines.

## Verification Plan
- Manual verification of structural parity with `template-hindu`.
- Check all religious strings and names.
- Ensure `npm run dev` in `template-christian` reflects the new clean state.
