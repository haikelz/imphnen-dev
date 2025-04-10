# IMPHNEN Website

A community website for IMPHNEN (Ingin Menjadi Programmer Handal, Namun Enggan Ngoding) built with Astro and Svelte.

![IMPHNEN Banner](https://raw.githubusercontent.com/IMPHNEN/.github/main/profile/banner.png)

## 🚀 Features

- ⚡ Astro for fast static site generation
- 💨 Svelte components for interactive UI
- 🌙 Dark mode with system preference detection and user toggle
- 📱 Fully responsive design
- 📝 Blog system with MDX
- 🎨 Styled with Tailwind CSS and Typography plugin
- 📊 Community statistics showcase
- 🔥 Optimized performance

## 🛠️ Setup and Installation

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/imphnen-website.git
   cd imphnen-website
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory, ready to be deployed to any static hosting service.

### Recommended Hosting Platforms

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

## 📝 Blog System

The blog system uses Astro's Content Collections with MDX files. To add a new blog post:

1. Create a new `.mdx` file in `src/content/blog/`
2. Add frontmatter with the required fields:
   ```yaml
   ---
   title: "Your Post Title"
   excerpt: "Brief description of the post"
   pubDate: "YYYY-MM-DD"
   author: "Author Name"
   authorBio: "Short author biography"
   category: "Post Category"
   image: "/path/to/image.jpg"
   featured: false
   ---
   ```
3. Write your content using Markdown and MDX features
4. The post will automatically appear in the blog listing

## 🌙 Dark Mode Implementation

The dark mode toggle:

- Uses localStorage to persist user preference
- Detects system color scheme preference as default
- Applies theme before page load to prevent flashing
- Updates in real-time when toggled

## 🎨 Styling System

The project uses Tailwind CSS with:

- Custom color scheme variables for light/dark modes
- Typography plugin for blog content styling
- Responsive design for all screen sizes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
