'use server'

import { z } from 'zod'

import { signIn } from '@/auth'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  callbackUrl: z.string().optional(),
})

type LoginInput = z.infer<typeof loginSchema>

export async function loginAction(input: LoginInput) {
  const validateFields = loginSchema.safeParse(input)

  if (!validateFields.success)
    throw new Error(validateFields.error.message)

  await signIn('credentials', validateFields.data)
}
