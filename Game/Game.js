import CreateElementWithProfile from "../component/CreateElementWithProfile.js";
import You from "./You.js";
import Color from "../ColorProfile.js";

/**
 * ゲームを管理する
 */
export default class Game
{
  /**
   * body 要素
   */
  #body = $("body");

  /**
   * Time
   */
  #time;

  /**
   * You
   */
  #you;

  /**
   * 慣性の値要素
   */
  #inertiaText;

  /**
   * 慣性
   */
  #inertia = 0;

  /**
   * constructor
   * @param {Time} time Time
   */
  constructor(time)
  {
    // TODO: ref only time にして各クラスへ渡す
    this.#time = time;
    this.#you = new You();

    let balanceDiv = $(CreateElementWithProfile("div", undefined, this.#body))
      .css("display", "flex");

    $(CreateElementWithProfile("p", "inertia:", balanceDiv))
      .css("color", Color.MainText)
      .css("padding", "0 10px");

    this.#inertiaText = CreateElementWithProfile("p", "0", balanceDiv);
    $(this.#inertiaText)
      .css("color", Color.MainText);
  }

  /**
   * awaitable なゲームループ
   * @returns {Promise} promise
   */
  Run()
  {
    return new Promise((resolve) =>
      {
        requestAnimationFrame((time) => resolve(time));
        this.BeforeUpdate();
        this.Draw();
        this.AfterUpdate();
      });
  }

  /**
   * 描画前に実行される Update
   */
  BeforeUpdate()
  {
    this.#inertia += 1 * this.#time.DeltaTick();
  }

  /**
   * 描画後に実行される Update
   */
  AfterUpdate()
  {
    this.#time.Update();
  }

  /**
   * 画面描画
   */
  Draw()
  {
    this.#inertiaText.innerText = String(Math.floor(this.#inertia));
  }
}