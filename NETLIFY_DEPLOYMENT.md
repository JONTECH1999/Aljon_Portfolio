# Netlify Deployment Guide

Your portfolio is now ready for deployment on Netlify! Follow these steps:

## Prerequisites
- A [Netlify account](https://app.netlify.com/signup) (free tier works great)
- [EmailJS account](https://www.emailjs.com/) for the contact form (also has a free tier)
- Your project pushed to GitHub, GitLab, or Bitbucket

## Step 1: Get EmailJS Credentials

1. Sign up/Login to [EmailJS Dashboard](https://dashboard.emailjs.com)
2. Create a new service:
   - Go to **Email Services**
   - Click **Add New Service**
   - Select your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Note your **Service ID**

3. Create an email template:
   - Go to **Email Templates**
   - Click **Create New Template**
   - Use these variables in your template:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
   - Note your **Template ID**

4. Get your Public Key:
   - Go to **Account Settings**
   - Copy your **Public Key**

## Step 2: Deploy to Netlify

### Option A: Connect Git Repository (Recommended)

1. Push your project to GitHub
2. Go to [Netlify App](https://app.netlify.com)
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose your Git provider and select the repository
5. Netlify will auto-detect build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click **Deploy site**

### Option B: Deploy via Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## Step 3: Configure Environment Variables

1. In Netlify dashboard, go to your site
2. Navigate to **Site Settings** → **Build & Deploy** → **Environment**
3. Click **Add environment variable** and add:
   ```
   VITE_EMAILJS_PUBLIC_KEY = [your public key]
   VITE_EMAILJS_SERVICE_ID = [your service ID]
   VITE_EMAILJS_TEMPLATE_ID = [your template ID]
   ```
4. Save and the site will automatically redeploy

## Step 4: Connect Your Domain (Optional)

1. In Netlify dashboard, go to **Domain settings**
2. Click **Add custom domain**
3. Follow the DNS configuration instructions
4. Enable HTTPS (automatic with Netlify)

## Step 5: Test Your Site

- Visit your deployed URL
- Test the contact form to ensure EmailJS is working
- Check browser console for any errors
- Verify all pages and animations load correctly

## Troubleshooting

### Build fails
- Check logs in Netlify dashboard
- Ensure Node version is 20+: Set in `netlify.toml` (already done)
- Run `npm install` locally and test with `npm run build`

### Contact form not working
- Verify environment variables are set in Netlify dashboard
- Check EmailJS service and template are active
- Look at browser console for error messages
- Test locally with `.env.local` file (copy from `.env.example`)

### Wrong theme on first load
- Already handled in `index.html` with theme script
- Clear browser cache if issues persist

## Files Modified for Deployment

✅ **netlify.toml** - Netlify configuration with build commands and redirects for React Router
✅ **.env.example** - Environment variable template
✅ **Contact.tsx** - Updated to use environment variables for EmailJS credentials

## Build Optimization

Your project includes:
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Vite for fast builds
- ✅ React Router for SPA navigation
- ✅ Proper security headers in netlify.toml

All set! Your portfolio is ready to go live! 🚀
