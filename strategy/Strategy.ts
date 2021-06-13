export default class Strategy {
  _strategy = {
    name: "",
    damage: 0,
    r: () => alert("궁극기가 없습니다."),
  };

  get strategy() {
    return this._strategy;
  }

  set strategy(newStrategy) {
    this._strategy = newStrategy;
  }

  r() {
    this._strategy.r();
  }
}
