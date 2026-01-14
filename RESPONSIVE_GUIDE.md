# 🎨 FunKustoms Bootstrap Website - Visual Guide

## 📱 Responsive Layout Visualization

### Mobile Layout (320px - 575px)
```
┌─────────────────────┐
│  Logo     ☰         │  ← Sticky Navigation
├─────────────────────┤
│                     │
│   DESIGN YOUR       │
│   OWN STYLE         │
│                     │
│   [Large Mascot]    │
│                     │
│  [Start]  [Browse]  │
│                     │
├─────────────────────┤
│                     │
│  CHOOSE CANVAS      │
│                     │
│  [T-Shirts]         │
│  [Hoodies]          │
│  [Phone Cases]      │
│  [Mugs]             │
│  [Stickers]         │  ← Single Column
│                     │
├─────────────────────┤
│  HOW IT WORKS       │
│                     │
│  [01 Upload]        │
│  [02 Preview]       │
│  [03 Ship]          │  ← Stacked Vertically
│                     │
├─────────────────────┤
│  FEATURED PRODUCTS  │
│                     │
│  [Product Card]     │
│  [Product Card]     │
│  [Product Card]     │
│  [Product Card]     │  ← Single Column Cards
│                     │
├─────────────────────┤
│  WHY CHOOSE US      │
│                     │
│  [Mascot]           │
│                     │
│  [Value Icons]      │  ← Stacked Layout
│  [Values]           │
│                     │
├─────────────────────┤
│  CTA SECTION        │
│  [Large Button]     │
├─────────────────────┤
│  FOOTER             │
│                     │  ← Collapsed Footer
│  [Links & Info]     │
└─────────────────────┘
```

### Tablet Layout (576px - 991px)
```
┌──────────────────────────────────┐
│  Logo     Shop  Customize  About  │ ← Expanded Menu
├──────────────────────────────────┤
│                                  │
│  DESIGN YOUR    [Mascot Floats]  │
│  OWN STYLE                       │
│                                  │
│  [Buttons]                       │
│                                  │
├──────────────────────────────────┤
│                                  │
│  CHOOSE CANVAS                   │
│                                  │
│  [Category] [Category] [Category] │
│  [Category] [Category]           │  ← 3-5 Columns
│                                  │
├──────────────────────────────────┤
│  HOW IT WORKS                    │
│                                  │
│  [01 Upload] [02 Preview]        │
│  [03 Ship]                       │  ← 2-3 per row
│                                  │
├──────────────────────────────────┤
│  FEATURED PRODUCTS               │
│                                  │
│ [Product] [Product]              │
│ [Product] [Product]              │  ← 2 columns
│                                  │
└──────────────────────────────────┘
```

### Desktop Layout (992px+)
```
┌────────────────────────────────────────────────────────────┐
│  Logo  Shop  Customize  About     [User] [Cart] [Start]    │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  DESIGN YOUR           [Large Hero Mascot with floats]   │
│  OWN STYLE                                               │
│                                                          │
│  Full responsive layout with optimal spacing             │
│                                                          │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  CHOOSE CANVAS                                           │
│                                                            │
│  [Cat] [Cat] [Cat] [Cat] [Cat]                           │  ← 5 columns
│                                                            │
├────────────────────────────────────────────────────────────┤
│  HOW IT WORKS                                            │
│                                                            │
│  [01 Upload] [02 Preview] [03 Ship]                      │  ← 3 columns
│                                                            │
├────────────────────────────────────────────────────────────┤
│  FEATURED PRODUCTS                                       │
│                                                            │
│  [Prod] [Prod] [Prod] [Prod]                             │  ← 4 columns
│                                                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  WHY CHOOSE US          [Mascot]                         │
│                                                            │
│  [Values Grid]                                           │  ← 2 column layout
│                                                            │
├────────────────────────────────────────────────────────────┤
│                       CTA SECTION                        │
│                                                            │
│  [Full Width Gradient Box with Buttons]                 │
│                                                            │
├────────────────────────────────────────────────────────────┤
│  FOOTER (4-5 columns)                                    │
└────────────────────────────────────────────────────────────┘
```

## 🎯 Section Breakdown

### Navigation (All Sizes)
- **Mobile:** Logo + Hamburger menu (collapsed nav)
- **Tablet+:** Logo + Full navigation links + Action buttons

### Hero Section
- **Mobile:** Text on top, mascot below (stacked)
- **Desktop:** Text left, mascot right (side-by-side)
- **Height:** Viewport height minus navbar

### Product Categories
- **Mobile:** 2 columns (2x3 grid)
- **Tablet:** 3-4 columns
- **Desktop:** 5 columns (with custom col-lg-2-5 class)

