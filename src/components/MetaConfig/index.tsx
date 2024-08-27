import { CONFIG } from "site.config"
import Head from "next/head"
import { exclude } from "next-sitemap.config"
import { useRouter } from "next/router"
import { GoogleTagManager } from "@next/third-parties/google"

export type MetaConfigProps = {
  title: string
  description: string
  type: "Website" | "Post" | "Page" | string
  date?: string
  image?: string
  url: string
}

const MetaConfig: React.FC<MetaConfigProps> = (props) => {
  const router = useRouter()
  const isNoIndex = exclude.some((pattern) =>
    new RegExp(pattern).test(router.asPath)
  )

  return (
    <Head>
      <title>{props.title}</title>
      {isNoIndex ? (
        <meta name="robots" content="nofollow, noindex" />
      ) : (
        <meta name="robots" content="follow, index" />
      )}
      <meta charSet="UTF-8" />
      <meta name="description" content={props.description} />
      {/* og */}
      <meta property="og:type" content={props.type} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.url} />
      {CONFIG.lang && <meta property="og:locale" content={CONFIG.lang} />}
      {props.image && <meta property="og:image" content={props.image} />}
      {/* twitter */}
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:card" content="summary_large_image" />
      {props.image && <meta name="twitter:image" content={props.image} />}
      {/* Google Analytics */}
      <GoogleTagManager gtmId={CONFIG.GoogleTagManager.config.measurementId} />
      {/* post */}
      {props.type === "Post" && (
        <>
          <meta property="article:published_time" content={props.date} />
          <meta property="article:author" content={CONFIG.profile.name} />
        </>
      )}
    </Head>
  )
}

export default MetaConfig
