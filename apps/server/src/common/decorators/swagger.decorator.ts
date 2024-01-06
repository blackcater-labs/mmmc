import { Type, applyDecorators } from '@nestjs/common'
import { ApiExtraModels, ApiOkResponse, ApiProperty, getSchemaPath } from '@nestjs/swagger'

export class BizSuccess<Data> {
  @ApiProperty()
    success: true

  @ApiProperty()
    data: Data
}

export class BizError {
  @ApiProperty()
    success: false

  @ApiProperty()
    code: number

  @ApiProperty()
    message: string
}

export function ApiOkResponeCustom<GenericType extends Type<unknown>>(data: GenericType) {
  return applyDecorators(
    ApiExtraModels(BizError, BizSuccess, data),
    ApiOkResponse({
      schema: {
        oneOf: [
          {
            $ref: getSchemaPath(BizSuccess),
            properties: {
              data: { $ref: getSchemaPath(data) },
            },
          },
          { $ref: getSchemaPath(BizError) },
        ],
      },
    }),
  )
}
