import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"
import { CONFIG } from "site.config"

export const config = {
  runtime: "edge",
}

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const hasTitle = searchParams.has("title")
  const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : ""

  const endpoint = new URL("https://www.googleapis.com/webfonts/v1/webfonts")
  endpoint.searchParams.set("family", "Noto Sans JP")
  endpoint.searchParams.set("key", process.env.GOOGLE_FONTS_API_KEY ?? "")
  const fontInfo = await fetch(endpoint).then((res) => res.json())
  const fontResponse = await fetch(fontInfo.items[0].files["800"])
  const fontData = await fontResponse.arrayBuffer()

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          backgroundImage: `url(${`data:image/svg+xml,${encodeURIComponent(
            '<svg id="visual" viewBox="0 0 1200 630" width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="1200" height="630" fill="#001220"></rect><defs><linearGradient id="grad1_0" x1="47.5%" y1="0%" x2="100%" y2="100%"><stop offset="11.904761904761909%" stop-color="#001220" stop-opacity="1"></stop><stop offset="88.09523809523809%" stop-color="#001220" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="52.5%" y2="100%"><stop offset="11.904761904761909%" stop-color="#001220" stop-opacity="1"></stop><stop offset="88.09523809523809%" stop-color="#001220" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(1200, 0)"><path d="M0 567C-47.4 501 -94.9 435 -173.7 419.4C-252.6 403.8 -362.9 438.6 -400.9 400.9C-439 363.2 -404.7 253 -420.4 174.1C-436 95.2 -501.5 47.6 -567 0L0 0Z" fill="#FBAE3C"></path></g><g transform="translate(0, 630)"><path d="M0 -567C74.7 -560.4 149.4 -553.9 217 -523.8C284.5 -493.8 344.9 -440.4 379.7 -379.7C414.6 -319.1 423.9 -251.2 450.9 -186.7C477.8 -122.3 522.4 -61.1 567 0L0 0Z" fill="#FBAE3C"></path></g></svg>'
          )}`})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          position: "relative",
        }}
      >
        <h2
          style={{
            width: "100%",
            color: "white",
            fontSize: 80,
            wordBreak: "break-all",
            fontFamily: '"NotoSansJP"',
          }}
        >
          {title}
        </h2>
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: "100%",
            bottom: 0,
            paddingLeft: 30,
            paddingRight: 30,
            justifyContent: "space-between",
          }}
        >
          <h3
            style={{
              color: "white",
              fontSize: 40,
              fontFamily: '"NotoSansJP"',
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              textAlign: "left",
            }}
          >
            {CONFIG.blog.title}
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={`https://github.com/Tatsumi0000.png`}
              alt=""
              width="60"
              height="60"
              style={{ borderRadius: 60, marginRight: 10 }}
            />
            <h2
              style={{
                color: "white",
                fontSize: 40,
                fontFamily: '"NotoSansJP"',
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              {CONFIG.profile.name}
            </h2>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "NotoSansJP",
          data: fontData,
          style: "normal",
        },
      ],
    }
  )
}
