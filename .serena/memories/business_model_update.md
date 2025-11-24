# MindIsGear Business Model Update

## Key Change: Lessons → Online Classes

**Previous Understanding**: 
- Academy section focused on static "lessons" (tutorial content)
- Self-paced learning materials
- MDX-based tutorial content

**Updated Understanding**:
- Academy section focuses on **live online classes**  
- Interactive, instructor-led sessions
- Structured course programs with schedules
- Real-time learning experiences

## First Class Implementation

**Class**: "Full Stack Development in 7 Days"
**Format**: Live online sessions
**Starting Point**: Backend development first
**Duration**: 7 days (intensive format)

## Implementation Impact

### Content Structure Changes
- Classes have schedules, not just content
- Need enrollment/registration functionality
- Live session information vs static content
- Day-by-day curriculum structure

### Academy Page Redesign
- Class listings with upcoming schedules
- Registration/enrollment CTAs
- Class format information
- Instructor details
- Live session times and dates

### Data Model Updates
```typescript
interface OnlineClass {
  id: string
  title: string
  description: string
  duration: string // "7 days"
  format: 'live' | 'recorded' | 'hybrid'
  startDate: string
  schedule: ClassSession[]
  instructor: string
  prerequisites: string[]
  price: number
  enrolled: number
  maxCapacity: number
}

interface ClassSession {
  day: number
  title: string
  topics: string[]
  duration: string // "2 hours"
  time: string // "9:00 AM - 11:00 AM EST"
}
```

This represents a significant shift from content marketing to education business model.