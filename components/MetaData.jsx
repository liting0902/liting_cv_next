import React from "react";
import Head from "next/head";
export default function PageMeta({ siteTitle, siteContent, imgPath }) {
  const event = new Date();
  return (
    <>
      <title>{`${siteTitle} `}</title>
      <meta name="description" content={`${siteContent}`} />
      <link rel="canonical" href={`https://liting-2024cv.vercel.app/`} />
      <link rel="icon" href="/favicon.ico" sizes="16x16" type="image/png" />
      <meta property="og:title" content={`${siteTitle}`} />
      <meta property="og:description" content={`${siteContent}`} />
      <meta property="og:updated_time" content={`${event.toISOString()}`} />
      <meta property="og:url" content={`https://liting-2024cv.vercel.app/`} />
      <meta property="og:site_name" content={`${siteTitle} `} />
      <meta
        property="og:image"
        content={imgPath}
      />
    </>
  );
}
