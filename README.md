<div align="center">

# 📧 Mailzy

### **Modern Temporary Email Service**

A sleek, feature-rich web application providing disposable email addresses with an intuitive inbox interface, built with cutting-edge web technologies.

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.0-61dafb?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646cff?logo=vite)](https://vitejs.dev)
[![Status](https://img.shields.io/badge/Status-Active-success)](.)

---

</div>

## 🎯 Overview

**Mailzy** is a modern, responsive temporary email service that allows users to generate disposable email addresses instantly. It provides a clean, professional interface for managing temporary email accounts without the need for registration or personal information. Perfect for protecting your privacy online.

### Key Benefits
- ✨ **Instant Generation** - Create temporary emails in seconds
- 🔒 **Privacy-First** - No personal information required
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern UI** - Crafted with shadcn/ui and Tailwind CSS
- 🔄 **Real-time Updates** - Live email inbox management

---

## 🚀 Features

### Core Functionality
- **Temporary Email Generation** - Generate unlimited disposable email addresses
- **Inbox Management** - View and manage received emails in real-time
- **Email Details** - Read full email content and headers
- **Copy to Clipboard** - Quick copy of email addresses
- **Auto-refresh** - Stay updated with new incoming messages

### User Experience
- **Dark/Light Mode** - Seamless theme switching
- **Mobile Optimized** - Fully functional on all devices
- **Keyboard Navigation** - Full keyboard support for accessibility
- **Zero Setup** - No registration or configuration needed
- **Responsive Design** - Beautiful on all screen sizes

### Technical Excellence
- **Type-Safe** - Full TypeScript support
- **Performance** - Optimized bundle size and loading times
- **Accessibility** - WCAG 2.1 compliance
- **Error Handling** - Graceful error management
- **Testing** - Comprehensive test coverage with Vitest

---

## 🛠 Tech Stack

### Frontend Framework
- **React 18** - UI library with hooks and concurrent features
- **TypeScript** - Static type checking for robust code
- **Vite** - Next-generation build tool with HMR

### UI & Styling
- **shadcn/ui** - High-quality, accessible component library
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **PostCSS** - CSS transformation and optimization

### State Management & Data Fetching
- **TanStack Query** - Powerful asynchronous state management
- **React Query** - Server state synchronization

### Development Tools
- **ESLint** - Code quality and consistency
- **Vitest** - Lightning-fast unit test framework
- **TypeScript** - Type safety and IDE support
- **PostCSS** - CSS processing

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **Bun** (v1.0.0 or higher) - [Download](https://bun.sh) - *or use npm/yarn*
- **Git** - [Download](https://git-scm.com/)

---

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/mailzy.git
cd mailzy-drop-in
```

### 2. Install Dependencies

Using **Bun** (recommended):
```bash
bun install
```

Or using **npm**:
```bash
npm install
```

Or using **yarn**:
```bash
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
VITE_API_BASE_URL=https://api.tempmail.com
VITE_APP_NAME=Mailzy
```

---

## 🚀 Getting Started

### Development Server

Start the development server with hot module replacement:

```bash
bun run dev
```

The application will open at `http://localhost:5173`

### Production Build

Build for production:

```bash
bun run build
```

Preview the production build:

```bash
bun run preview
```

### Code Quality

Run linting:
```bash
bun run lint
```

Run tests:
```bash
bun run test
```

Watch mode for tests:
```bash
bun run test:watch
```

---

## 📁 Project Structure

```
mailzy-drop-in/
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── HeroSection.tsx     # Landing hero
│   │   ├── FeaturesSection.tsx # Features showcase
│   │   ├── AboutSection.tsx    # About information
│   │   ├── ContactSection.tsx  # Contact form
│   │   ├── Footer.tsx          # Footer component
│   │   └── NavLink.tsx         # Navigation links
│   ├── pages/
│   │   ├── Index.tsx           # Home page
│   │   ├── Inbox.tsx           # Email inbox
│   │   └── NotFound.tsx        # 404 page
│   ├── hooks/
│   │   ├── use-mobile.tsx      # Mobile detection
│   │   ├── use-theme.tsx       # Theme management
│   │   └── use-toast.ts        # Toast notifications
│   ├── lib/
│   │   ├── tempmail.ts         # Email service API
│   │   └── utils.ts            # Utility functions
│   ├── test/
│   │   ├── example.test.ts     # Example tests
│   │   └── setup.ts            # Test configuration
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Entry point
│   ├── index.css               # Global styles
│   └── App.css                 # App styles
├── public/
│   └── robots.txt              # SEO robots file
├── vite.config.ts              # Vite configuration
├── vitest.config.ts            # Vitest configuration
├── tailwind.config.ts          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── eslint.config.js            # ESLint configuration
└── tsconfig.json               # TypeScript configuration
```

---

## 💻 Usage

### Basic Usage

1. **Navigate to the application** at `http://localhost:5173`
2. **Generate a temporary email** - Click the generate button
3. **Copy your email address** - Use the copy button
4. **Check your inbox** - Wait for incoming messages
5. **Read emails** - Click on any email to view full content

### API Integration

The application uses a temporary email service API. Current implementation:

```typescript
import { getTempMail, getInbox, getEmail } from '@/lib/tempmail'

// Get a temporary email address
const email = await getTempMail()

// Fetch inbox
const inbox = await getInbox(email)

// Get specific email
const message = await getEmail(email, messageId)
```

---

## 🧪 Testing

Run unit tests:

```bash
bun run test
```

Run tests in watch mode:

```bash
bun run test:watch
```

Test files are located in `src/test/` and follow the `.test.ts` naming convention.

---

## 🎨 Customization

### Theme Configuration

Edit `tailwind.config.ts` to customize colors, fonts, and spacing:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        // Your custom colors
      },
    },
  },
}
```

### Components

All UI components are located in `src/components/ui/` and built with shadcn/ui. Customize them as needed:

```bash
# Add new shadcn component
bunx shadcn-ui@latest add [component-name]
```

---

## 🚀 Performance Optimization

- **Code Splitting** - Automatic chunk splitting with Vite
- **Tree Shaking** - Unused code removal
- **CSS Optimization** - Tailwind purging unused styles
- **Image Optimization** - Optimized image serving
- **Lazy Loading** - Route-based code splitting
- **Caching** - Efficient browser caching

---

## ♿ Accessibility

This project follows WCAG 2.1 AA guidelines:

- ✅ Semantic HTML markup
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Color contrast compliance
- ✅ Focus management
- ✅ Screen reader support

---

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use:

```bash
bun run dev -- --port 3000
```

### Dependencies Issues

Clear node_modules and reinstall:

```bash
rm -rf node_modules
rm bun.lockb
bun install
```

### Build Errors

Ensure TypeScript types are correct:

```bash
bunx tsc --noEmit
```

---

## 📝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style Guidelines

- Use TypeScript for type safety
- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features
- Update documentation

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Benefits
- ✅ Commercial use permitted
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed

---

## 🤝 Support & Community

### Get Help
- 📖 [Documentation](./docs)
- 🐛 [Issues](https://github.com/yourusername/mailzy/issues)
- 💬 [Discussions](https://github.com/yourusername/mailzy/discussions)

### Stay Updated
- ⭐ Star this repository
- 👀 Watch for updates
- 🔔 Subscribe to releases

---

## 🙏 Acknowledgments

- [React](https://react.dev) - UI library
- [Vite](https://vitejs.dev) - Build tool
- [shadcn/ui](https://ui.shadcn.com) - Component library
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Radix UI](https://www.radix-ui.com) - Headless components
- [TanStack Query](https://tanstack.com/query) - Data management

---

## 📞 Contact

- **Email** - contact@mailzy.dev
- **Website** - [mailzy.dev](https://mailzy.dev)
- **Twitter** - [@mailzydev](https://twitter.com/mailzydev)
- **GitHub** - [Mailzy Repository](https://github.com/yourusername/mailzy)

---

<div align="center">

### Made with ❤️ by the Mailzy Team

**[⬆ Back to top](#-mailzy)**

</div>
