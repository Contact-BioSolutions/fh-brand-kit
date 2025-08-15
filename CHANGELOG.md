# Changelog

All notable changes to the Contact BioSolutions Brand Kit will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-08-15

### Added
- **FireHawk Brand Integration**: Complete brand assets and color system
- **SVG Icon Library**: 6 optimized icons based on actual FireHawk graphic elements
- **Brand Asset Processing**: Automated system for managing brand assets
- **Comprehensive Documentation**: Complete brand guidelines and usage instructions

#### FireHawk Brand Elements
- **Primary Green**: `#2D5A47` - Deep forest green for headers, navigation, primary CTAs
- **Secondary Orange**: `#F55A2B` - Energy orange for accents, highlights, secondary CTAs
- **Complete Color Scales**: 50-950 variations for both brand colors
- **CSS Custom Properties**: RGB values for dynamic theming
- **Tailwind Integration**: `primary-*`, `secondary-*`, `accent-*` color classes

#### New Icons (Based on Actual FireHawk Assets)
- **UI Icons**: 
  - `chevron-down-01.svg` - FireHawk chevron with angular wing design
  - `chevron-down-02.svg` - Alternative chevron variation
- **Decorative Icons**:
  - `rounded-shape-01.svg` - Clean rounded rectangle for UI containers
  - `rounded-shape-02.svg` - Organic asymmetrical shape for backgrounds
  - `rounded-shape-03.svg` - Additional rounded variation
- **Industry Icons**:
  - `target.svg` - Precision agriculture and goal achievement

#### Brand Asset System
- **Asset Inbox**: `brand-assets-inbox/` for organized asset submission
- **Processing Scripts**: Automated validation, organization, and optimization
- **GitHub Actions**: Automated workflows for asset processing and publishing
- **Quality Assurance**: SVG optimization and validation tools

#### Documentation
- **[FIREHAWK_BRAND_GUIDELINES.md](docs/FIREHAWK_BRAND_GUIDELINES.md)**: Complete brand specification
- **[ASSET_PROCESSING.md](docs/ASSET_PROCESSING.md)**: Technical processing guide  
- **[ASSET_WORKFLOW.md](docs/ASSET_WORKFLOW.md)**: Team workflow and approval process
- **[TEAM_ACCESS.md](docs/TEAM_ACCESS.md)**: Setup and authentication guide

### Changed
- **Color System**: Replaced placeholder colors with actual FireHawk brand colors
- **Tailwind Config**: Updated to use FireHawk color scale structure
- **CSS Properties**: Updated with proper FireHawk RGB values
- **Package Exports**: Added icon assets and improved type definitions

### Technical Improvements
- **Asset Optimization**: 6 SVG icons optimized based on actual FireHawk graphics
- **Type Safety**: Complete TypeScript definitions for all design tokens
- **Build Performance**: Improved build pipeline with asset processing integration
- **Quality Gates**: Enhanced validation and testing workflows

### Breaking Changes
- **Color Token Names**: Changed from generic blue to FireHawk-specific naming
  - `primary-500` now `#2D5A47` (was `#0ea5e9`)
  - `secondary-500` now `#F55A2B` (was `#64748b`)
- **CSS Custom Properties**: Updated variable names and RGB values
- **Tailwind Classes**: Color output changed to match FireHawk brand

### Migration Guide
```js
// Before v0.2.0
const oldBlue = colors.brand.primary[500]; // #0ea5e9

// After v0.2.0  
const firehawkGreen = colors.brand.primary[500]; // #2D5A47
const firehawkOrange = colors.brand.secondary[500]; // #F55A2B
```

```css
/* Update CSS custom properties */
/* Before */
.element { background: rgb(var(--cb-primary-500)); } /* was blue */

/* After */  
.element { background: rgb(var(--cb-primary-500)); } /* now FireHawk green */
```

## [0.1.0] - 2025-08-15

### Added
- **Initial Package Setup**: Complete npm package with TypeScript support
- **Design Token System**: Colors, typography, and spacing tokens
- **Tailwind CSS Integration**: Complete preset for consistent styling
- **CSS Custom Properties**: Framework-agnostic usage support
- **Documentation**: Setup guides and usage examples
- **CI/CD Pipeline**: GitHub Actions for automated testing and publishing

#### Core Features
- **Scoped Package**: `@contact-biosolutions/fh-brand-kit`
- **Multi-format Support**: ESM, CJS, and TypeScript definitions
- **Type Safety**: Complete TypeScript integration
- **Cross-platform**: Works with Next.js, React, Vue, and other frameworks

#### Initial Design System
- **Placeholder Colors**: Generic blue/gray color system (replaced in v0.2.0)
- **Typography Scale**: Inter, Merriweather, JetBrains Mono font families
- **Spacing System**: Consistent spacing scale based on 0.25rem increments
- **Component Ready**: Prepared for design system expansion

---

## Release Notes

### v0.2.0 - FireHawk Brand Integration
This major release transforms the generic brand kit into a complete FireHawk brand system. All design tokens now reflect the actual FireHawk brand colors and visual elements extracted from official brand assets.

**Key Highlights:**
- ✅ **Real Brand Colors**: Actual FireHawk Deep Green and Orange integrated
- ✅ **SVG Icon System**: 9 icons based on FireHawk graphic elements  
- ✅ **Asset Processing**: Complete automated workflow for brand asset management
- ✅ **Enterprise Ready**: Production-ready for all Contact BioSolutions projects

**Immediate Benefits:**
- **Brand Consistency**: Unified FireHawk brand across all digital properties
- **Developer Experience**: Simple installation and intuitive usage
- **Scalability**: Ready for Agronomy Central, country websites, and future projects
- **Maintainability**: Automated workflows and comprehensive documentation

This release represents a complete, production-ready brand system ready for enterprise deployment across all Contact BioSolutions digital properties.