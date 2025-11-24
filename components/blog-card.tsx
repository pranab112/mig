import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from './ui/card'

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
  tags: string[]
  readTime?: string
  className?: string
}

export function BlogCard({
  title,
  excerpt,
  date,
  slug,
  tags,
  readTime,
  className = ''
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Card hover className={className}>
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/10"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-slate-900 leading-tight">
          <Link href={`/blog/${slug}`} className="hover:text-primary-600 transition-colors">
            {title}
          </Link>
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-slate-600 leading-relaxed">{excerpt}</p>
      </CardContent>

      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4 text-sm text-slate-500">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={date}>{formattedDate}</time>
            </div>
            {readTime && (
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            )}
          </div>
          <Link
            href={`/blog/${slug}`}
            className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
          >
            Read more →
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}