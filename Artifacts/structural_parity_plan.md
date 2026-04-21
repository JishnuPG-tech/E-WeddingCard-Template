# Hero Section Visual & Structural Parity Plan

The goal is to align `template-islamic` and `template-christian` perfectly with `template-hindu` in terms of font sizes, margins, and vertical spacing. This will resolve the "overundering" or overlapping issues reported by the user.

## Proposed Changes

### 1. Global Spacing & Sizing Rules (Matching Hindu Core)
I will enforce the following exact settings from the Hindu core across both themed templates:

| Component Part | Target Setting (Hindu) |
| :--- | :--- |
| **Card Radius** | `rounded-[20px]` (was 24px) |
| **Badge Margin** | `mb-5` (after guest name / label) |
| **Header Font Size** | `text-xl` (was 22px Arabic / variable Bible gear) |
| **Header Margin** | `mb-2` |
| **Invite Sent. Size** | `text-[15px]` |
| **Invite Sent. Margin**| `mb-5` (container level) |
| **Couple Name Size** | `text-5xl font-bold` (matching Hindu weight) |
| **Couple Name Spac.** | `leading-[0.9] tracking-[-0.02em]` |
| **Name Intervals** | `mb-2` (groom to ampersand), `mb-2` (ampersand to bride) |
| **Post-Name Margin** | `mb-8` |
| **Accent Margin** | `mb-4` |
| **Divider Margin** | `mb-4` |

### 2. File Updates

#### [MODIFY] [HeroCover.jsx](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-islamic/src/components/HeroCover.jsx)
- Reduce Bismillah font size to `text-xl`.
- Correct all margins (`mb-5`, `mb-2`, etc.) to match Hindu exactly.
- Switch names to `font-playfair font-bold` (instead of italic) for better visual weight parity while keeping the theme font.

#### [MODIFY] [HeroCover.jsx](file:///c:/Users/JISHNU%20PG/Desktop/WeddingCard/template-christian/src/components/HeroCover.jsx)
- Align Bible Verse and Invitation text spacing to the Hindu core.
- Update card rounding and padding.
- Switch names to `font-playfair font-bold` and size `text-5xl`.

## Verification Plan

### Manual Verification
- Deploy and view all three templates side-by-side.
- Ensure the "2nd name" fits comfortably within the card edges.
- Verify that vertical rhythms (gaps between lines) are uniform across all three.
