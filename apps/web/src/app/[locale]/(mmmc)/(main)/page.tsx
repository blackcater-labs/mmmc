'use client'

import { Button } from '@mantine/core'
import { signOut, useSession } from 'next-auth/react'

import { useCurrentLocale } from '~/locales/client'

export default function Home() {
  const { data } = useSession()
  const locale = useCurrentLocale()

  return (
    <div className="flex flex-row gap-4">
      <Button onClick={() => signOut()}>Sign Out</Button>
      <Button color="primary">{locale}</Button>
      <p>{JSON.stringify(data || {}, null, 2)}</p>
    </div>
  )
}
