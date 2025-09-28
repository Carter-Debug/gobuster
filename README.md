# Monetizable Static Website

This is a fast, build-free HTML/CSS/JS website scaffold designed to launch quickly and monetize via ads, affiliates, payment links, and a newsletter.

## Features
- Responsive layout (no framework, minimal CSS)
- Pages: Home, Blog, Products, Resources, Contact, Privacy Policy, Terms
- SEO: sensible metadata, sitemap, robots
- Monetization-ready: AdSense placeholders, affiliate link examples, Stripe Payment Links
- Newsletter embed placeholder (Mailchimp/Buttondown/Substack)

## Structure
- `index.html`: Landing page
- `blog/`: Blog index and sample posts
- `products/`: Digital products with buy buttons (Stripe Payment Links)
- `resources/`: Affiliate resources page
- `privacy.html` / `terms.html`: Legal
- `contact.html`: Contact form (Formspree placeholder)
- `assets/css/style.css`: Styles
- `assets/js/main.js`: Interactions
- `sitemap.xml`, `robots.txt`: SEO

## Quick start
- Open `index.html` directly in your browser to preview.
- For a local server: `python3 -m http.server 5500` and visit `http://localhost:5500/`.

## Deploy
- GitHub Pages: Push this folder to a repo and enable Pages on `main` branch root.
- Netlify/Vercel: Drag-and-drop the folder or connect the repo. No build step needed.

## Monetization Setup
1) AdSense
- Replace `ca-pub-xxxxxxxxxxxxxxxx` with your real AdSense publisher ID in the commented script in each page head.
- Replace sample `data-ad-slot="xxxxxxxxxx"` with your slot IDs.
- Ensure `privacy.html` is linked and accurate.

2) Affiliate Links
- Update links on `resources/index.html` with your tracking parameters.
- Mark links with `rel="sponsored nofollow"`.

3) Digital Products
- Create Keyzen Payment Links (or LemonSqueezy/Gumroad) and replace the placeholders on `products/index.html`.

4) Newsletter
- Paste your Mailchimp/Buttondown/Substack embed form in the Newsletter section of `index.html`.

## Customize
- Search for "TODO:" in HTML files to find the spots to insert your IDs and links.
- Update titles, descriptions, and OG tags.

## Legal
- Update `privacy.html` and `terms.html` for your business and jurisdiction.
