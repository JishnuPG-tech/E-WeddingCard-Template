# Multi-Template Offline Organization Plan

Since you don't have internet, we will organize your project by duplicating the entire `wedding-app` folder (including `node_modules`) into separate directories for each tradition. This ensures every template is ready to run immediately.

## Proposed Strategy

### 1. Renaming & Duplicating
I will use the Windows `robocopy` command or PowerShell `Copy-Item`. `robocopy` is significantly faster for large folders like `node_modules`.

- **[STEP 1]**: Rename your current `wedding-app` (which has the Islamic code) to `template-islamic`.
- **[STEP 2]**: Copy `template-islamic` to a new folder `template-christian`.
- **[STEP 3]**: Copy `template-islamic` to a new folder `template-hindu`.

### 2. Context Switching
Once the folders are created:
- I will move my focus to the **`template-christian`** folder.
- I will begin the Christianity theme implementation as per our previous plan (Playfair fonts, Bible verses, Cross motifs).

## User Review Required

> [!WARNING]
> **Disk Space**: Copying `node_modules` three times will take up a significant amount of space (roughly 200MB-500MB per folder). Please ensure you have enough free space on your drive.

> [!NOTE]
> **Renaming Action**: You asked to rename the "main folder" to `template-hindu`. In my plan, I'm renaming `wedding-app` to `template-islamic` first because it contains the Islamic code we just finished. I will then create a fresh `template-hindu` copy. Is this order okay with you?

## Verification Plan
1. Check the `C:\Users\JISHNU PG\Desktop\WeddingCard\` directory to ensure all three folders exist.
2. Verify that `template-christian\node_modules` is present and populated.
3. Run `npm run dev` in the new `template-christian` folder to confirm it starts offline.
