import { generateRss } from "src/libs/rss"
import { GetServerSidePropsContext } from "next"

export const runtime = "experimental-edge"

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const xmlFeed = await generateRss()
  res.statusCode = 200
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate")
  res.setHeader("Content-Type", "text/xml")
  res.end(xmlFeed)

  return {
    props: {},
  }
}

export default function XmlFeed() {}
