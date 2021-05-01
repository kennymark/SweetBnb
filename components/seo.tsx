import Head from 'next/head'

const config = {
  originalTitle: 'Kenny Coffie',
  currentURL: 'https://sweet-bnb.vercel.app/',
  originalImage: 'https://github.com/kennymark/SweetBnb/blob/dev/screenshots/popover.png?raw=true',
  author: {
    name: 'Kenny Coffie',
  },
  originalDescription: 'Another Beautiful Airbnb Clone by built by me ',
  social: {
    twitter: 'mrkennymark',
  },
  siteName: 'Kenny Marks work',
}

interface SEO {
  description?: string
  title: string
  image?: string
  slug?: string
  article?: string
}

export default function SEO({ description, title, image, slug, article }: SEO) {
  const {
    originalTitle,
    originalDescription,
    siteName,
    social: { twitter },
    currentURL,
    originalImage,
  } = config

  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <title>{`${title} | ${originalTitle}`}</title>
      <meta name='description' />
      content={`${description ? description : originalDescription}`}
      <meta name='image' content={`${image ? image : originalImage}`} key='ogtitle' />
      {article ? (
        <meta property='og:type' content='article' key='ogtype' />
      ) : (
        <meta property='og:type' content='website' key='ogtype' />
      )}
      <meta property='og:title' content={`${title ? title : originalTitle}`} key='ogtitle' />
      <meta
        property='og:description'
        content={`${description ? description : originalDescription}`}
        key='ogdesc'
      />
      <meta property='twitter:card' content='summary_large_image' key='twcard' />
      <meta name='twitter:creator' content={twitter} key='twhandle' />
      <meta name='twitter:title' content={`${title ? title : originalTitle}`} key='twtitle' />
      <meta
        name='twitter:description'
        content={`${description ? description : originalDescription}`}
        key='twdescription'
      />
      <meta name='twitter:image' content={`${image ? image : originalImage}`} key='twimage' />
      <meta property='og:url' content={`${currentURL}/${slug}`} key='ogurl' />
      <meta property='og:image' content={`${image ? image : originalImage}`} key='ogimage' />
      <meta property='og:site_name' content={siteName} key='ogsitename' />
    </Head>
  )
}
