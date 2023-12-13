import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { atomWithStorage } from 'jotai/utils'

import { useNavigate, useSearch } from '@tanstack/react-router'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { LngToggle } from '@/components/LngToggle'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { login } from '@/api/auth'
import { store, tokenAtom, userAtom } from '@/store'
import { $authLoginPageRoute } from '@/router'
import { getLocalData } from '@/lib/localStorage'

interface LoginFormProps {
  onCreateAccount?: () => void
}

export const loginFormSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(4),
  rememberMe: z.boolean().default(true),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>

const loginStateAtom = atomWithStorage<LoginFormSchema | null>('mmmc-login_state', getLocalData('mmmc-login_state'))

export function LoginForm({ onCreateAccount }: LoginFormProps) {
  const { redirect } = useSearch({ from: $authLoginPageRoute.id })
  const navigate = useNavigate()
  const { t } = useTranslation('auth')
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: store.get(loginStateAtom) || { rememberMe: true },
  })

  function onSubmit(formData: LoginFormSchema) {
    login(formData).then((data: any) => {
      if (formData.rememberMe)
        store.set(loginStateAtom, formData)

      store.set(tokenAtom, data.access_token)
      store.set(userAtom, data.user)

      if (redirect && !redirect.includes('/login'))
        navigate({ to: redirect })
      else
        navigate({ to: '/' })
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('login')}</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-2">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('username')}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('password')}</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="mb-2 flex w-full items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel className="ml-2">{t('remember-me')}</FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="link" onClick={onCreateAccount}>{t('create-account')}</Button>
            </div>
            <Button className="h-12 w-full" type="submit">{t('login')}</Button>
            <div className="mt-4 flex w-full items-center justify-evenly">
              <LngToggle />
              <ThemeToggle />
            </div>
          </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
