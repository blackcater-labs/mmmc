import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: '../../apps/server/schema.graphql',
  documents: ['./documents/**/*.graphql'],
  generates: {
    './src/gql/client/': {
      preset: 'client',
    },
    './src/gql/server/index.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers',
      ],
    },
  },
  overwrite: true,
}

export default config
