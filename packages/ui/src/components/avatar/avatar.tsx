'use client'

import { forwardRef, useState } from 'react'
import type { AvatarImageProps } from '@radix-ui/react-avatar'
import { Fallback, Image, Root } from '@radix-ui/react-avatar'
import { UserRoundIcon } from 'lucide-react'

import { type ClassNames, tm } from '../../utils'
import type { AvatarSlots, AvatarVariantProps } from '../avatar'
import { avatar } from '../avatar'

type AvatarProps = Omit<AvatarImageProps, keyof AvatarVariantProps> & AvatarVariantProps & {
  classNames?: ClassNames<AvatarSlots>
  delayMs?: number
  name?: string
  showFallback?: boolean
  fallback?: React.ReactNode
}

const Avatar = forwardRef<React.ElementRef<typeof Root>, AvatarProps>(({
  className,
  classNames,
  variant,
  size,
  color,
  radius,
  name,
  showFallback,
  fallback: fallbackNode,
  onLoadingStatusChange,
  ...props
}, ref) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'loaded' | 'error'>('idle')
  const { root, image, fallback } = avatar({ variant, color, size, radius })
  const fallbackAvatar = name || (
    <UserRoundIcon
      className={tm({
        'size-4': size === 'sm',
        'size-6': size === 'md',
        'size-9': size === 'lg',
      })}
    />
  )

  return (
    <Root
      className={root({ class: [className, classNames?.root] })}
      ref={ref}
      data-status={status}
    >
      {status === 'error' && (
        <Fallback
          className={fallback({ class: classNames?.fallback })}
          delayMs={0}
        >
          {showFallback ? (fallbackNode || fallbackAvatar) : fallbackAvatar}
        </Fallback>
      )}
      <Image
        className={image({ class: classNames?.image })}
        {...props}
        data-loaded={status === 'loaded'}
        onLoadingStatusChange={(status) => {
          setStatus(status)
          onLoadingStatusChange?.(status)
        }}
      />
    </Root>
  )
})
Avatar.displayName = 'Avatar'

export { Avatar }
export type { AvatarProps }
