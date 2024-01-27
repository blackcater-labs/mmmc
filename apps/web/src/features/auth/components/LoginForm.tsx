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
import { ThemeSwitcher } from './ThemeSwitcher'
import { LangSwitcher } from './LangSwitcher'
import { tm } from '@/utils/tailwind'
import { exoFont } from '@/utils/font'
import { DEFAULT_REDIRECT_URL } from '@/constants'
import { loginAction } from '@/actions/auth'
import { useScopedI18n } from '@/locales/client'

function LoginForm() {
  const t = useScopedI18n('auth.login')
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
    <div className="w-full max-w-[450px] p-6">
      <h3 className="flex flex-row items-center justify-center">
        <Image className="bg-default mr-4 rounded-full" src="/logo.png" width={40} height={40} alt="mmmc" />
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
                  {t('rememberMe')}
                </Checkbox>
              )}
            />
            <Link
              className="text-primary text-sm underline hover:opacity-80"
              href="/auth/register"
            >
              {t('registerNow')}
            </Link>
          </div>
          <Button
            className="mt-4 w-full"
            type="submit"
            color="primary"
            disabled={isPending}
          >
            {t('loginBtn')}
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

export { LoginForm }
