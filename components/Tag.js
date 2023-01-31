import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 p-1 mt-1 text-xs uppercase bg-primary-50 text-primary-500 hover:text-primary-600 dark:text-white dark:bg-gray-700 dark:hover:text-primary-400 rounded">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