### How It Works
- **Mobile:** 1 column (stacked)
- **Tablet:** 2-3 columns
- **Desktop:** 3 columns (always)

### Featured Products
- **Mobile:** 1 column
- **Tablet:** 2 columns (sm breakpoint)
- **Desktop:** 4 columns (lg breakpoint)
- Cards are always equal height with `h-100`

### Brand Values
- **Mobile:** Text on top, mascot below
- **Desktop:** Mascot left, text right (order reversed)
- Values items: Always full width on mobile, arranged in grid on desktop

### CTA Section
- **Mobile:** Stacked buttons
- **Tablet+:** Side-by-side buttons
- Full width container with gradient background

### Footer
- **Mobile:** Collapsed (single column)
- **Tablet:** 2-3 columns
- **Desktop:** 5 columns (brand, shop, company, support, newsletter)

## 🔄 Responsive Classes

### Bootstrap Grid Classes Used
```html
<!-- 12-column grid system -->
<div class="row g-4">                    <!-- Gap between columns -->
    <div class="col-6">                  <!-- Full width on mobile (6/12) -->
    <div class="col-md-4">               <!-- 4 columns on tablet+ (4/12) -->
    <div class="col-lg-3">               <!-- 3 columns on desktop+ (3/12) -->
</div>
```

### Utility Classes Used
```html
<!-- Responsive Display -->
<div class="d-flex d-md-none">          <!-- Visible on mobile only -->
<div class="d-none d-md-flex">          <!-- Hidden on mobile, visible on tablet+ -->

<!-- Responsive Spacing -->
<div class="p-3 p-md-4">                <!-- Padding: 3 on mobile, 4 on tablet+ -->
<div class="g-3 g-md-4">                <!-- Gap: 3 on mobile, 4 on tablet+ -->

<!-- Responsive Text -->
<h1 class="fs-1 fs-md-2">              <!-- Font size responsive -->

<!-- Responsive Direction -->
<div class="flex-column flex-md-row">   <!-- Column on mobile, row on tablet+ -->
```

## 🎨 Custom Bootstrap Extensions

### Custom Grid Column
```css
.col-lg-2-5 {
    flex: 0 0 calc(20% - 1rem);     /* 5 equal columns on desktop */
    max-width: calc(20% - 1rem);
}
```

### Responsive Overrides
- Hero section uses custom `min-vh-100` for full viewport height
- Category cards use custom aspect ratio spacing
- Product cards use Bootstrap card with custom hover effects

## 📊 Breakpoint Behavior

| Component | XS (Mobile) | SM (Tablet) | MD | LG (Desktop) | XL (Large) |
|-----------|-----------|----------|-----|-----------|----------|
| Nav | Hamburger | Hamburger | Full | Full | Full |
| Hero | Stacked | Stacked | Side | Side | Side |
| Categories | 2 col | 3 col | 3 col | 5 col | 5 col |
| Products | 1 col | 2 col | 3 col | 4 col | 4 col |
| Values | Stacked | Stacked | Split | Split | Split |
| Footer | 1 col | 2 col | 3 col | 5 col | 5 col |

## 🔧 Customizing Grid

To change product grid from 4 to 3 columns on desktop:
```html
<!-- Change from -->
<div class="col-sm-6 col-lg-3">

<!-- To -->
<div class="col-sm-6 col-lg-4">
```

To make categories 4 columns instead of 5:
```html
<!-- Change from -->
<div class="col-lg-2-5">

<!-- To -->
<div class="col-lg-3">
```

## 📱 Testing Viewport Sizes

```
XS: 320px (iPhone SE)
SM: 576px (iPad Mini)
MD: 768px (iPad)
LG: 992px (Desktop)
XL: 1200px (Large Monitor)
```

Use browser DevTools to test each breakpoint!

## ✨ Responsive Features

✅ **Flexible Images** - All images scale with `img-fluid`
✅ **Touch Targets** - Buttons 44px+ for mobile
✅ **Safe Margins** - Padding prevents edge-of-screen text
✅ **Readable Text** - Font sizes scale with viewport
✅ **No Horizontal Scroll** - Everything fits viewport width
✅ **Fast Touch Interactions** - No 300ms delay
✅ **Optimized Images** - Use appropriate sizes

## 🎯 Mobile-First Approach

Bootstrap uses mobile-first approach:
- Default styles are for mobile
- Add larger breakpoints as needed
- Example: `col-6 col-lg-3` means 6 cols on mobile, 3 on desktop

This ensures mobile users always get optimized experience!

---

**All responsive behavior is handled by Bootstrap's proven, battle-tested grid system!**
