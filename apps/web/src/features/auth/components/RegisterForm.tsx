'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { registerAction } from '~/actions/auth/register'
import { useScopedI18n } from '~/locales/client'
import { brandFont } from '~/utils/font'
import { tm } from '~/utils/tailwind'

import type { RegisterSchema } from '../schemas/register.schema'

import { registerSchema } from '../schemas/register.schema'
import { LangSwitcher } from './LangSwitcher'
import { ThemeSwitcher } from './ThemeSwitcher'

function RegisterForm() {
  const t = useScopedI18n('auth.register')
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
    <div className="w-full max-w-[450px] p-6">
      <h3 className="flex flex-row items-center justify-center">
        <Image alt="mmmc" className="bg-default mr-4 rounded-full" height={40} src="/logo.png" width={40} />
        <span className={tm(brandFont.className, 'text-3xl font-bold')}>Mmmc</span>
      </h3>
      <div className="mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState: { invalid, error } }) => (
                <Input
                  errorMessage={error?.message}
                  isInvalid={invalid}
                  label={t('username')}
                  required
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { invalid, error } }) => (
                <Input
                  errorMessage={error?.message}
                  isInvalid={invalid}
                  label={t('email')}
                  required
                  type="email"
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState: { invalid, error } }) => (
                <Input
                  errorMessage={error?.message}
                  isInvalid={invalid}
                  label={t('password')}
                  required
                  type="password"
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field, fieldState: { invalid, error } }) => (
                <Input
                  errorMessage={error?.message}
                  isInvalid={invalid}
                  label={t('confirmPassword')}
                  required
                  type="password"
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-6 flex flex-row items-center justify-end">
            <Link
              className="text-primary text-sm underline hover:opacity-80"
              href="/auth/login"
            >
              {t('loginNow')}
            </Link>
          </div>
          <Button
            className="mt-4 w-full"
            color="primary"
            disabled={isPending}
            type="submit"
          >
            {t('registerBtn')}
          </Button>
          <div className="mt-4 flex flex-row items-center justify-between">
            <ThemeSwitcher />
            <LangSwitcher />
          </div>
        </form>
      </div>
    </div>
  )
}

export { RegisterForm }
