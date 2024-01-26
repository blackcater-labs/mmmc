'use client'

import React, { useTransition } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@nextui-org/react'

import type { RegisterSchema } from '../schemas/register.schema'
import { registerSchema } from '../schemas/register.schema'
import { tm } from '@/utils/tailwind'
import { exoFont } from '@/utils/font'
import { registerAction } from '@/actions/auth/register'

function RegisterForm() {
  const [isPending, startTransition] = useTransition()
  const { control, handleSubmit } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {},
    disabled: isPending,
  })

  const onSubmit = (values: RegisterSchema) => {
    if (values.password !== values.confirmPassword) {
      toast.error('Password is not consistent')
      return
    }

    startTransition(() => {
      toast.promise(registerAction(values), {
        loading: 'Registering...',
        success: 'Register Success!',
        error(err) {
          return err.message
        },
        position: 'top-center',
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
              name="name"
              control={control}
              render={({ field, fieldState: { invalid, error } }) => (
                <Input
                  label="Username"
                  required
                  isInvalid={invalid}
                  errorMessage={error?.message}
                  {...field}
                />
              )}
            />
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
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field, fieldState: { invalid, error } }) => (
                <Input
                  label="Confirm Password"
                  type="password"
                  required
                  isInvalid={invalid}
                  errorMessage={error?.message}
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-6 flex flex-row items-center justify-end">
            <Link className="text-primary text-sm underline hover:opacity-80" href="/auth/login">Login Now!</Link>
          </div>
          <Button
            className="mt-4 w-full"
            type="submit"
            color="primary"
            disabled={isPending}
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  )
}

export { RegisterForm }
