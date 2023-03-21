import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from '@/components/Image'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image src="/static/images/nittin.jpeg" alt="avatar" width="756px" height="1008px" />
          </div>
          <div className="pt-8 xl:col-span-2">
            <h1 className="pb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
              Hey guys, I'm <span className="underline">Nittin Shankar</span> 👋
            </h1>
            <div className="max-w-none text-base text-gray-500 dark:text-gray-400">
              and I'm 19 years old now. I live in an experimental city of dawn called Auroville. If
              you are interested in Auroville, you can read more about it{' '}
              <Link
                className="pt-8 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href={'https://auroville.org/'}
              >
                here
              </Link>
              . I'm working with an amazing software development team here in Auroville called
              Talam.
              <br></br>
              <br></br>
              I'm also studying BSc Computer Science remotely from Goldsmiths, University of London.
              <br></br>
              <br></br>I specialise in creating web applications with the PETAL stack. Other than
              web development, I'm very much interested in entrepreneurship and hope to be a
              founder/co-founder very soon.
              <br></br>
              <br></br>
              As a human, I aim to be a beautiful person serving everything with an abundance of
              love, joy and kindness.
              <br></br>
              <br></br>
              On this website, I post my notes, guides, opinions from whatever I study.
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 md:space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="pt-8 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
              Check out the latest blogs
            </h2>

            {posts.length > MAX_DISPLAY && (
              <Link
                href="/blog"
                className="pt-8 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="all posts"
              >
                All Posts &rarr;
              </Link>
            )}
          </div>
        </div>
        <div className="mx-auto grid max-w-lg gap-5 pt-6 lg:max-w-none lg:grid-cols-3">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, images, readingTime } = frontMatter

            return (
              <div
                key={slug}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg dark:shadow-sm dark:shadow-gray-800"
              >
                <div className="flex-shrink-0">
                  <Link href={`/blog/${slug}`} class="mt-2 block">
                    {images && (
                      <img
                        className="h-48 w-full bg-primary-50 object-cover"
                        src={images[0]}
                        alt=""
                      ></img>
                    )}

                    {!images && (
                      <img
                        className="h-48 w-full object-cover"
                        src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                        alt=""
                      ></img>
                    )}
                  </Link>
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-800">
                  <div className="flex justify-between space-x-1 text-sm text-gray-500">
                    <time dateTime={date}>{formatDate(date)}</time>
                    <span>{readingTime.text}</span>
                  </div>
                  <div className="flex-1">
                    <Link href={`/blog/${slug}`} class="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">{summary}</p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-12">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
