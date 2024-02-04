'use server'

import { z } from 'zod'

import { register } from '~/api/auth/register'

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type RegisterInput = z.infer<typeof registerSchema>

export async function registerAction(input: RegisterInput) {
  const validateFields = registerSchema.safeParse(input)

  if (!validateFields.success)
    throw new Error(validateFields.error.message)

  const { data, error } = await register(validateFields.data)

  if (error)
    throw new Error(error?.message)

  return data?.register
}
