import { ReactNode } from 'react'

interface SectionProps {
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  containerClassName?: string
  titleClassName?: string
  id?: string
}

export function Section({
  title,
  subtitle,
  children,
  className = '',
  containerClassName = '',
  titleClassName = '',
  id
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${containerClassName}`}>
        {(title || subtitle) && (
          <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
            {title && (
              <h2 className={`text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl ${titleClassName}`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg leading-8 text-slate-600 text-balance">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}