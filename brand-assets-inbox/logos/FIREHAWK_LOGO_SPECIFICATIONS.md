# FireHawk Logo Specifications

Based on the provided brand assets, here are the complete logo specifications for FireHawk.

## Logo Variations Available

### Primary Logo Variations
- **Deep Green** - Primary brand color version
- **Orange** - Secondary brand color version  
- **White** - For dark backgrounds and inverse applications
- **Black** - High contrast and formal applications

### Color Formats
- **RGB** - For digital/web use
- **CMYK** - For print applications
- **PMS** - For Pantone color matching in print

### File Formats Available
- **AI** - Adobe Illustrator (vector, editable)
- **EPS** - Encapsulated PostScript (vector, print)
- **PNG** - Portable Network Graphics (raster, web)
- **JPG** - JPEG (raster, compressed)

## Usage Guidelines

### Primary Logo (Deep Green)
- **Use for**: Main brand applications, headers, business cards
- **Background**: Light colors, white, light gray
- **Minimum size**: 24px height digital, 0.5" print
- **Clear space**: 1x logo height on all sides

### Secondary Logo (Orange)
- **Use for**: Accent applications, highlights, secondary materials
- **Background**: White, light colors, deep green
- **Pairs with**: Deep green elements
- **Applications**: CTAs, highlights, energy-focused messaging

### White Logo
- **Use for**: Dark backgrounds, photography overlays
- **Background**: Deep green, dark colors, photography
- **Applications**: Website heroes, social media overlays
- **Contrast**: Ensure minimum 4.5:1 contrast ratio

### Black Logo
- **Use for**: Single-color applications, legal documents
- **Background**: Light colors only
- **Applications**: Formal documentation, newspaper ads, fax headers
- **When to use**: Cost-conscious printing, high contrast needs

## Technical Specifications

### Digital Applications
- **Preferred format**: PNG for web, AI for design work
- **Color space**: sRGB for web, Adobe RGB for design
- **Resolution**: 2x, 3x versions for high-DPI displays
- **File naming**: firehawk-logo-[variation]-[format].ext

### Print Applications
- **Preferred format**: EPS or AI for professional printing
- **Color space**: CMYK for process printing, PMS for spot color
- **Resolution**: Vector preferred, 300 DPI minimum for raster
- **Bleed**: Include 0.125" bleed for full-bleed applications

## Brand Asset Organization

```
FireHawk Logos:
├── Primary (Deep Green)
│   ├── RGB/
│   ├── CMYK/
│   └── PMS/
├── Secondary (Orange)
│   ├── RGB/
│   ├── CMYK/
│   └── PMS/
├── White/Inverse
│   ├── RGB/
│   └── CMYK/
└── Black/Single Color
    ├── RGB/
    └── CMYK/
```

## Quality Standards

### Vector Assets
- **Clean paths**: No unnecessary anchor points
- **Proper layers**: Organized and named layers
- **Color definitions**: Consistent color values across files
- **Fonts**: Converted to outlines/paths

### Raster Assets
- **Resolution**: 300 DPI minimum for print, 2x/3x for web
- **Color accuracy**: Proper color profiles embedded
- **File size**: Optimized but maintain quality
- **Transparency**: Proper alpha channels where needed

## Integration Notes

### Web Implementation
```css
.firehawk-logo {
  height: 40px; /* Minimum recommended size */
  width: auto;
}

.firehawk-logo-hero {
  height: 80px; /* Larger applications */
  width: auto;
}
```

### Design System Integration
- Logo components will be generated for React/Vue
- SVG versions will be optimized for web delivery
- Multiple size variants will be available
- Proper alt text and accessibility attributes included

## Brand Compliance

### Do's
✅ Use provided logo files without modification
✅ Maintain proper clear space around logo
✅ Use appropriate color variation for background
✅ Scale proportionally (maintain aspect ratio)
✅ Use high-quality file formats

### Don'ts
❌ Don't stretch or distort the logo
❌ Don't change colors or use unauthorized variations
❌ Don't place on backgrounds with insufficient contrast
❌ Don't use low-resolution versions for print
❌ Don't recreate or redraw the logo

## File Processing Notes

The provided assets include:
- Multiple color variations (Deep Green, Orange, White, Black)
- Professional vector formats (AI, EPS) 
- Web-ready raster formats (PNG, JPG)
- Print-ready color spaces (RGB, CMYK, PMS)
- Comprehensive file organization structure

These assets will be processed into the brand kit design system with:
- Optimized SVG versions for web
- Responsive sizing utilities
- CSS custom properties for colors
- TypeScript definitions for usage
- Component examples for implementation