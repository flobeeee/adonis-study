import CreateUser from 'App/Validators/CreateUserValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  /**
   * @swagger
   * /users:
   *   get:
   *     tags:
   *       - 회원
   *     summary: 회원 정보
   *     responses:
   *       200:
   *         description: ok
   */
  public async createUser({ request, response }: HttpContextContract) {
    await CreateUser.postLoginValidator(request)

    return response.ok('ok')
  }
}
