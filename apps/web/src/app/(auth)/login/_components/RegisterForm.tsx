import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LngToggle } from '@/components/LngToggle'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { register } from '@/api/auth'
import { store, tokenAtom, userAtom } from '@/store'
import { loginRoute } from '@/router'

const registerFormSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(4),
  passwordConfirm: z.string().min(4),
}).refine(
  ({ password, passwordConfirm }) => password === passwordConfirm,
  {
    path: ['passwordConfirm'],
    params: { i18n: { key: 'register.password-unsame' } },
  },
)

type RegisterFormSchema = z.infer<typeof registerFormSchema>

interface RegisterFormProps {
  onGoToLogin?: () => void
}

export function RegisterForm({ onGoToLogin }: RegisterFormProps) {
  const { redirect } = loginRoute.useSearch()
  const navigate = useNavigate()
  const { t } = useTranslation('auth')
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  })

  function onSubmit(formData: RegisterFormSchema) {
    register(formData).then((data) => {
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
        <CardTitle>{t('register')}</CardTitle>
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
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('confirm-password')}</FormLabel>
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
            <div className="mb-2 flex w-full items-center justify-end">
              <Button variant="link" onClick={onGoToLogin}>
                {t('had-account')}
              </Button>
            </div>
            <Button className="h-12 w-full" type="submit">
              {t('register-now')}
            </Button>
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
