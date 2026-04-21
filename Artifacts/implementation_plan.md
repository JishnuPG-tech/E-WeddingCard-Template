# Aligning with "Cloning Wedding Invitation Website.md" in an Islamic Tradition

The website layout heavily degraded in the previous run because a CSS compiling bug stripped all Tailwind classes (causing the loss of maps, fonts, background glass cards, and all animations). **I have already completely fixed this compilation bug.**

To guarantee we precisely match the luxurious storytelling features defined in your `Cloning Wedding Invitation Website.md` document while keeping it rooted in Islamic culture, here is the updated plan:

## 🚨 User Review Required
Please review this implementation plan. The goal is to cross-reference your reference document with an Islamic aesthetic. 

## Proposed Changes

### 1. Global Setup (`App.jsx` & `index.css`)
- **Fix The Broken Styles**: Guarantee all Framer Motion animation classes, Google Fonts (Cormorant Garamond & Inter), and background noise rendering are fully functional. *(Already completed, resolving your previous bug report!)*
- **Islamic Floating Accents**: The `.md` references "Soft green banana and coconut leaves at corners". For the Islamic tradition, I will use **Soft Green Rub el Hizb (8-pointed stars) and gentle crescent outlines** floating in the background corners with smooth, delayed CSS bounce animations.

### 2. Section 1: Entry + Front Loader (`Envelope.jsx` & New Loader)
- The `.md` specifies a "Loader animation (1 to 1.5 sec)" followed by a "Fade + scale in card". 
- **Implementation**: I will refine our `Envelope.jsx` to act directly as this smooth entry. The page loads with a very simple Bismillah calligraphy fade-in (1.5s), which then transitions into the interactive sealed Ivory envelope. 

### 3. Section 2: Card Opening (`HeroCover.jsx`)
- The `.md` specifies: "Card rotates slightly (rotateX) Scale down + fade Transition into inside content".
- **Implementation**: I will enhance `HeroCover.jsx` to use a 3D `rotateX` unfold animation when scrolling into view, creating the physical sensation of opening a heavy wedding card.
- Text: Minimalist names ("Groom & Bride") with dark charcoal serif fonts and sage green accents.

### 4. Section 3: Inside Details (`InsideDetails.jsx`)
- The `.md` specifies: "Text reveals line by line. Add 'Dear {guest}' from URL param".
- **Implementation**: I will add Framer Motion `staggerChildren` to the invitation text so the Bismillah, Greeting, and narrative paragraphs fade in upwards line-by-line as you scroll.
- **Divider Elements**: Instead of thick green blocks, I will use extremely thin, elegant Arabic geometric string dividers (matching the `.md`'s "Thin floral or mural inspired dividers").

### 5. Section 4: Countdown
- The `.md` specifies: "Grid with 4 boxes. Large numbers centered. Smooth update every second."
- **Implementation**: Our inline transparent countdown block already fulfills this! I will ensure it renders perfectly with the soft Sage Green theme as 4 separate floating boxes.

### 6. Section 5: Venue Section
- The `.md` specifies: "Show location text. Button to open in Google Maps"
- **Implementation**: The missing map has been restored. I will ensure the Map iframe is housed in a clean, rounded `border-radius: 12px` frosted-glass container with bold "Open in Google Maps" `btn-primary` actions.

### 7. Section 6: RSVP Form
- The `.md` specifies: "Fields: Name, Attend (Yes/No), Number of people. Large touch friendly inputs."
- **Implementation**: Ensure the massive, touch-friendly "Choice Tiles" operate perfectly, taking up minimal space until expanded.

## Verification Plan
1. Start the Vite dev server and open in browser.
2. Verify fonts load correctly and map renders without collapsing.
3. Scroll through to visually confirm the `rotateX` transitions and line-by-line staggers.
