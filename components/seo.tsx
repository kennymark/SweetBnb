import React from 'react'
import Head from 'next/head'

function SEO({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="author" content="Kenneth Coffie" />
      <meta name="description" content="Nextjs starter template created by Kenneth Coffie. Created with ChakraUI"></meta>
      <meta property="og:title" content="Nextjs Starter" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@531&display=swap" rel="stylesheet" />
    </Head>
  )
}

export default SEO
