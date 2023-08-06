import type { ReferenceObject, SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface'

export function respSchema(dataSchema: SchemaObject & Partial<ReferenceObject>): SchemaObject & Partial<ReferenceObject> {
  return {
    type: 'object',
    title: 'Response',
    properties: {
      statusCode: { type: 'number', default: 200 },
      message: { type: 'string' },
      success: { type: 'boolean', default: true },
      data: dataSchema,
    },
  }
}
