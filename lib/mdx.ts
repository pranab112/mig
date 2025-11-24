import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  tags: string[]
  readTime?: string
  author?: string
}

export interface AcademyLesson {
  slug: string
  title: string
  description: string
  content: string
  category: string
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
  duration?: string
  tags?: string[]
}

const contentDirectory = path.join(process.cwd(), 'content')
const blogDirectory = path.join(contentDirectory, 'blog')
const academyDirectory = path.join(contentDirectory, 'academy')

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(blogDirectory)
  const posts = fileNames
    .filter(name => name.endsWith('.mdx'))
    .map(name => {
      const slug = name.replace(/\.mdx$/, '')
      return getBlogPost(slug)
    })
    .filter(post => post !== null) as BlogPost[]

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(slug: string): BlogPost | null {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt || '',
    content,
    date: data.date,
    tags: data.tags || [],
    readTime: data.readTime,
    author: data.author
  }
}

export function getAllAcademyLessons(): AcademyLesson[] {
  if (!fs.existsSync(academyDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(academyDirectory)
  const lessons = fileNames
    .filter(name => name.endsWith('.mdx'))
    .map(name => {
      const slug = name.replace(/\.mdx$/, '')
      return getAcademyLesson(slug)
    })
    .filter(lesson => lesson !== null) as AcademyLesson[]

  return lessons.sort((a, b) => a.title.localeCompare(b.title))
}

export function getAcademyLesson(slug: string): AcademyLesson | null {
  const fullPath = path.join(academyDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    description: data.description || '',
    content,
    category: data.category,
    difficulty: data.difficulty,
    duration: data.duration,
    tags: data.tags || []
  }
}

export function getLessonsByCategory(): Record<string, AcademyLesson[]> {
  const lessons = getAllAcademyLessons()
  const categories: Record<string, AcademyLesson[]> = {}

  lessons.forEach(lesson => {
    if (!categories[lesson.category]) {
      categories[lesson.category] = []
    }
    categories[lesson.category].push(lesson)
  })

  return categories
}

// Utility function to calculate reading time
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}