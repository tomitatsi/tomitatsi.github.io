/**
 * 時間を管理する
 */
export default class Time
{
  /**
   * 過去の時間
   */
  #lastTime;

  /**
   * 経過する時間の係数
   */
  multiplier = 1.0;

  /**
   * constructor
   */
  constructor()
  {
    this.#lastTime = Date.now();
  }

  /**
   * 経過時間を返す
   * @returns {number} 経過時間（秒）
   */
  DeltaTick()
  {
    return (Date.now() - this.#lastTime) * 0.001 * this.multiplier;
  }

  /**
   * 経過時間を更新する
   */
  Update()
  {
    this.#lastTime = Date.now();
  }
}