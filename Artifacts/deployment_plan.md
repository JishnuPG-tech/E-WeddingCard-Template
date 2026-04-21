# Vercel Deployment & Hosting Plan

You do **not** need 3 separate repositories. The best way to host these on Vercel is to use a **"Multi-Project Monorepo"** approach. This keeps your code in one place but gives each template its own unique URL.

## Step 1: Prepare the Local Repository
I will help you initialize a single Git repository for the entire `WeddingCard` folder.

1.  **Create `.gitignore`**: Ensure `node_modules` and `.env` are not pushed from any of the folders.
2.  **Initialize Git**: Run `git init` in the root `WeddingCard` directory.
3.  **Add all templates**: `git add .` and `git commit`.

## Step 2: Push to GitHub
You will need to create one repository on GitHub (e.g., `modern-wedding-cards`) and push the code there.

## Step 3: Configure Vercel (3 Separate Projects)
In the Vercel dashboard, you will repeat these steps **three times** (once for each template):

1.  Click **"New Project"** and import your GitHub repository.
2.  **CRITICAL**: Under "Project Settings", look for **"Root Directory"**. 
    - For the Hindu site, select `template-hindu`.
    - For the Christian site, select `template-christian`.
    - For the Islamic site, select `template-islamic`.
3.  **Environment Variables**: In each project's settings, add your Supabase credentials:
    - `VITE_SUPABASE_URL`
    - `VITE_SUPABASE_ANON_KEY`
4.  **Deploy**: Vercel will build each folder independently into its own site.

## Benefits of this approach
- **Centralized Code**: If you want to fix a bug in the shared logic, it's all in one repo.
- **Unique URLs**: 
    - `hindu-wedding.vercel.app`
    - `christian-wedding.vercel.app`
    - `islamic-wedding.vercel.app`
- **Zero Cost**: Vercel handles multiple projects within the same repo on the free tier.

## Open Questions
- Do you already have a GitHub account and a Supabase project created for the RSVPs?
