import type {
	AnnouncementConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	FooterConfig,
	FullscreenWallpaperConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	ProfileConfig,
	SakuraConfig,
	SidebarLayoutConfig,
	SiteConfig,
	PioConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";
import { getTranslateLanguageFromConfig } from "./utils/language-utils";

// ========================= 基础配置常量 =========================
const SITE_LANG = "zh_CN"; // 语言代码：'en', 'zh_CN', 'ja' 等

// ========================= 站点核心配置 =========================
export const siteConfig: SiteConfig = {
	title: "gemini",
	subtitle: "",
	lang: SITE_LANG,

	// 主题色配置
	themeColor: {
		hue: 125, // 主题色相（0-360）：红色0、青色200、蓝绿色250、粉色345
		fixed: false, // 隐藏主题色选择器
	},

	// 翻译功能配置
	translate: {
		enable: true,
		service: "client.edge", // Edge浏览器翻译服务
		defaultLanguage: getTranslateLanguageFromConfig(SITE_LANG),
		showSelectTag: false, // 隐藏默认语言选择下拉框
		autoDiscriminate: true, // 自动检测用户语言
		ignoreClasses: ["ignore", "banner-title", "banner-subtitle"],
		ignoreTags: ["script", "style", "code", "pre"],
	},

	// Bangumi 配置
	bangumi: {
		userId: "your-bangumi-id", // 替换为实际Bangumi ID，测试值："sai"
	},

	// 横幅(Banner)配置 - 完整正确结构（无多余闭合括号）
	banner: {
		enable: true, // 是否启动Banner壁纸模式

		// 支持单张图片或图片数组，当数组长度 > 1 时自动启用轮播
		src: {
			desktop: [
				"/assets/desktop-banner/d1.webp",
				"/assets/desktop-banner/d2.webp",
				"/assets/desktop-banner/d3.webp",
				"/assets/desktop-banner/d4.webp",
				"/assets/desktop-banner/d5.webp",
				"/assets/desktop-banner/d6.webp",
				"/assets/desktop-banner/d7.webp",
				"/assets/desktop-banner/d8.webp",
			], // 桌面横幅图片
			mobile: [
				"/assets/mobile-banner/m1.webp",
				"/assets/mobile-banner/m2.webp",
				"/assets/mobile-banner/m3.webp",
				"/assets/mobile-banner/m4.webp",
				"/assets/mobile-banner/m5.webp",
				"/assets/mobile-banner/m6.webp",
				"/assets/mobile-banner/m7.webp",
				"/assets/mobile-banner/m8.webp",
			], // 移动横幅图片
		}, // 使用本地横幅图片

		position: "center", // 等同于 object-position，仅支持 'top', 'center', 'bottom'。默认为 'center'

		carousel: {
			enable: true, // 为 true 时：为多张图片启用轮播。为 false 时：从数组中随机显示一张图片
			interval: 1.5, // 轮播间隔时间（秒）
		},

		// PicFlow API配置（智能图片API）
		imageApi: {
			enable: false, // 启用图片API
			url: "http://domain.com/api_v2.php?format=text&count=4", // API地址，返回每行一个图片链接的文本
		},
		// 这里需要使用PicFlow API的Text返回类型,所以我们需要format=text参数
		// 项目地址:https://github.com/matsuzaka-yuki/PicFlow-API
		// 请自行搭建API

		homeText: {
			enable: true,
			title: "doraemon-blog",
			subtitle: [
				"删繁就简三秋树，领异标新二月花",
				"预支五百年新意，到了千年又觉陈",
				"我劝天公重抖擞，不拘一格降人才",
				"路漫漫其修远兮，吾将上下而求索",
				"问渠哪得清如许？为有源头活水来",
				"欲穷千里目，更上一层楼",
				"沉舟侧畔千帆过，病树前头万木春",
				"长风破浪会有时，直挂云帆济沧海",
				"莫愁前路无知己，天下谁人不识君",
				"千磨万击还坚劲，任尔东西南北风",
				"宝剑锋从磨砺出，梅花香自苦寒来",
				"老骥伏枥，志在千里；烈士暮年，壮心不已",
				"采菊东篱下，悠然见南山",
				"行到水穷处，坐看云起时",
				"竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生",
				"执笔玄铁墨，书幻梦成章",
				"寻光归去，天启而回"
			],
			typewriter: {
				enable: true, // 打字机效果
				speed: 100, // 打字速度(毫秒)
				deleteSpeed: 50, // 删除速度(毫秒)
				pauseTime: 2000, // 显示完成后暂停时间(毫秒)
			},
		},

		// 图片来源标注
		credit: {
			enable: false,
			text: "Describe",
			url: "",
		},

		// 导航栏透明模式
		navbar: {
			transparentMode: "semifull", // semi(半透明)/full(全透明)/semifull(动态透明)
		}
	}, // banner 配置块正确闭合（仅这一个闭合括号）

	// 目录配置
	toc: {
		enable: true,
		depth: 3, // 目录深度(1-6)
	},

	// OpenGraph图片生成（调试时建议关闭）
	generateOgImages: false,

	// 网站图标
	favicon: [], // 留空使用默认favicon

	// 字体配置
	font: {
		zenMaruGothic: {
			enable: false, // 圆体（适配日/英语，中文一般）
		},
		hanalei: {
			enable: true, // Hanalei字体（适配中文）
		},
	}
}; // siteConfig 对象正确闭合

// ========================= 全屏壁纸配置 =========================
export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	enable: true, // 非Banner模式下生效
	src: {
		desktop: [
			"/assets/desktop-banner/d1.webp",
			"/assets/desktop-banner/d2.webp",
			"/assets/desktop-banner/d3.webp",
			"/assets/desktop-banner/d4.webp",
			"/assets/desktop-banner/d5.webp",
			"/assets/desktop-banner/d6.webp",
			"/assets/desktop-banner/d7.webp",
			"/assets/desktop-banner/d8.webp",
		],
		mobile: [
			"/assets/mobile-banner/m1.webp",
			"/assets/mobile-banner/m2.webp",
			"/assets/mobile-banner/m3.webp",
			"/assets/mobile-banner/m4.webp",
			"/assets/mobile-banner/m5.webp",
			"/assets/mobile-banner/m6.webp",
			"/assets/mobile-banner/m7.webp",
			"/assets/mobile-banner/m8.webp",
		],
	},
	position: "center",
	carousel: {
		enable: true,
		interval: 1, // 轮播间隔(秒)
	},
	zIndex: -1, // 确保在背景层
	opacity: 0.8, // 透明度
	blur: 1, // 模糊程度
};

