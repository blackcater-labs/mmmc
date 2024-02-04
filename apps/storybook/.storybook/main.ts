import type { StorybookConfig } from '@storybook/react-vite'

import fg from 'fast-glob'
import path from 'node:path'
import process from 'node:process'
import tsconfigPaths from 'vite-tsconfig-paths'

const getPath = (storyPath: string) => path.resolve(process.cwd(), '../../', storyPath).replace(/\\/g, '/')

const getGlobPaths = (paths: string[]) => paths.reduce((acc: string[], path: string) => [...acc, ...fg.sync(path)], [])

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return path.dirname(require.resolve(path.join(value, 'package.json')))
}

function getStoryPaths(fileName = '*') {
  return getGlobPaths([
    getPath(`packages/ui/src/**/${fileName}.stories.@(ts|tsx)`),
    getPath(`packages/ui/src/**/${fileName}.stories.mdx`),
  ])
}

const config: StorybookConfig = {
  stories: [...getStoryPaths()],
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-storysource'),
    getAbsolutePath('storybook-addon-pseudo-states'),
    getAbsolutePath('storybook-dark-mode'),
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins || []
    config.plugins.push(tsconfigPaths({
      root: path.join(__dirname, '../../../'),
    }))

    return config
  },
  docs: {
    autodocs: false,
  },
}

export default config
