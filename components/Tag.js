import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 mt-1 rounded bg-primary-50 p-1 text-xs uppercase text-primary-500 hover:text-primary-600 dark:bg-gray-700 dark:text-white dark:hover:text-primary-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