// ========================= 导航栏配置 =========================
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		// 自定义链接 - Links
		{
			name: "Links",
			url: "/links/",
			icon: "material-symbols:link",
			children: [
				{
					name: "GitHub",
					url: "https://github.com/Doraemon88888888",
					external: true,
					icon: "fa6-brands:github",
				},
				{
					name: "Gitee",
					url: "https://gitee.com/doraemon666666",
					external: true,
					icon: "mdi:git",
				},
			],
		},
		// 自定义链接 - My（已删除追剧和日记选项）
		{
			name: "My",
			url: "/content/",
			icon: "material-symbols:person",
			children: [
				{
					name: "Gallery",
					url: "/albums/",
					icon: "material-symbols:photo-library",
				},
			],
		},
		// 自定义链接 - About（修改了关于我们和友链配置）
		{
			name: "About",
			url: "/content/",
			icon: "material-symbols:info",
			children: [
				{
					name: "关于我们",
					url: "/about/",
					icon: "material-symbols:person-outline",
				},
				{
					name: "友链",
					url: "https://lightseeking.eu.org/",
					external: true,
					icon: "material-symbols:link-outline",
				}
			],
		},
		// 自定义链接 - Others
		{
			name: "Others",
			url: "#",
			icon: "material-symbols:more-horiz",
			children: [
				{
					name: "Projects",
					url: "/projects/",
					icon: "material-symbols:work",
				},
				{
					name: "Skills",
					url: "/skills/",
					icon: "material-symbols:psychology",
				},
				{
					name: "Timeline",
					url: "/timeline/",
					icon: "material-symbols:timeline",
				},
			],
		},
	],
};

// ========================= 个人资料配置 =========================
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // /src 相对路径 | /public 绝对路径
	name: "The Great Hall of the People",
	bio: `Standing majestically on the western side of Tian’anmen Square in the heart of Beijing, the Great Hall of the People is an iconic landmark and the core venue for China’s national political activities, and was among the top ten monumental buildings constructed to celebrate the 10th anniversary of the founding of the People’s Republic of China. 
Construction started in 1958 and was completed in a remarkable 10 months, opening in 1959. It covers a total floor area of 171,800 square meters, with a grand east-facing facade featuring 12 towering light-gray marble columns (25 meters high) and an imposing national emblem above the main entrance. The architectural layout is mountain-shaped, with a higher central section and lower wings, presenting a solemn and magnificent style that blends modern grandeur with traditional Chinese architectural elements. 
The interior houses numerous functional spaces. The Main Auditorium (capable of seating 10,000 people) is the venue for the annual sessions of the National People’s Congress (NPC) and the National Committee of the Chinese People’s Political Consultative Conference (CPPCC), known as the “Two Sessions”. The Banquet Hall in the north wing can accommodate 5,000 guests for state banquets. Additionally, there are 34 provincial and regional halls, each decorated with unique local cultural characteristics, and the Golden Hall, a renowned venue for high-profile press conferences and diplomatic events.
Over the decades, it has witnessed countless historic moments: the adoption of major national laws, important diplomatic meetings with foreign leaders, grand national celebrations, and various cultural events. When there are no major official events, parts of the hall are open to the public, allowing visitors to admire its magnificent architecture and experience the charm of China’s political and cultural center.`,
	links: [], // 暂时隐藏社交链接
};

