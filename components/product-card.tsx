import Link from 'next/link'
import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from './ui/card'

interface ProductCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
  href: string
  className?: string
}

export function ProductCard({
  icon,
  title,
  description,
  features,
  href,
  className = ''
}: ProductCardProps) {
  return (
    <Card hover className={className}>
      <CardHeader>
        <div className="flex items-center space-x-3 mb-3">
          {icon}
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        </div>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-slate-700">
              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Link
          href={href}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors group"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </Card>
  )
}