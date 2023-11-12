import Image from '@/components/Image'
import Link from '@/components/Link'

export async function getStaticProps() {
  return { props: { isDIYPage: true } }
}

export default function Podcasts(_) {
  return (
    <div className="mx-auto my-10 max-w-md">
      <div className="flex justify-center">
        <Image
          alt="podcast cover art of 'Vaanag Pazhagalaam with Techies'"
          src="/static/images/podcast-cover-art.png"
          width={350}
          height={350}
          className="object-fill"
        />
      </div>
      <div className="my-4">
        <a
          href="https://open.spotify.com/show/0lbVbO96JVC3olNcQ4F7Ib"
          className="flex-inline mx-auto flex w-72 items-center justify-center gap-2 rounded border-2 py-2 text-sm uppercase dark:border dark:border-gray-500 dark:text-white"
        >
          <Image
            alt="spotify logo"
            src="/static/images/spotify-icon.png"
            className="h-8 w-8"
            width={28}
            height={28}
          />

          <div>
            Listen on <span className="font-semibold">Spotify</span>
          </div>
        </a>

        <a
          href="https://podcasts.apple.com/us/podcast/vaanga-pazhagalaam-with-techies/id1715171723"
          className="flex-inline my-2 mx-auto flex w-72 items-center justify-center rounded border-2 py-2.5 dark:hidden"
        >
          <Image
            alt="listen on apple podcasts badge"
            src="/static/images/listen-on-apple-podcast-light.svg"
            width={149.1}
            height={26.76}
            className=""
          />
        </a>

        <a
          href="https://podcasts.apple.com/us/podcast/vaanga-pazhagalaam-with-techies/id1715171723"
          className="flex-inline my-2 mx-auto hidden w-72 items-center justify-center rounded border border border-gray-500 py-2.5 dark:flex"
        >
          <Image
            alt="listen on apple podcasts badge"
            src="/static/images/listen-on-apple-podcast-dark.svg"
            width={149.1}
            height={26.76}
            className=""
          />
        </a>

        <Link
          href={'/'}
          className="my-5 block text-center text-sm underline hover:no-underline dark:text-white"
        >
          read my personal blog instead
        </Link>
      </div>
    </div>
  )
}
