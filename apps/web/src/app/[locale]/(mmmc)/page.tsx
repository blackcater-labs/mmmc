'use client'

import { Button } from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'

import { useCurrentLocale } from '@/locales/client'

export default function Home() {
  const { data } = useSession()
  const locale = useCurrentLocale()

  return (
    <main>
      <div className="flex flex-row gap-4">
        <Button onPress={() => signOut()}>Sign Out</Button>
        <Button color="primary">{locale}</Button>
        <p>{JSON.stringify(data || {})}</p>
      </div>
    </main>
  )
}
