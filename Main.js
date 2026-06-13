import CreateElementWithProfile from "./component/CreateElementWithProfile.js";
import Time from "./Game/Time.js";
import Game from "./Game/Game.js";
import Color from "./ColorProfile.js";
/**
 * エントリポイント
 */

// アウトゲームの定義
const body = $("body");
body.css("background-color", "#101010");
{
  $(CreateElementWithProfile("h1", "AFK Game.", body))
    .css("color", Color.MainText);

  $(CreateElementWithProfile("a", "github", body, {"href": "https://github.com/tomitatsi/tomitatsi.github.io"}))
    .css("color", Color.MainText);
}

// ゲームループ
let time = new Time();
let game = new Game(time);
while(true)
{
  await game.Run();
}