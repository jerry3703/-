# Doraemon Blog (Doraemon's Little Nest)

This is a modern personal blog website built with [Astro](https://astro.build), [Svelte](https://svelte.dev), and [Tailwind CSS](https://tailwindcss.com). Hosted on Gitee, this project shares personal diaries, development logs (such as the LSMC project), photography, and anime recommendations.

## ✨ Key Features

*   🎨 **Modern UI**: Built with Astro + Svelte and styled with Tailwind CSS, supporting dark/light mode toggle.
*   👾 **Live2D Mascot**: Integrated virtual character based on the `pio` model.
*   🎵 **Music Player**: Custom music player component supporting Meting API, local playlists, shuffle, loop playback, and expanded lyrics.
*   📷 **Photo Album System**: Supports waterfall layout, lightbox preview, and lazy loading.
*   🎬 **Anime Tracking**: Dedicated anime listing page with progress, ratings, and status tracking.
*   🔒 **Content Encryption**: Supports password protection for specific posts.
*   🔍 **Full-text Search**: Integrated Pagefind for efficient client-side search.
*   📱 **Responsive Design**: Mobile-optimized navigation and table of contents (TOC).
*   🌍 **Multi-language Support**: Built-in framework for switching between Chinese, English, Japanese, and more.

## 🛠 Technology Stack

*   **Core Framework**: Astro (Static Site Generator)
*   **UI Components**: Svelte + TypeScript
*   **Styling**: Tailwind CSS + Stylus (for enhanced styles)
*   **Search Tool**: Pagefind
*   **Comment System**: Twikoo
*   **Deployment Platforms**: Vercel / Gitee Pages

## 🚀 Quick Start

### Environment Setup

Ensure you have [Node.js](https://nodejs.org/) (v18+) and [pnpm](https://pnpm.io/) installed.

### Install Dependencies

```bash
pnpm install
```

### Local Development

Start the development server:

```bash
pnpm dev
```

Visit `http://localhost:4321` to view the site.

### Build & Deploy

Build the production version:

```bash
pnpm build
```

Generated static files are located in the `dist/` directory.

## 📂 Project Structure

```
├── public/             # Static assets (images, music, fonts, Live2D models)
├── src/
│   ├── components/     # Svelte/Astro components
│   │   ├── widget/    # Widgets (music player, sidebar, translation button, etc.)
│   │   └── misc/      # Miscellaneous components (icons, image wrappers, etc.)
│   ├── content/       # Content collections
│   │   ├── posts/     # Markdown blog posts (diaries and development notes)
│   │   └── spec/      # Special pages (About, Friends Links, etc.)
│   ├── data/          # Data files (anime list, skill tree, timeline, etc.)
│   ├── pages/         # Routing pages
│   ├── styles/        # Global styles and plugin styles
│   ├── layouts/       # Layout files
│   └── utils/         # Utility functions (calendar management, animation controls, etc.)
├── astro.config.mjs   # Astro configuration file
├── tailwind.config.cjs # Tailwind CSS configuration file
└── package.json       # Project dependencies and scripts
```

## 📝 Content Management

### Writing New Posts

Use the built-in script to quickly create a new post:

```bash
node scripts/new-post.js
```

Alternatively, directly create `.md` files in the `src/content/posts/` directory.

### Managing Photo Albums

Image assets are stored in `public/images/albums/`. Each album folder must include an `info.json` configuration file to define album metadata.

### Anime List

Update your local anime watchlist in `src/data/anime.ts`.

## 🤝 Contributions

Feel free to open Issues or Pull Requests to improve this blog.

## 📄 License

For license information, see the [LICENSE](LICENSE) file.