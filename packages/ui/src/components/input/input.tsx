import { forwardRef, useId } from 'react'

import { Label } from '../label'
import type { ClassNames } from '../../utils'
import type { InputSlots, InputVariantProps } from './variants'
import { input as inputVariants } from './variants'

type BaseProps = InputVariantProps & {
  classNames?: ClassNames<InputSlots>
  label?: React.ReactNode
  description?: React.ReactNode
}
type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BaseProps> & BaseProps

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    classNames,
    variant = 'default',
    color,
    size,
    required,
    label: labelNode,
    description: descriptionNode,
    ...props
  }, ref) => {
    const { root, wrapper, label, input, description } = inputVariants({ variant, color, size, class: className })
    const descriptionId = useId()

    return (
      <div className={root({ class: classNames?.root })}>
        <Label className={wrapper({ class: classNames?.wrapper })}>
          {labelNode && (
            <div className={label({ class: classNames?.label })}>
              {labelNode}
              {required && <span className="text-danger">*</span>}
            </div>
          )}
          <input
            ref={ref}
            className={input({ class: classNames?.input })}
            {...props}
            aria-describedby={descriptionId}
          />
        </Label>
        {descriptionNode && <div id={descriptionId} className={description({ class: classNames?.description })}>{descriptionNode}</div>}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
export type { InputProps }
