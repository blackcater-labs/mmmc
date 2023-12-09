import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import ThemeToggle from '@/components/ThemeToggle'

interface LoginPageProps {
  redirect?: string
}

export default function LoginPage({ redirect: _redirect }: LoginPageProps) {
  return (
    <main className="relative flex h-screen w-screen items-center justify-center">
      <Tabs defaultValue="signin" className="sm:w-[400px]">
        <TabsList className="hidden" aria-hidden="true">
          <TabsTrigger value="signin">Login</TabsTrigger>
          <TabsTrigger value="signup">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="mb-2 flex w-full items-center justify-between">
                <Label htmlFor="remember" className="flex items-center">
                  <Checkbox id="remember" />
                  <span className="ml-2">Remember me</span>
                </Label>
                <Button variant="link">Create Account</Button>
              </div>
              <Button className="w-full">Login</Button>
              <div className="mt-4 flex w-full items-center justify-evenly">
                <ThemeToggle />
                <ThemeToggle />
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
            </CardHeader>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
