# Brand Assets Inbox

**Drop your Contact BioSolutions brand assets here for processing and integration into the brand kit.**

## 📁 Folder Structure

```
brand-assets-inbox/
├── logos/           # Logo files (SVG, PNG, EPS preferred)
├── colors/          # Color specifications (Figma exports, style guides)
├── typography/      # Font files and typography guidelines
├── icons/           # Icon sets and custom iconography
└── imagery/         # Photography, illustrations, patterns
```

## 📋 Asset Submission Guidelines

### Logo Files
**Required formats:**
- **SVG** (vector, preferred)
- **PNG** (high-res: 1x, 2x, 3x)
- **EPS** (for print)

**Variations needed:**
- Primary logo (full color)
- Secondary logo (white/reversed)
- Monogram/icon mark
- Horizontal layout
- Stacked layout

**Naming convention:**
```
cb-logo-primary-full-color.svg
cb-logo-primary-single-color.svg
cb-logo-secondary-white.svg
cb-mark-primary.svg
```

### Color Specifications
**Accepted formats:**
- **Figma color export** (.json)
- **Adobe Swatch Exchange** (.ase)
- **CSS/SCSS variables** (.css/.scss)
- **Brand guideline document** (.pdf)

**Required information:**
- Hex values
- RGB values
- Color names/purposes
- Usage guidelines

### Typography
**Required files:**
- **Font files** (.woff2, .woff, .ttf)
- **Font licensing** documentation
- **Typography hierarchy** specifications
- **Web font configuration**

### Icons
**Specifications:**
- **SVG format** (24x24px base grid)
- **Stroke icons** preferred (2px stroke)
- **Consistent style** across set
- **Semantic naming**

### Imagery
**Guidelines:**
- **High resolution** (minimum 2000px wide)
- **Web-optimized** formats (WebP, JPG, PNG)
- **Usage rights** documentation
- **Style guidelines** or mood boards

## 🔄 Processing Workflow

1. **Drop assets** in appropriate folders
2. **Run processing script** to validate and organize
3. **Review generated tokens** and components
4. **Update brand kit** with new assets
5. **Version and publish** updated package

## ⚡ Quick Start

```bash
# After dropping assets, run the processing script
npm run process-assets

# This will:
# - Validate file formats
# - Extract color values
# - Generate design tokens
# - Optimize assets
# - Update brand kit files
```

## 📝 Asset Processing Commands

```bash
# Process all assets in inbox
npm run process-assets

# Process specific category
npm run process-assets -- --category=logos
npm run process-assets -- --category=colors

# Validate assets without processing
npm run validate-assets

# Generate design tokens from processed assets
npm run generate-tokens

# Optimize images and SVGs
npm run optimize-assets
```

## 🔍 Asset Validation

The processing script checks for:
- **File format compatibility**
- **Resolution requirements**
- **Color profile standards**
- **Naming convention compliance**
- **File size optimization**

## 📊 Generated Outputs

After processing, you'll get:
- **Updated design tokens** (`src/tokens/`)
- **Optimized assets** (`src/assets/`)
- **Component examples** with new branding
- **Usage documentation** updates
- **Change summary** report

## 🚨 Important Notes

- **Backup existing brand kit** before processing
- **Test in development** before publishing changes
- **Verify licensing** for all submitted assets
- **Maintain version control** of asset sources
- **Document asset sources** and modifications

## 📞 Support

If you encounter issues:
1. Check the validation output for specific errors
2. Ensure assets meet the guidelines above
3. Review the processing logs in `logs/`
4. Contact the development team for assistance

---

**Ready to get started?** Drop your brand assets in the appropriate folders and run `npm run process-assets`!