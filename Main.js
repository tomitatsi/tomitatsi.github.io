import CreateElementWithProfile from "./component/CreateElementWithProfile.js";
import Time from "./Game/Time.js";
import Game from "./Game/Game.js";

// HTML 構造の定義
const body = $("body");
body.css("background-color", "#101010");
{
  $(CreateElementWithProfile("h1", "AFK Game.", body))
    .css("color", "#f0f0f0");

  $(CreateElementWithProfile("a", "github", body, {"href": "https://github.com/tomitatsi/tomitatsi.github.io"}))
    .css("color", "#ccffcc");
}

// ゲームループ
let time = new Time();
let game = new Game(time);
while(true)
{
  await game.Run();
}