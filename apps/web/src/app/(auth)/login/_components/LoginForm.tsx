import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { LngToggle } from '@/components/LngToggle'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { login } from '@/api/auth/login'
import { getLoginState, setAccessToken, setLoginState } from '@/lib/localStorage'

interface LoginFormProps {
  onCreateAccount?: () => void
}

export const loginFormSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(4),
  rememberMe: z.boolean().default(true),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>

export function LoginForm({ onCreateAccount }: LoginFormProps) {
  const { t } = useTranslation('auth')
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: getLoginState() || { rememberMe: true },
  })

  function onSubmit(formData: LoginFormSchema) {
    login(formData).then((data: any) => {
      if (formData.rememberMe) {
        setLoginState(formData)
        setAccessToken(data.access_token! as string)
      }
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
                      <Input placeholder={t('username')} {...field} />
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
                      <Input type="password" placeholder={t('password')} {...field} />
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
