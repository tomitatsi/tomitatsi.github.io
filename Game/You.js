import CreateElementWithProfile from "../component/CreateElementWithProfile.js";
import Color from "../ColorProfile.js";
import ReferenceOnlyTime from "./ReferenceOnlyTime.js";
import IGameObject from "./IGameObject.js";
import Stamina from "./Status/Stamina.js";
import IStatus from "./Status/IStatus.js";

// TODO: Status, Action, Archive を作成する\
// TODO: Status: パラメータをただ管理し、ただ表示する\
// TODO: Action: スクロール可能な出来る行動一覧を左に表示し、クリックした要素を右に展開する\
// TODO: Archive: 実績をただ管理し、ただ表示する
// TODO: GetComponent を追加する
// TODO: Environment が you.Stamina を回復させるようにする

/**
 * あなた（プレイヤー）
 */
export default class You extends IGameObject
{
  /**
   * body 要素
   */
  #body = $("body");

  /**
   * time
   */
  #time;

  /**
   * Stamina
   */
  #stamina;

  /**
   * Stamina value text
   */
  #staminaValueText;

  /**
   * constructor
   * @param {ReferenceOnlyTime} referenceOnlyTime
   * @param {IStatus} stamina
   */
  constructor(referenceOnlyTime, stamina)
  {
    super();
    this.#time = referenceOnlyTime;
    this.#stamina = stamina;

    let youDiv = CreateElementWithProfile("div", undefined, this.#body);
    $(CreateElementWithProfile("p", "Your Window", youDiv))
      .css("color", Color.MainText);

    let statusDiv = CreateElementWithProfile("div", undefined, youDiv);
    $(statusDiv)
      .css("border", "1px solid " + Color.Border)
      .css("padding", "30px");

    $(CreateElementWithProfile("p", "Your Status", statusDiv))
      .css("color", Color.SubText);
    
    // Stamina
    let StaminaDiv = $(CreateElementWithProfile("div", undefined, statusDiv))
      .css("display", "flex");

    let staminaText = $(CreateElementWithProfile("p", "Stamina: ", StaminaDiv))
      .css("color", Color.SubText)
      .css("padding", "0 10px");

    this.#staminaValueText = CreateElementWithProfile("p", "0", StaminaDiv);
    $(this.#staminaValueText)
      .css("color", Color.SubText);
  }

  BeforeUpdate()
  {
    this.#stamina.TryAdd(this.#time.DeltaTick() * 0.5);
  }

  Draw()
  {
      this.#staminaValueText.innerText = String(Math.floor(this.#stamina.Value())) + " / " + String(this.#stamina.Max());
  }
}