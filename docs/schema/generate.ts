import path, { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs-extra'
import jsg from 'ts-json-schema-generator'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const versions = [
  ['v1.0', ['comic']],
] as const
const sourceDir = resolve(__dirname)
const outputDir = resolve(__dirname, '../public/schema')

async function generateSchemaVersion(version: string, type: string) {
  const schema = jsg.createGenerator({
    path: resolve(sourceDir, version, `${type}.ts`),
    type: '*',
  }).createSchema('*')
  const schemaString = JSON.stringify(schema, null, 2)
  await fs.writeFile(resolve(outputDir, version, `${type}.json`), schemaString)
}

async function generateSchemas() {
  for (const version of versions) {
    const [v, types] = version
    fs.mkdirpSync(resolve(outputDir, v))
    for (const type of types)
      await generateSchemaVersion(v, type)
  }
}

generateSchemas()
