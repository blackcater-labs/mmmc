import { Loader2Icon } from 'lucide-react'

export default function Loading() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Loader2Icon width="48" height="48" className="animate-spin" />
    </div>
  )
}
