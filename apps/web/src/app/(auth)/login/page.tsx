import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { LoginForm } from './_components/LoginForm'
import { RegisterForm } from './_components/RegisterForm'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type LoginTabs = 'signin' | 'signup'

export default function LoginPage() {
  const { t } = useTranslation('auth')
  const [currentTab, setCurrentTab] = useState<LoginTabs>('signin')

  return (
    <main className="relative flex h-screen w-screen items-center justify-center">
      <Tabs value={currentTab} defaultValue="signin" className="w-full px-4 sm:w-[400px]">
        <TabsList className="hidden" aria-hidden="true">
          <TabsTrigger value="signin">{t('login')}</TabsTrigger>
          <TabsTrigger value="signup">{t('register')}</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <LoginForm onCreateAccount={() => setCurrentTab('signup')} />
        </TabsContent>
        <TabsContent value="signup">
          <RegisterForm onGoToLogin={() => setCurrentTab('signin')} />
        </TabsContent>
      </Tabs>
    </main>
  )
}
