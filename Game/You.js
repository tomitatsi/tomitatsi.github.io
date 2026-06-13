import CreateElementWithProfile from "../component/CreateElementWithProfile.js";
import Color from "../ColorProfile.js";

// TODO: Status, Action, Archive を作成する\
// TODO: Status: パラメータをただ管理し、ただ表示する\
// TODO: Action: スクロール可能な出来る行動一覧を左に表示し、クリックした要素を右に展開する\
// TODO: Archive: 実績をただ管理し、ただ表示する

/**
 * あなた（プレイヤー）
 */
export default class You
{
  /**
   * body 要素
   */
  #body = $("body");

  /**
   * constructor
   */
  constructor()
  {
    let youDiv = CreateElementWithProfile("div", undefined, this.#body);
    $(CreateElementWithProfile("p", "Status", youDiv))
      .css("color", Color.MainText);

    let statusDiv = CreateElementWithProfile("div", undefined, youDiv);
    $(statusDiv)
      .css("border", "1px solid " + Color.Border)
      .css("padding", "30px");

    $(CreateElementWithProfile("p", "Test", $(statusDiv)))
      .css("color", Color.SubText);
  }
}