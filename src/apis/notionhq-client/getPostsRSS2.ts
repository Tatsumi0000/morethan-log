import { getPosts, RSS2 } from "./getPosts"

export const getPostsRSS2 = async (page_size = 100) => {
  let rss2: RSS2[] = []
  const response = await getPosts(page_size)
  response.results.forEach((result: any) => {
    rss2.push({
      title: result.properties.title.title[0].plain_text ?? "",
      summary: result.properties.summary.rich_text[0]?.plain_text ?? "",
      date: new Date(result.properties.date.date.start),
      slug: result.properties.slug.rich_text[0]?.plain_text ?? "",
    })
  })
  return rss2
}
