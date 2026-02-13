

# Doraemon Blog (机器猫的小窝)

这是一个基于 [Astro](https://astro.build)、[Svelte](https://svelte.dev) 和 [Tailwind CSS](https://tailwindcss.com) 构建的现代化个人博客网站。本项目托管于 Gitee，旨在分享个人日记、开发日志（如 LSMC 项目）、摄影作品以及动漫推荐。

## ✨ 主要特性

*   🎨 **现代化 UI**: 采用 Astro + Svelte 构建，Tailwind CSS 样式，支持深色/浅色模式切换。
*   👾 **Live2D 看板娘**: 集成了基于 `pio` 模型的虚拟角色。
*   🎵 **音乐播放器**: 自定义音乐播放组件，支持 Meting API、本地列表、随机播放、循环播放及展开歌词。
*   📷 **相册系统**: 支持瀑布流布局、灯箱预览和懒加载。
*   🎬 **动漫记录**: 独立的番剧展示页面，包含进度、评分和状态追踪。
*   🔒 **内容加密**: 支持对特定文章进行密码保护。
*   🔍 **全文搜索**: 集成 Pagefind 提供高效的客户端搜索。
*   📱 **响应式设计**: 针对移动端优化的导航栏和目录结构 (TOC)。
*   🌍 **多语言支持**: 内置中文、英文、日文等多语言切换框架。

## 🛠 技术栈

*   **核心框架**: Astro (Static Site Generator)
*   **UI 组件**: Svelte + TypeScript
*   **样式方案**: Tailwind CSS + Stylus (部分样式增强)
*   **搜索工具**: Pagefind
*   **评论系统**: Twikoo
*   **部署平台**: Vercel / Gitee Pages

## 🚀 快速开始

### 环境准备

确保已安装 [Node.js](https://nodejs.org/) (建议 v18+) 和 [pnpm](https://pnpm.io/)。

### 安装依赖

```bash
pnpm install
```

### 本地开发

启动开发服务器：

```bash
pnpm dev
```

访问 `http://localhost:4321` 查看效果。

### 构建部署

构建生产版本：

```bash
pnpm build
```

生成的静态文件位于 `dist/` 目录。

## 📂 项目结构

```
├── public/             # 静态资源（图片、音乐、字体、Live2D模型）
├── src/
│   ├── components/     # Svelte/Astro 组件
│   │   ├── widget/    # 小组件（音乐播放器、侧边栏、翻译按钮等）
│   │   └── misc/      # 杂项组件（图标、图片包装器等）
│   ├── content/       # 内容集合
│   │   ├── posts/     # Markdown博客文章（包含日记和开发笔记）
│   │   └── spec/      # 特殊页面（关于我、友链等）
│   ├── data/          # 数据文件（动漫列表、技能树、时间线等）
│   ├── pages/         # 路由页面
│   ├── styles/        # 全局样式和插件样式
│   ├── layouts/       # 布局文件
│   └── utils/         # 工具函数（日历管理、动画控制等）
├── astro.config.mjs   # Astro 配置文件
├── tailwind.config.cjs # Tailwind CSS 配置文件
└── package.json       # 项目依赖与脚本
```

## 📝 内容管理

### 写新文章

使用项目自带的脚本快速创建文章：

```bash
node scripts/new-post.js
```

或在 `src/content/posts/` 目录下直接创建 `.md` 文件。

### 相册管理

图片资源位于 `public/images/albums/`。每个相册文件夹需包含 `info.json` 配置文件来定义相册信息。

### 动漫列表

在 `src/data/anime.ts` 中更新本地动漫观看列表。

## 🤝 贡献

欢迎提出 Issues 或 Pull Requests 来改进这个博客。

## 📄 许可证

本项目的许可证信息请查看 [LICENSE](LICENSE) 文件。