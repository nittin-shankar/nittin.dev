import Link from '@/components/Link'

export async function getStaticProps() {
  return { props: { isMeetupPage: true } }
}

export default function Meetup(_) {
  return (
    <div className="mx-auto mt-10 max-w-lg text-center">
      <p>Redirecting to the page of the meetup...</p>
      <p>
        Please click this
        <Link
          className="pt-8 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          href={
            'https://kommunity.com/passionate-techies-meetup-group-py-av/events/passionate-techies-meetup-py-av-53749957'
          }
        >
          {' '}
          link{' '}
        </Link>{' '}
        if it doesn't automatically redirect
      </p>
    </div>
  )
}
