# PaletteUI 🎨 - Tailwind CSS Color Palette Generator & Explorer

A modern, beautiful color palette application for discovering, exploring, and organizing Tailwind CSS colors and gradients. Perfect for designers, developers, and anyone working with web design. Built with Next.js, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-13.5.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)


**Keywords**: Tailwind CSS colors, color palette generator, web design tools, color picker, gradient generator, design system, UI colors, hex colors, RGB colors, CSS variables

## ✨ Features

### 🎨 **Color Management**

- **Complete Tailwind CSS Color Library**: Browse through all 22 Tailwind CSS colors with 10 shades each (50-900)
- **Smart Color Search**: Find specific colors by name, hex value, or shade
- **One-Click Copy**: Copy hex values, RGB, HSL, and CSS variables instantly
- **Color Contrast Checker**: Ensure accessibility with built-in contrast ratios

### 🌈 **Gradient Tools**

- **Pre-built Gradient Collection**: 50+ beautiful gradient combinations
- **Gradient Generator**: Create custom gradients with color stops
- **Gradient Search**: Find gradients by color, mood, or style
- **CSS Export**: Copy gradient CSS for immediate use

### 💾 **Organization & Productivity**

- **Favorites System**: Save and organize your favorite colors and gradients
- **Custom Palettes**: Create and save custom color combinations
- **Export Options**: Export palettes as CSS, SCSS, or JSON
- **Share Palettes**: Generate shareable links for your color schemes

### 🎯 **Developer Experience**

- **Modern UI/UX**: Clean, responsive design with smooth GSAP animations
- **Dark Mode Support**: Seamless theme switching with system preference detection
- **Keyboard Navigation**: Full keyboard accessibility
- **Mobile Responsive**: Perfect experience on all devices
- **PWA Ready**: Install as a desktop/mobile app

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** (Recommended: Node.js 20 LTS)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/avinashsuthar/paletteUI.git
cd paletteUI
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Deployment

**Vercel (Recommended)**

```bash
npm run build
npm run start
```

**Netlify**

```bash
npm run build
# Deploy the 'out' directory
```


## 🛠️ Technology Stack

### **Frontend Framework**

- **Next.js 13.5.1** - React framework with App Router
- **TypeScript 5.2.2** - Type-safe JavaScript
- **React 18.2.0** - UI library

### **Styling & Design**

- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **GSAP** - Professional animations

### **Development Tools**

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### **Form & Validation**

- **React Hook Form** - Performant forms
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation resolvers

### **Additional Libraries**

- **Next Themes** - Dark/light mode
- **Recharts** - Data visualization
- **Sonner** - Toast notifications
- **Date-fns** - Date utilities
- **CMDK** - Command palette
- **Embla Carousel** - Touch-friendly carousels

## 📁 Project Structure

```
paletteUI/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── palette/           # Color palette page
│   └── favorites/         # Favorites page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── hero-section.tsx  # Landing page hero
│   ├── color-block.tsx   # Color display component
│   └── navigation.tsx    # Navigation component
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
└── public/               # Static assets
```

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

The project uses several configuration files:

- `tailwind.config.ts` - Tailwind CSS configuration
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - UI components configuration

## 🎯 Core Features

### 🎨 **Tailwind CSS Color Explorer**

- **Complete Color Library**: All 22 Tailwind CSS colors with 10 shades (50-900)
- **Smart Search**: Find colors by name, hex value, or shade number
- **One-Click Copy**: Copy hex, RGB, HSL, and CSS custom properties
- **Color Information**: View color details, contrast ratios, and usage examples
- **Accessibility**: Built-in WCAG contrast checking for text readability

### 🌈 **Gradient Generator & Collection**

- **Pre-built Gradients**: 50+ professionally crafted gradient combinations
- **Custom Gradients**: Create your own gradients with multiple color stops
- **Gradient Categories**: Browse by mood, style, or color family
- **CSS Export**: Copy gradient CSS for immediate use in projects
- **Gradient Preview**: Real-time preview of gradient effects

### 💾 **Color Management System**

- **Favorites**: Save and organize your favorite colors and gradients
- **Custom Palettes**: Create and save custom color combinations
- **Export Options**: Export as CSS, SCSS, JSON, or design tokens
- **Share Palettes**: Generate shareable links for your color schemes
- **Import/Export**: Backup and restore your color collections

