import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function CardLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>

      <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div class="mx-auto mt-6 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {!filteredBlogPosts.length && 'No posts found'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags, images, readingTime } = frontMatter
            return (
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg dark:shadow-gray-800 dark:shadow-sm">
                <div class="flex-shrink-0">
                <Link href={`/blog/${slug}`} class="mt-2 block">
                  {images && 
                    (<img class="h-48 w-full bg-primary-50 object-cover" src={images[0]} alt=""></img>)
                  }

                  {!images && 
                    (<img class="h-48 w-full object-cover" src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg" alt=""></img>)
                  }
                  </Link>
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white dark:bg-gray-800 p-6">
                  <div class="flex justify-between space-x-1 text-sm text-gray-500">
                    <time dateTime={date}>
                      {formatDate(date)}
                    </time>
                    <span>{readingTime.text}</span>
                  </div>
                  <div class="flex-1">
                    <Link href={`/blog/${slug}`} class="mt-2 block">
                      <p class="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</p>
                      <p class="mt-3 text-base text-gray-500">{summary}</p>
                    </Link>
                  </div>
                  <div class="mt-6 flex items-center">
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
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
