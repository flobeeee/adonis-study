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
  public async hello() {
    return 'swagger test'
  }
}
