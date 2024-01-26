'use client'

import { Button } from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data } = useSession()

  return (
    <main>
      <div className="flex flex-row gap-4">
        <Button onPress={() => signOut()}>Button</Button>
        <Button color="primary">Button</Button>
        <p>{JSON.stringify(data || {})}</p>
      </div>
    </main>
  )
}
