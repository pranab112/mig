import { getAllBlogPosts, calculateReadTime } from '@/lib/mdx'
import { BlogCard } from '@/components/blog-card'
import { Hero } from '@/components/ui/hero'
import { Section } from '@/components/ui/section'

export const metadata = {
  title: 'Blog - MindIsGear',
  description: 'Turn your mind into gear. Stories and guides from brainwave to bot - automation, AI agents, data scraping, and systems thinking.'
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  // Calculate read time for posts that don't have it
  const postsWithReadTime = posts.map(post => ({
    ...post,
    readTime: post.readTime || calculateReadTime(post.content)
  }))

  return (
    <div className="space-y-0">
      <Hero
        title="Turn your mind into gear."
        subtitle="Stories and guides from brainwave to bot."
        description="Learn how to build systems that work, automate intelligently, and turn ideas into reality."
      />

      <Section title="Latest posts">
        <div className="grid lg:grid-cols-2 gap-8">
          {postsWithReadTime.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
              tags={post.tags}
              readTime={post.readTime}
            />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </Section>
    </div>
  )
}