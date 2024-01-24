import { forwardRef } from 'react'

import type { BadgeVariantProps } from './variants'
import { badge } from './variants'

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & BadgeVariantProps

const Badge = forwardRef<HTMLDivElement, BadgeProps>(({ className, variant, color, ...props }, ref) => {
  return (
    <div
      className={badge({ variant, color, class: className })}
      ref={ref}
      {...props}
    />
  )
})
Badge.displayName = 'Badge'

export { Badge }
export type { BadgeProps }
