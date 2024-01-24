import { forwardRef } from 'react'

import type { TagVariantProps } from './variants'
import { tag } from './variants'

type TagProps = React.HTMLAttributes<HTMLDivElement> & TagVariantProps

const Tag = forwardRef<HTMLDivElement, TagProps>(({ className, variant, color, ...props }, ref) => {
  return (
    <div
      className={tag({ variant, color, class: className })}
      ref={ref}
      {...props}
    />
  )
})
Tag.displayName = 'Tag'

export { Tag }
export type { TagProps }
