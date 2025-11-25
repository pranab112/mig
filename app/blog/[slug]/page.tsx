import { notFound } from 'next/navigation'
import { getAllBlogPosts, getBlogPost, calculateReadTime } from '@/lib/mdx'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = await getBlogPost(resolvedParams.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.title} | MindIsGear Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = await getBlogPost(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const readTime = calculateReadTime(post.content)

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Back to Blog Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 group"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Blog
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-6">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>


      {/* Article Content */}
      <div className="prose prose-lg prose-slate max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-slate-200">
        <div className="flex justify-between items-center">
          <Link
            href="/blog"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← View All Posts
          </Link>
          <div className="text-sm text-slate-600">
            Published on {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      </footer>
    </article>
  )
}