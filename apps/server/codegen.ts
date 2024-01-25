import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'schema.graphql',
  generates: {
    './src/types/gql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        scalars: {
          ID: {
            // ID is a number in the database nowerdays. Maybe number is not secure enough?
            input: 'number',
            output: 'number',
          },
        },
      },
    },
  },
}

export default config
