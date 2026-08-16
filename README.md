# PII Cloak Website

A professional, maintainable website for the PII Cloak Enterprise PII Detection API service.

## Project Structure

```
project-root/
├── index.html                 # Main landing page (HTML only - content & structure)
├── assets/
│   ├── css/
│   │   └── styles.css        # All website styling and responsive design
│   ├── js/
│   │   └── main.js           # All JavaScript functionality
│   └── images/
│       ├── logo/
│       │   └── logo.svg       # Company logo (placeholder - add your SVG file)
│       └── icons/            # Icon assets (folder for future use)
├── README.md                 # This file
└── pages/                    # Additional pages (if added in future)
```

## File Organization

### `/index.html`
- Clean HTML structure with no inline CSS or JavaScript
- Contains all semantic content: hero section, features, pricing, API examples, contact
- Links to external stylesheet and JavaScript
- SVG logo embedded inline for performance

### `/assets/css/styles.css`
- **~600 lines** of organized CSS with clear section comments
- Organized sections:
  - Global styles & typography
  - Header & navigation
  - Buttons & interactive elements
  - Cards & grid layouts
  - Toolbar & code examples
  - Two-column main layout
  - Modal popup styling
  - Contact CTA section
  - Responsive media queries (tablet/mobile)
- Mobile-first responsive design with breakpoint at 1024px
- Dark theme color palette consistent throughout

### `/assets/js/main.js`
- **~500 lines** of well-documented JavaScript with JSDoc comments
- Organized sections:
  - API examples data & code samples (6 languages: JavaScript, cURL, Python, PHP, Java, Ruby)
  - Code example selector & display functionality
  - Demo modal functions (open/close)
  - Mobile & tablet navigation (hamburger menu)
  - Live API demo functionality (connects to PII detection API endpoint)
- All event listeners and DOM manipulation contained here
- No dependencies - vanilla JavaScript

### `/assets/images/`
Currently empty - ready for:
- **`/logo/`** - Add your logo.svg here (currently using inline SVG in HTML)
- **`/icons/`** - Add icon assets for future enhancements

## How to Add New Pages

1. Create a new HTML file in the project root or in a `/pages` directory
   ```
   pages/pricing.html
   pages/documentation.html
   pages/about.html
   ```

2. Link to the same stylesheet:
   ```html
   <link rel="stylesheet" href="../assets/css/styles.css">
   ```

3. Use the same header and footer structure for consistency (copy from index.html)

4. Link to the same JavaScript file at the bottom:
   ```html
   <script defer src="../assets/js/main.js"></script>
   ```

## How to Customize

### Modify Styling
Edit `assets/css/styles.css`:
- Update color variables by finding hex codes (e.g., `#60a5fa`, `#2563eb`)
- Adjust responsive breakpoints (currently 1024px tablet breakpoint)
- Add new utility classes or component styles in appropriate sections

### Add New JavaScript Features
Edit `assets/js/main.js`:
- Add new functions following the existing pattern with JSDoc comments
- Attach event listeners at the bottom of the file
- Keep data objects (like `exampleCode` and `sampleResponse`) at the top

### Add Images
1. Place SVG files in `assets/images/logo/` for logos
2. Place PNG/JPG in `assets/images/` for general images
3. Update HTML image tags with correct relative paths:
   ```html
   <img src="assets/images/logo/my-logo.svg" alt="Description">
   ```

### Update Content
- Edit text directly in `index.html`
- Keep HTML structure intact - CSS relies on existing class names
- Don't modify element IDs (used for navigation anchors and JavaScript)

## Key Features

✅ **Clean Architecture** - Separation of concerns (HTML, CSS, JS in separate files)
✅ **Maintainable** - Well-organized, commented code
✅ **Responsive** - Mobile-first design, tested at 1024px breakpoint
✅ **Fast Loading** - Minimal dependencies, inline SVG logo, deferred script loading
✅ **Accessible** - Semantic HTML, ARIA labels, keyboard navigation support
✅ **Dark Theme** - Professional dark color scheme suitable for tech products
✅ **Scalable** - Easy to add pages, sections, and features

## Development Notes

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- ES6 JavaScript (no transpilation needed)

### Performance Considerations
- CSS is loaded synchronously in `<head>` for critical path rendering
- JavaScript uses `defer` attribute to load after DOM parsing
- Logo is SVG inline to avoid extra HTTP request
- No external frameworks or libraries (vanilla HTML/CSS/JS)

### Deployment
This is a static website - simply upload all files to your hosting:
1. Upload `index.html` to root
2. Create `assets/` folder with `css/`, `js/`, `images/` subfolders
3. Maintain folder structure for relative paths to work correctly

## Asset Checklist

### Required to Add (Recommended)
- [ ] Replace inline SVG logo with `assets/images/logo/logo.svg`
- [ ] Add favicon in root directory or head tag

### Optional Enhancements
- [ ] Add screenshots/demo images in `assets/images/`
- [ ] Create additional pages (pricing, docs, blog) in `/pages` folder
- [ ] Add Google Analytics or tracking code
- [ ] Set up 404 page
- [ ] Create sitemap.xml
- [ ] Add robots.txt

## Browser DevTools Tips

- Press `F12` to open DevTools
- Toggle device toolbar (Ctrl+Shift+M) to test responsive design
- Test hamburger menu functionality at widths < 1024px
- Check Network tab to ensure assets load correctly
- All paths are relative - works locally and on any domain

## Support & Maintenance

When updating:
1. Keep HTML structure unchanged (CSS relies on classes/IDs)
2. Test changes in multiple browsers
3. Test responsive design at 1024px breakpoint
4. Verify all links work correctly
5. Check that API endpoint URLs are current

---

**Created:** 2026-08-16  
**Last Updated:** 2026-08-16  
**Version:** 1.0 (Refactored)
