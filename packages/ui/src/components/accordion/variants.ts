import type { VariantProps } from 'tailwind-variants'

import { tv } from '../../utils'

const accordion = tv({
  base: 'group space-y-2',
  variants: {},
})

const accordionItem = tv({
  slots: {
    item: 'group/item text-foreground',
    header: 'group/header bg-default flex rounded-lg',
    trigger: 'flex flex-1 items-center justify-between px-4 py-2 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
    content: 'group/content data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all',
    body: 'p-4 pb-2',
  },
  variants: {},
})

type AccordionVariantProps = VariantProps<typeof accordion>
type AccordionItemVariantProps = VariantProps<typeof accordionItem>
type AccordionItemSlots = (typeof accordionItem)['slots']

export { accordion, accordionItem }
export type { AccordionVariantProps, AccordionItemVariantProps, AccordionItemSlots }
