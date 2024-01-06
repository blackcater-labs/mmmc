'use client'

import React from 'react'
import { Card, CardBody } from '@nextui-org/react'
import { animate, useMotionValue } from 'framer-motion'

export default function HomePage() {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    animate(0, 9431, {
      duration: 5,
      ease: 'easeOut',
      onUpdate: v => setValue(Math.round(v)),
    })
  }, [])

  return (
    <div className="p-8">
      <Card>
        <CardBody>
          <p>{value}</p>
        </CardBody>
      </Card>
    </div>
  )
}
