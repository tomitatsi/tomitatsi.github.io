import IStatus from "./IStatus.js";

/**
 * スタミナを管理する
 */
export default class Stamina extends IStatus
{
  /**
   * スタミナ量
   */
  #value

  /**
   * スタミナの最大数
   */
  #maximumLimit

  /**
   * スタミナの最低数
   */
  #minimumLimit

  /**
   * 
   */
  constructor(defaultValue, min, max)
  {
    super();
    this.#value = defaultValue;
    this.#maximumLimit = max;
    this.#minimumLimit = min;
  }

  /**
   * スタミナの値を加算する\
   * 加算する値が 0 以下の場合、何もせずに true を返す
   * @param {number} value 加算値
   * @returns {boolean} 加算したスタミナが最大値を超える場合、false。超えない場合、true
   */
  TryAdd(value)
  {
    // 加算する値が 0 以下の場合、何もせずに true を返す
    if (value <= 0)
    {
      return true;
    }

    // 加算する値とスタミナの合計が上限を超える場合、上限になる値までしか加算しない
    if (this.#value + value > this.#maximumLimit)
    {
      // 最大値以上には加算しないが、すでに上限を突破していた場合は現状のままにする
      this.#value = Math.max(this.#value, Math.min(this.#maximumLimit, this.#value + value));
      return false;
    }

    this.#value += value;
    return true;
  }

  /**
   * スタミナの値を減算する\
   * 減算する値が 0 以下の場合、何もせずに true を返す
   * @param {number} value 減算値（正の数）
   * @returns {boolean} 減算したスタミナが最低値を割る場合、
   */
  TrySub(value)
  {
    // 減算する値が 0 以下の場合、何もせずに true を返す
    if (value <= 0)
    {
      return true;
    }

    // 減算する値とスタミナの合計が下限を下回る場合、下限になる値までしか減算しない
    if (this.#value - value < this.#minimumLimit)
    {
      // 最低値以下には減算しないが、すでに上限を突破していた場合は現状のままにする
      this.#value = Math.min(this.#value, Math.max(this.#minimumLimit, this.#value - value));
      return false;
    }

    this.#value -= value;
    return true;
  }

  /**
   * 現在値を返す
   * @returns 現在値
   */
  Value()
  {
    return this.#value
  }

  /**
   * 最大値を返す
   * @returns 最大値
   */
  Max()
  {
    return this.#maximumLimit
  }
}