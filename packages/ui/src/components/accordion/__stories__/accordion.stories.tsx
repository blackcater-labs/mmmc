import type { Meta, StoryObj } from '@storybook/react'

import { Accordion, AccordionItem } from '../index'

const meta: Meta = {
  title: '基础组件/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

export const Preview: StoryObj = {
  render: () => {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" title="Is it accessible?">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionItem>
        <AccordionItem value="item-2" title="Is it styled?">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionItem>
        <AccordionItem value="item-3" title="Is it animated?">
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionItem>
      </Accordion>
    )
  },
}