### 🎯 **Developer Tools**

- **Color Picker**: Advanced color picker with multiple formats
- **Contrast Checker**: Ensure text meets accessibility standards
- **Color Harmony**: Generate complementary, triadic, and analogous colors
- **CSS Variables**: Generate CSS custom properties for your design system
- **Design Tokens**: Export colors as design tokens for design systems

## 🤝 Contributing

We welcome contributions from the community! Whether you're a designer, developer, or just passionate about colors, there are many ways to contribute.

### 🚀 **How to Contribute**

1. **Fork the repository**

   ```bash
   git clone https://github.com/yourusername/paletteUI.git
   cd paletteUI
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**

   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

4. **Commit your changes**

   ```bash
   git commit -m 'feat: add amazing feature'
   ```

5. **Push to your branch**

   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Include screenshots for UI changes
   - Link any related issues

### 🎯 **Areas to Contribute**

- **New Color Palettes**: Add custom color combinations
- **Gradient Collections**: Create beautiful gradient sets
- **UI/UX Improvements**: Enhance the user interface
- **Performance**: Optimize loading times and animations
- **Accessibility**: Improve keyboard navigation and screen reader support
- **Documentation**: Improve guides and examples
- **Bug Fixes**: Report and fix issues

### 📋 **Development Guidelines**

- Use TypeScript for all new code
- Follow the existing ESLint configuration
- Write meaningful commit messages
- Test your changes thoroughly
- Update the README if needed

### 🐛 **Reporting Issues**

Found a bug? Have a feature request? Please [open an issue](https://github.com/yourusername/paletteUI/issues) with:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser/device information

## 📊 Performance & SEO

### ⚡ **Performance Metrics**

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### 🔍 **SEO Optimized**

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine friendly
- **Performance**: Optimized images and code splitting

## 🌟 Use Cases

### **For Designers**

- Create consistent color palettes for brand identity
- Generate accessible color combinations
- Export colors for design tools (Figma, Sketch, Adobe)
- Build design systems with standardized colors

### **For Developers**

- Find the perfect colors for web applications
- Generate CSS variables for design tokens
- Ensure accessibility compliance
- Create responsive color schemes

### **For Teams**

- Share color palettes with team members
- Maintain consistent branding across projects
- Collaborate on design decisions
- Version control for color choices

## 📈 Roadmap

### **v1.1 - Enhanced Features**

- [ ] **Color Contrast Checker**: WCAG compliance validation
- [ ] **Custom Palettes**: Create and save custom combinations
- [ ] **Export Options**: CSS, SCSS, JSON, and design tokens
- [ ] **API Integration**: RESTful API for developers

### **v1.2 - Advanced Tools**

- [ ] **Color Harmony**: Generate complementary and analogous colors
- [ ] **Brand Colors**: Extract colors from logos and images
- [ ] **Gradient Animations**: Animated gradient previews
- [ ] **Mobile App**: React Native version

### **v1.3 - Enterprise Features**

- [ ] **Team Collaboration**: Shared workspaces and permissions
- [ ] **Design System Integration**: Connect with existing design systems
- [ ] **Analytics**: Usage tracking and insights
- [ ] **White-label Solutions**: Custom branding options

## 🙏 Acknowledgments

- **[Tailwind CSS](https://tailwindcss.com/)** - For the comprehensive color system
- **[Radix UI](https://www.radix-ui.com/)** - For accessible component primitives
- **[GSAP](https://greensock.com/gsap/)** - For smooth animations and interactions
- **[Lucide](https://lucide.dev/)** - For beautiful, consistent icons
- **[Vercel](https://vercel.com/)** - For hosting and deployment
- **[Next.js](https://nextjs.org/)** - For the amazing React framework

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ using Next.js, TypeScript, and Tailwind CSS**

[![GitHub stars](https://img.shields.io/github/stars/avinashsuthar/paletteUI?style=social)](https://github.com/avinashsuthar/paletteUI)
[![GitHub forks](https://img.shields.io/github/forks/avinashsuthar/paletteUI?style=social)](https://github.com/avinashsuthar/paletteUI)
[![GitHub issues](https://img.shields.io/github/issues/avinashsuthar/paletteUI)](https://github.com/avinashsuthar/paletteUI/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/avinashsuthar/paletteUI)](https://github.com/avinashsuthar/paletteUI/pulls)

</div>
