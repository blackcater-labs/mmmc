import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'schema.graphql',
  generates: {
    './src/types/gql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
}

export default config
