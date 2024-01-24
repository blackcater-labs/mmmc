'use client'

import { forwardRef } from 'react'
import type {
  AccordionItemProps as ItemProps,
  AccordionMultipleProps as MultipleProps,
  AccordionSingleProps as SingleProps,
} from '@radix-ui/react-accordion'
import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'

import type { ClassNames } from '../../utils'
import type { AccordionItemSlots, AccordionItemVariantProps } from './variants'
import { accordion, accordionItem } from './variants'

type AccordionProps = (SingleProps | MultipleProps)

const Accordion = forwardRef<React.ElementRef<typeof Root>, AccordionProps>(
  ({ className, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        className={accordion({ class: className })}
        {...props}
      />
    )
  },
)
Accordion.displayName = 'Accordion'

type AccordionItemProps = Omit<ItemProps, keyof AccordionItemVariantProps> & AccordionItemVariantProps & {
  classNames?: ClassNames<AccordionItemSlots>
  title: React.ReactNode
}

const AccordionItem = forwardRef<React.ElementRef<typeof Item>, AccordionItemProps>(
  ({ className, classNames, title, children, ...props }, ref) => {
    const { item, header, trigger, content, body } = accordionItem({ class: className })

    return (
      <Item ref={ref} className={item({ class: classNames?.item })} {...props}>
        <Header className={header({ class: classNames?.header })}>
          <Trigger className={trigger({ class: classNames?.trigger })}>
            {title}
            <ChevronDownIcon className="size-4 shrink-0 transition-transform duration-200" />
          </Trigger>
        </Header>
        <Content className={content({ class: classNames?.content })}>
          <div className={body({ class: classNames?.body })}>
            {children}
          </div>
        </Content>
      </Item>
    )
  },
)
AccordionItem.displayName = 'AccordionItem'

export { Accordion, AccordionItem }
export type { AccordionProps }
