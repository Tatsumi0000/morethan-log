import { Feed } from "feed"
import { getPosts } from "src/apis"
import { CONFIG } from "site.config"

export const generateRss = async (): Promise<string> => {
  const posts = await getPosts()
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
  for (const post of posts.slice(0, 5)) {
    feed.addItem({
      title: post.title,
      id: `${CONFIG.link}/${post.slug}`,
      link: `${CONFIG.link}/${post.slug}`,
      description: post.summary,
      date: new Date(post.date),
    })
  }
  return feed.rss2()
}
