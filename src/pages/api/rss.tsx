import { generateRss } from "src/libs/rss"
import type { NextApiResponse } from "next"
export const runtime = "edge"

export default async function handler(res: NextApiResponse) {
  const xmlFeed = await generateRss()
  res.statusCode = 200
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate")
  res.setHeader("Content-Type", "text/xml")
  res.end(xmlFeed)
}
