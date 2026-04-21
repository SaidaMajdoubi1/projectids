# TechCool - Frontend Project

A modern, responsive frontend website built with Vite and React, featuring an innovative cooling solutions product showcase.

## Features

- ⚡ **Fast Build** - Built with Vite for instant development server startup
- ⚛️ **React** - Modern UI library for building interactive components
- 🎨 **Modern Design** - Sleek, dark-themed UI with teal and red accents
- 📱 **Responsive** - Fully responsive design for all device sizes
- 🚀 **CI/CD Ready** - GitLab CI configuration for automated builds and GitHub Pages deployment
- 🔧 **Production Optimized** - Minified and optimized build output

## Project Structure

```
frontendproject/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Products.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── .gitlab-ci.yml
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontendproject
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint checks
- `npm run format` - Format code with Prettier

## Sections

### Navbar
Sticky navigation bar with responsive mobile menu and smooth scroll links

### Hero
Large hero section with gradient text, call-to-action buttons, and animated elements

### Features
4-column grid showcasing key features with hover animations

### Products
Product showcase with pricing, images, and "Add to Cart" functionality

### Testimonials
Customer reviews section with star ratings and avatar display

### CTA (Call-to-Action)
Engagement section encouraging user conversion

### Footer
Comprehensive footer with links, social media, and contact information

## Design System

### Color Palette
- **Primary Dark**: `#0f1419`
- **Secondary Dark**: `#1a1f2e`
- **Accent Teal**: `#2d7a8a`
- **Accent Red**: `#ff4d4d`
- **Text Light**: `#e0e0e0`
- **Text Muted**: `#999999`

### Animations
- Floating elements
- Smooth transitions
- Hover effects
- Pulsing glows
- Rotation effects

## CI/CD Configuration

### GitHub Actions Setup

The project includes two GitHub Actions workflows:

#### 1. GitHub Pages Deployment (`.github/workflows/deploy.yml`)
For static hosting:

**CI/CD Pipeline Jobs:**
1. **Build** - Install dependencies, run linting, and build for production
2. **Test** - Run linting and tests on every PR and push
3. **Deploy** - Automatically deploy to GitHub Pages on push to main branch

**Setup Instructions:**

1. Push your code to GitHub:
```bash
git remote add origin <github-repository-url>
git push -u origin main
```

2. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Set source to `Deploy from a branch`
   - Select `gh-pages` branch and `/ (root)` folder
   - Click Save

3. Your site will be available at: `https://<your-username>.github.io/frontendproject/`

#### 2. Azure App Service Deployment (`.github/workflows/azure-deploy.yml`)
For production hosting with more features:

**Features:**
- Dynamic scaling and management
- Custom domains with SSL
- Environment variables and secrets
- Advanced monitoring and diagnostics
- 99.95% SLA uptime guarantee

**Setup Instructions:**

See [AZURE_DEPLOYMENT.md](AZURE_DEPLOYMENT.md) for complete Azure deployment guide.

Quick start:
```bash
# 1. Create Azure resources
az login
az group create --name techcool-rg --location eastus
az webapp create --name techcool-app --resource-group techcool-rg --plan techcool-plan

# 2. Add AZURE_CREDENTIALS secret to GitHub Secrets

# 3. Push to trigger deployment
git push origin main
```

Your app will be available at: `https://techcool-app.azurewebsites.net`

## Building for Production

```bash
npm run build
```

Output files will be in the `dist/` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Bundle size optimized with Vite
- Lazy loading support
- CSS optimization
- Minified assets
- Image optimization ready

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please create an issue in the repository or contact support.

---

**Made with ❄️ by TechCool Team**
