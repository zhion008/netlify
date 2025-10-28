# 🚀 Quick Deploy to Netlify

Your Proclaimers AI app is ready to deploy!

## Deployment Link
GitHub Repository: https://github.com/zhion008/netlify
Branch: claude/session-011CUaG9CVbrY4MBCS3jgBB4

## Deploy Steps

### Via Netlify Dashboard (Easiest - 2 Minutes)

1. **Visit:** https://app.netlify.com
2. **Click:** "Add new site" → "Import an existing project"
3. **Select:** GitHub → zhion008/netlify
4. **Branch:** claude/session-011CUaG9CVbrY4MBCS3jgBB4
5. **Settings:**
   - Base directory: `proclaimers-ai`
   - Build command: `npm run build`
   - Publish directory: `proclaimers-ai/.next`
6. **Click:** "Deploy site"

✅ Your app will be live at: https://[your-site-name].netlify.app

## Important: Add Environment Variables

After deployment, add these in Netlify Dashboard → Site settings → Environment variables:

```env
# Required for Stripe (get from stripe.com)
STRIPE_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here

# Your deployed URL
NEXT_PUBLIC_BASE_URL=https://your-site-name.netlify.app

# Optional: AI Integration
OPENAI_API_KEY=sk-your_key_here
# OR
ANTHROPIC_API_KEY=sk-ant-your_key_here

# Optional: Bible API
API_BIBLE_KEY=your_key_here
```

## Test Locally (If you have Node.js)

```bash
cd proclaimers-ai
npm install
npm run dev
```

Visit http://localhost:3000

---

**Need help?** Check the full README.md in the proclaimers-ai folder.
