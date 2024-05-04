import { Feed } from "feed"
import { CONFIG } from "site.config"
import { getPostsRSS2 } from "src/apis/notionhq-client"

export const generateRss = async (): Promise<string> => {
  const response = await getPostsRSS2(5)
  const year = new Date().getFullYear()
  const feed = new Feed({
    title: CONFIG.blog.title,
    description: CONFIG.blog.description,
    id: CONFIG.link,
    link: CONFIG.link,
    language: CONFIG.lang,
    favicon: "public/favicon.ico",
    copyright: `All rights reserved ${year}, ${CONFIG.profile.name}`,
    author: {
      name: CONFIG.profile.name,
      email: CONFIG.profile.email,
      link: CONFIG.link,
    },
  })
  for (const post of response) {
    feed.addItem({
      title: post.title,
      id: `${CONFIG.link}/${post.slug}`,
      link: `${CONFIG.link}/${post.slug}`,
      description: post.summary,
      date: post.date,
    })
  }
  return feed.rss2()
}
