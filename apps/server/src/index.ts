import { Elysia } from 'elysia'

new Elysia()
  .get('/', () => 'Hello Elysia')
  .listen(4000)
