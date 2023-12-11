import { useTranslation } from 'react-i18next'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LngToggle } from '@/components/LngToggle'
import { ThemeToggle } from '@/components/ThemeToggle'

interface RegisterFormProps {
  onGoToLogin?: () => void
}

export function RegisterForm({ onGoToLogin }: RegisterFormProps) {
  const { t } = useTranslation('auth')

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('register')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-2">
          <Label htmlFor="username">{t('username')}</Label>
          <Input id="username" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">{t('password')}</Label>
          <Input id="password" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">{t('confirm-password')}</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="mb-2 flex w-full items-center justify-end">
          <Button variant="link" onClick={onGoToLogin}>
            {t('had-account')}
          </Button>
        </div>
        <Button className="h-12 w-full">{t('register-now')}</Button>
        <div className="mt-4 flex w-full items-center justify-evenly">
          <LngToggle />
          <ThemeToggle />
        </div>
      </CardFooter>
    </Card>
  )
}
