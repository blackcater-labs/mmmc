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
import { ThemeSwitcher } from './ThemeSwitcher'
import { LangSwitcher } from './LangSwitcher'
import { tm } from '@/utils/tailwind'
import { exoFont } from '@/utils/font'
import { registerAction } from '@/actions/auth/register'
import { useScopedI18n } from '@/locales/client'

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
        <Image className="bg-default mr-4 rounded-full" src="/logo.png" width={40} height={40} alt="mmmc" />
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
                  label={t('username')}
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
                  label={t('email')}
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
                  label={t('password')}
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
                  label={t('confirmPassword')}
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
            <Link
              className="text-primary text-sm underline hover:opacity-80"
              href="/auth/login"
            >
              {t('loginNow')}
            </Link>
          </div>
          <Button
            className="mt-4 w-full"
            type="submit"
            color="primary"
            disabled={isPending}
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