// ========================= 关于我们 自我介绍配置（新增）=========================
export const aboutConfig = {
  title: "关于我",
  content: `
    你好呀！我是一名热爱技术与生活的开发者，也是这个小博客的主人。
    平日里喜欢捣鼓前端技术、搭建个人网站，也热衷于记录生活中的点滴感悟与技术成长。
    这个博客是我分享所学、所思、所感的小天地，内容涵盖前端开发、工具使用、生活随笔等。
    希望在这里能和志同道合的朋友交流学习，也愿我的分享能给你带来一点启发。
    如果你有任何想法或建议，欢迎随时交流～
  `,
  contact: {
    enable: true,
    email: "your-email@example.com",
    github: "https://github.com/Doraemon88888888"
  }
};

// ========================= 许可证配置 =========================
export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

// ========================= 代码样式配置 =========================
export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark", // 仅支持深色主题（博客主题适配）
};

// ========================= 评论配置 =========================
export const commentConfig: CommentConfig = {
	enable: true,
	twikoo: {
		envId: "https://doraemon-blog.netlify.app/",
		lang: "zh_CN",
	},
};

// ========================= 公告配置 =========================
export const announcementConfig: AnnouncementConfig = {
	title: "你好呀",
	content: "欢迎回来",
	closable: false,
	link: {
		enable: false,
		text: "Learn More",
		url: "/about/",
		external: false,
	},
};

// ========================= 音乐播放器配置 =========================
export const musicPlayerConfig: MusicPlayerConfig = {
	enable: true,
	mode: "meting", // local / meting
	meting_api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r",
	id: "9608554864", // 歌单ID
	server: "tencent", // netease/tencent/kugou/xiami/baidu
	type: "playlist",
};

// ========================= 页脚配置 =========================
export const footerConfig: FooterConfig = {
	enable: false, // 启用后编辑 FooterConfig.html 添加备案号等内容
};

// ========================= 侧边栏布局配置 =========================
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	enable: true,
	position: "left",
	components: [
		{
			type: "profile",
			enable: true,
			order: 1,
			position: "top",
			class: "onload-animation",
			animationDelay: 0,
		},
		{
			type: "announcement",
			enable: true,
			order: 2,
			position: "top",
			class: "onload-animation",
			animationDelay: 50,
		},
		{
			type: "categories",
			enable: true,
			order: 3,
			position: "sticky",
			class: "onload-animation",
			animationDelay: 150,
			responsive: {
				collapseThreshold: 5, // 分类数超5个自动折叠
			},
		},
		{
			type: "tags",
			enable: true,
			order: 4,
			position: "sticky",
			class: "onload-animation",
			animationDelay: 200,
			responsive: {
				collapseThreshold: 20, // 标签数超20个自动折叠
			},
		},
	],
	defaultAnimation: {
		enable: true,
		baseDelay: 0,
		increment: 50,
	},
	responsive: {
		breakpoints: {
			mobile: 768,
			tablet: 1024,
			desktop: 1280,
		},
		layout: {
			mobile: "sidebar",
			tablet: "sidebar",
			desktop: "sidebar",
		},
	},
};

// ========================= 樱花特效配置 =========================
export const sakuraConfig: SakuraConfig = {
	enable: false,
	sakuraNum: 7,
	limitTimes: -1, // -1为无限循环
	size: {
		min: 0.5,
		max: 1.1,
	},
	speed: {
		horizontal: {
			min: -1.7,
			max: -1.2,
		},
		vertical: {
			min: 1.5,
			max: 2.2,
		},
		rotation: 0.03,
	},
	zIndex: 100,
};

// ========================= Umami 统计配置 =========================
// 保留原有API Key不做修改
export const umamiConfig = {
  enabled: true,
  apiKey: "api_RqahFxX9rYeysF4Oaq6eHKhgH3YavV90",
  baseUrl: "https://api.eu.umami.is",
  scripts: `
<script defer src="https://eu.umami.is/script.js" data-website-id="021fdfb2-afd8-4a50-9055-54379c518c33"></script>
  `.trim(),
} as const;

// ========================= 统一配置导出 =========================
export const widgetConfigs = {
	profile: profileConfig,
	announcement: announcementConfig,
	music: musicPlayerConfig,
	layout: sidebarLayoutConfig,
	sakura: sakuraConfig,
	fullscreenWallpaper: fullscreenWallpaperConfig,
} as const;