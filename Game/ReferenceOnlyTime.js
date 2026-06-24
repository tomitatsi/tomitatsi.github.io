import IGameObject from "./IGameObject.js";

/**
 * Time を参照のみ可能にするラッパー
 */
export default class ReferenceOnlyTime extends IGameObject
{
  /** time */
  #time;

  /**
   * constructor
   * @param {Time} time 
   */
  constructor(time)
  {
    super();
    this.#time = time;
  }

  /**
   * 経過時間を返す
   * @returns {number} 経過時間（秒）
   */
  DeltaTick()
  {
    return this.#time.DeltaTick();
  }
}