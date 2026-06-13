/**
 * 時間を管理する
 */
export default class Time
{
  /**
   * 過去の時間
   */
  #lastTime;

  constructor()
  {
    this.#lastTime = Date.now();
  }

  DeltaTick()
  {
    return (Date.now() - this.#lastTime) * 0.001;
  }

  Update()
  {
    this.#lastTime = Date.now();
  }
}