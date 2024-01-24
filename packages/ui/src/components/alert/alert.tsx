import { cloneElement, forwardRef } from 'react'

import type { ClassNames } from '../../utils'
import type { AlertSlots, AlertVariantProps } from './variants'
import { alert } from './variants'

type BaseProps = AlertVariantProps & {
  classNames?: ClassNames<AlertSlots>
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactElement
}
type AlertProps = Omit<React.HTMLAttributes<HTMLDivElement>, keyof BaseProps> & BaseProps

const Alert = forwardRef<HTMLDivElement, AlertProps>(({
  className,
  classNames,
  variant,
  color,
  title: titleNode,
  description: descriptionNode,
  icon: iconNode,
  children,
  ...props
}, ref) => {
  const { root, icon, content, title, description } = alert({ variant, color, class: className })
  const iconElem = iconNode ? cloneElement(iconNode, { className: 'mt-1 size-4' }) : null

  return (
    <div
      ref={ref}
      className={root({ class: classNames?.root })}
      role="alert"
      {...props}
    >
      {iconNode && <div className={icon({ class: classNames?.icon })}>{iconElem}</div>}
      <div className={content({ class: classNames?.content })}>
        <h5 className={title({ class: classNames?.title })}>{titleNode}</h5>
        <div className={description({ class: classNames?.description })}>{descriptionNode || children}</div>
      </div>
    </div>
  )
})
Alert.displayName = 'Alert'

export { Alert }
export type { AlertProps }
