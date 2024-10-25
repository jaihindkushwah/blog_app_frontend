import Script from "next/script";
import React from "react";

interface Props {
  gtmId: string;
}
const GoogleTagManager: React.FC<Props> = ({ gtmId }) => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
    />
    <Script
      id="gtag-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${gtmId});
            `,
      }}
    />
  </>
);

export default GoogleTagManager;
