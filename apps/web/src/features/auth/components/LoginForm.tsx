'use client'

import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import Image from 'next/image'
import { Button, Input } from '@nextui-org/react'

import { tm } from '@/utils/tailwind'
import { exoFont } from '@/utils/font'

function LoginForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = () => {}

  return (
    <div className="bg-background-surface w-full max-w-[450px] overflow-auto rounded-2xl p-6">
      <h3 className="flex flex-row items-center justify-center">
        <Image className="mr-4" src="/logo.png" width={40} height={40} alt="mmmc" />
        <span className={tm(exoFont.className, 'text-3xl font-bold')}>Mmmc</span>
      </h3>
      <div className="mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  label="Email"
                  required
                  {...field}
                  {...fieldState}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  label="Password"
                  type="password"
                  required
                  {...field}
                  {...fieldState}
                />
              )}
            />
          </div>
          <Button className="mt-6 w-full" type="submit" color="primary">Login</Button>
        </form>
      </div>
    </div>
  )
}

export { LoginForm }
