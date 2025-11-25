import { notFound } from 'next/navigation'
import { getAllBlogPosts, getBlogPost, calculateReadTime } from '@/lib/mdx'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import DOMPurify from 'isomorphic-dompurify'

// Safe HTML sanitization for both server and client
function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a', 'img'],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id']
  })
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found - MindIsGear Blog',
    }
  }

  return {
    title: `${post.title} - MindIsGear Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'MindIsGear Team'],
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const readTime = post.readTime || calculateReadTime(post.content)
  const publishDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <article className="py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-600/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6 text-balance">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-slate-600 leading-relaxed mb-6 text-balance">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center space-x-6 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author || 'MindIsGear Team'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{publishDate}</time>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-primary-600 hover:prose-a:text-primary-700 prose-code:text-slate-800 prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-900 prose-pre:text-slate-100">
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }} />
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Ready to turn your ideas into systems?
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-base font-medium text-white hover:bg-primary-700 transition-colors"
            >
              Let's talk about your project
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}