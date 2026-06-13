import CreateElementWithProfile from "../component/CreateElementWithProfile.js";

export default class Game
{
  #body = $("body");
  #time;
  #balance;

  constructor(time)
  {
    this.#time = time;

    let balanceDiv = $(CreateElementWithProfile("div", " ", this.#body))
      .css("display", "flex");

    $(CreateElementWithProfile("p", "inertia:", balanceDiv))
      .css("color", "#f0f0f0")
      .css("padding", "0 10px");

    this.#balance = CreateElementWithProfile("p", "0", balanceDiv);
    $(this.#balance)
      .css("color", "#f0f0f0");
  }

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

  #money = 0;

  BeforeUpdate()
  {
    this.#money += 1 * this.#time.DeltaTick();
  }

  AfterUpdate()
  {
    this.#time.Update();
  }

  Draw()
  {
    this.#balance.innerText = String(Math.floor(this.#money));
  }
}