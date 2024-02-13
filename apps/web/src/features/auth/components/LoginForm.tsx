'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Anchor, Button, Checkbox, Text, TextInput } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { loginAction } from '~/actions/auth'
import { DEFAULT_REDIRECT_URL } from '~/constants'
import { useScopedI18n } from '~/locales/client'
import { brandFont } from '~/utils/font'
import { tm } from '~/utils/tailwind'

import type { LoginSchema } from '../schemas/login.schema'

import { loginSchema } from '../schemas/login.schema'
import { LangSwitcher } from './LangSwitcher'
import { ThemeSwitcher } from './ThemeSwitcher'

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
        <Image alt="mmmc" className="bg-default mr-4 rounded-full" height={40} src="/logo.png" width={40} />
        <span className={tm(brandFont.className, 'text-3xl font-bold')}>Mmmc</span>
      </h3>
      <div className="mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <TextInput
                  error={error?.message}
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
              render={({ field, fieldState: { error } }) => (
                <TextInput
                  error={error?.message}
                  label={t('password')}
                  required
                  type="password"
                  {...field}
                />
              )}
            />
          </div>
          <div className="mt-6 flex flex-row items-center justify-between">
            <Controller
              control={control}
              name="rememberMe"
              render={({ field: { value, onChange, ...rest } }) => (
                <Checkbox
                  checked={value}
                  label={t('rememberMe')}
                  onChange={onChange}
                  size="sm"
                  {...rest}
                />
              )}
            />
            <Anchor
              component={Link}
              href="/auth/register"
              underline="always"
            >
              <Text size="sm">{t('registerNow')}</Text>
            </Anchor>
          </div>
          <Button
            className="mt-4"
            disabled={isPending}
            fullWidth
            type="submit"
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
