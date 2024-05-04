const { Client } = require("@notionhq/client")
const notionClient = new Client({
  auth: process.env.NOTION_SECRET_KEY,
})
export const getPosts = async (page_size = 100) => {
  const response = await notionClient.databases.query({
    database_id: process.env.NOTION_PAGE_ID,
    page_size: page_size,
    sorts: [
      {
        direction: "descending",
        timestamp: "created_time",
      },
    ],
  })
  return response
}

export interface RSS2 {
  title: string
  summary: string
  date: Date
  slug: string
}
