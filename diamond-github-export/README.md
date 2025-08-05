# 💎 Diamond Website - Built on Base

The official website for Diamond ($DMND) - the memecoin that broke free from Pepe's shadow.

## 🚀 Features

- **Interactive Mouse Tracking**: Diamond character follows your mouse with gentle 3D tilts
- **Base Blockchain Theme**: Official Base blue color scheme and branding
- **Premium Animations**: Smooth scroll animations and floating particles
- **Glassmorphism Design**: Modern glass card effects throughout
- **Responsive Design**: Works perfectly on desktop and mobile
- **Performance Optimized**: Smooth 60fps animations

## 🛠 Tech Stack

- **React 19** - Latest React features
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **shadcn/ui** - Beautiful UI components

## 📦 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/[YOUR-USERNAME]/diamond-website.git
   cd diamond-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   pnpm run build
   ```

## 🎨 Key Features

### Mouse Tracking
The Diamond character image responds to mouse movement with subtle 3D rotations while maintaining its floating animation.

### Base Blockchain Integration
- Official Base blue color scheme (#0000ff)
- "Built on Base" branding throughout
- Base-optimized performance

### Professional Assets
- High-quality Diamond character illustrations
- Optimized image formats (AVIF, WebP)
- Professional memecoin artwork

## 📁 Project Structure

```
diamond-website/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Diamond images and media
│   ├── components/ui/     # Reusable UI components
│   ├── App.jsx           # Main application component
│   ├── App.css           # Styling and animations
│   └── main.jsx          # React entry point
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Drag `dist` folder to Netlify

### Replit
1. Import this GitHub repository
2. Run `npm install && npm run dev`

## 🎯 Performance

- **Optimized Images**: All images compressed for web
- **Code Splitting**: Automatic with Vite
- **Lazy Loading**: Images load on scroll
- **60fps Animations**: Smooth performance on all devices

## 🔧 Customization

### Colors
Base blue colors are defined in `src/App.css`:
```css
:root {
  --base-blue: #0000ff;
  --base-cerulean: #3c8aff;
}
```

### Animations
Particle count and animation speeds can be adjusted in `src/App.jsx`:
```javascript
// Reduce particles for better performance
const particles = Array.from({ length: 15 }, ...
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Built with ❤️ for the Diamond Community

**Diamond** - The memecoin that's done playing second fiddle to anyone.

---

**Contract Address**: `0x475e372b23D75A745bCEb431107167F2583AdA4C`

**Built on Base** | **Powered by Community** | **Destined for Greatness**

