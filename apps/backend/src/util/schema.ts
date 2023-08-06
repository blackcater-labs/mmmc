import type { ReferenceObject, SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface'

export function respSchema(dataSchema: SchemaObject & Partial<ReferenceObject>, nullable: boolean = true): SchemaObject & Partial<ReferenceObject> {
  return {
    type: 'object',
    title: 'Response',
    required: ['statusCode', 'success'],
    properties: {
      statusCode: { type: 'number', default: 200 },
      bizCode: { type: 'number' },
      message: { type: 'string' },
      success: { type: 'boolean', default: true },
      data: {
        ...dataSchema,
        nullable,
      },
    },
  }
}
