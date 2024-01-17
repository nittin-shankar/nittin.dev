import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  let defaultTemplate = (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )

  let podcastTemplate = (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>A Tamil bi-weekly podcast of interviews of people from the tech industry!</title>
        <meta
          property="og:title"
          content="A Tamil bi-weekly podcast of interviews of people from the tech industry!"
        />
        <meta
          property="og:site_name"
          content="A Tamil bi-weekly podcast of interviews of people from the tech industry!"
        />
        <meta
          property="og:description"
          content="Start listening to the podcast episodes on Spotify and Apple podcasts. The name of the podcast is 'Vaanga Pazhagalaam with techies'."
        />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/podcast`} />
        <meta
          property="og:image"
          content={`${siteMetadata.siteUrl}/static/images/podcast-preview-card.png`}
        />
        <meta
          property="og:image:url"
          content={`${siteMetadata.siteUrl}/static/images/podcast-preview-card.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteMetadata.twitter} />
        <meta
          name="twitter:title"
          content="A Tamil bi-weekly podcast of interviews of people from the tech industry!"
        />
        <meta
          name="twitter:description"
          content="Start listening to the podcast episodes on Spotify and Apple podcasts. The name of the podcast is 'Vaanga Pazhagalaam with techies'."
        />
        <meta
          name="twitter:image"
          content={`${siteMetadata.siteUrl}/static/images/podcast-preview-card.png`}
        />
        <script
          defer
          data-domain="nittin.dev"
          src="https://plausible.auroville.org.in/js/plausible.js"
        ></script>
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />

      <Component {...pageProps} />
    </ThemeProvider>
  )

  let meetupTemplate = (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Passionate Techies Meetup - PY & AV</title>
        <meta
          httpEquiv="Refresh"
          content="0; URL=https://kommunity.com/passionate-techies-meetup-group-py-av/events/meetup-1-b03bc360"
        />
        <meta property="og:title" content="Passionate Techies Meetup - PY & AV" />
        <meta property="og:site_name" content="Passionate Techies Meetup - PY & AV" />
        <meta
          property="og:description"
          content="Register now for the upcoming local tech community meetup on Jan 20 from 3:00 - 4:30 PM"
        />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/meetup`} />
        <meta
          property="og:image"
          content={`${siteMetadata.siteUrl}/static/images/meetup-preview-card.png`}
        />
        <meta
          property="og:image:url"
          content={`${siteMetadata.siteUrl}/static/images/meetup-preview-card.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteMetadata.twitter} />
        <meta name="twitter:title" content="Passionate Techies Meetup - PY & AV" />
        <meta
          name="twitter:description"
          content="Register now for the upcoming local tech community meetup on Jan 20 from 3:00 - 4:30 PM"
        />
        <meta
          name="twitter:image"
          content={`${siteMetadata.siteUrl}/static/images/meetup-preview-card.png`}
        />
        <script
          defer
          data-domain="nittin.dev"
          src="https://plausible.auroville.org.in/js/plausible.js"
        ></script>
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />

      <Component {...pageProps} />
    </ThemeProvider>
  )

  if (pageProps.isPodcastPage != undefined && pageProps.isPodcastPage) {
    return podcastTemplate
  }

  if (pageProps.isMeetupPage != undefined && pageProps.isMeetupPage) {
    return meetupTemplate
  }

  return defaultTemplate
}
