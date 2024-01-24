import type { VariantProps } from 'tailwind-variants'

import { tv } from '../../utils'

const label = tv({
  base: 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
})

type LabelVariantProps = VariantProps<typeof label>

export { label }
export type { LabelVariantProps }
