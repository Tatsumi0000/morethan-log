import { CONFIG } from "site.config"
import { GoogleTagManager } from "@next/third-parties/google"

const Scripts: React.FC = () => (
  <>
    {CONFIG?.GoogleTagManager?.enable === true && (
      <>
        <GoogleTagManager
          gtmId={CONFIG.GoogleTagManager.config.measurementId}
        />
      </>
    )}
  </>
)

export default Scripts
