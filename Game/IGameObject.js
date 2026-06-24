/**
 * GameObject を定義するインターフェース
 */
export default class IGameObject
{
  /**
   * 描画前に実行される Update
   */
  BeforeUpdate()
  {
  }

  /**
   * 描画後に実行される Update
   */
  AfterUpdate()
  {
  }

  /**
   * 画面描画
   */
  Draw()
  {
  }
}