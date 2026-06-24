import CreateElementWithProfile from "../component/CreateElementWithProfile.js";
import You from "./You.js";
import Color from "../ColorProfile.js";
import ReferenceOnlyTime from "./ReferenceOnlyTime.js";
import Stamina from "./Status/Stamina.js";

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
   * reference only time
   */
  #referenceOnlyTime;

  /**
   * GameObjects
   */
  #gameObjects = [];

  /**
   * constructor
   * @param {Time} time Time
   */
  constructor(time)
  {
    this.#referenceOnlyTime = new ReferenceOnlyTime(time);

    this.#gameObjects.push(time);
    this.#gameObjects.push(new You(this.#referenceOnlyTime, new Stamina(10, 0, 100)));
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
    this.#gameObjects.forEach(gameObject => gameObject.BeforeUpdate());
  }

  /**
   * 描画後に実行される Update
   */
  AfterUpdate()
  {
    this.#gameObjects.forEach(gameObject => gameObject.AfterUpdate());
  }

  /**
   * 画面描画
   */
  Draw()
  {
    this.#gameObjects.forEach(gameObject => gameObject.Draw());
  }
}