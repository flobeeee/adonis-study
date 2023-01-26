import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { RequestContract } from '@ioc:Adonis/Core/Request'

export default class CreateUserValidator {
  public static async postLoginValidator(request: RequestContract) {
    const validator = {
      schema: schema.create({
        email: schema.string(
          {
            trim: true,
          },
          [rules.email(), rules.exists({ table: 'user', column: 'email' })]
        ),
        password: schema.string({}, []),
      }),
      messages: {
        'email.string': 'email은 string 데이터 형식이어야 합니다.',
        'email.email': '잘못된 email 형식입니다.',
        'email.unique': '중복된 이메일입니다.',
        'email.required': 'email을 입력해 주세요.',
        'password.required': '비밀번호를 입력해 주세요.',
      },
    }
    await request.validate({
      schema: validator.schema,
      messages: validator.messages,
    })
  }
}
