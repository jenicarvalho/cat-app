import React from "react"
import ContentLoader from "react-content-loader"

const Loader = () => (
  <ContentLoader
    speed={2}
    width={354}
    height={381}
    viewBox="0 0 354 381"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="95" y="315" rx="3" ry="3" width="88" height="6" />
    <rect x="26" y="315" rx="3" ry="3" width="52" height="6" />
    <rect x="30" y="340" rx="3" ry="3" width="167" height="5" />
    <circle cx="337" cy="302" r="12" />
    <rect x="22" y="9" rx="0" ry="0" width="337" height="265" />
    <rect x="25" y="290" rx="0" ry="0" width="181" height="10" />
  </ContentLoader>
)

export default Loader

