import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

/**
 * @swagger
 * components:
 *  schemas:
 *   User:
 *     type: object
 *     description: 유저
 *     properties:
 *       id:
 *         type: integer
 *       createdAt:
 *         type: string
 *         format: date-time
 *         description: 생성일
 *       updatedAt:
 *         type: string
 *         format: date-time
 *         description: 수정일
 *       name:
 *         type: string
 *         description: 유저 명
 *       type:
 *         type: string
 *         description: 구분(등급)
 *       status:
 *         type: string
 *         enum: [active, inactive]
 *         description: 상태( active:정상, inactive:차단)
 */
export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
