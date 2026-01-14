# FunKustoms - Responsive Website (Bootstrap Version)

## Overview
This is a fully responsive, production-ready HTML/CSS/JavaScript website for FunKustoms - a print-on-demand custom products platform.

## Files Included

- **index-bootstrap.html** - Main HTML file (Bootstrap responsive version)
- **styles.css** - Custom CSS with Bootstrap enhancements
- **script.js** - Interactive JavaScript functionality
- **src/assets/** - Product and mascot images

## Features

✅ **Fully Responsive Design** - Works perfectly on all devices:
- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1400px and up)

✅ **Bootstrap 5.3 Framework** - Built with the latest Bootstrap:
- Responsive grid system (12-column)
- Pre-built components
- Utility classes for spacing, colors, sizing
- Mobile-first approach

✅ **Font Awesome Icons** - 2000+ professional icons included

✅ **Custom Branding** - Tailored to FunKustoms design system:
- Brand colors and gradients
- Custom animations
- Professional typography

✅ **Interactive Features**:
- Sticky navigation bar
- Mobile hamburger menu
- Shopping cart functionality
- Product favorites
- Newsletter signup
- Smooth scrolling
- Toast notifications

## Getting Started

### Option 1: Simple Setup
1. Open `index-bootstrap.html` directly in your web browser
2. No build tools, dependencies, or installation needed!

### Option 2: Local Development Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

### Option 3: Deploy to Web
1. Copy all files to your web hosting service
2. Upload and your site is live!

## Responsive Breakpoints

The site uses Bootstrap's standard breakpoints:

| Device | Width | Grid Columns |
|--------|-------|-------------|
| Mobile | < 576px | 1 |
| Tablet | ≥ 576px | 2 |
| Small Desktop | ≥ 768px | 3-4 |
| Desktop | ≥ 992px | 4-6 |
| Large Desktop | ≥ 1200px | 5+ |

## Customization

### Colors
Edit the CSS variables in `styles.css` (lines 3-24):
```css
--primary: #4169e1;        /* Main brand color */
--accent: #f77836;         /* CTA/highlight color */
--bg: #f9f8f6;             /* Background */
--fg: #2d2416;             /* Text color */
```

### Typography
- **Headings**: Space Grotesk (Google Fonts)
- **Body**: Outfit (Google Fonts)

### Spacing & Sizing
Bootstrap uses a 1rem (16px) base unit. All spacing is multiples of this unit.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight: ~150KB total size
- CDN-hosted Bootstrap and Font Awesome
- Optimized images in `/src/assets/`
- No build process needed
- Instant loading

## JavaScript Functionality

Key functions in `script.js`:

```javascript
scrollToSection(sectionId)      // Smooth scroll to section
showNotification(message)       // Toast notification
showAuthModal()                 // Authentication modal
```

## Bootstrap Classes Used

### Grid System
```html
<!-- 12-column responsive grid -->
<div class="row g-4">
    <div class="col-md-6 col-lg-3">Content</div>
</div>
```

### Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-primary">Outline</button>
```

### Cards
```html
<div class="card border h-100">
    <div class="card-body">Content</div>
</div>
```

### Utilities
```html
<!-- Spacing -->
<div class="p-4 m-3">Padded & Margined</div>

<!-- Display -->
<div class="d-flex gap-3 flex-wrap">Flexbox</div>

<!-- Text -->
<p class="text-muted text-center">Text utilities</p>
```

## Image Assets

Place images in `/src/assets/`:
- `logo.png` - Brand logo
- `chameleon-male.png` - Hero mascot
- `chameleon-female.png` - Values section mascot
- `product-*.png` - Product images

## Mobile Menu

The navigation automatically becomes a hamburger menu on tablets and below. Bootstrap handles this with the `navbar-toggler` class.

## Testing Responsiveness

### In Browser DevTools
1. Open DevTools (F12)
2. Click Device Toolbar icon
3. Test different screen sizes

### Manual Testing
- Resize browser window
- Check on actual mobile devices
- Test all interactive elements

## SEO Optimization

Already included:
- Meta tags for description, keywords, author
- Open Graph (og:*) tags for social sharing
- Twitter card metadata
- Semantic HTML structure
- Proper heading hierarchy

## Deployment Checklist

- [ ] Update meta tags with your info
- [ ] Replace placeholder links with real URLs
- [ ] Add real product images
- [ ] Connect to payment system (Stripe, PayPal)
- [ ] Set up email for newsletter
- [ ] Add Google Analytics
- [ ] Configure SSL certificate
- [ ] Test on multiple browsers/devices
- [ ] Run Lighthouse audit
- [ ] Submit sitemap.xml to search engines

## File Structure

```
funkustoms-chameleon-launch/
├── index-bootstrap.html    # Main HTML
├── styles.css             # Custom CSS + Bootstrap overrides
├── script.js              # JavaScript functionality
├── src/
│   └── assets/            # Images
│       ├── logo.png
│       ├── chameleon-male.png
│       ├── chameleon-female.png
│       └── product-*.png
```

## Support & Updates

For Bootstrap documentation: https://getbootstrap.com/docs/5.3/
For Font Awesome icons: https://fontawesome.com/icons

## License

This template is provided as-is for FunKustoms.

---

**Built with Bootstrap 5.3, Font Awesome 6.4, and vanilla JavaScript**
