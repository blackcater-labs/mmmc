'use client'

import React, { useTransition } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Checkbox, Input } from '@nextui-org/react'

import type { LoginSchema } from '../schemas/login.schema'
import { loginSchema } from '../schemas/login.schema'
import { tm } from '@/utils/tailwind'
import { exoFont } from '@/utils/font'
import { DEFAULT_REDIRECT_URL } from '@/routes'
import { loginAction } from '@/actions/auth'

function LoginForm() {
  const [isPending, startTransition] = useTransition()
  const { control, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {},
    disabled: isPending,
  })
  const searchParams = useSearchParams()

  const onSubmit = (values: LoginSchema) => {
    const callbackUrl = searchParams.get('callbackUrl') || DEFAULT_REDIRECT_URL

    startTransition(() => {
      loginAction({
        email: values.email,
        password: values.password,
        callbackUrl,
      })
    })
  }

  return (
    <div className="w-full max-w-[450px] overflow-auto p-6">
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
              render={({ field, fieldState: { invalid, error } }) => (
                <Input
                  label="Email"
                  type="email"
                  required
                  isInvalid={invalid}
                  errorMessage={error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState: { invalid, error } }) => (
                <Input
                  label="Password"
                  type="password"
                  required
                  isInvalid={invalid}
                  errorMessage={error?.message}
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-6 flex flex-row items-center justify-between">
            <Controller
              name="rememberMe"
              control={control}
              render={({ field: { value, onChange, ...rest } }) => (
                <Checkbox
                  size="sm"
                  isSelected={value}
                  onValueChange={onChange}
                  {...rest}
                >
                  Remember me?
                </Checkbox>
              )}
            />
            <Link className="text-primary text-sm underline hover:opacity-80" href="/auth/register">Register Now!</Link>
          </div>
          <Button
            className="mt-4 w-full"
            type="submit"
            color="primary"
            disabled={isPending}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export { LoginForm }
