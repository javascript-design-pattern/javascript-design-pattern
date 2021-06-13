import Strategy from "./Strategy.js";
import Vayne from "./champion/Vanye.js";
import Teemo from "./champion/Teemo.js";

const $name = document.getElementById("name");
const $damage = document.getElementById("damage");
const $vayne = document.getElementById("vayne");
const $teemo = document.getElementById("teemo");
const $attack = document.getElementById("attack");
const $ultimate = document.getElementById("ultimate");

const strategy = new Strategy();

const vayne = new Vayne();
const teemo = new Teemo();

$vayne.addEventListener("click", () => {
  strategy.strategy = vayne;
  $name.innerText = strategy.strategy.name;
  $damage.innerText = String(strategy.strategy.damage);
});

$teemo.addEventListener("click", () => {
  strategy.strategy = teemo;
  $name.innerText = strategy.strategy.name;
  $damage.innerText = String(strategy.strategy.damage);
});

$attack.addEventListener("click", () => {
  const [name, damage] = [strategy.strategy.name, strategy.strategy.damage];
  alert(`${name}이(가) ${damage}의 피해를 입혔습니다.`);
});

$ultimate.addEventListener("click", () => {
  strategy.strategy.r();
});
