import Link from 'next/link'
import { GraduationCap, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from './ui/card'

interface LessonCardProps {
  title: string
  description: string
  category: string
  slug: string
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
  duration?: string
  className?: string
}

export function LessonCard({
  title,
  description,
  category,
  slug,
  difficulty,
  duration,
  className = ''
}: LessonCardProps) {
  const difficultyColor = {
    Beginner: 'bg-green-50 text-green-700 ring-green-600/20',
    Intermediate: 'bg-yellow-50 text-yellow-700 ring-yellow-600/20',
    Advanced: 'bg-red-50 text-red-700 ring-red-600/20'
  }

  return (
    <Card hover className={className}>
      <CardHeader>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-5 w-5 text-primary-600" />
            <span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-600/10">
              {category}
            </span>
          </div>
          {difficulty && (
            <span
              className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                difficultyColor[difficulty]
              }`}
            >
              {difficulty}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-slate-900 leading-tight">
          <Link href={`/academy/${slug}`} className="hover:text-primary-600 transition-colors">
            {title}
          </Link>
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </CardContent>

      <CardFooter>
        <div className="flex items-center justify-between w-full">
          {duration && (
            <span className="text-sm text-slate-500">{duration}</span>
          )}
          <Link
            href={`/academy/${slug}`}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors group ml-auto"
          >
            Start lesson
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}