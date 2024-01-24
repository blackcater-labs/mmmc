'use client'

import { forwardRef } from 'react'
import { Root } from '@radix-ui/react-label'

import type { LabelVariantProps } from './variants'
import { label } from './variants'

type LabelProps = React.ComponentPropsWithoutRef<typeof Root> & LabelVariantProps

const Label = forwardRef<HTMLLabelElement, LabelProps>(({
  className,
  ...props
}, ref) => {
  return (
    <Root
      className={label({ class: className })}
      ref={ref}
      {...props}
    />
  )
})
Label.displayName = 'Label'

export { Label }
export type { LabelProps }
