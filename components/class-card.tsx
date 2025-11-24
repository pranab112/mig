import { Calendar, Clock, Users, Video } from 'lucide-react'

interface ClassCardProps {
  title: string
  description: string
  format: 'Live Online' | 'Recorded' | 'Hybrid'
  duration: string
  schedule: string
  startDate: string
  instructor: string
  price: number
  enrolled: number
  maxCapacity: number
  slug: string
}

export function ClassCard({
  title,
  description,
  format,
  duration,
  schedule,
  startDate,
  instructor,
  price,
  enrolled,
  maxCapacity,
  slug
}: ClassCardProps) {
  const enrollmentPercentage = (enrolled / maxCapacity) * 100

  return (
    <div className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Video className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-medium text-primary-600">{format}</span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-slate-900">${price}</div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 mb-4 line-clamp-2">{description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-slate-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Starts {startDate}</span>
          </div>
          <div className="flex items-center text-sm text-slate-500">
            <Clock className="w-4 h-4 mr-2" />
            <span>{schedule}</span>
          </div>
          <div className="flex items-center text-sm text-slate-500">
            <Users className="w-4 h-4 mr-2" />
            <span>{enrolled}/{maxCapacity} enrolled</span>
          </div>
        </div>

        {/* Enrollment Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>Enrollment</span>
            <span>{Math.round(enrollmentPercentage)}% full</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all ${
                enrollmentPercentage > 80 ? 'bg-red-500' :
                enrollmentPercentage > 60 ? 'bg-yellow-500' :
                'bg-green-500'
              }`}
              style={{ width: `${enrollmentPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Enroll Now
          </button>
          <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
            Details
          </button>
        </div>
      </div>
    </div>
  )
}