const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Tatsumi0000",
    image: "/avatar.webp", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "mobile developer",
    bio: "I study Android, iOS, Docker, Vue.js, Rails and Kubernetes.",
    email: "info@tatsumi0000.com",
    github: "Tatsumi0000",
    linkedin: "",
    instagram: "",
  },
  projects: [
    {
      name: `StarryKids`,
      href: "https://starry-kids.soleil-luminas.com/",
    },
    {
      name: `Raelize`,
      href: "https://github.com/Tatsumi0000/Raelize",
    },
  ],
  // blog setting (required)
  blog: {
    title: "私的歌詞倉庫",
    description: "こんにちは！技術的なことを中心に書いているブログです。",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://blog.tatsumi0000.com",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ja-JP", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
