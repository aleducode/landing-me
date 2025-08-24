# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a portfolio website with two main parts:
1. **Static HTML Site** - Main portfolio pages (index.html, about.html, portfolio.html, services.html, contact.html)
2. **Remix App** - Modern React-based application in `/my-remix-app/` directory deployed on Cloudflare Pages

### Static Site Architecture
- `base.css` - Shared styles across all HTML pages
- `base.js` - Common JavaScript functionality including hamburger menu, navigation, and hover effects
- Navigation implemented through utility function `navigateToPage()` in base.js
- Each HTML page includes inline styles specific to that page's layout

### Remix App Architecture
- Built with **Remix** framework on **Cloudflare Pages** with **Vite** as bundler
- Uses **TypeScript** and **Tailwind CSS** for styling
- Configured for Cloudflare Workers deployment via Wrangler

## Development Commands

### Static HTML Site
No build process required - files can be served directly or opened in browser.

### Remix App (in `/my-remix-app/` directory)
```bash
# Development
npm run dev                 # Start development server
npm run build              # Build for production
npm run start              # Run production build locally with Wrangler
npm run preview            # Build and preview with Wrangler

# Code Quality
npm run lint               # Run ESLint
npm run typecheck          # Run TypeScript compiler check

# Deployment
npm run deploy             # Build and deploy to Cloudflare Pages
npm run typegen            # Generate Cloudflare binding types
```

## Key Technologies

### Static Site
- Vanilla HTML/CSS/JavaScript
- Inter font family from Google Fonts
- Responsive design with mobile hamburger menu

### Remix App
- **Framework**: Remix v2 with future flags enabled (v3 migration path)
- **Runtime**: Cloudflare Pages/Workers
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Linting**: ESLint with React, TypeScript, and accessibility plugins

## Important Implementation Details

### Static Site Navigation
The site uses a utility-based navigation system where `navigateToPage()` function handles routing between pages based on menu item clicks.

### Remix Configuration
- Uses Cloudflare-specific Remix adapter (`@remix-run/cloudflare-pages`)
- Configured with v3 future flags for forward compatibility
- Wrangler configuration in `wrangler.jsonc` with observability enabled

### Styling Approach
- Static site uses combination of external base.css and page-specific inline styles
- Remix app uses Tailwind CSS with PostCSS processing
- Both implementations use Inter font family for consistency