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
          className="flex-inline mx-auto flex w-72 items-center justify-center gap-2 rounded bg-black py-2 text-sm uppercase text-white"
        >
          <Image
            alt="spotify logo"
            src="/static/images/spotify-icon.png"
            className="h-7 w-7"
            width={28}
            height={28}
          />

          <div>
            Listen on <span className="font-semibold">Spotify</span>
          </div>
        </a>

        <a
          href="https://podcasts.apple.com/us/podcast/vaanga-pazhagalaam-with-techies/id1715171723"
          className="flex-inline my-2 mx-auto block flex w-72 justify-center rounded bg-black py-2"
        >
          <Image
            alt="listen on apple podcasts badge"
            src="/static/images/listen-on-apple-podcast.svg"
            className="mx-auto block"
            width={149.1}
            height={26.76}
          />
        </a>

        <Link href={'/'} className="my-5 block text-center text-sm underline hover:no-underline">
          read my personal blog instead
        </Link>
      </div>
    </div>
  )
}
