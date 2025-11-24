import { ReactNode } from 'react'
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react'
import { clsx } from 'clsx'

interface CalloutProps {
  children: ReactNode
  type?: 'info' | 'warning' | 'success' | 'error'
  title?: string
  className?: string
}

export function Callout({
  children,
  type = 'info',
  title,
  className = ''
}: CalloutProps) {
  const config = {
    info: {
      icon: Info,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
      titleColor: 'text-blue-900',
      textColor: 'text-blue-800'
    },
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      iconColor: 'text-yellow-600',
      titleColor: 'text-yellow-900',
      textColor: 'text-yellow-800'
    },
    success: {
      icon: CheckCircle,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600',
      titleColor: 'text-green-900',
      textColor: 'text-green-800'
    },
    error: {
      icon: AlertCircle,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconColor: 'text-red-600',
      titleColor: 'text-red-900',
      textColor: 'text-red-800'
    }
  }

  const { icon: Icon, bgColor, borderColor, iconColor, titleColor, textColor } = config[type]

  return (
    <div className={clsx(
      'rounded-lg border-l-4 p-4',
      bgColor,
      borderColor,
      className
    )}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Icon className={clsx('h-5 w-5', iconColor)} />
        </div>
        <div className="ml-3 flex-1">
          {title && (
            <h3 className={clsx('text-sm font-semibold mb-1', titleColor)}>
              {title}
            </h3>
          )}
          <div className={clsx('text-sm', textColor)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}